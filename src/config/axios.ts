interface IError {
  code: number;
  error: string;
  message: string;
}

export interface FetchResponse<T = unknown> {
  data: T;
  status: number;
  headers: Headers;
}

export class FetchError extends Error {
  readonly status: number;
  readonly data?: IError;

  constructor(status: number, message: string, data?: IError) {
    super(message);
    this.name = 'FetchError';
    this.status = status;
    this.data = data;
  }
}

// 기존 axios 기반 타입의 대체 — 비-2xx 응답에서 throw되는 에러 타입
export type AxiosErrorType = FetchError;

const baseURL =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:3000'
    : (process.env.NEXT_PUBLIC_SERVER_URL ?? '');

async function request<T>(method: string, url: string, body?: unknown): Promise<FetchResponse<T>> {
  const hasBody = body !== undefined;
  const res = await globalThis.fetch(`${baseURL}${url}`, {
    method,
    credentials: 'omit',
    headers: hasBody ? { 'Content-Type': 'application/json' } : undefined,
    body: hasBody ? JSON.stringify(body) : undefined
  });

  const isJson = res.headers.get('content-type')?.includes('application/json') ?? false;
  const payload: unknown = isJson ? await res.json() : await res.text();

  if (!res.ok) {
    const errorBody = isJson ? (payload as IError) : undefined;
    throw new FetchError(res.status, errorBody?.message ?? res.statusText, errorBody);
  }

  return { data: payload as T, status: res.status, headers: res.headers };
}

export const fetch = {
  get: <T = unknown>(url: string) => request<T>('GET', url),
  post: <T = unknown>(url: string, body?: unknown) => request<T>('POST', url, body),
  put: <T = unknown>(url: string, body?: unknown) => request<T>('PUT', url, body),
  patch: <T = unknown>(url: string, body?: unknown) => request<T>('PATCH', url, body),
  delete: <T = unknown>(url: string) => request<T>('DELETE', url)
};

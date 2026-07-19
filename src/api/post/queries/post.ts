import { UseQueryOptions, useQuery } from '@tanstack/react-query';

import { fetch } from '@config/axios';

import { baseUrl, postTypes } from '..';

export const useGetPosts = (
  options?: Omit<UseQueryOptions<postTypes.Post[], Error, postTypes.Post[]>, 'queryKey' | 'queryFn'>
) => {
  const queryKey = `${baseUrl}/posts`;
  const queryFn = () => fetch.get<postTypes.Post[]>(`${queryKey}`).then((res) => res.data);
  return useQuery({ queryKey: [queryKey], queryFn, ...options });
};

export const useGetPost = (
  postId: string,
  options?: Omit<UseQueryOptions<postTypes.Post, Error, postTypes.Post>, 'queryKey' | 'queryFn'>
) => {
  const queryKey = `${baseUrl}/post`;
  const queryFn = () =>
    fetch.get<postTypes.Post>(`${queryKey}?postId=${postId}`).then((res) => res.data);
  return useQuery({ queryKey: [queryKey, postId], queryFn, ...options });
};

# next-app-zustand-reactQuery-template

Next.js App Router template with Zustand (global state) and React Query (server state), styled with Tailwind CSS v4 + Base UI, and React Compiler enabled.

## Tech Stack

- **Framework**: Next.js 16 (App Router), React 19
- **Styling**: Tailwind CSS v4 + Base UI (headless) + shadcn pattern (CVA / clsx / tailwind-merge)
- **Icons**: lucide-react
- **Compiler**: React Compiler (`babel-plugin-react-compiler`)
- **Global state**: Zustand v5
- **Server state**: @tanstack/react-query v5
- **Language**: TypeScript

## Project Structure

- `app/` — App Router entry (`layout.tsx`, `page.tsx`, `globals.css`).
- `app/_components/` — route-specific demo/layout components (App Router private folder).
- `src/` — cross-route shared code: `api/`, `store/`, `config/`, `lib/`, `utils/`, `provider/`, `components/` (UI primitives).
- **Path aliases** (tsconfig): `@api`, `@components`, `@config`, `@store`, `@utils`, `@atoms`, `@provider`, `@styles` → `src/*`; `@public` → `public`.

## Commands

```bash
pnpm dev          # Development server
pnpm build        # Production build
pnpm type-check   # TypeScript check (tsc)
```

Package manager is **pnpm**.

## Code Conventions

### React/TypeScript Style

- **Imports**: use named imports (`import { useState } from 'react'`).
- **Components**: use `export default function` declaration (not arrow functions).
- **Children**: use `ReactNode` or `PropsWithChildren` (import directly from `react`).

### Naming

- Components: `PascalCase.tsx`
- Utils/Hooks: `camelCase.ts`
- Types: `PascalCase`
- Constants: `UPPER_SNAKE_CASE`

### Import Order

Auto-sorted by the linter: `react` → external → path aliases (`@api`, `@components`, …) → relative.

### Comments

- Minimal — add only when the code alone cannot convey intent.
- JSDoc: public APIs and complex functions only.
- Allowed: business-logic "why", workarounds, non-obvious side effects.
- Forbidden: obvious comments, commented-out code.

### Memoization

- **Not needed**: React Compiler is enabled — it auto-optimizes re-renders.
- **Do NOT use** `useCallback`, `useMemo`, or `React.memo` unless genuinely necessary (an expensive computation, or a callback passed to a memoized child that relies on reference equality).
- **ESLint first**: add `useCallback`/`useMemo` when `react-hooks/exhaustive-deps` warns — never suppress it with `eslint-disable`.

## Validation

- **Type check**: run `pnpm type-check` before marking work complete.
- **Lint**: `lint-staged` runs `eslint --fix` + `prettier --write` on staged files at commit.
- **No full build**: do not run `pnpm build` unless explicitly requested.

## Notes

- React Strict Mode: enabled.
- Deployment: Vercel.

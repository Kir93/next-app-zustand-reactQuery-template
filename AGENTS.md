# next-app-zustand-reactQuery-template — agent guide

Canonical conventions live in [CLAUDE.md](./CLAUDE.md) — read it first.

Key rules:

- **React Compiler is enabled** — do NOT hand-write `useCallback` / `useMemo` / `React.memo`.
- Package manager is **pnpm**.
- Route-specific components live in `app/_components/`; cross-route shared code in `src/`.

<!-- AGENTS.local.md is a gitignored local override, absent on a fresh clone (the import then resolves to nothing). -->

@./AGENTS.local.md

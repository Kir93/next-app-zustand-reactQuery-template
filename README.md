# Next App Zustand React Query Template

## Quick start

```zsh
https://github.com/Kir93/next-app-zustand-reactQuery-template.git use this template and make project
git clone https://github.com/Kir93/{PROJECT_NAME}.git
```

1. Install packages - pnpm install
2. Change theme - edit the `@theme` brand color tokens in `./app/globals.css`
3. Running Project - pnpm dev

## Repository short explanation

NextJS app router simple template.

- FrameWork : next (App Router)
- Styling : Tailwind CSS v4 + Base UI (headless) + shadcn pattern (CVA / clsx / tailwind-merge)
- Icons : lucide-react
- Compiler : React Compiler (babel-plugin-react-compiler)
- Global State Management : zustand
- Server State Management : @tanstack/react-query

Route-specific demo/layout components are co-located under `app/_components/` (App Router private folder); cross-route shared code (api, store, config, lib, ui primitives) stays under `src/`.

## Package Version

Important library version history

| Name                  | Version |
| :-------------------- | :------ |
| react                 | 19.2.6  |
| next                  | 16.2.7  |
| tailwindcss           | v4      |
| @base-ui/react        | v1      |
| zustand               | v5      |
| @tanstack/react-query | v5      |

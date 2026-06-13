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

## Usage patterns

### Styling — `cn()` + shadcn `Button`

`cn()` (`src/lib/utils.ts`) merges class names with `clsx` + `tailwind-merge`. The `Button` primitive (`src/components/ui/Button.tsx`) wraps Base UI's headless button with `class-variance-authority` variants.

```tsx
import Button from '@components/ui/Button';

<Button variant="primary" onClick={handleClick}>
  Save
</Button>;
<Button variant="secondary">Cancel</Button>;
```

Brand colors live as `@theme` tokens in `app/globals.css` (`--color-primary-*`, `--color-secondary-*`), so utilities like `bg-primary-900` are available everywhere.

### Forms — Base UI `Field` + `Input`

`Field` wires the label/description to the control for accessibility; `Input` renders a native `<input>` and is styled with Tailwind. See `app/_components/InputSection.tsx`.

```tsx
import { Field } from '@base-ui/react/field';
import { Input } from '@base-ui/react/input';

<Field.Root>
  <Field.Label>Name</Field.Label>
  <Input value={value} onValueChange={setValue} autoComplete="name" />
</Field.Root>;
```

### Data fetching — native `fetch` wrapper

`src/config/axios.ts` exports a thin `fetch` wrapper (`get` / `post` / `put` / `patch` / `delete`) that mirrors the axios surface — `baseURL`, JSON parsing, and a thrown `FetchError` on non-2xx responses. The `src/api/**` hooks call it inside React Query `queryFn` / `mutationFn`.

```ts
import { fetch } from '@config/axios';

const queryFn = async () => fetch.get('/api/post/posts').then((res) => res.data);
```

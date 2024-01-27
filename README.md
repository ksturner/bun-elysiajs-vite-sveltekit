# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

# Output from bun create vite

Bun has a setup script that allows you to use Vite, and then select a number of frameworks. I chose the following:

-   Vite
-   Svelte
-   SvelteKit
-   Typescript

## Output Commands

These differ slightly from the generic Svelte commands above, but not too much.

```
Next steps:
  1: cd viteapp
  2: bun install
  3: git init && git add -A && git commit -m "Initial commit" (optional)
  4: bun run dev -- --open

To close the dev server, hit Ctrl-C

Stuck? Visit us at https://svelte.dev/chat
```

We've also followed the excellent [Bun SvelteKit Guide](https://bun.sh/guides/ecosystem/sveltekit)
and have added `bun add -D svelte-adapter-bun` for enabling production builds.

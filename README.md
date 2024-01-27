# Bun + ElysiaJS + Vite + SvelteKit Template

## About

### Why Bun?

It's a new, fast javascript runtime that is many orders of magnitude faster than Node. Other than that, is the only (that I know of)
other node-compatible runtime that offers Typescript with zero configuration. Maybe Deno is another one, but ...

### Why ElysiaJS ?

It's the best bun-oriented web framework for Bun. It's akin to Express.js and is well supported. You'll notice later that we are
using SvelteKit. SvelteKit doesn't require Bun or ElysiaJS. We use Bun because it's fast. We use ElysiaJS because it offers true
backend web service functionality. You can write websockets in ElysiaJS backend, but you can not easily, if at all, with SvelteKit.

### Why Vite ?

In short, Vite offers a hot-reload for Svelte, among other nice bundler things. Svelte by itself does some of these things, but it is
primarily a compiler that produces javascript from svelte files. Vite is a bit more versatile when it comes to bundling and serving.

### Why SvelteKit ?

Svelte is such a clean, fast and reactive way to make web sites. SvelteKit brings routing, SSR, and a framework to Svelte to
deal with many common web frontend needs.

## System Requirements

### Bun

You'll need to get Bun installed. At this point in time, Bun v1.0.25 is the latest. See: [https://bun.sh](https://bun.sh) to download.

## Getting Started

Install the dependencies:

```shell
bun install
```

Start the development server:

```shell
bun run dev
```

Bundle for production deployment:

```shell
bun run build
cd build
bun start
```

When bundling for production, you'll probably want to use a Bun docker image and copy the build into that before executing start.

# Hello World React App

A simple React + TypeScript app scaffolded with Vite-style best practices.

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Check functionality in a container

You can validate the app end-to-end using Docker (build + serve production bundle):

1. Build the image:
   ```bash
   docker build -t hello-world-react .
   ```
2. Run the container:
   ```bash
   docker run --rm -p 4173:4173 hello-world-react
   ```
3. Open the app at `http://localhost:4173`.

This confirms the app compiles with TypeScript, bundles with Vite, and serves correctly from inside a container.

## Codex Cloud fallback preview (no npm install)

If package installation is blocked in a restricted cloud environment, you can still preview a React Hello World page:

1. Start a static server from the repository root:
   ```bash
   python3 -m http.server 4173
   ```
2. Open:
   ```
   http://127.0.0.1:4173/cloud-preview/index.html
   ```

The fallback page (`cloud-preview/index.html`) loads React via ESM CDN and is useful for quickly confirming browser rendering in locked-down environments.

## Available scripts

- `npm run dev` - start local development server
- `npm run build` - type-check and build for production
- `npm run lint` - run ESLint
- `npm run preview` - preview the production build

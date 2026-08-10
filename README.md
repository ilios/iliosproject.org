# Ilios Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/c57a716e-4f40-4d77-8496-747a6eb50470/deploy-status)](https://app.netlify.com/sites/iliosproject/deploys)

## About

This is the codebase for the Ilios Project Website at [https://www.iliosproject.org](https://www.iliosproject.org).

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 🐳 Docker Local Development

If you don't want to worry about your system needing all required dependencies, you can use [Docker](https://docker.com) instead.

### Install Docker

You will need Docker and Docker compose:

- [MacOS](https://www.docker.com/docker-mac)
- [Windows](https://www.docker.com/docker-windows)
- [Ubuntu](https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/)

### Running a local development server

From your root directory run:

```bash
docker compose up
```

### Accessing Ilios Website

You should now be able to access your newly-Dockerized instance by visiting [http://localhost:4321](http://localhost:4321) in your browser. Make any code changes, and your browser will reload, just like using `pnpm dev`.

### Shutting down the development server

From your root directory, press `Ctrl-C` to end the Docker instance.

### Errors when running Docker Compose

If an error appears on the command line after bringing up the Docker instance, it may need to be rebuilt. Press `Ctrl-C` to stop the currently running instance, `docker compose build --no-cache` to rebuild the Docker image, and then `docker compose up` again to restart the instance.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

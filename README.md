# Botomatic

[Miro Board](https://miro.com/app/board/uXjVKzd5qLo=/)

[Telegram UI Kit (Library)](https://github.com/Telegram-Mini-Apps/TelegramUI)

[Telegram UI Kit (Figma)](https://www.figma.com/design/SlEkwvo1X8Ge7Ngr4zqw0F/Telegram-Mini-Apps-%C2%B7-UI-Kit-(Community))

### TODO

tg mini-apps research, database design, dockerize

envs intellisense & validation (& .env.example), ui libs, prettier & eslint setup, clean package.json,
polish backend services communication (models, modules, orm, graphql, schemas) - figure it out clearly,
maybe migrate nestjs from webpack to vite, CI/CD, fill up da docs, choose the right e2e tool (playwright vs cypress),
MAYBE replace apollo-client with urlq (?) as it much more light-weighted and performant for heavy apps,
logging, middlewares, auth, server (fastify/express)

for docs:

- as if we'd choose schema first approach, we'd need to generate our graphql code on the backend too, but in the chosen already case, we ain't need to do so. that means that no code generation is needed for the backend or its modules, so it only remains for the frontend, which also means that we can move the code generator to the front-end only part. or leave it as it is but used only for front end

- we don't generate code for mutations from schema at the backend as we use the code first approach, so it comes to the schema and if we generate sum, that's only the front end code of queries, mutations, etc, for type safe fields usage

- The graphql schema is generated either at the every start/rebuild of the nest app or manually when the app is turned off by build or schema command. The front-end gql code is generated after the server schema, always automatically when the whole app is being built or just the client. But building the client code requires schema generation, and that requires server app building.

Stack:

- nest
- graphql.org (the-guild.dev)
- typeorm
- react

- vite
- nx

## Getting Started

- Select the project Node.js version:

```shell
nvm use # Sets the version from .nvmrc file
```

- Switch to the latest Yarn version by:

```shell
corepack enable
```

- Install dependencies:

```shell
yarn
```

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, Smart Monorepos · Fast CI.](https://nx.dev)** ✨

## Integrate with editors

Enhance your Nx experience by installing [Nx Console](https://nx.dev/nx-console) for your favorite editor. Nx Console
provides an interactive UI to view your projects, run tasks, generate code, and more! Available for VSCode, IntelliJ and
comes with a LSP for Vim users.

## Start the application

Run `npx nx serve client` to start the development server. Happy coding!

## Build for production

Run `npx nx build client` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)

## Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)

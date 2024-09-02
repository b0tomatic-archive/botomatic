# Botomatic

[<img height="16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_7QfylUbLhryd8FTo39v0uqC4mCNhlfyoXZwaT9DTfFVCF5VDq6Hjsor1d5jmPuPcFhY&usqp=CAU"> Miro](https://miro.com/app/board/uXjVKzd5qLo=/)
[<img height="16" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/YouTrack_Icon.svg/2048px-YouTrack_Icon.svg.png"> YouTrack](https://botomatic.youtrack.cloud/agiles)
[<img height="16" src="https://static-00.iconduck.com/assets.00/notion-icon-256x256-g1arps9e.png"> Notion](https://www.notion.so/041abe276e704275aeecd32991a0b0fe?v=ee6e2b1f1de741d384477959ffff2c76)
[<img height="16" src="https://static-00.iconduck.com/assets.00/apps-figma-icon-2048x2048-ctjj5ab7.png"> Figma](https://www.figma.com/design/Pjo2j06BT3O0aq7e2ToQDr)

## Stack

<table>
  <tr>
    <td>Technology</td>
    <td>Version</td>
    <td>Notes</td>
  </tr>
  <tr>
    <td>
      <a href="//nodejs.org">
        <img height="50" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" />
      </a>
    </td>
    <td>LTS/Iron, 20</td>
    <td></td>
  </tr>
  <tr>
    <td>
      <a href="//nx.dev">
        <img height="50" src="https://github.com/user-attachments/assets/10bea084-6149-4914-9b96-2fcd2ec2826d">
      </a>
    </td>
    <td>19</td>
    <td></td>
  </tr>
  <tr>
    <td>
      <a href="//nestjs.com">
        <img height="50" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/519bfaf3-c242-431e-a269-876979f05574">
      </a>
    </td>
    <td>10</td>
    <td></td>
  </tr>
  <tr>
    <td>
      <a href="//graphql.org">
        <img height="50" src="https://user-images.githubusercontent.com/25181517/192107856-aa92c8b1-b615-47c3-9141-ed0d29a90239.png">
      </a>
    </td>
    <td>16</td>
    <td>
      <a href="//the-guild.dev">the-guild.dev</a>
      <br/>
    </td>
  </tr>
  <tr>
    <td>
      <a href="//react.dev">
        <img height="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png">
      </a>
    </td>
    <td>18</td>
    <td></td>
  </tr>
  <tr>
    <td>
      <a href="//vitejs.dev">
        <img height="50" src="https://github-production-user-asset-6210df.s3.amazonaws.com/62091613/261395532-b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35.png">
      </a>
    </td>
    <td>5</td>
    <td></td>
  </tr>
  <tr>
    <td><a href="//typeorm.io">TypeORM</a></td>
    <td>10</td>
    <td></td>
  </tr>
</table>

#### Others

- [Telegram Mini-Apps SDK](https://docs.telegram-mini-apps.com/packages/telegram-apps-sdk)
- [Telegram UI Storybook](https://tgui.xelene.me)
- [MedusaJS](https://docs.medusajs.com/)

## Getting Started

#### Clone with all submodules

```shell
git clone --recurse-submodules git@github.com:b0tomatic/botomatic.git # In case you need a specific branch: --branch <name>
```

**Don't have `nvm` installed?** For MacOS, Linux, [check the tutorial here.](https://github.com/nvm-sh/nvm) In case if you have Windows, [check this tutorial.](https://github.com/coreybutler/nvm-windows)

Now select the project's Node.JS version:

```shell
nvm use # Sets the version from .nvmrc file
```

Switch to the latest Yarn version by:

```shell
corepack enable
```

#### Installing Dependencies for the Medusa Submodule

Navigate to the Medusa submodule directory and install its dependencies:

```shell
cd packages/medusa
yarn
```

#### Building Medusa

After installing the dependencies, build Medusa:

```bash
yarn build
```

#### Installing Project-Wide Dependencies

Return to the root directory of the project and install the remaining dependencies:

```bash
cd ../../ # Returning to the project's root directory
yarn
```

## Project Structure

### Back-End

**Server:** All the back-end infrastructure is here

```shell
yarn server
```

### Front-End

**Client:** Dashboard, Mini-Apps Configurator

```shell
yarn client
```

**Mini-App:** The Telegram Mini-App itself

```shell
yarn mini-app
```

## Build & Deploy

Every app is built by command:

```shell
nx build PROJECT_NAME
```

To build the whole project, simply run:

```shell
yarn build
```

To see the flow of projects/tasks depend on each other:

```shell
nx graph
```

As the UI appears, at the top of the left sidebar you can select `Projects`, `Tasks`.

All the tasks of apps and libs that Nx can run are is stored in `nx.json` at the root of the project, and in `project.json` at the root of each app or library (e.g. **apps/client/project.json**).

[More about `nx.json`](https://nx.dev/reference/nx-json)

[More about `project.json`](https://nx.dev/reference/project-configuration)

## GraphQL Code Generation and Schema Management

### Code Generation Strategy

#### Code-First Approach (No Backend Code Generation)

In a code-first approach, there's no need to generate GraphQL code for the backend. The schema is automatically generated based on the TypeScript definitions in the backend. Therefore, code generation is only necessary for the frontend, to create type-safe queries, mutations, and other GraphQL operations.

#### Frontend-Only Code Generation

Since the backend does not require code generation, the process can be streamlined by focusing solely on the frontend. The GraphQL code generator should be configured to run exclusively for the frontend, ensuring that type-safe client-side operations are available without unnecessary backend processing.

### Schema Generation and Usage

#### Backend Schema Generation

The GraphQL schema is generated either:

- Automatically during each startup or rebuild of the NestJS application.
- Manually by running `build` or `schema` generation command.

#### Frontend Code Generation

By running `build` or `schema` command for the client, the server schema is always generated first, then the frontend GraphQL code is automatically generated. This step is essential to ensure that the frontend is synchronized with the latest schema, providing type-safe operations for queries, mutations, and subscriptions.

#### Build Dependencies

The client-side code generation depends on the server schema being up-to-date. Therefore, any client build process that requires GraphQL code generation must ensure that the server schema has been generated first.

# Botomatic

[Miro Board](https://miro.com/app/board/uXjVKzd5qLo=/)

[Telegram UI Kit (Library)](https://github.com/Telegram-Mini-Apps/TelegramUI)

[Telegram UI Kit (Figma)](<https://www.figma.com/design/SlEkwvo1X8Ge7Ngr4zqw0F/Telegram-Mini-Apps-%C2%B7-UI-Kit-(Community)>)

### TODO

tg mini-apps research, database design, dockerize

use postgresql

ui libs, prettier & eslint setup, clean package.json,
MAYBE replace apollo-client with urlq (?) as it much more light-weighted and performant for heavy apps,
logging, middlewares, auth, server (fastify/express)

for docs:

- as if we'd choose schema first approach, we'd need to generate our graphql code on the backend too, but in the chosen already case, we ain't need to do so. that means that no code generation is needed for the backend or its modules, so it only remains for the frontend, which also means that we can move the code generator to the front-end only part. or leave it as it is but used only for front end

- we don't generate code for mutations from schema at the backend as we use the code first approach, so it comes to the schema and if we generate sum, that's only the front end code of queries, mutations, etc, for type safe fields usage

- The graphql schema is generated either at the every start/rebuild of the nest app or manually when the app is turned off by build or schema command. The front-end gql code is generated after the server schema, always automatically when the whole app is being built or just the client. But building the client code requires schema generation, and that requires server app building.

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

## Getting Started

Select the project Node.js version:

```shell
nvm use # Sets the version from .nvmrc file
```

Switch to the latest Yarn version by:

```shell
corepack enable
```

Install dependencies:

```shell
yarn
```

## Project Structure

### Back-End

Stack: Nest.JS + TypeORM + GraphQL

**Server:** All the back-end infrastructure is here

```shell
yarn server
```

### Front-End

Stack: Vite + React + GraphQL

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

As the UI appears, at the top of the left sidebar you can select `Projects`, `Tasks`

All the tasks of apps and libs that Nx can run are is stored in `nx.json` at the root of the project, and in `project.json` at the root of each app or library (e.g. **apps/client/project.json**)

[More about `nx.json`](https://nx.dev/reference/nx-json)

[More about `project.json`](https://nx.dev/reference/project-configuration)

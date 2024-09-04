# Botomatic | Ботоматик

[<img height="16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_7QfylUbLhryd8FTo39v0uqC4mCNhlfyoXZwaT9DTfFVCF5VDq6Hjsor1d5jmPuPcFhY&usqp=CAU"> Miro](https://miro.com/app/board/uXjVKzd5qLo=/)
[<img height="16" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/YouTrack_Icon.svg/2048px-YouTrack_Icon.svg.png"> YouTrack](https://botomatic.youtrack.cloud/agiles)
[<img height="16" src="https://static-00.iconduck.com/assets.00/notion-icon-256x256-g1arps9e.png"> Notion](https://www.notion.so/041abe276e704275aeecd32991a0b0fe?v=ee6e2b1f1de741d384477959ffff2c76)
[<img height="16" src="https://static-00.iconduck.com/assets.00/apps-figma-icon-2048x2048-ctjj5ab7.png"> Figma](https://www.figma.com/design/Pjo2j06BT3O0aq7e2ToQDr)

## Стэк

<table>
  <tr>
    <td>Технология</td>
    <td>Версия</td>
    <td>Заметки</td>
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

#### Другие

##### Telegram
- [Telegram Mini-Apps SDK](https://docs.telegram-mini-apps.com/packages/telegram-apps-sdk)
- [Telegram UI Storybook](https://tgui.xelene.me)

##### Headless e-commerce
- [MedusaJS](https://docs.medusajs.com/)

## Начало Работы

#### Клонирование с сабмодулями

```shell
git clone --recurse-submodules git@github.com:b0tomatic/botomatic.git # Если нужна определённая ветка: --branch <name>
```

**`nvm` не установлен?** Для MacOS, Linux, [посмотрите туториал вот здесь.](https://github.com/nvm-sh/nvm) В случае, если у вас Windows, [то вот здесь.](https://github.com/coreybutler/nvm-windows)

Теперь выберите версию Node.JS:

```shell
nvm use # Устанавливает версию из .nvmrc файла
```

Переключиться на подходящую версию Yarn:

```shell
corepack enable # Автоматически установит yarn той версии, что и в package.json
```

#### Установка зависимостей для сабмодуля Medusa

Перейдите в директорию с сабмодулем Медузы и установите зависимости:

```shell
cd packages/medusa
yarn
```

#### Сборка Медузы

После установки зависимостей, соберите Медузу:

```bash
yarn build
```

#### Установка зависимостей Ботоматика

Перейдите обратно в корень проекта и выполните установку оставшихся зависимостей:

```bash
cd ../../ # Вернулись в корень проекта
yarn
```

## Структура проекта

### Back-End

**Сервер:** Вся серверная инфраструктура здесь

```shell
yarn server
```

### Front-End

**Client:** Dashboard, конфигуратор mini-app'ов

```shell
yarn client
```

**Mini-App:** Telegram mini-app пользователя

```shell
yarn mini-app
```

## Сборка & Развёртывание

Все проекты собираются командой:

```shell
nx build PROJECT_NAME
```
_(Если в `project.json` соответствующего приложения/библиотеки не указано иначе, см. ниже подробно)_

Чтобы собрать весь проект целиком, просто выполните команду:

```shell
yarn build
```

Чтобы увидеть граф зависимости локальных проектов/задач между собой:

```shell
nx graph
```

В открывшемся пользовательском интерфейсе, в верхней части левой боковой панели вы можете выбрать `Projects` и `Tasks`.

Все задачи для приложений и библиотек, которые может запускать Nx, хранятся в файле `nx.json` в корне проекта, а также в файле `project.json` в корне каждого приложения или библиотеки (например, `apps/client/project.json`).

[Подробнее о `nx.json`](https://nx.dev/reference/nx-json)

[Подробнее о `project.json`](https://nx.dev/reference/project-configuration)

## Генерация кода GraphQL и управление схемой

### Стратегия генерации кода

#### Подход Code-First (Без генерации кода на стороне сервера)

При использовании подхода Code-First нет необходимости генерировать код GraphQL для серверной части. Схема автоматически создается на основе TypeScript-определений на сервере. Поэтому генерация кода необходима только для фронтенда, чтобы создать type-safe запросы, мутации и другие операции GraphQL.

#### Генерация кода только для фронтенда

Поскольку серверная часть не требует генерации кода, процесс можно упростить, сосредоточив внимание исключительно на фронтенде. Генератор кода GraphQL должен быть настроен на выполнение только для фронтенда, обеспечивая доступность type-safe операций на стороне клиента без ненужной обработки на сервере.

### Генерация и использование схемы

#### Генерация схемы на стороне сервера

Схема GraphQL генерируется либо:

- Автоматически при каждом запуске или пересборке приложения NestJS.
- Вручную с помощью выполнения команды `build` или команды генерации `schema`.

#### Генерация кода для фронтенда

При выполнении команды `build` или `schema` для клиента, сначала генерируется серверная схема, затем автоматически генерируется код GraphQL для фронтенда. Этот шаг необходим, чтобы фронтенд был синхронизирован с последней версией схемы, обеспечивая type-safe операции для запросов, мутаций и подписок, без необходимости _держать_ серверное приложение развёрнутым.

#### Зависимости сборки

Генерация кода на стороне клиента зависит от актуальности серверной схемы. Поэтому любой процесс сборки клиента, требующий генерации кода GraphQL на клиенте, должен сопровождаться свеже-сгенерированной версией схемы на сервере.

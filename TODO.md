### Project TODOs

- Headless UI, Nginx, Cache (+ Redis?) & explain why we didn't choose using SSR

This document outlines the key tasks and considerations for the ongoing development. Below is a list of the tasks, along with brief descriptions and any relevant decisions or notes.

#### 1. Telegram Mini-Apps Research

- **Objective:** Conduct thorough research on the development of mini-apps for Telegram.
- **Focus Areas:**
  - Best practices for Telegram mini-app development.
  - Limitations and opportunities within the Telegram API.
  - Examples of successful mini-apps and their architectures.

#### 2. Database Design

- **Objective:** Design the database schema to support the features and functionality of the mini-apps.
- **Database Choice:** PostgreSQL
  - **Rationale:** PostgreSQL is chosen for its robustness, support for complex queries, and scalability.
  - **Tasks:**
    - Define entities and relationships.
    - Design schema diagrams.
    - Plan for indexing, optimization, and migration strategies.

#### 3. Dockerization

- **Objective:** Containerize the application for easy deployment and environment consistency.
- **Tasks:**
  - Create Dockerfiles for each service (backend, frontend, database).
  - Set up Docker Compose for local development.
  - Ensure that all services can be easily deployed and scaled using Docker.

#### 4. UI Libraries, Prettier & ESLint Setup

- **Objective:** Standardize the front-end development environment.
- **Tasks:**
  - Select and integrate UI libraries that align with the project's requirements.
  - Set up Prettier for code formatting to maintain consistent code style across the project.
  - Configure ESLint for identifying and fixing code quality issues.

#### 5. Clean `package.json`

- **Objective:** Optimize the `package.json` file for the project.
- **Tasks:**
  - Remove unused dependencies and scripts.
  - Organize the file to make it more readable and maintainable.
  - Ensure all necessary dependencies are correctly specified and up-to-date.

#### 6. Apollo Client Replacement (Optional)

- **Objective:** Consider replacing Apollo Client with `urql` for improved performance.
- **Rationale:** `urql` is a lighter-weight alternative that may offer better performance for heavy apps.
- **Tasks:**
  - Evaluate the pros and cons of switching from Apollo Client to `urql`.
  - If chosen, replace Apollo Client with `urql` in the front-end.
  - Update any relevant GraphQL queries and mutations to be compatible with `urql`.

#### 7. Logging

- **Objective:** Implement a robust logging system for both the backend and frontend.
- **Tasks:**
  - Choose a logging library and set up centralized logging.
  - Implement different log levels (info, warn, error, etc.).
  - Ensure logs are stored and accessible for debugging and monitoring.

#### 8. Middleware Implementation

- **Objective:** Develop and integrate middlewares for handling various aspects of the application.
- **Tasks:**
  - Create middlewares for request validation, error handling, and session management.
  - Integrate middlewares into the application server.

#### 9. Authentication

- **Objective:** Implement authentication mechanisms to secure the application.
- **Tasks:**
  - Choose an authentication strategy (e.g., JWT, OAuth).
  - Implement the chosen strategy in both the backend and frontend.
  - Ensure proper user management and session handling.

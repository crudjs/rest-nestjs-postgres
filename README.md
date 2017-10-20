<img src="https://raw.githubusercontent.com/crudjs/rest-nestjs-postgres/master/resources/readme-header.jpg" width="100%" max-width="720px">

# CrudJS + Nest.js + Postgres + TypeORM
[![license](https://img.shields.io/github/license/crudjs/rest-nestjs-postgres.svg?style=flat-square)]()

The CrudJS project implemented as a REST API, using Nest.js and Postgres.

## What's this CrudJS thing?
Glad that you asked. CrudJS intends to be a resource for comparing between different approaches for people building Node.js-based APIs, by applying them to an standard CRUD project. In other words, it's TodoMVC for APIs.

You can learn more about the project at [our parent repository](https://github.com/crudjs/crudjs).

## Trying out the API
### On your local machine
You'll need [Docker](https://www.docker.com/) for that. Once you've got it installed on your machine, just clone the repo and run the `docker-compose up --build` command. The API will be listening for your requests at `http://localhost`.

### On the cloud
We're still working on a deployment strategy that works for us. Stay tuned!

## What's the stack used in this project?
- **[Nest.js](https://nestjs.com/)** is a [TypeScript](https://www.typescriptlang.org/)-based Node.js API framework. It looks like if Angular and Express got physical. It's pretty knew and a bit rough around the edges, but [Kamil Myśliwiec](https://github.com/kamilmysliwiec) is doing an awesome job maintaining it.
- **[Postgres](https://www.postgresql.org/)** is a very well know Open Source relational database.
- **[TypeORM](https://typeorm.io/)** is an ORM built on [TypeScript](https://www.typescriptlang.org/), so it makes it a natural choice for Nest.js projects.
- **[Jest](https://facebook.github.io/jest/)** is a testing platform from Facebook Code. It's easy to configure and provides out-of-the-box mocking and code coverage reporting.

## Current version
### 1.0.0-alpha.1
*What's missing for 1.0.0 final?*
- Unit tests with mocked up dependencies.
- Secured POST & DELETE endpoints (other that /entries.)
- Swagger definition generated from code.

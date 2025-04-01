# Blog API NEST JS

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Description

This is a blog API project built with NestJS.

## Features

- [Register](#register)
- [Login](#login)

## Register

**Method POST**
**Endpoint: /user/register**

Request Body:

```json
{
  "name": "admin",
  "password": "admin"
}
```

Response:

```json
{
  "success": true,
  "message": "User admin successfully registered",
  "data": {
    "name": "admin"
  }
}
```

## Login

**Method POST**
**Endpoint: /user/login**

Request Body:

```json
{
  "name": "admin",
  "password": "admin"
}
```

Response:

```json
{
  "success": true,
  "message": "User admin successfully login",
  "data": {
    "access_token": "abc123",
    "refresh_token": "abc123"
  }
}
```

## Project setup

Before running this application, make sure to create a database. This project use MySQL as the Database and Prisma as the ORM.

```bash
# clone repository
git clone <repository>

# change directory
cd nest-blog-api

# set up the environment file
# copy or rename .env.example to .env and then edit the database connection details.
DATABASE_URL="mysql://username:password@localhost:3306/db_name"

#install dependencies
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

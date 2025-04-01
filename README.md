# Blog API NEST JS

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Description

This is a blog API project built with NestJS.

## Features

- [Register](#register)
- [Login](#login)
- [Create Category](#create-category)
- [Get Category](#get-category)
- [Update Category](#update-category)
- [Delete Category](#delete-category)
- [Get Many Categories](#get-many-categories)

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

[Back to Features](#features)

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

[Back to Features](#features)

## Create Category

**Method POST**
**Endpoint: /api/category**

Request Body:

```json
{
  "name": "project",
  "slug": "project"
}
```

Response:

```json
{
  "success": true,
  "message": "category project successfully created",
  "data": {
    "name": "project",
    "slug": "project"
  }
}
```

[Back to Features](#features)

## Get Category

**Method GET**
**Endpoint: /api/category/[categoryId]**

Response:

```json
{
  "success": true,
  "message": "get category success",
  "data": {
    "id": "7afbd062-df72-42ec-b0cd-396f8b857065",
    "name": "tutorial",
    "slug": "tutorial",
    "created_at": "2025-04-01T17:16:35.806Z",
    "updated_at": null
  }
}
```

[Back to Features](#features)

## Update Category

**Method PUT**
**Endpoint: /api/category/[categoryId]**

Request Body:

```json
{
  "name": "project",
  "slug": "project"
}
```

Response:

```json
{
  "success": true,
  "message": "update category success",
  "data": {
    "name": "project",
    "slug": "project"
  }
}
```

[Back to Features](#features)

## Delete Category

**Method DELETE**
**Endpoint: /api/category/[categoryId]**

Response:

```json
{
  "success": true,
  "message": "delete category succes",
  "data": {
    "id": "7afbd062-df72-42ec-b0cd-396f8b857065",
    "name": "tutorial",
    "slug": "tutorial",
    "created_at": "2025-04-01T17:16:35.806Z",
    "updated_at": null
  }
}
```

[Back to Features](#features)

## Get Many Categories

**Method GET**
**Endpoint: /api/category**

Response:

```json
{
  "success": true,
  "message": "get categories success",
  "data": [
    {
      "id": "7afbd062-df72-42ec-b0cd-396f8b857065",
      "name": "tutorial",
      "slug": "tutorial",
      "created_at": "2025-04-01T17:16:35.806Z",
      "updated_at": null
    },
    {
      "id": "7b0ee3ae-f87f-46b5-8c3f-763f0bbb560f",
      "name": "project",
      "slug": "project",
      "created_at": "2025-04-01T17:16:47.797Z",
      "updated_at": null
    }
  ]
}
```

[Back to Features](#features)

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

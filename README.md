# Blog API NEST JS

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Description

This is a blog API project built with NestJS.

## Table of Content

- [Features](#features)
- [Project setup](#project-setup)
- [Compile and run the project](#compile-and-run-the-project)

## Features

**Auth**

- [Register](#register)
- [Login](#login)

**Category**

- [Create Category](#create-category)
- [Get Category](#get-category)
- [Update Category](#update-category)
- [Delete Category](#delete-category)
- [Get Many Categories](#get-many-categories)

**Tags**

- [Create Tag](#create-tag)
- [Get Tag](#get-tag)
- [Update Tag](#update-tag)
- [Delete Tag](#delete-tag)
- [Get Many Tags](#get-many-tags)

**Article**

- [Create Article](#create-article)
- [Get Article](#get-article)
- [Update Article](#update-article)
- [Delete Article](#delete-article)
- [Get Many Article](#get-many-article)

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

## Create Tag

**Method POST**
**Endpoint: /api/tags**

Request Body:

```json
{
  "name": "css"
}
```

Response:

```json
{
  "success": true,
  "message": "tag css successfully created",
  "data": {
    "name": "css"
  }
}
```

[Back to Features](#features)

## Get Tag

**Method GET**
**Endpoint: /api/tags/[tagId]**

Response:

```json
{
  "success": true,
  "message": "get tag success",
  "data": {
    "id": "64b2dab5-1b47-4312-8ed2-fd5e805d2071",
    "name": "html",
    "created_at": "2025-04-01T23:36:55.370Z",
    "updated_at": null
  }
}
```

[Back to Features](#features)

## Update Tag

**Method PUT**
**Endpoint: /api/tags/[tagId]**

Request Body:

```json
{
  "name": "html5"
}
```

Response:

```json
{
  "success": true,
  "message": "tag html updated to html5",
  "data": {
    "id": "64b2dab5-1b47-4312-8ed2-fd5e805d2071",
    "name": "html5",
    "created_at": "2025-04-01T23:36:55.370Z",
    "updated_at": "2025-04-01T23:46:57.069Z"
  }
}
```

[Back to Features](#features)

## Delete Tag

**Method DELETE**
**Endpoint: /api/tags/[tagId]**

Response:

```json
{
  "success": true,
  "message": "tag html has been deleted",
  "data": {
    "id": "61abc1a0-49f2-4403-ae78-7d2baece4aef",
    "name": "html",
    "created_at": "2025-04-01T23:53:46.898Z",
    "updated_at": null
  }
}
```

[Back to Features](#features)

## Get Many Tags

**Method GET**
**Endpoint: /api/tags**

Response:

```json
{
  "success": true,
  "message": "get tags success",
  "data": [
    {
      "id": "61abc1a0-49f2-4403-ae78-7d2baece4aef",
      "name": "html",
      "created_at": "2025-04-01T23:53:46.898Z",
      "updated_at": null
    },
    {
      "id": "7dacc0e9-b67a-45c0-bd70-12fcc9676519",
      "name": "css",
      "created_at": "2025-04-01T23:53:51.590Z",
      "updated_at": null
    }
  ]
}
```

[Back to Features](#features)

---

## Create Article

**Method POST**
**Endpoint: /api/article**

Request Body:

```json
{
  "title": "How CSS works?",
  "slug": "how-CSS-works?",
  "content": "CSS is standardized across web browsers according to W3C specifications. Most web pages use custom CSS styles configured by web designers. The cascading nature of CSS ensures that the last defined style sheet takes precedence.",
  "category_id": "7afbd062-df72-42ec-b0cd-396f8b857065",
  "tags_id": "7dacc0e9-b67a-45c0-bd70-12fcc9676519"
}
```

Response:

```json
{
  "success": true,
  "message": "Article How CSS works? created successfully",
  "data": {
    "id": "7f761c54-de75-4c68-943a-f76de5f5ef59",
    "title": "How CSS works?",
    "slug": "how-CSS-works?",
    "content": "CSS is standardized across web browsers according to W3C specifications. Most web pages use custom CSS styles configured by web designers. The cascading nature of CSS ensures that the last defined style sheet takes precedence.",
    "userId": "4a90c0a9-99ab-4686-8809-2e655248ba24",
    "category_id": "7afbd062-df72-42ec-b0cd-396f8b857065",
    "tags_id": "7dacc0e9-b67a-45c0-bd70-12fcc9676519",
    "updated_at": null
  },
  "metadata": null
}
```

[Back to Features](#features)

## Get Article

**Method GET**
**Endpoint: /api/article/[articleId]**

Response:

```json
{
  "success": true,
  "message": "Article How CSS works? found successfully",
  "data": {
    "id": "2089f40c-db51-4221-a200-c99d581a7dcb",
    "title": "How CSS works?",
    "slug": "how-CSS-works?",
    "content": "CSS is standardized across web browsers according to W3C specifications. Most web pages use custom CSS styles configured by web designers. The cascading nature of CSS ensures that the last defined style sheet takes precedence.",
    "userId": "4a90c0a9-99ab-4686-8809-2e655248ba24",
    "category_id": "7afbd062-df72-42ec-b0cd-396f8b857065",
    "tags_id": "7dacc0e9-b67a-45c0-bd70-12fcc9676519",
    "updated_at": null
  },
  "metadata": null
}
```

[Back to Features](#features)

## Update Article

**Method PUT**
**Endpoint: /api/article/[articleId]**

Request Body:

```json
{
  "title": "How CSS works update?",
  "slug": "how-CSS-works-update?",
  "content": "CSS is standardized across web browsers according to W3C specifications. Most web pages use custom CSS styles configured by web designers. The cascading nature of CSS ensures that the last defined style sheet takes precedence.",
  "category_id": "7afbd062-df72-42ec-b0cd-396f8b857065",
  "tags_id": "7dacc0e9-b67a-45c0-bd70-12fcc9676519"
}
```

Response:

```json
{
  "success": true,
  "message": "Article How CSS works update? updated successfully",
  "data": {
    "id": "2089f40c-db51-4221-a200-c99d581a7dcb",
    "title": "How CSS works update?",
    "slug": "how-CSS-works-update?",
    "content": "CSS is standardized across web browsers according to W3C specifications. Most web pages use custom CSS styles configured by web designers. The cascading nature of CSS ensures that the last defined style sheet takes precedence.",
    "userId": "4a90c0a9-99ab-4686-8809-2e655248ba24",
    "category_id": "7afbd062-df72-42ec-b0cd-396f8b857065",
    "tags_id": "7dacc0e9-b67a-45c0-bd70-12fcc9676519",
    "updated_at": "2025-04-02T14:15:05.337Z"
  },
  "metadata": null
}
```

[Back to Features](#features)

## Delete Article

**Method DELETE**
**Endpoint: /api/article/[articleId]**

Response:

```json
{
  "success": true,
  "message": "Article How CSS works update? deleted successfully",
  "data": {
    "id": "2089f40c-db51-4221-a200-c99d581a7dcb",
    "title": "How CSS works update?",
    "slug": "how-CSS-works-update?",
    "content": "CSS is standardized across web browsers according to W3C specifications. Most web pages use custom CSS styles configured by web designers. The cascading nature of CSS ensures that the last defined style sheet takes precedence.",
    "userId": "4a90c0a9-99ab-4686-8809-2e655248ba24",
    "category_id": "7afbd062-df72-42ec-b0cd-396f8b857065",
    "tags_id": "7dacc0e9-b67a-45c0-bd70-12fcc9676519",
    "updated_at": "2025-04-02T14:15:05.337Z"
  },
  "metadata": null
}
```

[Back to Features](#features)

## Get Many Articles

**Method GET**
**Endpoint: /api/article?page=1&limit=10**
**Query Params: page, limit, search**

Response:

```json
{
  "success": true,
  "message": "Fetch many articles successfully",
  "data": [
    {
      "id": "7f761c54-de75-4c68-943a-f76de5f5ef59",
      "title": "How CSS works?",
      "slug": "how-CSS-works?",
      "content": "CSS is standardized across web browsers according to W3C specifications. Most web pages use custom CSS styles configured by web designers. The cascading nature of CSS ensures that the last defined style sheet takes precedence.",
      "userId": "4a90c0a9-99ab-4686-8809-2e655248ba24",
      "category_id": "7afbd062-df72-42ec-b0cd-396f8b857065",
      "tags_id": "7dacc0e9-b67a-45c0-bd70-12fcc9676519",
      "updated_at": null
    },
    {
      "id": "99be85f8-f03d-468c-accf-a6fb499e3b38",
      "title": "what is css?",
      "slug": "what is css?",
      "content": "CSS stands for Cascading Style Sheets, a language used to style web pages. It's a core language of the open web and is used to describe how HTML and XML documents are presented.",
      "userId": "4a90c0a9-99ab-4686-8809-2e655248ba24",
      "category_id": "7afbd062-df72-42ec-b0cd-396f8b857065",
      "tags_id": "7dacc0e9-b67a-45c0-bd70-12fcc9676519",
      "updated_at": null
    }
  ],
  "metadata": { "page": 1, "limit": 10, "total": 2 }
}
```

[Back to Features](#features)

---

## Project setup

Before running this application, make sure to create a database. This project use MySQL as the Database and Prisma as the ORM.

```bash
# clone repository
git clone https://github.com/rifqdev/nest-blog-api.git

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

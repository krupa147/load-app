# Load CRUD APP

[![NestJS](https://nestjs.com/img/logo_text.svg)](https://nestjs.com/)

## Description

This NestJS application serves as a CRUD API for managing load items. It provides endpoints to Create, Read, Update, and Delete (CRUD) information related to load items.

Key Features:

- **Create:** Easily add new load items to the system with a user-friendly API.
- **Read:** Retrieve detailed information about existing load item.
- **Update:** Modify load item details.
- **Delete:** Remove load items that are no longer relevant or required.

### Prerequisites

- Node.js (version 21.6.1)
- npm (version 10.2.4)
- PostgreSQL (vesrsion 15)

### Install Dependencies

```bash
npm install
```

### Environment variable

Copy .env.sample to .env and update the values.
```bash
cp .env.sample .env
```

### Database migrations

Run database migrations with below command,

```bash
npm run build && npm run migrate
```

### Running the app

```bash
# development
$ npm run start

# watch mode
npm run start:dev

# production mode
$ npm run start:prod 
```
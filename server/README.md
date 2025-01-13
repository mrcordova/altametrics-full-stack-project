# NestJS Backend API with Prisma and PostgreSQL

This project demonstrates a basic backend API built using **Node.js**, **NestJS**, **Prisma ORM**, and **PostgreSQL**, featuring JWT-based authentication, and Docker for setup.

---

## Features

### Authentication

- **Login endpoint** to authenticate users and provide a JWT token: `/auth/login`.

### Invoice Management

- **Fetch all invoices**: `/invoices`
- **Fetch a specific invoice**: `/invoices/:id`

### Validation

- Zod for DTO validation to ensure robust and error-free data handling.

### Database

- PostgreSQL database integration with Prisma ORM.
- Seeded demo data for authentication and invoices.

---

## Prerequisites

- **Node.js** (>= v16)
- **Docker** and **Docker Compose**

---

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory with the following configuration:

```env
DATABASE_URL="postgresql://noahCordova:myPassword@localhost:5432/mydb?schema=public"
JWT_SECRET='zjP9h6ZIRLoSKCRj'
PORT=3000
```

### 4. Docker Setup

Start the PostgreSQL database:

```bash
docker-compose up -d
```

### 5. Apply Prisma Migrations

```bash
npx prisma migrate dev
```

### 6. Seed the Database

```bash
npx prisma db seed
```

### 7. Start the Application

```bash
npm run start:dev
```

---

## API Endpoints

[Api Documention](http://localhost:3000/api)

### Authentication

#### POST `/auth/login`

- **Description**: Authenticates the user and provides a JWT token.
- **Request Body**:

```json
{
  "email": "batman#1@gmail.com",
  "password": "marthaWayne"
}
```

- **Response**:

```json
{
  "access_token": "<JWT_TOKEN>"
}
```

### Invoices

#### GET `/invoices`

- **Description**: Fetches all invoices.
- **Headers**:

```http
Authorization: Bearer <JWT_TOKEN>
```

#### GET `/invoices/:id`

- **Description**: Fetches details of a specific invoice.
- **Headers**:

```http
Authorization: Bearer <JWT_TOKEN>
```

---

## File Structure

```
.
├── src
│   ├── app.module.ts          # Root module
│   ├── main.ts                # Application entry point
│   ├── auth                   # Authentication module
│   │   ├── auth.module.ts
│   │   ├── auth.service.ts
│   │   ├── auth.controller.ts
│   │   └── jwt.strategy.ts
│   ├── invoices               # Invoice module
│   │   ├── invoices.module.ts
│   │   ├── invoices.service.ts
│   │   ├── invoices.controller.ts
│   │   └── dto
│   │       ├── create-invoice.dto.ts
│   │       └── update-invoice.dto.ts
│   └── prisma                 # Prisma integration
│   |   ├── prisma.module.ts
│   |   ├── prisma.service.ts
│   └── prisma-client-exception  #custom exception filter
│       ├── prisma-client-exception.filter.ts
│
├── prisma
│   ├── schema.prisma          # Prisma schema definition
│   └── seed.ts                # Database seed file
├── docker-compose.yml         # Docker setup
├── package.json               # Project configuration
└── README.md                  # Documentation
```

---

## Seeded Data

### Demo User

- **Email**: `batman#1@gmail.com`
- **Password**: `marthaWayne`

### Demo Invoices

- Seeded with example invoices for demonstration purposes.

---

## Development Commands

- **Start the app**:

```bash
npm run start:dev
```

- **Lint the code**:

```bash
npm run lint
```

- **Format the code**:

```bash
npm run format
```

---

## Technologies Used

- **Node.js**
- **NestJS**
- **Prisma ORM**
- **PostgreSQL**
- **Docker**
- **JWT Authentication**

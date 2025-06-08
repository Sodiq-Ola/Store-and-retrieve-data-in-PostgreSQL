# Store and Retrieve Data in PostgreSQL

This project is a simple Express.js API connected to a PostgreSQL database. It performs CRUD operations on a `users` table.

## Features

- GET all users
- GET user by ID
- POST new user
- PUT update user
- DELETE user

## Setup Instructions

1. Clone the repo
2. Run `npm install`
3. Create a PostgreSQL DB and run this SQL:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  age INTEGER
);

### POST /users

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}

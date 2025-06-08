# Store and Retrieve Data in PostgreSQL

This is a simple Express.js REST API that connects to a PostgreSQL database and allows you to perform basic CRUD operations (Create, Read, Update, Delete) on a `users` table.

---

## 📦 Project Structure

├── index.js            # Main entry point
├── db.js               # PostgreSQL database connection
├── routes/
│   └── users.js        # All user-related route handlers
├── .env                # Environment variables
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentatio

---

## 🛠 Setup Instructions

### 1. Prerequisites
- Node.js and npm installed
- PostgreSQL installed and running
- Postman or any API testing tool

### 2. Clone the Repository
```bash
git clone https://github.com/Sodiq-Ola/Store-and-retrieve-data-in-PostgreSQL.git
cd Store-and-retrieve-data-in-PostgreSQL

3. Install and Dependencies 
npm install
4. ⁠Create the PostgreSQL Database and Table
Login to PostgreSQL and run:
CREATE DATABASE your_database_name;

\c your_database_name

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  age INTEGER
);

5. Configure Environment Variables
Create a .env file in the root of the project:
PORT=3000
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=your_database_name

6. Start the Server
node index.js

Or, if using nodemon:
npm run dev

📬 API Endpoints

✅ GET All Users
	•	URL: GET /users
	•	Description: Returns a list of all users.

⸻

✅ GET User by ID
	•	URL: GET /users/:id
	•	Description: Returns a single user by ID.
	•	Example: /users/1

⸻

✅ POST Create New User
	•	URL: POST /users
	•	Description: Creates a new user.
	•	Request Body (JSON):
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "age": 25
}

✅ PUT Update User
	•	URL: PUT /users/:id
	•	Description: Updates an existing user.
	•	Example: /users/1
	•	Request Body (JSON):
{
  "name": "Updated Name",
  "email": "updated@example.com",
  "age": 30
}

✅ DELETE User
	•	URL: DELETE /users/:id
	•	Description: Deletes a user by ID.
	•	Example: /users/1

⸻

🧪 How to Test with Postman

Use the following endpoints in Postman:
	•	GET http://localhost:3000/users
	•	GET http://localhost:3000/users/1
	•	POST http://localhost:3000/users with JSON body
	•	PUT http://localhost:3000/users/1 with JSON body
	•	DELETE http://localhost:3000/users/1

⸻

📌 Notes
	•	Use .env for database configuration to avoid hardcoding sensitive credentials.
	•	Keep your code modular (separate routes, db config, etc.)
	•	Avoid including node_modules in your GitHub repo.

⸻

👤 Author
	•	GitHub: Sodiq-Ola

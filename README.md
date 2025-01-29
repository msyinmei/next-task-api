# Next Task API 📝

A modern REST API for task management built with Express.js and Prisma, using MySQL as the database backend.

## Features ✨

- Full CRUD operations for tasks
- MySQL database integration
- Prisma ORM for type-safe database queries
- RESTful API design
- UUID-based task identification

## Prerequisites 🛠️

- Node.js (v14 or higher)
- npm or yarn
- MySQL (v5.7 or higher)
- [Additional Prisma requirements](https://www.prisma.io/docs/orm/reference/system-requirements)

## Installation 🚀

### 1. Clone the repository
```bash
git clone https://github.com/msyinmei/next-task-api.git
cd next-task-api
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Database Setup

<details>
<summary>MySQL Installation & Configuration</summary>

#### Install MySQL

**macOS:**
```bash
brew install mysql
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install mysql-server
```

**Windows:**
Download and install from [MySQL Installer](https://dev.mysql.com/downloads/installer/)

#### Start MySQL Server

**macOS:**
```bash
brew services start mysql
```

**Linux:**
```bash
sudo service mysql start
```

**Windows:**
MySQL service starts automatically after installation.

#### Database Configuration

1. Log into MySQL:
```bash
mysql -u root -p
```

2. Create database and user:
```sql
CREATE DATABASE my_database;
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON my_database.* TO 'username'@'localhost';
FLUSH PRIVILEGES;
```
</details>

### 4. Environment Setup

Create a `.env` file in the project root:
```bash
DATABASE_URL="mysql://username:password@localhost:3306/my_database"
```

### 5. Database Migration
```bash
npx prisma migrate dev --name init
```

### 6. Start the Server
```bash
npm run dev
```

The API will be available at `http://localhost:8080`

## API Documentation 📚

### Tasks Endpoints

| Method | Endpoint     | Description         | Request Body                                    |
|--------|-------------|---------------------|------------------------------------------------|
| GET    | `/tasks`    | Get all tasks       | -                                              |
| GET    | `/tasks/:id`| Get task by ID      | -                                              |
| POST   | `/tasks`    | Create new task     | `{ title: String, color: String }`             |
| PUT    | `/tasks/:id`| Update task         | `{ title: String, color: String, completed: Boolean }` |
| DELETE | `/tasks/:id`| Delete task         | -                                              |

### Request Body Schema

```typescript
{
  title: string;      // Task title
  color: string;      // Task color
  completed?: boolean; // Task completion status (default: false)
  id: string;         // Auto-generated UUID
}
```

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.

## License 📄

[MIT License](LICENSE)

## Support 💬

For support, please open an issue in the GitHub repository.
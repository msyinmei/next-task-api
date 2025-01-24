# next-task-api
A REST API with CRUD for a To Do App built with Express and Prisma with a MySQL Database

# prerequisites: 
https://www.prisma.io/docs/orm/reference/system-requirements 
- npm
- yarn
- mysql

# local development setup
<details>
<summary> Install and Start MySQL </summary> 

#### 1. Install MySQL

- macOS: use Homebrew to install MySQL

```
brew install mysql
```

- Windows: Use the MySQL Installer (https://dev.mysql.com/downloads/installer/)
- Linux: for any Ubuntu or Debian-based distributions
```
sudo apt update
sudo apt install mysql-server
``` 


#### 2. Start MySQL Server: 
```
# macOS (Homebrew)
brew services start mysql

# Linux
sudo service mysql start

# Windows
# The service should automatically start after installation, but you can manually start it through the Services app.
```

#### 3. configure the MySQL Database with a user and grant the user permissions. 

Log into MySQL: https://dev.mysql.com/doc/mysql-getting-started/en/ 
```
mysql -u root -p
```
Enter the password you set during installation (or set it if this is your first time). 

Create a Database
```
CREATE DATABASE my_database;
```

Create a User
```
CREATE USER 'username'@'localhost:3306' IDENTIFIED BY 'password';
```

Grant Permissions
```
GRANT ALL PRIVILEGES ON my_database.* TO 'username'@'localhost:3306';
FLUSH PRIVILEGES;
```
</details>

<details>
<summary> Run Prisma Migrate </summary> 
Create and seed your database as defined with prisma/schema. 

```
npx prisma migrate dev --name init
```

Create a `.env` file in Next-Task-API and assign the environment variable `DATABASE_URL` with

```
DATABASE_URL="mysql://username:password@localhost:3306/my_database"
```

replacing the username, password, and my_database with the names, password and database name you chose on your MySQL setup. 

</details>

<details>
<summary> Run locally </summary> 
run the following command to run the app: 

```
npm run dev
```
local application should deliver on `localhost:8080`
</details>
<br>



# Using the REST API

### GET 
- `/tasks/`: get all tasks
- `/tasks/:id`: fetch a unique task by it's `id`

### POST 
-`/tasks`: create new task
- Body: 
    - `title: String`: title of the task
    - `color: String`: color of the task
    - `id` is a randomly assigned uuid
    - `completed` is set by default `false`

### PUT 
- `/tass/:id`: Update a task by it's `id`
- Body: 
    - `title: String`: title of the task
    - `color: String`: color of the task
    - `completed: Boolean`: status of the task

### DELETE
- `/tasks/:id`: Delete a post by it's `id`
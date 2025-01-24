# next-task-api
A REST API with CRUD for a To Do App built with Express and Prisma with a MySQL Database

# prerequisites: 
https://www.prisma.io/docs/orm/reference/system-requirements 
- npm
- yarn
- mysql

# local development

## install mysql
- macOS: use Homebrew to instlal MySQL
```
brew install mysql
```
- Windows: Use the MySQL Installer
- Linux: 
```
sudo apt update
sudo apt install mysql-server
``` 

## start mysql server 
```
# macOS (Homebrew)
brew services start mysql

# Linux
sudo service mysql start

# Windows
# The service should automatically start after installation, but you can manually start it through the Services app.
```

## configure MySQL Database
1. Log into MySQL: https://dev.mysql.com/doc/mysql-getting-started/en/ 
```
mysql -u root -p
```
Enter the password you set during installation (or set it if this is your first time). 

2. Create a Database
```
CREATE DATABASE todo_db;
```

3. Create a User
```
CREATE USER 'firstuser'@'localhost:3306' IDENTIFIED BY 'firstpassword';
```

4. Grant Permissions
```
GRANT ALL PRIVILEGES ON first_todo_db.* TO 'firstuser'@'localhost:3306';
FLUSH PRIVILEGES;
```
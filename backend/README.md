### Step to setup a backend
1. inside the terminal enter the folling:
```
npm install express
npm install nodemon
npm install pg
npm install dotenv
npm install --save sequelize sequelize-cli pg-hstore
npx sequelize-cli init
npm install bcryptjs
```

2. Create your database for the project
    a. enter `psql` to login into your postgresSQL superuser
    b. enter `CREATE DATABASE <db_name>;`
    c. then enter `\q` to close the super user

3. Create your `.env` file in the following format:
```
DB_USER=<user you are using>
DB_HOST=localhost
DB_NAME=<The database name you are using for your app>
DB_PASSWORD=<your password for the user>
DB_PORT=5432

```
### Step to setup a backend

1. In backend folder, inside the terminal enter the folling:

```

npm install express
npm install nodemon
npm install pg
npm install dotenv
npm install --save sequelize sequelize-cli pg-hstore
npx sequelize-cli init
npm install bcryptjs
```

sudo su - postgres
psql shell
Server [localhost]:
Database [postgres]:
Port [5432]:
Username [postgres]:
Password for user postgres: my password for postgres

2. Create your database for the project
<!-- my commands
CREATE ROLE me  WITH LOGIN PASSWORD 'qwerty';
ALTER ROLE me CREATEDB;
CREATE DATABASE socialBites;
ALTER DATABASE socialBites OWNER TO me;
-->

a. enter `psql` to login into your postgresSQL superuser
b. enter `CREATE DATABASE <db_name>;`
c. then enter `\q` to close the super user

3. Create your `.env` file in the following format:

<!-- my commands
create .env file
DB_USER=me
DB_HOST=localhost
DB_NAME=socialBites
DB_PASSWORD=qwerty
DB_PORT=5432
 -->

```
DB_USER=<user you are using>
DB_HOST=localhost
DB_NAME=<The database name you are using for your app>
DB_PASSWORD=<your password for the user>
DB_PORT=5432


```

4. Run the following command in the terminal:
<!-- my commands for postgresql explorer
add
localhost
me
qwerty
5432
standart connection
socialbites

-->

```
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

```

note: if you need to undo the migration and seeder, use the following command

```
npx sequelize-cli db:migrate:undo:all
npx sequelize-cli db:seed:undo:all
```

### update to set up session!

1. enter the following into your terminal:

```
npm install express-session
npm install cors
```

2. Get your session secret, enter `node` and hit `enter` and type in:

```
require("crypto").randomBytes(64).toString("hex")
```

Copy the given string

3. Inside your `.env` add:

```
SESSION_SECRET=<generated_session_secret_given>
```

4. API Endpoint postman api:
   https://gold-equinox-29662.postman.co/workspace/Social-Bite~b22e44a7-7d14-4492-80ae-7bfb3a663638/collection/25222511-e86e4265-f483-47f8-bb47-eab065163c7a?action=share&creator=25222511
   Here, you can get an example of each api request

#### update for fetching nearby restaurant

1. login into your postgres super user, in the terminal:

```
psql -U postgres -d <database_name>
```

then enter your password

2. enter:

```
CREATE EXTENSION IF NOT EXISTS cube;
CREATE EXTENSION IF NOT EXISTS earthdistance;
```

3. try fetching for nearby restaurants by running, `<localhost_PORT_LINK>/api/user/nearby_restaurant/5` in the postman api shareed linked with this README.md

### Create RESTful API using Node.js and Express

1. npm install --save-dev supertest
   - http assertions made easy, high-level abstraction for testing HTTP
2. npm install --save-dev cross-e
3. npm install

- jest
  - nodemon
  - express
  - cors
  - morgan
  - dotenv
  - helmet

4. npm install
   - knex -g --save
   - sqlite3 --save
5. create database
   - knex migrate:make initial
   - createTable
   - dropTableIfExists
6. knex seed:make songs to create seed file/database
7. knex init to create knexfile.js
   - useNullAsDefault: true
   - add migrations to environment
   - add seeds to environment
   - knex migrate:latest / rollback
   - knex seed:run
8. create config.js in data folder
9. create parent index.js
10. create songs folder
    - songs-model.js
      - find, findById, create, update, remove
    - songs-router.js

### Server Test

1. make sure "jest" is setup in package.json
   - add test, test:watch function to "scripts"
2. create **tests** folder with test.js file
   - insert test dummy
3. create new test file for /songs endpoint
   -

## TIPs:

- Stuck at getting the test to pass " knex: Required configuration option 'client' is missing."
  - fixed with reinstalling supertest and cross-env with adding the cross-env variables to package.json file
- Make sure all files have module.exports where it needs it

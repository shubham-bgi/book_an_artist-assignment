Node version 16.13.0 used

1) Create database wholesaler
SQL: CREATE DATABASE wholesaler;

2)Migrate Tables use command `sequelize db:migrate`

3)Populate Tables use command `sequelize db:seed:all`
OR you can use ./sqlToPopulateTables.txt or ./toPopulateTables.sql

4)start local server by `npm start`

5) Run requests (You can import Postaman collection ./wholesaler.postman_collection.json)
API 1 - localhost:3000/wholesaler/6   (last number is wholesaler_id input, goes upto 10)
API 2 - localhost:3000/singlewholesaler
API 3 - localhost:3000/monthlyturnover
API 4 - localhost:3000/maxturnover
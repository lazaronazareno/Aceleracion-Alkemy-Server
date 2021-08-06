# Server Base - Proyecto ONG


## Envinroment setup

1) Create database
2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
npm install
```

3) Migrations:
``` bash
npx sequelize-cli db:migrate
```

4) Seeders:
``` bash
npx sequelize-cli db:seed:all
```

## Start local server

``` bash
npm start
```

## Command to create 20 new users
``` bash
  npx sequelize-cli db:seed:all

firstName     | UserId        | RoleId  |
------------- | ------------- | ------- | 
John          |    1          |   2     |
Jack          |    2          |   2     |


firstName     | UserId        | RoleId  |
------------- | ------------- | ------- | 
Nickolas      |    11         |   1     |
Georgie       |    12         |   1     |

```

## Command to delete 20 users 
``` bash
  npx sequelize-cli db:seed:undo --seed 20210803204330-create-users.js 
```    
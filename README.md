### Root
```sh
$ npx hardhat node
$ npx hardhat run --network localhost scripts/deploy.js
```


### Frontend
```sh
$ cd /frontend
$ npm install
$ npm start
```

### Backend

```sh
$ cd /backend
$ create directory public/uploads inside /src (dont forget to create directory)
$ npm install
$ Create file .env and set the variable MONGODB_URl with the url of the database in mongoDB, and JWT_PRIVATE_KEY with a private key for do the  hashing of the token
$ npm run dev

```

### Postman

All Category

```sh
/api/categories (GET)
```

```sh
/api/categories (POST)

Body:

title: String
description: String
categoryId: Number (default: 0)

```

Category _id

```sh
/api/categories/:id (GET)
```

All Items

```sh
/api/items/item (GET)
```

```sh
/api/items/item (POST)

Params POST:

categoryId: Number (ej: 0)

Body:

title: String
price: String
description: String
condition: String
picture: Array
```

Item By Slug

```sh
/api/items/item/:slug (GET)
```

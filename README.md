### Raíz
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
$ crear directorio public/uploads dentro de /src (NO SE OLVIDEN DE CREAR EL DIRECTORIO)
$ npm install
$ crear archivo .env y setear la variable MONGODB_URl con la url de la base de datos de mongo, y JWT_PRIVATE_KEY con una clave privada para realizar el hashing del token
$ npm run dev

```

### Postman

Category

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

Item

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
picture: file
```
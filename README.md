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
$ crear directorio public/uploads (NO SE OLVIDEN DE CREAR EL DIRECTORIO)
$ npm install
$ crear archivo .env y setear la variable MONGODB_URl con la url de la base de datos de mongo, y JWT_PRIVATE_KEY con una clave privada para realizar el hashing del token
$ npm run dev

```
### Raíz
```sh
$ npx hardhat node
$ npx hardhat run --network localhost scripts/deploy.js
```
To deploy contracts in Kovan
```sh
$ npx hardhat run --network kovan scripts/deploy.js // Deploy into Kovan
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
$ crear directorio public/uploads (si es necesario)
$ npm install
$ crear archivo .env y setear la variable MONGODB_URl con la url de la base de datos de mongo, y JWT_PRIVATE_KEY con una clave privada para realizar el hashing del token
$ npm run dev

```
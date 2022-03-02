FROM node:16

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app && chown -R node:node /usr/local/lib/node_modules && chown -R node:node /usr/local>

WORKDIR /home/node/app

USER node

COPY package.json ./

COPY hardhat.config.js ./

COPY /scripts ./scripts

RUN ls

RUN yarn install --non-interactive --frozen-lockfile

RUN ls

RUN npx hardhat run --network localhost scripts/deploy.js

RUN mkdir -p /home/node/app/backend/node_modules

WORKDIR /home/node/app/backend

COPY /backend/package.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 4000

ENTRYPOINT npm start

## Docker build -t api_marketplace .
## docker run --name api_marketplace -p 80:4000 -d api_marketplace
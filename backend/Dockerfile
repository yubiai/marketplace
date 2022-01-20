FROM node:16

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

USER node

COPY package.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 4000

ENTRYPOINT npm start

## Docker build -t api_marketplace .
## docker run --name api_marketplace -p 80:4000 -d api_marketplace

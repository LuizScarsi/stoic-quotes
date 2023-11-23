FROM node:20.9.0-alpine

WORKDIR /app

COPY . .

RUN npm install

CMD [ "node", "index.js" ]

EXPOSE 3000
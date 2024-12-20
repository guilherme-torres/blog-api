FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "sh", "-c", "node scripts/initdb.js && node src/index.js" ]
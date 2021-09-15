FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8001

EXPOSE 8001

CMD [ "npm", "start" ]
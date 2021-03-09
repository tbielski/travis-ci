FROM node:14
WORKDIR /usr/src/lab3
COPY package*.json ./
RUN npm install
COPY express.js express.js
EXPOSE 8080
CMD [ "node", "express.js" ]

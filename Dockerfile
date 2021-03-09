FROM node:alpine
WORKDIR /usr/src/lab3
COPY package*.json ./
RUN npm install
COPY index.js index.js
EXPOSE 8080
CMD [ "node", "index.js" ]

FROM node:12.18.2

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install -g nodemon

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "nodemon", "server.js" ]
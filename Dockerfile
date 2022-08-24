FROM node:latest

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install

RUN npm run bsse10

Expose  4200

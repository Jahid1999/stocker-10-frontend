FROM node:13-alpine

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install

RUN npm run bsse10

EXPOSE  4200

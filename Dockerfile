FROM node:16-alpine

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install

RUN npm run bsse10

EXPOSE  4200

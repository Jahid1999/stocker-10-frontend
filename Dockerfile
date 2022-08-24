FROM node:16.17-alpine 

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install -g npm@8.11.0

RUN ng serve --host 0.0.0.0

EXPOSE  4200

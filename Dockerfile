FROM node:latest

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install -g npm
RUN npm install -g @angular/cli@latest
RUN npm install -g @angular-devkit/build-angular
RUN npm install -g @angular-devkit/schematics

RUN npm run bsse10

EXPOSE 4200


FROM node:latest

WORKDIR /usr/local/app

COPY ./package.json ./

RUN npm install 
COPY ./ ./

RUN npm install -g @angular/cli@latest
#RUN npm install -g @angular-devkit/build-angular:dev-server
#RUN npm install -g @angular-devkit/schematics

RUN npm run bsse10

EXPOSE 4200


FROM node:16.17-alpine 

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install -g npm@8.11.0
RUN npm install -g @angular/cli@latest
#RUN npm install -g @angular-devkit/build-angular

RUN npm run bsse10

EXPOSE 4200


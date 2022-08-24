#FROM node:16.17-alpine 

#WORKDIR /usr/local/app

#COPY ./ /usr/local/app/

#RUN npm install -g npm@8.11.0
#RUN npm install -g @angular/cli@8.0.6
#RUN npm install -g @angular-devkit/build-angular

#RUN npm run bsse10

FROM node:latest as build

WORKDIR /usr/local/app
COPY ./ /usr/local/app/

RUN npm install -g npm@@8.11.0

RUN npm install -g @angular/cli@latest

RUN npm run build --prod

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /usr/local/app/dist/devops-gurus /usr/share/nginx/html

EXPOSE  4200

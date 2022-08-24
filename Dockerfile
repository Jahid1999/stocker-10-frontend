FROM node:18-alpine as my-app-build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/
#RUN rm package-lock.json

RUN npm i -g npm@8.11.0

RUN npm install -g @angular/cli@latest
RUN npm install -g @angular-devkit/build-angular:browser
#RUN npm install -g @angular-devkit/build-angular:dev-server
#RUN npm install -g @angular-devkit/schematics

RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the build output to replace the default nginx contents.
COPY --from=my-app-build /usr/local/app/dist/stocker-10-frontend /usr/share/nginx/html

EXPOSE 4200


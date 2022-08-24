FROM node:18-alpine as my-app-build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/
RUN rm /usr/local/app/package-lock.json



RUN npm install -g npm@8.18.0

RUN npm install -g @angular/cli@latest
#RUN npm install -g @angular-devkit/build-angular:browser
#RUN npm install -g @angular-devkit/build-angular:dev-server
#RUN npm install -g @angular-devkit/schematics

#RUN npm install -g @angular-devkit/architect 0.1401.1
#RUN npm install -g @angular-devkit/core 14.1.1 
#RUN npm install -g @angular-devkit/schematics 14.1.1
#RUN npm install -g@schematics/angular 14.1.1 

Run npm cache clean --force

RUN npm install 

RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the build output to replace the default nginx contents.
COPY --from=my-app-build /usr/local/app/dist/stocker-10-frontend /usr/share/nginx/html

EXPOSE 4200


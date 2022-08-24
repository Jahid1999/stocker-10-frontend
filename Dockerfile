FROM node:16.17-alpine as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install -g npm@8.11.0

RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/devops-gurus /usr/share/nginx/html

EXPOSE  4200

FROM node:alpine as builder

WORKDIR /app
COPY BadUX .
RUN npm install
Run npm run build

FROM httpd:alpine

COPY --from=builder /app/dist /usr/local/apache2/htdocs/
COPY .htaccess /usr/local/apache2/htdocs/
COPY ./httpd.conf /usr/local/apache2/conf/httpd.conf
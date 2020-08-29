FROM nginx:alpine

COPY build /data/www
COPY nginx.conf /etc/nginx/conf.d/default.conf
ADD nginx.conf /etc/nginx/nginx.conf

WORKDIR /app

EXPOSE 80

CMD (tail -F /var/log/nginx/access.log &) && exec nginx -g "daemon off;"

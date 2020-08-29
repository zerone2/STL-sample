
FROM nginx:alpine

ADD bulid /build
ADD nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080
EXPOSE 80

CMD (tail -F /var/log/nginx/access.log &) && exec nginx -g "daemon off;"

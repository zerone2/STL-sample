FROM ubuntu:16.04

ADD nginx.conf /etc/nginx/nginx.conf
ADD build /data/www

EXPOSE 8080
EXPOSE 80

CMD (tail -F /var/log/nginx/access.log &) && exec nginx -g "daemon off;"

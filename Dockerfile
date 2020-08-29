FROM ubuntu:16.04

ADD bulid /data/www
ADD nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080
EXPOSE 80

CMD (tail -F /var/log/nginx/access.log &) && exec nginx -g "daemon off;"

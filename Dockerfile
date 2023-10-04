FROM httpd:latest
COPY ./vhost/ /usr/local/apache2/htdocs/
COPY ./httpd.conf /usr/local/apache2/conf/httpd.conf
COPY ./ejemplosHtml /var/www/ejemplosHtml

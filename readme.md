# Ejemplos de html
Este repositorio tiene como finalidad exponer algunos ejemplos de html, además de mostrar como configurar httpd que es una imagen de apache 
# HTTPD conf
Aquí estan todas la configuración de nuestro servidor el objetivo al menos de este proyecto fue el configurar los vhost
para ello configuere las siguientes lineas del httpd.conf

``` xml
<VirtualHost *:80>
    ServerName www.ejemploshtml.local
    DocumentRoot /var/www/ejemplosHtml
</VirtualHost>
```
Además es importante verificar que el document root apunte a la raiz de nuestros documentos
``` xml
DocumentRoot "/var/www/ejemplosHtml"
<Directory "/var/www/ejemplosHtml">
```
En el DockerFile esta especificado esto
Una vez teniendo esto configurado tambien se puede modificar el rutamiento de nuestra maquina para que el dns de nuestra maquina local pueda acceder a nuestro servidor de apache en sistemas unix la ruta para hacer esto es la siguiente

``` bash
/private/etc/hosts
```

Agregamos la siguiente linea
``` bash
127.0.0.1	www.ejemploshtml.local
```
## Ejecutar docker
construir la imagen con una etiqueta
```
docker build -t apachevhost:1 .   
```
Ejecutar el contendor asignando los puertos puente por defecto de nuestra maquina y del contenedor
```
docker run -d --name apache_contenedor -p 8080:80 apachevhost:1 
```
Y listo en nuestro navegador si accedemos a 
www.ejemploshtml.local nos deberia de aparecer nuestro index.html
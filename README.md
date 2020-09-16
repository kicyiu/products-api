# Product Api


Este es un API desarrollado en Nodejs con framework Express que se conecta a una  base de dato de productos
hecho en MongoDB

### Instlación

Ejecutar los siguientes comandos para desplegar el contedor del proyecto
```sh
$ make build
$ make run
```
La aplicación iciará por defecto en el puerto 8080


Ejecutar el siguiente comando para alimentar la base de dato con datos de prueba
```sh
$ make database-provision
```

Para detener los contenedores en ejecución
```sh
$ make stop
```
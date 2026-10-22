### FLUJO

USUARIO/PETICIONES/SERVICIOS

usuario mete credenciales al login
si autoriza inicia para hacer una peticion
si hace una peticion se va a servidores, si existe el usuario va generar el tocken.

las capas de seguridad:

cors middleware
JWT Auto middleware
authorization: consume tocken si teine acceso al sistema
controllers: tiene que consultar
DB Driver: consumir informacion
MongoDB: retorna la informacion

roles y permisos va estar los controladores, va recoger informacion para volver a retornar.
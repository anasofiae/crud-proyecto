# crud-proyecto
Este es uno de los proyectos obligatorios que realicé en Jovenes a Programar. 

Trabajaremos en una aplicación CRUD, capaz de conectarse con un servidor y realizar modificaciones en una base de datos.

Para ello, haremos uso de un mock server, o servidor simulado, que nos permitirá crear rápidamente los recursos backend necesarios y concentrarnos en el trabajo en cliente. 

El botón "Buscar" debe mostrar como resultado el registro cuyo id haya sido solicitado.
En caso de dejar vacío el campo del id, debe mostrar cómo resultado la lista de todos los registros.

El botón "Agregar" debe enviar al servidor un objeto construido con los valores introducidos por el usuario en los campos nombre y apellido. 
Deberá mostrar como resultado el listado de registros, incluyendo el agregado.

El botón "Modificar" deberá abrir un modal donde se muestren los campos nombre y apellido, ya con los valores cargados coincidentes con el registro cuyo id ingresó el usuario. 
El usuario debe poder modificar dichos valores, y al presionar el botón para guardar los cambios, se debe realizar la consulta adecuada para modificar el registro, cerrar el modal, y mostrar como resultado la lista de registros, con las correspondientes modificaciones.

El botón "Borrar" deberá realizar la consulta para eliminar el registro cuyo id coincida con el ingresado por el usuario, y mostrar como resultado el listado de registros, ya con el mismo eliminado.

Por último, en todos los casos, excepto el de "Buscar", los botones que realizan la consulta deberán permanecer desactivados, mientras alguno de los campos correspondientes se encuentre vacío.
Además, en caso de que la solicitud genere una respuesta con un status no ok, por ejemplo si intentamos borrar, modificar o buscar un registro inexistente, se deberá avisar al usuario por medio de una alerta que algo no salió bien.

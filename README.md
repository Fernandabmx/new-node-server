
¿Cuál fue el impacto de la implementación de async y await?

R/= Las funciones completarTask, añadirTarea, eliminarTarea y main fueron declaradas como funciones asíncronas mediante la palabra clave async. Esto posibilitó el uso de await dentro de ellas para esperar la resolución de promesas antes de avanzar al siguiente paso. Dentro de las funciones marcadas como async, empleamos await para aguardar la finalización de operaciones asincrónicas, como cambiar el estado de una tarea, agregar una nueva tarea o eliminar una tarea. Esta práctica garantiza que dichas operaciones se lleven a cabo en secuencia y de manera organizada. La implementación de async y await mejora la legibilidad del código y facilita una ejecución controlada y secuencial de operaciones asincrónicas, simplificando así la comprensión y el mantenimiento del código.

¿Cuál fue el resultado al utilizar el método then()?

R/= La utilización de then() en las promesas creó una cadena de ejecución secuencial, donde cada operación asincrónica se llevó a cabo en orden. Cuando una promesa se resolvía, pasaba al siguiente then(), asegurando así que las operaciones se ejecutaran en el orden correcto y que los resultados se manejaran de manera organizada.

¿Qué diferencias notaste entre async, await y el método then()?

R/=
Async/Await:

Sintaxis más legible: La combinación de async y await proporciona una sintaxis más clara y similar al código síncrono, facilitando la comprensión del flujo de control y el mantenimiento del código.
Manejo de errores más similar al código síncrono: Se utiliza try-catch para manejar errores de manera similar a como se haría en código síncrono, simplificando el manejo de excepciones y la identificación de problemas.
Secuencial: Con await, las operaciones se realizan de manera secuencial, lo que facilita el razonamiento sobre el flujo de control.
Método .then():

Estilo de programación basado en promesas: El método then() representa una forma más explícita de trabajar con promesas, siendo más adecuado en situaciones donde se gestionan múltiples promesas en paralelo o se busca un mayor control sobre el flujo de control.
Encadenamiento de promesas: La capacidad de encadenar múltiples then() permite crear secuencias de operaciones asincrónicas, útil cuando se requiere un orden específico para muchas operaciones.
Manejo de errores explícito: Con then(), se manejan errores utilizando .catch() al final de la cadena de promesas, lo que posibilita un manejo más detallado y específico de errores, aunque pueda resultar en una estructura de código más profunda al trabajar con muchas promesas.





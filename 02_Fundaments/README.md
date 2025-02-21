# En JavaScript, puedes usar promesas (Promise) en vez de async/await cuando necesitas más flexibilidad en el manejo de tareas asíncronas.

Cuándo usar Promise en vez de async/await
✅ Cuando necesitas mayor control sobre la ejecución (ejemplo: encadenar múltiples tareas asíncronas de manera dinámica).
✅ Cuando estás creando una función asíncrona desde cero y quieres exponer su estado (pending, resolved, rejected).
✅ Cuando trabajas con funciones callback-based y quieres convertirlas en promesas.
✅ Cuando necesitas manejar múltiples promesas a la vez con Promise.all(), Promise.race(), Promise.any(), etc.
✅ Cuando necesitas ejecutar código de manera condicional antes de resolver la promesa.

1️⃣ Crear y usar una Promise manualmente
Si tienes una operación que toma tiempo, como leer un archivo o hacer una solicitud a una API, puedes usar Promise
2️⃣ Encadenamiento de Promesas (.then())
Si necesitas ejecutar múltiples tareas asíncronas "en el orden que tu quieras sin seguir una secuencia especifica", puedes encadenarlas una luego la otra dentro de la primera pero el problema es que con muchas tareas se vuelve menos legible.
3️⃣ Promise.all() → Ejecutar varias promesas en paralelo
Si tienes varias tareas independientes, Promise.all() es más rápido que await en un for:
Ejemplo:
const tarea1 = new Promise(resolve => setTimeout(() => resolve("🏃‍♂️ Tarea 1 lista"), 2000));
const tarea2 = new Promise(resolve => setTimeout(() => resolve("🚴 Tarea 2 lista"), 3000));
Promise.all([tarea1, tarea2])
    .then(resultados => console.log("Todas las tareas completadas:", resultados))
    .catch(error => console.error("Error:", error));
📌 Si una falla, todas fallan. Si necesitas que algunas sigan ejecutándose, usa Promise.allSettled().

# Cuando utilizar async/await en lugar de promises
🔹 Cuando necesitas escribir código más limpio y legible.
🔹 Cuando el flujo de ejecución depende mucho del orden de una secuencia(se soluciona ordenando las ejecuciones) y principalmente cuando puede haber muchas ejecuciones (por ejemplo, paso 1 → paso 2 → paso 3).
🔹 Cuando necesitas un manejo de errores más sencillo con try...catch.

¿Cuándo usar cada uno?
Caso de Uso:	                                    async/await	   Promise
Código más fácil de leer	                            ✅	        ❌
Encadenar múltiples tareas dependientes	                ✅	        ✅ (pero menos legible)
Crear una función que retorne una promesa	            ❌	        ✅
Ejecutar varias promesas en paralelo (Promise.all())	✅	        ✅
Necesitas capturar errores de manera clara	            ✅ (con try...catch)	✅ (con .catch())
Convierte funciones callback en promesas	            ❌	        ✅
🔥 Regla general
Si usas promesas en una función: ✅ Usa async/await.
Si creas una promesa desde cero: ✅ Usa new Promise().
Si necesitas manejar muchas promesas juntas: ✅ Usa Promise.all().
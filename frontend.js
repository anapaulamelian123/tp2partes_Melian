<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mini App de Tareas</title>
</head>
<body>
    <h2>Mini App de Tareas</h2>
    <input type="text" id="tarea" placeholder="Ingrese una tarea">
    <button onclick="agregarTarea()">Agregar</button>
    <p id="mensaje"></p>

    <script>
        async function agregarTarea() {
            const tarea = document.getElementById('tarea').value;
            const respuesta = await fetch('http://localhost:3000/agregar-tarea', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ tarea })
            });
            const data = await respuesta.json();
            document.getElementById('mensaje').innerText = data.mensaje;
        }
    </script>
</body>
</html>


const tareasDB = []; // Simulación de base de datos

function guardarTarea(tarea) {
    tareasDB.push(tarea);
    return `Tarea guardada: ${tarea}`;
}

module.exports = { guardarTarea };


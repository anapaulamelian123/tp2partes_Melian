function backend(tarea) {
  if (!tarea || tarea.trim() === "") {
    return "Error: La tarea no puede estar vacía"; 
  }
  baseDeDatos.guardar(tarea); 
  return `Tarea guardada: ${tarea}`;
}

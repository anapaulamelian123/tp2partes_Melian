function frontend() {
  const tarea = prompt("Ingresá una tarea:"); 
  const respuesta = backend(tarea); 
  alert(respuesta); 
}
frontend();

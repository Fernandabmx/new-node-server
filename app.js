const readline = require('readline-sync');

// Estructura de una tarea: { indicador, descripcion, completada }
const tareas = [];

function mostrarTareas() {
  console.log('Lista de tareas:');
  tareas.forEach((tarea, index) => {
    const completada = tarea.completada ? 'Completada' : 'No completada';
    console.log(`${index + 1}. ${tarea.indicador} - ${tarea.descripcion} - ${completada}`);
  });
}

function agregarTarea() {
  const indicador = readline.question('Indicador de la tarea: ');
  const descripcion = readline.question('Descripción de la tarea: ');
  const tarea = { indicador, descripcion, completada: false };
  tareas.push(tarea);
  console.log('Tarea agregada.');
}

function eliminarTarea() {
  mostrarTareas();
  const numeroTarea = readline.questionInt('Ingrese el número de la tarea a eliminar: ');
  if (numeroTarea >= 1 && numeroTarea <= tareas.length) {
    const tareaEliminada = tareas.splice(numeroTarea - 1, 1);
    console.log('Tarea eliminada:', tareaEliminada[0]);
  } else {
    console.log('Número de tarea no válido.');
  }
}

function completarTarea() {
  mostrarTareas();
  const numeroTarea = readline.questionInt('Ingrese el número de la tarea a marcar como completada: ');
  if (numeroTarea >= 1 && numeroTarea <= tareas.length) {
    tareas[numeroTarea - 1].completada = true;
    console.log('Tarea marcada como completada.');
  } else {
    console.log('Número de tarea no válido.');
  }
}

// Función principal
function main() {
  while (true) {
    console.log('\nOpciones:');
    console.log('1. Mostrar tareas');
    console.log('2. Agregar tarea');
    console.log('3. Eliminar tarea');
    console.log('4. Completar tarea');
    console.log('5. Salir');
    const opcion = readline.question('Seleccione una opción: ');

    if (opcion === '1') {
      mostrarTareas();
    } else if (opcion === '2') {
      agregarTarea();
    } else if (opcion === '3') {
      eliminarTarea();
    } else if (opcion === '4') {
      completarTarea();
    } else if (opcion === '5') {
      break;
    } else {
      console.log('Opción no válida. Intente de nuevo.');
    }
  }
}

main();

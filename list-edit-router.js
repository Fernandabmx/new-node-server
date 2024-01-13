const express = require('express');
const editRouter = express.Router();
const tareas = require('./taskCompleted.js');

editRouter.use(express.json())
editRouter.use((req, res, next) => {
 if(req.method === 'POST'){
  if(Object.keys(req.body).length === 0){
    return res.status(400).json({error: 'solicitud  vacia'});
  }
  if(!req.body.id || req.body.descripcion){
    return res.status(400).json({ error: 'Faltan atributos  para crear  tarea'});
  }
 }
 next()
});

editRouter.use((req, res, next) => {
  if (req.method === 'PUT') { if (Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: ' solicitud PUT está vacío.' });
  }  
  if (!req.body.id || !req.body.descripcion) {
    return res.status(400).json({ error: 'Faltan atributos  para actualizar la tarea.' });
  }
}
next()
});

editRouter.post('/agregar', (req, res) => {
    const newTask = req.body;
    tareas.push(newTask);
    res.send({massage:'Tarea agregada'});
});

editRouter.delete( '/delete/:id', (req, res) => {
  const tareasid = req.params.id;
  const tareasUpdade = tareas.filter((tarea) => tarea.id != tareasid);
  res.send({tareasUpdade});
});

editRouter.put('/put/:id', (req, res) => {
  const tareasId = req.params.id;
  const tareasUpdate = req.body;
  const tareaExistente = tareas.find((tareas) => tareas.id === tareasId);

  if (!tareaExistente) {
  return res.status(404).send({ error: 'Tarea no encontrada' });
  }
  tareaExistente.estado = tareasUpdate.estado || tareaExistente.estado;
  tareaExistente.descripcion = tareasUpdate.descripcion || tareaExistente.descripcion;

  res.status(200).send({ message: 'Tarea actualizadas', tareas });
});

module.exports = editRouter;
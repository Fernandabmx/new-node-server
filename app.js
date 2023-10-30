const express = require('express');
const app = express();
const port = 3000;

const tareas = [];

app.use(express.json());

app.get('/tareas', (req, res) => {
  res.json(tareas);
});

app.post('/tareas', (req, res) => {
  const { indicador, descripcion } = req.body;
  if (indicador && descripcion) {
    const tarea = { indicador, descripcion, completada: false };
    tareas.push(tarea);
    res.status(201).json(tarea);
  } else {
    res.status(400).json({ error: 'Faltan campos obligatorios' });
  }
});

app.put('/tareas/:id', (req, res) => {
  const id = req.params.id;
  const tarea = tareas[id - 1];
  if (tarea) {
    const { completada } = req.body;
    tarea.completada = completada;
    res.json(tarea);
  } else {
    res.status(404).json({ error: 'Tarea no encontrada' });
  }
});

app.delete('/tareas/:id', (req, res) => {
  const id = req.params.id;
  const tarea = tareas[id - 1];
  if (tarea) {
    tareas.splice(id - 1, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Tarea no encontrada' });
  }
});

app.get('/tareas/completas', (req, res) => {
  const tareasCompletas = tareas.filter(tarea => tarea.completada);
  res.json(tareasCompletas);
});

app.get('/tareas/incompletas', (req, res) => {
  const tareasIncompletas = tareas.filter(tarea => !tarea.completada);
  res.json(tareasIncompletas);
});

app.get('/tareas/:id', (req, res) => {
  const id = req.params.id;
  const tarea = tareas[id - 1];
  if (tarea) {
    res.json(tarea);
  } else {
    res.status(404).json({ error: 'Tarea no encontrada' });
  }
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});

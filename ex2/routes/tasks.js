const express = require('express');
const router = express.Router();

let tasks = [
  { id: 1, title: 'Learn ExpressJS' },
  { id: 2, title: 'Build a REST API' }
];

// GET all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// GET task by ID
router.get('/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send('Task not found');
  res.json(task);
});

// POST new task
router.post('/', express.json(), (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT update task
router.put('/:id', express.json(), (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send('Task not found');

  task.title = req.body.title;
  res.json(task);
});

// DELETE task
router.delete('/:id', (req, res) => {
  tasks = tasks.filter(t => t.id !== parseInt(req.params.id));
  res.status(204).send();
});

module.exports = router;

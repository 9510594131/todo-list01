const API_URL = 'https://your-backend-api.vercel.app';

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));  

let todos = [];

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  const todo = req.body;
  todos.push(todo);
  res.status(201).json(todo);
});

app.delete('/api/todos/:id', (req, res) => {
  todos = todos.filter(todo => todo.id !== parseInt(req.params.id));
  res.status(200).send('Todo deleted');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

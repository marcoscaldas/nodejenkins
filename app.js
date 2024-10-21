const express = require('express');
const app = express();
const port = 3000;

let items = [];

app.use(express.json());

// Rota para listar todos os itens
app.get('/items', (req, res) => {
  res.json(items);
});

// Rota para adicionar um novo item
app.post('/items', (req, res) => {
  const { name } = req.body;
  if (name) {
    items.push({ id: items.length + 1, name });
    res.status(201).json({ message: 'Item adicionado!' });
  } else {
    res.status(400).json({ error: 'Nome é obrigatório' });
  }
});

// Rota para deletar um item pelo ID
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  items = items.filter(item => item.id !== id);
  res.json({ message: 'Item deletado!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

const express = require('express');
const cors = require('cors');
const app = express();

const usuarioRoutes = require('./src/routes/usuarioRoutes');
const produtoRoutes = require('./src/routes/produtoRoutes');
const authRoutes = require('./src/routes/authRoutes');

app.use(express.json());
app.use(cors());

app.use('/', usuarioRoutes);
app.use('/', produtoRoutes);
app.use('/', authRoutes);

app.listen(3000, () => {
  console.log('servidor rodando na porta 3000');
});
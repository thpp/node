const express = require('express');
const produtosRoutes = require('./routes/produtos.routes');
const logger = require('./middlewares/logger.middleware');

const app = express();

app.use(logger);

app.use(express.json());

app.use('/produtos', produtosRoutes);

module.exports = app;
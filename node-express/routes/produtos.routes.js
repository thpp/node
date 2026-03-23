const express = require('express');
const router = express.Router();

const produtosController = require('../controllers/produtos.controller');

router.get('/', produtosController.listar);

router.post('/', produtosController.criar);

router.get('/:id', produtosController.buscarPorId);

router.delete('/:id', produtosController.remover);

module.exports = router;
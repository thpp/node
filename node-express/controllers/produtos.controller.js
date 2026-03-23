let produtos = [];

exports.listar = (req, res) => {
  res.json(produtos);
};

exports.criar = (req, res) => {

  const produto = req.body;

  produtos.push(produto);

  res.status(201).json(produto);
};

exports.buscarPorId = (req, res) => {

  const id = req.params.id;

  const produto = produtos.find(p => p.id == id);

  if (!produto) {
    return res.status(404).json({ erro: "Produto não encontrado" });
  }

  res.json(produto);
};

exports.remover = (req, res) => {

  const id = req.params.id;

  produtos = produtos.filter(p => p.id != id);

  res.json({ mensagem: "Produto removido" });
};
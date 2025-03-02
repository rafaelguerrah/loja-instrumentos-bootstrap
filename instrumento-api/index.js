const express = require('express');
const cors = require('cors'); // Adicione esta linha

const app = express();
const port = 3000;

app.use(cors()); // Adicione esta linha

const instrumentos = [
  { id: 1, tipo: 'baixo', nome: 'Contra Baixo', descricao: 'Em cada batida, a banda encontrava sua fundação sólida.' },
  { id: 2, tipo: 'bateria', nome: 'Bateria', descricao: 'A bateria era o coração da música, pulsando com energia.' },
  { id: 3, tipo: 'cavaquinho', nome: 'Cavaquinho', descricao: 'No samba, o cavaquinho ditava o ritmo.' },
  { id: 4, tipo: 'guitarra', nome: 'Guitarra', descricao: 'No palco, a guitarra rugia como um trovão.' },
  { id: 5, tipo: 'saxofone', nome: 'Saxofone', descricao: 'O som do saxofone deslizou suavemente, como seda ao vento.' },
  { id: 6, tipo: 'teclado', nome: 'Teclado', descricao: 'Os dedos dançavam sobre as teclas do teclado.' },
  { id: 7, tipo: 'trompete', nome: 'Trompete', descricao: 'O trompete ergueu-se no ar, suas notas brilhando como ouro.' },
  { id: 8, tipo: 'violao', nome: 'Violão', descricao: 'Ele sentava-se à beira da fogueira, as cordas do violão ecoando canções.' },
];

app.get('/instrumentos', (req, res) => {
  const tipo = req.query.tipo;
  if (!tipo) {
    return res.status(400).json({ error: 'Parâmetro "tipo" é obrigatório.' });
  }
  const resultados = instrumentos.filter(instrumento =>
    instrumento.tipo.toLowerCase().includes(tipo.toLowerCase())
  );
  if (resultados.length === 0) {
    return res.status(404).json({ error: 'Nenhum instrumento encontrado para o tipo especificado.' });
  }
  res.json(resultados);
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});

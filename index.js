const express = require('express');
const app = express();
app.get('/', (req, res) => {
res.send('Olá, servidor Node.js com Express funcionando!');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Servidor rodando na porta ${PORT}`);
});
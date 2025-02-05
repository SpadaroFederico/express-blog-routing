const express = require('express');
const app = express();
const postsRouter = require('./routers/posts');  // Importa il router

app.use(express.json());  // Per poter leggere il body delle richieste POST

// Registriamo le rotte del router con il prefisso 'posts/'
app.use('/posts', postsRouter);

// Avvia il server sulla porta 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});

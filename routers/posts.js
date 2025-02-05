const express = require('express');
const router = express.Router();

// Index: restituisce la lista dei post
router.get('/', (req, res) => {
  res.send('Lista dei post');
});

// Show: restituisce il post con l'id specificato
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Dettagli del post ${id}`);
});

// Create: crea un nuovo post
router.post('/', (req, res) => {
  res.send('Creazione di un nuovo post');
});

// Update: aggiorna un post esistente
router.put('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Aggiornamento del post ${id}`);
});

// Delete: elimina un post
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Cancellazione del post ${id}`);
});

module.exports = router;  // Esportiamo il router

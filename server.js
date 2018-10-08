'use strict';

// Load array of notes
const express = require('express');

const data = require('./db/notes');

const app = express();

app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
  res.json(req.params);
});

app.get('/api/notes/:id', (req, res) => {
  const query = req.params;
  let list = data; 
  const id = req.params.id;
  if (query.id) {
    list = list.find(note => note.id === (id));
  }
  res.json(list);
});

app.listen(8080, function(){
  console.info(`Server listening on ${this.address().port}`);
}).on('error', err => {
  console.error(err);
});

console.log('Hello Noteful!');

// INSERT EXPRESS APP CODE HERE...


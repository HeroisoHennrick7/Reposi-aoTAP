const mongoose = require('mongoose');

const CursoSchema = { 
  nome: String ,
  preco: Number,
  duracao: Number,
  instrutor: String
};

module.exports = mongoose.model('Curso', CursoSchema);
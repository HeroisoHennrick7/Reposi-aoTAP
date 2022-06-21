const express = require('express');
const router = express.Router();
const Curso = require('../models/curso_model');


router.get('/', async (req, res) => {
  res.json(await Curso.find());
});


router.get('/:id', async (req, res) => {
  res.json(await Curso.findById(req.params.id));
});


router.post('/', async (req, res) => {
  res.json(await new Curso(req.body).save());
});

router.put('/:id', async (req, res) => {
  res.json(await Curso.findByIdAndUpdate(req.params.id, req.body));
});


router.delete('/:id',  async (req, res) => {
  res.json(await Curso.findByIdAndRemove(req.params.id));
});

module.exports = router;

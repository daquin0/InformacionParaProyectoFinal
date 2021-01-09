var clientesController = require('../Controllers/clienteControllers')

var router= require('express').Router()

router.get('/search', function(req, res) {
    res.json({ message: 'Vas a buscar un cliente '})
})
router.get('/', function(req, res) {
    res.json({ message: 'Estás conectado a la API. Recurso: cliente' })
})
router.get('/:id', function(req, res) {
    res.json({ message: 'Vas a obtener un cliente con id ' + req.params.id })
})
router.post('/', function(req, res) {
    clientesController.create(req,res)
    res.json({ message: 'Vas a añadir un cliente' })
})
router.put('/:id', function(req, res) {
    res.json({ message: 'Vas a actualizar un cliente con id ' + req.params.id })
})
router.delete('/:id', function(req, res) {
    clientesController.delete(req,res)
    res.json({ message: 'Vas a borrar un cliente con id ' + req.params.id})
})
module.exports = route


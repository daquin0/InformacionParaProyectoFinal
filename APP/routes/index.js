var router = require('express').Router()
var cervezas = require('./cervezas')
var clientes= require('./clientes')
 
router.use('/cervezas', cervezas)
router.use('/clientes', clientes)
 
router.get('/', function (req, res) {
  res.status(200).json({ message: 'Estás conectado a nuestra API' })
})
 
module.exports = router
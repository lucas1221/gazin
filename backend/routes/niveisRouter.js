//Controller dos Niveis
const niveisController = require('../controllers/niveisController')

// router
const router2 = require('express').Router()

// Niveis router GET,POST,PUT,DELETE
router2.post('/addNiveis',  niveisController.addNivel)

router2.get('/allNiveis', niveisController.getAllNiveis)

router2.put('/:idniveis', niveisController.updateNivel)

router2.delete('/:idniveis', niveisController.deleteNivel)


module.exports = router2
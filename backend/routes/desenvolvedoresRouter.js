// import controllers devs
const desenvolvedoresController = require('../controllers/desenvolvedoresController.js')

// router
const router = require('express').Router()

// Desenvolvedores router GET,POST,PUT,DELETE
router.post('/addDevs',  desenvolvedoresController.addDev)

router.get('/allDevs', desenvolvedoresController.getAllDevs)

router.put('/:id', desenvolvedoresController.updateDev)

router.delete('/:id', desenvolvedoresController.deleteDev)



module.exports = router
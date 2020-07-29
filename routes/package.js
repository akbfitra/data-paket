const router = require('express').Router();
const PackageController = require('../controllers/packageController')

router.post('/', PackageController.create)
router.get('/', PackageController.findAll)
router.get('/:id', PackageController.findById)
router.put('/:id', PackageController.updateAll)
router.patch('/:id', PackageController.updateOne)
router.delete('/:id', PackageController.delete)

module.exports = router
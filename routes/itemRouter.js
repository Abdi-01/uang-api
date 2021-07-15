const router = require('express').Router()
const { itemController } = require('../controllers')

router.post('/create', itemController.createItem)
router.get('/read', itemController.readItem)
router.patch('/update', itemController.updateItem)
router.delete('/delete/:id', itemController.deleteItem)

module.exports = router
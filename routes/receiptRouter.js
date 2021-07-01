const router = require('express').Router()
const { receiptController } = require('../controllers')

router.post('/create', receiptController.createReceipt)
router.get('/read', receiptController.readReceipt)

module.exports = router
const router = require('express').Router()
const { receiptController } = require('../controllers')

router.post('/create', receiptController.createReceipt)

module.exports = router
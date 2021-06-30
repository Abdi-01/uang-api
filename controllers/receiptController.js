const { db, dbQuery } = require('../config')

module.exports = {
    createReceipt: (req, res, next) => {
        req.body.forEach(async (element) => {
            try {
                let queryInsertReceipt = `INSERT INTO customer_order (iditem, amount) VALUES (${element.idItems}, ${element.amount})`
                await dbQuery(queryInsertReceipt)
                res.status(200).send({message: "Create receipt success!"})
            } catch (error) {
                next(error)
            }
        });
    }
}
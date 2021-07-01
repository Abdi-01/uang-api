const { db, dbQuery } = require('../config')

module.exports = {
    createReceipt: async (req, res, next) => {
        try {
            // console.log(req.body)
            // let queryInsertReceipt = `INSERT INTO customer_order (iditem, amount) VALUES (${req.body.idItems}, ${req.body.amount})`
            // await dbQuery(queryInsertReceipt)
            req.body.forEach(async (element) => {
                // console.log(element.idItems, element.amount)
                try {
                    let queryInsertReceipt = `INSERT INTO customer_order (iditem, amount) VALUES (${element.idItems}, ${element.amount})`
                    await dbQuery(queryInsertReceipt)
                    // res.status(200).send({message: "Create receipt success!"})
                } catch (error) {
                    next(error)
                }
            })
            // console.log("Trial")
            res.status(200).send({message: "Create receipt success!"})
        } catch (error) {
            next(error)
        }
    },

    readReceipt: async (req, res, next) => {
        try {
            let queryReadReceipt = `SELECT iditem, name, price * amount as subtotal, date FROM customer_order JOIN item ON customer_order.iditem = item.id`
            let response = await dbQuery(queryReadReceipt)
            res.status(200).send(response)
        } catch (error) {
            next(error)
        }
    }
}
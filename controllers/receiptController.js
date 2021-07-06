const { db, dbQuery } = require('../config')

module.exports = {
    createReceipt: async (req, res, next) => {
        try {
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
            // console.log(req.query)
            let queryReadReceipt = `SELECT iditem, name, title as category, price * amount as subtotal, date FROM customer_order JOIN item ON customer_order.iditem = item.id JOIN category ON category.id = item.idcategory ORDER BY date ${req.query.sort} LIMIT ${req.params.limit} OFFSET ${req.params.offset}`
            let response = await dbQuery(queryReadReceipt)
            res.status(200).send(response)
        } catch (error) {
            next(error)
        }
    }
}
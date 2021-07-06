const { db, dbQuery } = require('../config')

module.exports = {
    createItem: async(req, res, next) => {
        try {
            // console.log("Create item function", req.body)
            let queryInsertItem = `INSERT INTO item (name, idcategory, description, price, discount, imageURL) VALUES (${db.escape(req.body.name)}, ${db.escape(req.body.idcategory)}, ${db.escape(req.body.description)}, ${db.escape(req.body.price)}, ${db.escape(req.body.discount)}, ${db.escape(req.body.imageURL)})`
            await dbQuery(queryInsertItem)
            res.status(200).send({message: "Add item success!"})
        } catch (error) {
            next(error)
        }
    },

    readItem: async(req, res, next) => {
        try {
            // console.log("Read item function")
            let queryReadItem = `SELECT item.id as id, name, title, idcategory, title as category, description, price, discount, imageURL FROM item JOIN category ON item.idcategory = category.id`
            let dataItem = await dbQuery(queryReadItem)
            res.status(200).send(dataItem)
        } catch (error) {
            console.log(error)
            next(error)
        }
    },

    updateItem: async(req, res, next) => {
        try {
            // console.log("Update item function")
            let queryUpdateItem = `UPDATE item SET ? WHERE id = ${req.body.id}`
            await dbQuery(queryUpdateItem, req.body)
            res.status(200).send({message: "Update item success!"})
        } catch (error) {
            next(error)
        }
    },

    deleteItem: async(req, res, next) => {
        try {
            // console.log("Delete item function", req.params.id)
            let queryDeleteItem = `DELETE FROM item WHERE id = ${req.params.id}`
            await dbQuery(queryDeleteItem)
            res.status(200).send({message: "Delete item success!"})
        } catch (error) {
            next(error)
        }
    }
}
const express = require('express')
const PORT = process.env.PORT || 2000
const app = express()
const cors = require('cors')

const { db } = require('./config/database')
const { itemRouter } = require('./routes')

app.use(cors())
app.use(express.json())
app.use('/item', itemRouter)
app.get('/', (req, res, next) => {
    res.status(200).send('Purwa Express API')
})

db.getConnection(( error, connection ) => {
    if (error){
        return console.error('Error connecting mysql: ', error.stack)
    }
    console.log(`Connecting to MySQL Server as ID: ${connection.threadId}`)
})

// Error handling 
app.use((error, req, res, next) => {
    console.log("Error", error)
    res.status(500).send({status: "Error MySQL!", messages: error})
})

app.listen(PORT, () => console.log('WARTA API is Running :', PORT))
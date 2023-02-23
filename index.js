import express from 'express'
import bodyparser from 'body-parser'
import sequelize from './util/database'
import User from './models/user'

const app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended:false }))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    next()
})

app.get('/', (req, res, next) => {
    res.send('hello owlrd')
})

app.use('/users', require('./routes/users'))

//error handling
app.use((error, req, res, next) => {
    console.log(error)
    const status = error.statusCode || 500;
    const message = error.message
    res.status(status).json({ message: message })
})

// sync db
sequelize
    .sync()
    .then(result => {
        console.log('db connected')
        app.listen(3000)
    })
    .catch(err => console.log(err))
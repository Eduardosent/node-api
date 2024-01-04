const express = require("express");
const initDB = require('./config/db')
const app = express()
const bodyParser = require('body-parser')
const port = 80

const userRouter = require('./app/routes/user')
const itemsRouter = require('./app/routes/items')
const uploadRouter = require('./app/routes/upload')
//for parsin json
app.use(
    bodyParser.json({
        limit:'20mb'
    })
)
//for parse applicaction/x-ww-form-urlencoded
app.use(
    bodyParser.urlencoded({
        limit:'20mb',
        extended:true
    })
)

app.get("/",(req,res)=>{
    res.send({
        data:"hola mundo"
    })
})
app.use(userRouter)
app.use(itemsRouter)
app.use(uploadRouter)
app.listen(port,()=>{
    console.log('La aplicacion esta en linea !')
})

initDB()
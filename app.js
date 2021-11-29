const express           = require('express')
// const bodyParser        = require('body-parser')
const app               = express()
// const morgan            = require('morgan')
const PORT              = 3333
const routes            = express().Router

// Middleware
// app.use(morgan('tiny'))
// Parse Aplication/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({extended: false}))
// Parse aplication/json
// app.use(bodyParser.json)

app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.send("Test Express")
})

app.get('/blog', (req, res) =>{
    res.send("Blog Page")
})

app.get('/about', (req, res) =>{
    res.send("About Page")
})

app.get('/contact', (req, res) =>{
    res.send("Contact Page")
})


app.listen(PORT, ()=> console.log(`running on PORT ${PORT}`))


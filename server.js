const express = require('express')  //uses express library
const path = require('path') //connects data between directories
const bodyParser = require('body-parser')  //reads and converts data from POST requests

const indexRouter = require('./routes/index.js') //brings in content of index

const app = express() //starts server

//enables parsing of POST request body
app.use(bodyParser.urlencoded({ extended: false}))

const staticfileLocation = path.join(__dirname, 'public')//lets us use static files
app.use(express.static(staticfileLocation))

app.set('views', path.join(__dirname, 'views'))  //says where HTML (handlebars) files are
app.set('view engine', 'hbs') //use handlebars to generate views

app.use('/', indexRouter)

//starts server
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port', server.address().port)
})
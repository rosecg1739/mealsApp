// Import Dependencies

const express = require('express')
require('dotenv').config()
const path = require('path')
const middleware = require('./utils/middleware')

// Import Routes



// Create the App object + set up view engine

const app = express()

// view Engine - ejs

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


// Middleware

middleware(app)

// Routes

app.get('/', (req, res) => {
    const { username, loggedIn, userId } = req.session
   //res.send('app is connected')
   res.render('home.ejs', { username, loggedIn, userId})
})


// Server Listener

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log('Server is running on port')
})

// End of File
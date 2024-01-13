// Import Dependencies

const express = require('express')
require('dotenv').config()
const path = require('path')
const middleware = require('./utils/middleware')
const MealsRoutes = require('./controllers/mealsControllers')

// Import Routes
const UserRoutes = require('./controllers/usercontrollers')



// Create the App object + set up view engine

const app = express()

// view Engine - ejs

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');


// Middleware

middleware(app)

// Routes
// basic home route

app.get('/', (req, res) => {
    const { username, loggedIn, userId } = req.session
   //res.send('app is connected')
   res.render('home.ejs', { username, loggedIn, userId })
})

app.get('/meals', (req, res) => {
    const { username, loggedIn, userId } = req.session
    const BASE_URL = '/'; // define BASE_URL, adjust as needed
    const body = 'This is the body content'; // define body, adjust as needed
    res.render('meals.ejs', { username, loggedIn, userId, BASE_URL, body })
})

app.get('/about', (req, res) => {
    const { username, loggedIn, userId } = req.session
    res.render('about.ejs', { username, loggedIn, userId })
})

app.use('/users', UserRoutes)
app.use('/meals', MealsRoutes)



// Server Listener

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log('Server is running on port')
})

// End of File
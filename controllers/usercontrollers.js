// Import Dependencies
const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')

// Create our Router
const router = express.Router()

// Routes


// Routes and Controllers

// Get -> Signup

router.get('/signup', (req, res) => {
    const { username, loggedIn, userId } = req.session

    res.render('users/signup', { username, loggedIn, userId })
})

// Post -> Signup

router.post('/signup', async(req, res) => { 
    const { username, loggedIn, userId } = req.session
   

    const newUser =  req.body
    



    newUser.password = await bcrypt.hashSync(
        newUser.password,
         await bcrypt.genSaltSync(10)
    )
   // now can creat user

   User.create(newUser)
   .then(user => {
      res.redirect('/users/login')
   })
   .catch(error => {
         console.log('error')
            res.send('somtheing went wrong')
   })
// GET -> Login

router.get('/login', (req, res) => {
    const { username, loggedIn, userId } = req.session

    res.render('users/login', { username, loggedIn, userId })
})

// POST -> Login

router.post('/login', async (req, res) => {
    const { username, password } = req.body

    User.findOne({ username })
      .then(async (user) => {
        if (user) {
            const result = await bcrypt.compare(password, user.password)

            if (result) {
                req.session.username = username
                req.session.loggedIn = true
                req.session.userId = user.id

                res.redirect('/')
            } else {
                res.send('something went wrong')
    
            }
        } else {
            res.send('wrong password')
        }
      }) // Add closing brace here

    try {
        // code inside the catch statement
    } catch (error) {
        console.error(error);
        res.send('An error occurred: ' + error.message);
    }
})

// GET -> Logout - /user/logout

router.get('/logout', (req, res) => {
    const { username, loggedIn, userId } = req.session

    res.render('users/logout', { username, loggedIn, userId })
})

// Delete -> Logout
router.delete('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
})
})

// Export our Router

module.exports = router
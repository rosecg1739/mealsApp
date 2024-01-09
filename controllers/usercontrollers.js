// Import Dependencies
const express = require('express')
const user = require('../models/user')
const bcrypt = require('bcryptjs')
const mongoose = require('../utils/connection')

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

// GET -> Login

router.get('/login', (req, res) => {
    const { username, loggedIn, userId } = req.session

    res.render('users/login', { username, loggedIn, userId })
})

// POST -> Login

// GET -> Logout - /user/logout

router.get('/logout', (req, res) => {
    const { username, loggedIn, userId } = req.session

    res.render('users/logout', { username, loggedIn, userId })
})


// Delete -> Logout


// Export our Router

module.exports = router
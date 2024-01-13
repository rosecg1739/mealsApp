// Import Dependencies
const express = require('express')
const axios = require('axios')
const allMealsUrl = process.env.All_MEALS_API_URL
const LookupUrl = process.env.LOOKUP_SINGLE_RANDOM_MEAL_API_URL
const searchUrl = process.env.SEARCH_MEAL_BY_NAME_API_URL
// Create our Router
const router = express.Router()




// Routes and Controllers

// Get -> /places/all
// gives us all the food info
router.get('/all', (req, res) => {
    const { username, loggedIn, userId } = req.session
     
   axios.get(allMealsUrl)
   .then(apiRes => {
    console.log('this is the api response: \n', apiRes.data[0])

    res.render('meals/index', { username, loggedIn, userId, meals: apiRes.data })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/error?error=${err}')
    })

})

router.post('/meals', function(req, res) {
    // Get the form data
    const mealName = req.body.mealName;
    const mealDescription = req.body.mealDescription;

    // Save the new meal to your database

    // Redirect the user to the meals page
    res.redirect('/meals');
})

// GET add new meal
router.get('/add', (req, res) => {
    const { username, loggedIn, userId } = req.session
    res.render('meals/add', { username, loggedIn, userId })
})

// POST add new meal

router.post('/meals', function(req, res) {
    // Get the form data
    var mealName = req.body.mealName;
    var mealDescription = req.body.mealDescription;

    // Save the new meal to your database

    // Redirect the user to the meals page
    res.redirect('/meals');
})

router.get('/new', function(req, res) {
    const { username, loggedIn, userId } = req.session;
    res.render('addmeal.ejs', { username, loggedIn, userId });
});

router.post('/new', function(req, res) {
    // Get the form data
    var mealName = req.body.mealName;
    var mealDescription = req.body.mealDescription;

    // Save the new meal to your database

    // Redirect the user to the meals page
    res.redirect('/meals');
})



// GET -> /food/name/:name
// gives us the food info by name



//
module.exports = router
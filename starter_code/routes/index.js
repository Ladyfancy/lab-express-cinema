const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie")


router.get ('/', (req, res, next) => {
    res.render('index.hbs');
});

router.get('/movies', (req, res, next) => {
    Movie.find()
    .then(allTheMoviesFromTheDB => {
      res.render('movies.hbs', {allTheMoviesFromTheDB})
    })
    .catch(err=>
      console.error(err))
})


router.get('/info/:id', (req, res, next) => {
    let id =req.params.id;
    console.log ('-=-=-=-=-=-=', id)
    Movie.findById(id).then(theSingleMovie => {
        console.log("The Single Movie", theSingleMovie)
        res.rendre('movie', {movie:theSingleMovie})
    })

})
module.exports = router;

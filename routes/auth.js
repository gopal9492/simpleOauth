//Importing required modules 
const express = require('express')
const passport = require('passport')
const router = express.Router()


router.get('/google', passport.authenticate('google', { scope: ['profile','email'] }))


router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.json({message: "data added through google"})
  }
)

router.get("/facebook", passport.authenticate("facebook",{ scope: ['profile','email'] }));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: "/fail"
  }),(req, res) => {
    res.json({message: "data added through google"})
  }
);
  
 
  module.exports = router
const express = require('express');
const passport = require('passport');
const router = express.Router();
const authController = require('../controllers/auth');

router.use(function (req, res, next) {
  next();
});

/**
 * Get endpoint to see if user is logged in
 */
router.get('/is-user-logged-in', authController.isUserLoggedIn);

/**
 * Get endpoint to see if user is logged in
 */
router.get('/logout', authController.logOut);

/**
 * POST Endpoint to process the local login request
 */
router.post('/local', authController.localLogin);

// Facebook Authentication Routes
router.get(
  '/facebook/buyer',
  passport.authenticate('facebook', {
    state: 'buyer',
  })
);
router.get(
  '/facebook/agent',
  passport.authenticate('facebook', {
    state: 'agent',
  })
);
router.get(
  '/facebook/seller',
  passport.authenticate('facebook', {
    state: 'owner',
  })
);

router.get('/facebook/callback', authController.facebookLogin);

// Google Authentication Routes
router.get(
  '/google/buyer',
  passport.authenticate('google', {
    state: 'buyer',
  })
);
router.get(
  '/google/agent',
  passport.authenticate('google', {
    state: 'agent',
  })
);
router.get(
  '/google/seller',
  passport.authenticate('google', {
    state: 'owner',
  })
);

router.get('/google/callback', authController.googleLogin);

module.exports = router;

const express = require('express');

const profilesControllers = require('../controllers/profile-controllers');

const router = express.Router();

router.get('/profile/:uid', profilesControllers.getProfileById);

module.exports = router;

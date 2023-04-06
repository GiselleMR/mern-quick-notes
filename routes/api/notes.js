const express = require('express');
const router = express.Router();
// const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.post('/', function(req, res) {
    console.log(req.body)
    res.json(req.body)
});

module.exports = router 
const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController.js')

router.get("/users", usersController.grabAllUsernames)

router.get("/:name/:password", usersController.loginAuthentication)

router.post('/', usersController.addUserInfo)

module.exports = router
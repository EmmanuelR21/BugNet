const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController.js')

router.get("/heroku addons:create heroku-postgresql:hobby-dev", usersController.grabAllUsernames)

router.get("/:name/:password", usersController.loginAuthentication)

router.post('/', usersController.addUserInfo)
router.post('/new_user', usersController.addNewUser)
router.post('/project/', usersController.addProjectToUser)

module.exports = router
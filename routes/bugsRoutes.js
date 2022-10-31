const express = require('express')
const router = express.Router()
const bugController = require('../controllers/bugsController.js')

router.get('/:projectName', bugController.grabBugs)

router.get('/user/:id', bugController.grabBugsOfUser)

router.post('/:projectName', bugController.postBug)

router.patch('/descriptionAndCode', bugController.updateCodeAndDescription)

router.patch('/feedback/:id', bugController.updateFeedback)

router.patch('/status/:id', bugController.updateBugStatus)

module.exports = router
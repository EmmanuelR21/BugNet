const express = require('express')
const router = express.Router()
const bugController = require('../controllers/bugsController.js')

router.get('/:projectName', bugController.grabBugs)

router.get('/:id', bugController.grabBugsOfUser)

router.post('/', bugController.postBug)

router.patch('/feedback', bugController.updateFeedback)


module.exports = router
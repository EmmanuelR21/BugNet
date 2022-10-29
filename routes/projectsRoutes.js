const express = require('express')
const router = express.Router()
const projectsController = require('../controllers/projectsController.js')
const bugController = require('../controllers/bugsController.js')

router.get('/:user_id', projectsController.grabAllProjects)

router.get('/bug/:name', bugController.grabBugInfo)

router.post('/', projectsController.postProject)

module.exports = router
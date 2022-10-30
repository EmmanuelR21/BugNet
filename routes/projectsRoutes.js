const express = require('express')
const router = express.Router()
const projectsController = require('../controllers/projectsController.js')
const bugController = require('../controllers/bugsController.js')

router.get('/:user_id', projectsController.grabAllUserProjects)

router.get('/bug/:name', bugController.grabBugInfo)
router.get('/', projectsController.grabAllProjectsName)
router.post('/', projectsController.postProject)

module.exports = router
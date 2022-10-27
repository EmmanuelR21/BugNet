//Requires
const express = require('express');
const cors = require('cors')
const projectsController = require('./controllers/projectsController.js')
const bugController = require('./controllers/bugsController.js')

//Server 
const app = express();
const PORT = process.env.PORT || 5432; // Or whichever port you choose for your local server

//Middle Ware
app.use(cors())
app.use(express.json())

//Server Paths
app.get('/projects/:user_id', projectsController.grabAllProjects)
app.get('/projects/bug/:name', bugController.grabBugInfo)
app.get('/bugs/:projectName', bugController.grabBugs)

//Listening
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
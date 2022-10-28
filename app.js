//Requires
const express = require('express');
const cors = require('cors')
const projectsController = require('./controllers/projectsController.js')
const bugController = require('./controllers/bugsController.js')
const usersController = require('./controllers/usersController.js')

//Server 
const app = express();
const pool = require('./db.js');
const User = require('./models/usersModel.js');
const PORT = process.env.PORT || 5432; // Or whichever port you choose for your local server

//Middle Ware
app.use(cors())
app.use(express.json())


//Server Paths
app.get('/projects/:user_id', projectsController.grabAllProjects)

app.get('/projects/bug/:name', bugController.grabBugInfo)

app.post('/bugs', bugController.postBug)

app.post('/project', projectsController.postProject)

app.patch('/bugs/feedback', bugController.updateFeedback)

app.get('/bugs/:projectName', bugController.grabBugs)

//user data
app.get("/users-names", usersController.grabAllUsernames)

//check id user exist
app.get("/users-names/:name/:password", usersController.loginAuthentication)

//Listening
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
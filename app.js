const express = require('express');
const cors = require('cors')
const projectsController = require('./controllers/projectsController.js')
const bugController = require('./controllers/bugsController.js')
const app = express();
const PORT = process.env.PORT || 5432; // Or whichever port you choose for your local server

//Middle Ware
app.use(cors())
app.use(express.json())

console.log(cors())
console.log(bugController)
console.log(projectsController)

app.get('/projects/:user_id', projectsController.grabAllProjects)

app.get('/projects/bug/:name', bugController.grabBugInfo)

app.post('/bugs', bugController.postBug)

app.post('/project', projectsController.postProject)

app.get('/bugs/:projectName', bugController.grabBugs)


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
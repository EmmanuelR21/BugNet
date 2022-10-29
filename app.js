//Requires
const express = require('express');
const cors = require('cors')
const projectsRouter = require('./routes/projectsRoutes.js')
const bugController = require('./controllers/bugsController.js')
const usersController = require('./controllers/usersController.js')

//Server 
const app = express();
const PORT = process.env.PORT || 5432; // Or whichever port you choose for your local server

//Middle Ware
app.use(cors())
app.use(express.json())

app.use('/projects', projectsRouter)


//Server Paths

app.get('/bugs/:projectName', bugController.grabBugs)

app.post('/bugs', bugController.postBug)


app.patch('/bugs/feedback', bugController.updateFeedback)

//user data
app.get("/users-names", usersController.grabAllUsernames)

//check id user exist
app.get("/users-names/:name/:password", usersController.loginAuthentication)

app.post('/users-names', usersController.addUserInfo)

//Listening
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
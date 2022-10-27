const express = require('express');
const cors = require('cors')
const projectsController = require('./controllers/projectsController.js')
const app = express();
const PORT = process.env.PORT || 5432; // Or whichever port you choose for your local server

//Middle Ware
app.use(cors())
app.use(express.json())

app.get('/projects/:user_id', projectsController.grabAllProjects)

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
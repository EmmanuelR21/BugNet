const express = require('express');
const projectsController = require('./controllers/projectsController.js')
const app = express();
const PORT = process.env.PORT || 5432; // Or whichever port you choose for your local server

app.get('/project/:user_id', projectsController.grabAllProjects)

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
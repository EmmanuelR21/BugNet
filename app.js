//Requires
const express = require('express');
const cors = require('cors')
const projectsRouter = require('./routes/projectsRoutes.js')
const bugsRouter = require('./routes/bugsRoutes.js')
const usersRouter = require('./routes/usersRoutes.js')

//Server 
const app = express();
const PORT = process.env.PORT || 5432; // Or whichever port you choose for your local server

//Middle Ware
app.use(cors())
app.use(express.json())

//Server Routes
app.use('/projects', projectsRouter)
app.use('/bugs', bugsRouter)
app.use('/users', usersRouter)

//Listening
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
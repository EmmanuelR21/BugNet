//Requires
const express = require('express');
const cors = require('cors')
const projectsController = require('./controllers/projectsController.js')
const bugController = require('./controllers/bugsController.js')

//Server 
const app = express();
const pool = require('./db.js')
const PORT = process.env.PORT || 5432; // Or whichever port you choose for your local server

//Middle Ware
app.use(cors())
app.use(express.json())


//Server Paths
app.get('/projects/:user_id', projectsController.grabAllProjects)

app.get('/projects/bug/:name', bugController.grabBugInfo)

app.get('/bugs/:projectName', bugController.grabBugs)

app.post('/bugs', bugController.postBug)

app.post('/project', projectsController.postProject)

app.patch('/bugs/feedback', bugController.updateFeedback)

//user data
app.get("/users-names", async (req, rep) => {
    let data = await pool.query("SELECT username FROM users")
    rep.send(data.rows)
})

//check id user exist
app.get("/users-names/:name/:password", async (req, rep) => {
    let data = await pool.query("SELECT * FROM users WHERE username = $1", [req.params.name])
    if (data.rows[0]) {
        let password = await pool.query("SELECT password FROM users WHERE username = $1", [req.params.name])
        if (password.rows[0].password === req.params.password) {
            rep.send({ alert: "loged in",data: data.rows[0] })
        } else {
            rep.send({ alert:'invalid log in'})
        }
    } else { 
        rep.send({ alert: "invalid log in"})
    }
})


app.post("/issues", async (req, rep) => {
    let maxId = await pool.query("SELECT MAX(id) FROM issues")
    console.log(maxId.rows[0].max + 1)
    await pool.query("INSERT INTO issues (id,description,code,status,project_id) VALUES ($1,$2,$3,$4,$5)", [maxId.rows[0].max + 1, req.body.description, req.body.code, req.body.status, req.body.project_id])
    let data = await pool.query("SELECT * FROM  issues WHERE id = $1", [maxId.rows[0].max + 1])
    rep.send(data.rows)
})

//Listening
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
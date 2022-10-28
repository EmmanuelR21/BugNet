const express = require('express');
const projectsController = require('./controllers/projectsController.js')
const app = express();
const pool = require('./db.js')
let cors = require('cors');
const PORT = process.env.PORT || 5432; // Or whichever port you choose for your local server

app.use(express.json());
app.use(cors());

app.get('/project/:user_id', projectsController.grabAllProjects)

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
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
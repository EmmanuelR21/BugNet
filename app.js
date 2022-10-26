const express = require('express');
const app = express();
const pool = require('./db.js')
let cors = require('cors');
const PORT = process.env.PORT || 5432; // Or whichever port you choose for your local server

app.use(express.json());
app.use(cors());

app.get("/tasks", async (req, rep) => {
    console.log(req.body)
    // await pool.query("INSERT INTO issues (id,description,code,status,project_id) VALUES ($1,$2)", [newID, request.body.task]) 
    rep.send('hi')
})

app.post("/users", async (req, rep) => { 
    console.log(req.body)
    await pool.query("INSERT INTO users (id,username,password) VALUES ($1,$2,$3)", [newID, request.body.task]) 
    rep.send({"no":"no"})
})
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
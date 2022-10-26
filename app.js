const express = require('express');
const app = express();
const PORT = process.env.PORT || 5432; // Or whichever port you choose for your local server

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
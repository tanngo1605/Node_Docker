const express = require('express');
const app = express();
const PORT = process.env.PORT || 8999;


app.get("/", (req, res) => {
    res.status(200).json({
        message: "server running"
    })
})

app.get("/test", (req, res) => {
    res.status(200).json({
        message: "server running"
    })
})

app.get("/test3", (req, res) => {
    res.status(200).json({
        message: "server running"
    })
})

app.listen(PORT, () => {
    console.info("server running on port: " + PORT)
})
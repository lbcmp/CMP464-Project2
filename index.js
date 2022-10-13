const express = require("express")
const app = express()
const port = 8080
const path = require("path")
const bodyParser = require("body-parser")

app.use(bodyParser.json())

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/html", "index.html"))
})

app.get("/leah", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/html", "leah.html"))
})

app.post("/comment", (req, res) => {
    res.send(`${req.body.name}, ${req.body.date} - ${req.body.comment}`)
})

/*
    Example JSON object:
    {
        "name":"John Doe",
        "date":"10/13/2022",
        "comment":"Great job! Love this page"
    }
*/

app.listen(port, () => {
    console.log("App listening on Port " + port);
})
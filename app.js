const express = require("express")
const path = require("path")

const app = express()
const port = process.env.PORT || 3000

const clientDirectory = path.join(__dirname, '/documentation')

app.use(express.static(clientDirectory));

app.get('/', (req, res)=>{
    res.sendFile(path.join(clientDirectory, '/index.html'))
})

app.listen(port, ()=>{
    console.log("Started on port " + port)
})
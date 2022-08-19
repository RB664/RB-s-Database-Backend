require('dotenv').config()
const express = require("express")
const cors = require("cors")
const app = express()

app.set("port",process.env.PORT)
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT

// const animeRoute = ("./router/animeRouter.js")
app.get("/",(req,res) => {
    res.json({
        msg:"Kenny!!!!"
    })
})

// app.use("/anime",animeRoute)

app.listen(PORT,(err) => {
    if(err) throw err
    console.log(`Sever is running on http://localhost:${PORT}`)
})
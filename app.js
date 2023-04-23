require('dotenv').config()
const express = require("express")
const app = express()
const port = Number(process.env.PORT) || 5000
const {jokeRouter} = require("./src/routes/jokeRoute")

// app.use(express.json())

app.use("/jokes/api/v1", jokeRouter)

app.listen(port, () => {
  console.log(`To the glory of God server is listening on PORT ${port} `)
})  

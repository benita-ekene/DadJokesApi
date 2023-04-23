const express = require("express")
const router = express.Router()
const JokeController = require("../controllers/jokeControllers")


router.get("/dad-joke", JokeController.createJokeController)

module.exports = {
  jokeRouter: router
}
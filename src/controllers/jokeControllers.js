const express = require("express")
const axios = require("axios")
const {Validator} = require("../validator/keyValidator")

class JokeController {
  static createJokeController(req, res) {
    axios.get("https://dad-jokes.p.rapidapi.com/random/joke", Validator)
      .then(response => {
        const joke = response.data.body[0]
        res.json({
          JokeSetup: joke.setup,
          MainJoke: joke.punchline
        })
      }) 
      .catch(error => {
        res.status(500).json("Error fetching dad's joke");
      });
  };
}

module.exports = JokeController
const express = require("express")
const app = express()
const axios = require("axios")

class JokeController {
  static createJokeController(req, res) {
    axios.get("https://dad-jokes.p.rapidapi.com/random/joke", {
        headers: {"X-RapidAPI-Key": "ac36004e64msh2f03d5e28e75ab5p1a32bfjsn9dc87404b637"}
      })
      .then(response => {
        const joke = response.data.body[0];
        const formattedJoke = {
          setup: joke.setup,
          punchline: joke.punchline
        };
        res.json(formattedJoke);
      })
      .catch(error => {
        res.status(500).json("Error fetching dad's joke");
      });
  };
}

module.exports = JokeController
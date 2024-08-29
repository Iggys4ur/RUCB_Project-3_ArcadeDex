const { model, Schema } = require('mongoose')

const gameSchema = new Schema({
  name: {
    type: String
  },
  platform: {
    type: String
  },
  genre: {
    type: String
  },
  releaseDate: {
    type: String
  }
})

const Game = model('Game', gameSchema)

module.exports = Game;

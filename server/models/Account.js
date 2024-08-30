const { model, Schema } = require('mongoose');

const accountSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  steamId: {
    type: Number,
    required: true,
    unique: true,
  },

  personaName: {
    type: String,
    required: true,
  },

  avatarLink: {
    type: String,
    required: true
  }
})

const Account = model('Account', accountSchema);

module.exports = Account;

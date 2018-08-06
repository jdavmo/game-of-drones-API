var mongoose = require('mongoose');
var GameSchema = new mongoose.Schema({
    date: Number,
    active: Boolean,
    players: Array,
    matchs: Array
});
mongoose.model('Game', GameSchema);
module.exports = mongoose.model('Game');

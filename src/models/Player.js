const mongoose = require('mongoose');


const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'please supply a name'
    },
    points: {
        type: Number,
        required: 'please supply Points'
    },    
},{
    timestamps: true
})

const Player = mongoose.model('Player', playerSchema);
module.exports = Player;
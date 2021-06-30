const Player = require('../models/Player')

exports.findPlayers = async (req,res)=>{
    try{
        const players = await Player.find()
        res.send({players: players})
    }catch(error){
        res.status(500).send(error);
    }
}

exports.createPlayer = async (req,res)=>{
    try {
        const player = new Player(req.body)
        await player.save()        
        res.send({player: player})
        
    } catch (error) {
        res.status(500).send(error);
    }
}
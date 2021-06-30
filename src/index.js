const express = require('express')
const app = express()
const cors = require('cors');

const mongoose = require('mongoose')
const playerController = require('./controllers/player')

console.log('process.env.DATABASE_URL => ', process.env.DATABASE_URL);

mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{    

    app.use(cors());
    app.use(express.json())

    app.get('/',(req,res)=>{
        res.send('test!')
    })
    app.get('/players',playerController.findPlayers)
    app.post('/players',playerController.createPlayer)

    // const PORT = process.env.PORT || 5000;
    app.listen(process.env.PORT || 5000, ()=>{
        console.log(`server started on port ${process.env.PORT}`);
    })

}).catch(error=>{
    console.log('database connection failed -> ', error);
})
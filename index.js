const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const uri = 'mongodb+srv://rlp2153:bBp3nDSFhjEOStms@fullstackproject.bmrd402.mongodb.net/?retryWrites=true&w=majority&appName=FullStackProject'

async function connect(){
    try{
        await(mongoose.connect(uri));
        console.log("Connected");
    } catch(error){
        console.error(error);
    }
}

connect();

app.use(cors());
app.use(express.json());

const entryRoutes = require('./routes/entry-route.js');
app.use('/profile', entryRoutes);

app.get('/',(req,res)=>{
    res.json({message: 'API WORKS'});
});

app.listen(5001, ()=>{
    console.log('Sever is running on port 5001');
});
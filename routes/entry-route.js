const express = require('express');
const mongoose = require('mongoose');
const Park = require('../models/park');

const router = express.Router();

//GET
router.get('/', (req,res) => {
    Park.find()
        .exec()
        .then((results) => {
        console.log(results);
        res.status(200).json(results);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({error:err});
    });
});

//POST
router.post('/',(req,res)=>{
    const park = new Park({
        _id: new mongoose.Types.ObjectId(),
        parkName: req.body.parkName,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        description: req.body.description,
    });
    park.save().then((result) =>{
        console.log(result)
        res.status(201).json({
            message: 'Park created',
            createEntry: result,
        });
    }).catch((err) => {
        console.log(err);
        res.status(500).json({error:err});
    }); 
});

//PATCH
router.patch('/:id',(req,res) => {
    const id = req.params.id;
    Park.updateOne({_id:id}, {$set: req.body}).exec().then(result => {
        console.log(result);
        res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).json({error:err});
    });
});

//DELETE
router.delete('/:id', (req,res)=>{
    const id = req.params.id;
    Park.deleteOne({_id: id}).exec().then(result =>{
        console.log(result);
        res.status(200).json(result);
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({ error: err});
    });
});

module.exports = router;
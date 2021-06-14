const Thing = require('../models/thing.model');


module.exports.findAllThings = (req, res)=>{
    Thing.find()
        .then(allthings =>{
            res.json({results: allthings})
        })
        .catch(err=>{
            res.json(err)
        })
}

module.exports.createThing = (req, res)=>{

    console.log("SHOW MY REQUEST.BODY HERE--->", req.body)
    Thing.create(req.body)
        .then(newThing=>{
            res.json({results: newThing})
        })
        .catch(err=>{
            console.log(err)
            res.json(err)
        })
}

module.exports.findOneThing = (req, res)=>{
    Thing.findOne({_id: req.params.id })
        .then(oneThing=>{
            res.json({results: oneThing})
        })
        .catch(err=>res.json(err))
}

module.exports.updateOneThing = (req, res)=>{
    Thing.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        { new: true, runValidators: true }
        )
        .then(updatedThing =>{
            res.json({results: updatedThing})
        })
        .catch(err=> res.json(err))
}

module.exports.deleteThing = (req,res)=>{
    Thing.deleteOne({_id: req.params.id})
        .then(deletedThing =>{
            res.json({results: deletedThing})
        })
        .catch(err=> res.json(err))
}
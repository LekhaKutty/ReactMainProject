const express = require('express');

const router = express.Router();

const BadmintonData = require('../models/registerdata');

const auth = (req,res,next) => {
    if(req.session.userId){
        next();
    }
    else{
        res.reddirect("/");
    }
}

router.get('/', (req,res)=>{
    console.log("from players " + req.session.userId);
    
    const { userId, email } = req.session;
    
    BadmintonData.find({},function(err,docs){
        if(err){
            console.log(err);
            return res.status(500).send();
        }
        else{
            //console.log(docs);
            res.status(200).send(docs);
            
        }
    })
});

module.exports = router;
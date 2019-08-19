const express = require('express');

const router = express.Router();

const auth = (req,res,next) => {
    if(req.session.userId){
        next();
    }
    else{
        res.reddirect("/");
    }
}

module.exports = router;,
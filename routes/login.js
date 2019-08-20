const express = require('express');

const router = express.Router();

const BadmintonData = require('../models/registerdata');

const bcrypt = require('bcrypt');

router.post('/',(req,res)=>{
    let email = req.body.email;
    let password = req.body.password;

    BadmintonData.findOne({email:email},(err,user)=>{
        if(err){
            return res.status(500).send();
        }
        if(!user){
            err = 'Incorrect email or password;'
        }
        else{
            bcrypt.compare(password, user.password).then(isMatch => {
                if(isMatch){
                    req.session.email = email;
                    req.session.userId = user._id;
                    console.log('session' + req.session.userId);
                    return res.send({'sessionId':req.session.userId,'email':req.session.email});
                }
                else{
                    return res.send('/login');
                }
            })
        }
    })
});

module.exports = router;
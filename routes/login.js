const express = require('express');

const router = express.Router();

const BadmintonData = require('../models/registerdata');

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
            user.comparePassword(password, (err, isMatch)=>{
                if(isMatch){
                    req.session.email = email;
                    req.session.userId = user._id;
                    return res.send('successfully loged in');
                }
                else{
                    return res.send('Not yet login');
                }
            })
        }
    })
});

module.exports = router;
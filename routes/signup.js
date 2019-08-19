const express = require('express');

const router = express.Router();

const {body ,validationResult } = require('express-validator');

const BadmintonData = require('../models/registerdata');

const bcrypt = require('bcrypt');

/*const mongo = require('mongodb');
const {getDburl} = require("../db.js");
const URL = getDburl();
mongo.connect(URL, { useNewUrlParser: true }, (err, db) => {
  database = db.db("BadmintonData");
});*/

router.post('/',[
  body('firstname')
      .isLength({min:2})
      .withMessage('Please Enter a Name'),
  body('email')
      .isEmail()
      .withMessage('Check Email'),
  body('password')
      .isLength({min:4})
      .withMessage('Password is weak!')
      .custom((value,{req})=>{
        if(value !== req.body.passwordRepeat){
            throw new Error('Passwords must match')
        }else{
            return value;
        }
      })
], (req,res)=>{
  
  const errors = validationResult(req);
  var err = [];
  if(errors.isEmpty()){

    BadmintonData.findOne({email: req.body.email})
    .then(user =>{
      if (!user){
         
        const newUser = new BadmintonData(req.body);
        //Hash password before saving in database
        bcrypt.genSalt(10, (err,salt) =>{
          bcrypt.hash(newUser.password, salt, (err,hash) =>{
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
            .then(user => {
              res.json({ status: user.email + ' Registered!' })
            })
            .catch(err => {
              res.send('err: ' + err)
            })
          });
        });
    }
    });
  }
  else{
      let manyerrors = errors.array();
      let i = 0;
      manyerrors.forEach(error=>{
          console.log(error.msg);
          err[i++] = error.msg;
      })
      console.log(err);
      res.json({err: err +error}) ;
  }


});

module.exports = router;
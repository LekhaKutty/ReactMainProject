const express = require('express');

const router = express.Router();

const {body ,validationResult } = require('express-validator');

const BadmintonData = require('../models/registerdata');

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
  /*body('mobilenumber')
      .isEmpty()
      .withMessage('Please add mobile number'),*/
  body('email')
      .isEmail()
      .withMessage('Check Email'),
  /*body('country')
      .isEmpty()
      .withMessage('Enter country name'),*/
  body('username')
      .isLength({min:5})
      .withMessage('Please Enter a username'),
  body('password')
      .isLength({min:4})
      .withMessage('Password is weak!')
      /*.custom((value,{req})=>{
          if(value !== req.body.passwordRepeat){
              throw new Error('Passwords must match')
          }else{
              return value;
          }
      })*/
], (req,res)=>{
  //res.send('it works');
  const errors = validationResult(req);
  var err = [];
  if(errors.isEmpty()){
      
      const newUser = new BadmintonData(req.body);
      newUser.save()
          .then(()=>{
            res.send('thank you for registration')
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
      res.send(err);
  }
});

module.exports = router;
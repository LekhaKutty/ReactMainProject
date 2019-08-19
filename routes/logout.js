const express = require('express');

const router = express.Router();

const auth = (req,res,next) => {
    if(req.session.userId){
        next();
    }
    else{
        res.redirect("/");
    }
}


router.get('/', auth, (req,res)=>{
    console.log('destroying');
    req.session.destroy(err => {
        console.log(req.session);
        if (err) return res.redirect("/");
        res.clearCookie("cookiename");
        res.redirect("/");
    })
});

module.exports = router;
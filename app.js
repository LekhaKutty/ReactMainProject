const express = require('express');
const session = require('express-session');
const bodyParser = require("body-parser"); 
const path = require("path");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);

mongoose.connect('mongodb://localhost/Badmintondata',{useNewUrlParser:true});
mongoose.Promise = global.Promise;

app.use(express.urlencoded({ extended: false }));

app.use(['/login', '/players'], session({
    name:"cookiename",
    resave:false,
    saveUninitialized:true,
    rolling:true,
    secret:"jkdasjdad$#%$saf",
    cookie:{
        secure:false,
        maxAge:100000*15,
        sameSite:true,
        httpOnly:true
    },
    store: new MongoStore({ url:'mongodb://localhost:27017/Badmintondata'})
}));


//app.use(express.session({secret: "This is a secret"}));

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
    
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, 'routes')));

app.use('/auth',require("./routes/auth.js"));
app.use('/signup',require("./routes/signup.js"));
app.use('/login',require("./routes/login.js"));
app.use('/logout',require("./routes/logout.js"));
app.use('/players',require("./routes/players.js"));

const server = app.listen(5000, () => {
    console.log(`Express is running on port ${server.address().port}`);
})
module.exports = app;
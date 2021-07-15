const express = require('express');
const mongoose=require('mongoose');
const dotenv = require('dotenv')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongodb-session')(session)
require('./config/passport')(passport)
require('./config/facebook')(passport)


var app=express();
app.use(express.json());

const PORT = process.env.PORT||5000;
dotenv.config({ path: './config/config.env' })

const url = 'mongodb+srv://gopal949222:pchumKB7GeQYckMT@cluster0.4sqcx.mongodb.net/task?retryWrites=true&w=majority';

  mongoose.connect(url, {useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex:true})
 .then((result) => console.log("db is connected"))
 .catch((err) => console.log(err));
 const store= new MongoStore({
    uri:url,
    collection:'mysession'
})

app.use(express.static('public'))
app.set('view engine','ejs');

app.use(express.urlencoded({extended:true}))
app.use(
    session({
      secret: 'secretkey',
      resave: false,
      saveUninitialized: false,
      store: store
    })
  )
  // Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use('/api/user/auth', require('./routes/auth'))
app.listen(PORT,console.log(`listening at ${PORT}`))
//requires Express library
const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const app = express()

//Set up default mongoose connection

mongoose.connect('mongodb://127.0.0.1:27017/loc8r', {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
//var db = mongoose.connection;
/* mongoose.connect('mongodb://localhost/urlShortener',{
  useNewUrlParser:true, useUnifiedTopology: true
}) */
app.set('view engine','ejs')
app.use(express.urlencoded({ extended: false }))
app.get('/',async(req,res)=> {
    res.render('index')
})

app.post('/shortUrls',async(req,res)=>{
    //wait until shortening URL is completed
   await ShortUrl.create({full:req.body.fullUrl})
   //redirect back to home page
   res.redirect('/')
})
// var http = require('http');

/* var app = http.createServer(function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ a: 1 }, null, 3));
}); */
app.listen(process.env.PORT||5000);
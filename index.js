const express = require('express');
const routes = require('./routes/api');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
 
// set up express app
const app = express();

//connect to mongodb
//mongoose.connect('mongodb://localhost/ninjago')
mongoose.connect("mongodb://localhost:27017/ninjago", { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//initialize routes
app.use(routes);

app.get('/',function(req,res){
    console.log('GET request');
    res.send({"name":"aman"});

})
//listen for requests
app.listen(4000,function(){
console.log('listening for requests');
});
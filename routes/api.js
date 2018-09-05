const express = require('express');
const router = express.Router();
const Ninja = require ('../models/ninja');

router.get('/ninjas',function(req,res){
    res.send({type: 'GET'});
});
router.post('/ninjas',function(req,res){
    //res.send({type: 'POST'});




  //  var ninja= new Ninja(req.body);
  //  ninja.save();


   // ye dono kaam ek e me kr dega
    Ninja.create(req.body);
    res.send(ninja);
});
router.put('/ninjas/:id',function(req,res){
    res.send({type: 'PUT'});
});
router.delete('/ninjas/:id',function(req,res){
    res.send({type: 'DELETE'});
});
module.exports = router;
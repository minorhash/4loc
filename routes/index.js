var express = require('express');
var router = express.Router();
// glob
var par,arr=[]

var getPar=function(req, res, next) {

par=req.params.id
next()}

var lsImg=function(req,res,next){
var ls=require("ls")
    var path="public/img/cd/png/*"

    for (var i of ls(path)){
console.log(i.name)
        arr.push(i.name)

}

next()}

var chk=function(req, res, next) {

console.log(par)
next()}

// get
var gcb= function(req, res, next) {

res.render("index", {
title: par,par:par,arr:arr

});
}

router.get('/', [getPar,lsImg,chk,gcb])
// post


module.exports = router;

const express = require('express');
const router = express.Router();
const crypto = require('crypto');
// == db =============================
const db = require('cardb');
const adb = require('usrdb');

let email="", usr="", sku=""
,skumer=[], mailusr=[], mailtmp=[], skuson=[]
,obj="", len="";
const cred = require('./js/cred');

const getEma = function(req, res, next) {
email = cred.ema(req);
mailusr=  adb.mailUsr(email)
next()}

const getUsr = function(req, res, next) {
if(mailusr){usr=mailusr.name}
else{usr=null;console.log("no usr")}
next()};


const getSku = function(req, res, next) {
sku = req.body.sku;
console.log(sku)
if (sku) {
try {skumer = db.skuMer(sku);
} catch (err) {      console.log(err);    }
} else {    console.log('no sku');  }
next()}; //getSku

// const getSon = function(req, res, next) {
//   try {    skuson = db.skuSon(sku);
// console.log(skuson)

//   } catch (err) {    console.log(err);  }
//   if (skuson.song) {
//     obj = JSON.parse(skuson.song);
//     len = Object.keys(obj).length;
//   } else {    console.log('no skuson');
//   }
//   next()};

const chk = function(req, res, next) {
  console.log(sku);
  console.log(skumer);
  next();
};
// === rend
const rcb = function(req, res) {
rob = { title: 'item', usr: usr, mer: skumer};
res.render('shop/item', rob);
}; //rcb

router.post('/shop/item:id', [getEma, getUsr, getSku, chk, rcb]);

module.exports = router;

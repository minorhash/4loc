const express = require("express");
const router = express.Router();
// == db =============================
const db = require("cardb");
const adb = require("usrdb");
const idy = require("aidy");
let taid = idy.tmpAid();
// === glob ============================
let email="", pss="", usr="";
let sku="", uni="", sum="", tsum="",stax=""
let num=""
let mer = "",  suma = [],  skua = [],boa=[];
let mailtmp=[], mailusr=[],mailadr=[]
let sess={},sob={},sar=[],sst=""
let clr="",ulang=""
const cnf= require('./son/cnf.json');

const cred = require("./js/cred");
// === get ============================

const getEma = function(req, res, next) {
email = cred.ema(req);
mailusr=  adb.mailUsr(email)
next()}

const getUsr = function(req, res, next) {
if(mailusr){usr=mailusr.name}
else{usr=null;console.log("no usr")}
next()}

const getAdr= function(req, res, next) {
mailadr=adb.mailAdr(email)
next()};

const getTmp = function(req, res, next) {

sess=req.session
if(sess){
sst=sess.sst
}else{console.log("no sess")}
ulang=sess.ulang

next()};

const putMer = function(req, res, next) {
//mer = [];
if(sku){
mer = db.skuMer(sku);
}else{console.log("no mer")}
next()};

const posTmp = function(req, res, next) {

sob={}
sess=req.session
if(req.body!=={}){
sob.sku=req.body.sku
sob.uni=req.body.uni
sob.pri=req.body.pri
sob.name=req.body.name
sar.push(sob)
}
console.log("== posTmp")
console.log(req.body)

sst=JSON.stringify(sar)
sess.sst=sst
//res.redirect("cart")
next()};

const putSum = function(req, res, next) {
if(sess){
sum=sob.pri*sob.uni
}else{console.log("no mer")}
next()};

const chkClr= function(req, res, next) {
clr=req.body.clr
    if(clr=="yes"){
req.session=null
        sob={}
        sar=[]
    }
next()};
// === chk ===============================
const chk = function(req, res, next) {
  console.log("=== cart ===================");
  console.log(sess);
  console.log(sob);
  console.log(sar);
  console.log(sst);
  console.log(ulang);
  next()};

// === get
const gcb = function(req, res) {
let obj={
sku:sku,clr:clr,ulang:ulang,
sst:sst,sum: sum,
usr: usr,email: email
}
res.render("shop/cart",obj );
};

let arr=[
getEma,getUsr, getTmp,putSum,
gcb]

router.get("/shop/cart",arr );

// === post
const pcb = function(req, res, next) {
obj={
    sku:sku,clr:clr,
    sst:sst,ulang:ulang,
sum: sum,mer: mer,usr: usr,cnf:cnf,
email: email
}
res.render("shop/cart",obj ); //rend
};

arr=[
getEma,  getUsr,putMer,posTmp,putSum,chkClr,
pcb]

router.post("/shop/cart",arr );

module.exports = router;

const express = require('express');
const router = express.Router();
var Q = require('Q');
//const ctrlUser = require('../controllers/user.controller');
var secret = 'harrypotter';
var nodemailer = require('nodemailer');
const db=require('../db/config');
var jwt = require('jsonwebtoken');
var multer = require('multer');
var fs = require('fs');
const Speakeasy = require("speakeasy");

const  multipart  =  require('connect-multiparty');
const  multipartMiddleware  =  multipart({ uploadDir:  './uploads' });
const spawn = require("child_process").spawn;

router.get('/bracscores',function(req,res){
  // console.log("hii");
function fun1(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  access_brac where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun2(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  access_sac where status!=-1 ",defered.makeNodeResolver());
  return defered.promise;
}

function fun3(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  access_uam where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
function fun4(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  access_ur where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

Q.all([fun1(),fun2(),fun3(),fun4()]).then(function(results){
  govall = results[0][0][0].score+results[1][0][0].score+results[2][0][0].score+results[3][0][0].score;
  // console.log(govall);
  all = results[0][0][0].total+results[1][0][0].total+results[2][0][0].total+results[3][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });

router.get('/sacscores',function(req,res){
  console.log("hii");
function fun1(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  access_brac where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun2(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  access_sac where status!=-1 ",defered.makeNodeResolver());
  return defered.promise;
}

function fun3(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  access_uam where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
function fun4(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  access_ur where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

Q.all([fun1(),fun2(),fun3(),fun4()]).then(function(results){
  govall = results[0][0][0].score+results[1][0][0].score+results[2][0][0].score+results[3][0][0].score;
   console.log(govall);
  all = results[0][0][0].total+results[1][0][0].total+results[2][0][0].total+results[3][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });
router.get('/uamscores',function(req,res){
  // console.log("hii");
function fun1(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  access_brac where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun2(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  access_sac where status!=-1 ",defered.makeNodeResolver());
  return defered.promise;
}

function fun3(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  access_uam where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
function fun4(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  access_ur where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

Q.all([fun1(),fun2(),fun3(),fun4()]).then(function(results){
  govall = results[0][0][0].score+results[1][0][0].score+results[2][0][0].score+results[3][0][0].score;
  // console.log(govall);
  all = results[0][0][0].total+results[1][0][0].total+results[2][0][0].total+results[3][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });

router.get('/urscores',function(req,res){
  // console.log("hii");
function fun1(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  access_brac where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun2(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  access_sac where status!=-1 ",defered.makeNodeResolver());
  return defered.promise;
}

function fun3(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  access_ur where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
function fun4(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  access_ur where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

Q.all([fun1(),fun2(),fun3(),fun4()]).then(function(results){
  govall = results[0][0][0].score+results[1][0][0].score+results[2][0][0].score+results[3][0][0].score;
  // console.log(govall);
  all = results[0][0][0].total+results[1][0][0].total+results[2][0][0].total+results[3][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });

router.get('/icscores',function(req,res){
  //console.log("hii");
function fun1(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  asset_mh where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
// console.log("hii");

function fun2(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  asset_ra where status!=-1 ",defered.makeNodeResolver());
  return defered.promise;
}

function fun3(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  asset_ic where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([fun1(),fun2(),fun3()]).then(function(results){
  govall = results[0][0][0].score+results[1][0][0].score+results[2][0][0].score;
   console.log(govall);
  all = results[0][0][0].total+results[1][0][0].total+results[2][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });
router.get('/mhscores',function(req,res){
  //console.log("hii");
function fun1(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  asset_ic where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
// console.log("hii");

function fun2(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  asset_ra where status!=-1 ",defered.makeNodeResolver());
  return defered.promise;
}

function fun3(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  asset_mh where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([fun1(),fun2(),fun3()]).then(function(results){
  govall = results[0][0][0].score+results[1][0][0].score+results[2][0][0].score;
   console.log(govall);
  all = results[0][0][0].total+results[1][0][0].total+results[2][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });
router.get('/rascores',function(req,res){
  //console.log("hii");
function fun1(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  asset_ic where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
// console.log("hii");

function fun2(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  asset_mh where status!=-1 ",defered.makeNodeResolver());
  return defered.promise;
}

function fun3(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  asset_ra where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([fun1(),fun2(),fun3()]).then(function(results){
  govall = results[0][0][0].score+results[1][0][0].score+results[2][0][0].score;
   console.log(govall);
  all = results[0][0][0].total+results[1][0][0].total+results[2][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });
router.get('/itscores',function(req,res){
  // console.log("hii");
function fun6(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  communications_it  where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun7(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  communications_nsm  where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([fun6(),fun7()]).then(function(results){
  govall = results[0][0][0].score+results[1][0][0].score;
  // console.log(govall);
  all = results[1][0][0].total+results[1][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });

router.get('/nsmscores',function(req,res){
  // console.log("hii");
function fun6(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  communications_nsm  where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun7(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  communications_it  where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([fun6(),fun7()]).then(function(results){
  govall = results[0][0][0].score+results[1][0][0].score;
  // console.log(govall);
  all = results[1][0][0].total+results[1][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });
router.get('/isrscores',function(req,res){
  // console.log("hii");
function fun6(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  compliance_isr  where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun7(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  compliance_lcr where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([fun6(),fun7()]).then(function(results){
  govall = results[0][0][0].score+results[1][0][0].score;
  // console.log(govall);
  all = results[0][0][0].total+results[1][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });
router.get('/lcrscores',function(req,res){
  // console.log("hii");
function fun6(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  compliance_isr  where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun7(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  compliance_lcr where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([fun6(),fun7()]).then(function(results){
  govall = results[0][0][0].score+results[1][0][0].score;
  // console.log(govall);
  all = results[0][0][0].total+results[1][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });
router.get('/conscores',function(req,res){
  // console.log("hii");
function fun6(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  cryptography_con   where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

Q.all([fun6()]).then(function(results){
  govall = results[0][0][0].score;
  // console.log(govall);
  all = results[0][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });
router.get('/descores',function(req,res){
  // console.log("hii");
function fun6(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  human_de  where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun7(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  human_pe where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([fun6(),fun7()]).then(function(results){
  govall = results[0][0][0].score+results[1][0][0].score;
  // console.log(govall);
  all = results[0][0][0].total+results[1][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });

router.get('/pescores',function(req,res){
  // console.log("hii");
function fun6(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  human_de  where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun7(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  human_pe where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([fun6(),fun7()]).then(function(results){
  govall = results[0][0][0].score+results[1][0][0].score;
  // console.log(govall);
  all = results[0][0][0].total+results[1][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });
router.get('/mdisscores',function(req,res){
  // console.log("hii");
function fun6(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  information_mdis   where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

Q.all([fun6()]).then(function(results){
  govall = results[0][0][0].score;
  // console.log(govall);
  all = results[0][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });
router.get('/misscores',function(req,res){
function fun7(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  information_mis where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([fun7()]).then(function(results){
  govall = results[0][0][0].score;
  // console.log(govall);
  all = results[0][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });
router.get('/iscscores',function(req,res){
  // console.log("hii");
function fun6(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  isecurity_isc  where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun7(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  isecurity_red  where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([fun6(),fun7()]).then(function(results){
  govall = results[0][0][0].score+results[1][0][0].score;
  // console.log(govall);
  all = results[0][0][0].total+results[1][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });
router.get('/redscores',function(req,res){
  // console.log("hii");
function fun6(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  isecurity_isc  where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun7(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  isecurity_red  where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([fun6(),fun7()]).then(function(results){
  govall = results[0][0][0].score+results[1][0][0].score;
  // console.log(govall);
  all = results[0][0][0].total+results[1][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });
router.get('/backupscores',function(req,res){
  // console.log("hii");
function fun1(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_backup where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun2(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_cos where status!=-1 ",defered.makeNodeResolver());
  return defered.promise;
}

function fun3(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_isac where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
function fun4(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_lm where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun5(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_opr where status!=-1 ",defered.makeNodeResolver());
  return defered.promise;
}

function fun6(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_tvm where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
function fun7(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_pm where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([fun1(),fun2(),fun3(),fun4(),fun5(),fun6(),fun7()]).then(function(results){
  govall = results[0][0][0].score+results[1][0][0].score+results[2][0][0].score+results[3][0][0].score+results[4][0][0].score+results[5][0][0].score+results[6][0][0].score;
  // console.log(govall);
  all = results[0][0][0].total+results[1][0][0].total+results[2][0][0].total+results[3][0][0].total+results[4][0][0].total+results[5][0][0].total+results[6][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });
router.get('/cosscores',function(req,res){
  // console.log("hii");
function fun1(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_backup where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun2(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_cos where status!=-1 ",defered.makeNodeResolver());
  return defered.promise;
}

function fun3(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_isac where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
function fun4(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_lm where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun5(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_opr where status!=-1 ",defered.makeNodeResolver());
  return defered.promise;
}

function fun6(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_tvm where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
function fun7(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_pm where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([fun1(),fun2(),fun3(),fun4(),fun5(),fun6(),fun7()]).then(function(results){
  govall = results[0][0][0].score+results[1][0][0].score+results[2][0][0].score+results[3][0][0].score+results[4][0][0].score+results[5][0][0].score+results[6][0][0].score;
  // console.log(govall);
  all = results[0][0][0].total+results[1][0][0].total+results[2][0][0].total+results[3][0][0].total+results[4][0][0].total+results[5][0][0].total+results[6][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });
router.get('/isacscores',function(req,res){
  // console.log("hii");
function fun1(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_backup where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun2(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_cos where status!=-1 ",defered.makeNodeResolver());
  return defered.promise;
}

function fun3(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_isac where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
function fun4(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_lm where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun5(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_opr where status!=-1 ",defered.makeNodeResolver());
  return defered.promise;
}

function fun6(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_tvm where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
function fun7(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_pm where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([fun1(),fun2(),fun3(),fun4(),fun5(),fun6(),fun7()]).then(function(results){
  govall = results[0][0][0].score+results[1][0][0].score+results[2][0][0].score+results[3][0][0].score+results[4][0][0].score+results[5][0][0].score+results[6][0][0].score;
  // console.log(govall);
  all = results[0][0][0].total+results[1][0][0].total+results[2][0][0].total+results[3][0][0].total+results[4][0][0].total+results[5][0][0].total+results[6][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });
router.get('/lmscores',function(req,res){
  // console.log("hii");
function fun1(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_backup where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun2(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_cos where status!=-1 ",defered.makeNodeResolver());
  return defered.promise;
}

function fun3(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_isac where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
function fun4(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_lm where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun5(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_opr where status!=-1 ",defered.makeNodeResolver());
  return defered.promise;
}

function fun6(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_tvm where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
function fun7(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_pm where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([fun1(),fun2(),fun3(),fun4(),fun5(),fun6(),fun7()]).then(function(results){
  govall = results[0][0][0].score+results[1][0][0].score+results[2][0][0].score+results[3][0][0].score+results[4][0][0].score+results[5][0][0].score+results[6][0][0].score;
  // console.log(govall);
  all = results[0][0][0].total+results[1][0][0].total+results[2][0][0].total+results[3][0][0].total+results[4][0][0].total+results[5][0][0].total+results[6][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });

router.get('/oprscores',function(req,res){
  // console.log("hii");
function fun1(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_backup where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun2(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_cos where status!=-1 ",defered.makeNodeResolver());
  return defered.promise;
}

function fun3(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_isac where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
function fun4(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_lm where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun5(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_opr where status!=-1 ",defered.makeNodeResolver());
  return defered.promise;
}

function fun6(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_tvm where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
function fun7(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_pm where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([fun1(),fun2(),fun3(),fun4(),fun5(),fun6(),fun7()]).then(function(results){
  govall = results[0][0][0].score+results[1][0][0].score+results[2][0][0].score+results[3][0][0].score+results[4][0][0].score+results[5][0][0].score+results[6][0][0].score;
  // console.log(govall);
  all = results[0][0][0].total+results[1][0][0].total+results[2][0][0].total+results[3][0][0].total+results[4][0][0].total+results[5][0][0].total+results[6][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });
router.get('/pmscores',function(req,res){
  // console.log("hii");
function fun1(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_backup where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun2(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_cos where status!=-1 ",defered.makeNodeResolver());
  return defered.promise;
}

function fun3(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_isac where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
function fun4(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_lm where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun5(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_opr where status!=-1 ",defered.makeNodeResolver());
  return defered.promise;
}

function fun6(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_tvm where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
function fun7(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_pm where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([fun1(),fun2(),fun3(),fun4(),fun5(),fun6(),fun7()]).then(function(results){
  govall = results[0][0][0].score+results[1][0][0].score+results[2][0][0].score+results[3][0][0].score+results[4][0][0].score+results[5][0][0].score+results[6][0][0].score;
  // console.log(govall);
  all = results[0][0][0].total+results[1][0][0].total+results[2][0][0].total+results[3][0][0].total+results[4][0][0].total+results[5][0][0].total+results[6][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });
router.get('/tvmscores',function(req,res){
  // console.log("hii");
function fun1(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_backup where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun2(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_cos where status!=-1 ",defered.makeNodeResolver());
  return defered.promise;
}

function fun3(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_isac where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
function fun4(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_lm where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun5(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_opr where status!=-1 ",defered.makeNodeResolver());
  return defered.promise;
}

function fun6(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_tvm where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
function fun7(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  operations_pm where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([fun1(),fun2(),fun3(),fun4(),fun5(),fun6(),fun7()]).then(function(results){
  govall = results[0][0][0].score+results[1][0][0].score+results[2][0][0].score+results[3][0][0].score+results[4][0][0].score+results[5][0][0].score+results[6][0][0].score;
  // console.log(govall);
  all = results[0][0][0].total+results[1][0][0].total+results[2][0][0].total+results[3][0][0].total+results[4][0][0].total+results[5][0][0].total+results[6][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });
router.get('/ioscores',function(req,res){
  // console.log("hii");
function fun6(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  organisation_io   where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun7(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  organisation_mdt  where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([fun6(),fun7()]).then(function(results){
  govall = results[0][0][0].score+results[1][0][0].score;
  // console.log(govall);
  all = results[0][0][0].total+results[1][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });

router.get('/mdtscores',function(req,res){
  // console.log("hii");
function fun6(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  organisation_io   where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun7(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  organisation_mdt  where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([fun6(),fun7()]).then(function(results){
  govall = results[0][0][0].score+results[1][0][0].score;
  // console.log(govall);
  all = results[0][0][0].total+results[1][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });
router.get('/equscores',function(req,res){
  // console.log("hii");
function fun6(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from    physical_sa  where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun7(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  physical_equ where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([fun6(),fun7()]).then(function(results){
  govall = results[0][0][0].score+results[1][0][0].score;
  // console.log(govall);
  all = results[0][0][0].total+results[1][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });
router.get('/sascores',function(req,res){
  // console.log("hii");
function fun6(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from   physical_sa   where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun7(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  physical_equ where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([fun6(),fun7()]).then(function(results){
  govall = results[0][0][0].score+results[1][0][0].score;
  // console.log(govall);
  all = results[0][0][0].total+results[1][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });
router.get('/srscores',function(req,res){
  // console.log("hii");
function fun6(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  supplier_isr  where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun7(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  supplier_sdm  where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([fun6(),fun7()]).then(function(results){
  govall = results[0][0][0].score+results[1][0][0].score;
  // console.log(govall);
  all = results[0][0][0].total+results[1][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });
router.get('/sdmscores',function(req,res){
  // console.log("hii");
function fun6(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  supplier_isr  where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun7(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  supplier_sdm  where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([fun6(),fun7()]).then(function(results){
  govall = results[0][0][0].score+results[1][0][0].score;
  // console.log(govall);
  all = results[0][0][0].total+results[1][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });
router.get('/sdspscores',function(req,res){
  // console.log("hii");
function fun6(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  system_sdsp  where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun7(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  system_sris where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun8(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  system_td where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([fun6(),fun7(),fun8()]).then(function(results){
  govall = results[0][0][0].score+results[1][0][0].score+results[2][0][0].score;
  // console.log(govall);
  all = results[0][0][0].total+results[1][0][0].total+results[2][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });
router.get('/srisscores',function(req,res){
  // console.log("hii");
function fun6(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  system_sdsp  where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun7(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  system_sris where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun8(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  system_td where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([fun6(),fun7(),fun8()]).then(function(results){
  govall = results[0][0][0].score+results[1][0][0].score+results[2][0][0].score;
  // console.log(govall);
  all = results[0][0][0].total+results[1][0][0].total+results[2][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });
router.get('/tdscores',function(req,res){
  // console.log("hii");
function fun6(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  system_sdsp  where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun7(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  system_sris where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}

function fun8(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  system_td where status!=-1",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([fun6(),fun7(),fun8()]).then(function(results){
  govall = results[0][0][0].score+results[1][0][0].score+results[2][0][0].score;
  // console.log(govall);
  all = results[0][0][0].total+results[1][0][0].total+results[2][0][0].total;
 // console.log(all);
  totalscore = Math.round((govall/all)*100);
  // console.log(totalscore);
  res.json({success:true ,data:totalscore});
}); });

module.exports = router;

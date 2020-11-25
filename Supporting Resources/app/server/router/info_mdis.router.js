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

router.get('/info_mdis_secondgraph',function(req,res){
  function mdis_1(){
    var defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  information_mdis where compliance_section = 'A.5.1.1-Policies for information security' ",defered.makeNodeResolver());
    return defered.promise;
  }
  function mdis_2(){
    var defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  information_mdis where compliance_section = 'A.5.1.2-Review of the policies for information security' ",defered.makeNodeResolver());
    return defered.promise;
  }

  Q.all([mdis_1(),mdis_2()]).then(function(results){


      res.json({success:true,mdis1:results[0][0][0].score,
        mdis2:results[1][0][0].score,
        });
   });
});
//****************THIRD GRAPH********************* *//
router.get('/info_mdis_thirdgraph',function(req,res){
  function mdis_yes(){
    var defered = Q.defer();
    db.query("select count(*) as score from  information_mdis  where status = 1  ",defered.makeNodeResolver());
    return defered.promise;
  }
  function mdis_no(){
    var defered = Q.defer();
    db.query("select count(*) as score from  information_mdis  where status = 0  ",defered.makeNodeResolver());
    return defered.promise;
  }

  Q.all([mdis_yes(),mdis_no()]).then(function(results){

    mdis_yes = (results[0][0][0].score/10);
    mdis_no = (results[1][0][0].score/10);

    res.json({success:true, mdis_yes: mdis_yes, mdis_no: mdis_no });
  });
});
//****************FIRST GRAPH********************* *//
router.get('/info_mdis_scores',function(req,res){
  // console.log("hii");
  function fun1(){
    var defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  information_mdis where status!=-1",defered.makeNodeResolver());
    return defered.promise;
  }

  Q.all([fun1()]).then(function(results){
    govall = results[0][0][0].score;
    // console.log(govall);
    all = results[0][0][0].total;
   // console.log(all);
    totalscore = Math.round((govall/all)*100);
    // console.log(totalscore);
    res.json({success:true ,data:totalscore});
  });
});
router.get('/info_mdis_firstgraph',function(req,res){
  function mdis_score(){
    var defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  information_mdis where status!=-1 ",defered.makeNodeResolver());
    return defered.promise;
  }
  function mdis_total(){
    var defered = Q.defer();
    db.query("select count(*) as total from  information_mdis ",defered.makeNodeResolver());
    return defered.promise;
  }

  Q.all([mdis_score(), mdis_total()]).then(function(results){

    de = results[0][0][0].score;

    b = results[1][0][0].total;

   v1 = Math.round((de/b)*100);


     res.json({success:true,mdis:v1});
   });

});
//****************TABLE********************* *//
router.get('/info_mdis_tab', function (req, res) {
  sql="SELECT * FROM information_mdis  ORDER BY iso_id ASC ";
  db.query(sql,(err,results)=>
  {
      if(err) throw err;
      res.json({success: true, values:results});
  })
});
//fetch uploaded files
router.post('/info_mdis_getuploaded_files', function(req,res)
{
  sql="SELECT filename FROM `information_mdis` WHERE iso_id='"+req.body.id+"'";
 console.log(sql);
  db.query(sql,(err,results)=>
  {
      if(err) throw err;
      res.json({success: true,results:results});
  })
});
//update
router.put('/info_mdis_edit', function (req, res) {
    //console.log(req.body);
    id=req.body.id;
    question=req.body.name;
    score=req.body.score;
    user=req.body.symbol;
    audit=req.body.auditor;
    csection = req.body.section;
    var scname;
    if(score=="No")
        {scname=0;}
    else if(score=="Yes")
        {scname=1;}
    else if(score=="Implementing")
        {scname=0.5;}
    else if(score=="NA")
        {scname=-1;}
    else if(score=="N/A")
        {scname=-1;}
    if(req.body.comment==undefined)
    {
        var c='';
        sql="update information_mdis set status="+scname+" where iso_id="+id+"";
        //sql1="INSERT INTO comment_history VALUES ('"+question+"','','Regulatory Compliance','Security Procedure and Policies','"+c+"','"+audit+"',CURRENT_TIMESTAMP,'"+scname+"',"+id+");"
        sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,uname,created) values("+id+",'INFO-MDIS "+id+"','"+question+"','Information Security Policies','Management direction for information security','"+scname+"','"+audit+"',NOW())";
        db.query(sql,(err,results)=>
        {
            if(err) throw err;

                db.query(sql2,(err,resul)=>
                {
                res.json({success: true});
                });

        })
    }
    else if(req.body.weight==undefined)
    {
        sql="update information_mdis  set comment='"+req.body.comment+"' where iso_id="+id+"";
        sql1="INSERT INTO comment_history VALUES ('"+question+"','','Information Security Policies','Management direction for information security','"+req.body.comment+"','"+audit+"',CURRENT_TIMESTAMP,'"+scname+"',"+id+");"
        sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,uname,created) values("+id+",'INFO-MDIS "+id+"','"+question+"','Information Security Policies','Management direction for information security','"+scname+"','"+audit+"',NOW())";
        db.query(sql,(err,results)=>
        {
            if(err) throw err;
            db.query(sql1,(err,result)=>
            {
                db.query(sql2,(err,resul)=>
                {
                res.json({success: true});
                });
            });
        })
    }
    else
    {
        sql="update information_mdis set status="+scname+",comment='"+req.body.comment+"' where iso_id="+id+"";
        sql1="INSERT INTO comment_history VALUES ('"+question+"','','Information Security Policies','Management direction for information security','"+req.body.comment+"','"+audit+"',CURRENT_TIMESTAMP,'"+scname+"',"+id+");"
        sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,uname,created) values("+id+",'INFO-MDIS "+id+"','"+question+"','Information Security Policies','Management direction for information security','"+scname+"','"+audit+"',NOW())";
        db.query(sql,(err,results)=>
        {
            if(err) throw err;
            db.query(sql1,(err,result)=>
            {
                db.query(sql2,(err,resul)=>
                {
                res.json({success: true});
                });
            });
        })
    }

});


router.get('/dovagraph_mdis', function (req, res) {
  // let d = Date.now();
  let d1 = new Date();
  var moment = require('moment');
var d2 = moment().subtract(1, 'days');
var d3 = moment().subtract(2, 'days');
var d4 = moment().subtract(3, 'days');
var d5 = moment().subtract(4, 'days');
var d6= moment().subtract(5, 'days');
var d7 = moment().subtract(6, 'days');
var d8 = moment().subtract(7, 'days');
var d9 = moment().subtract(8, 'days');
var d10 = moment().subtract(9, 'days');
var d11 = moment().subtract(10, 'days');
var d12 = moment().subtract(11, 'days');
var d13 = moment().subtract(12, 'days');
var d14 = moment().subtract(13, 'days');
var d15 = moment().subtract(14, 'days');
var d16 = moment().subtract(15, 'days');
var d17 = moment().subtract(16, 'days');
var d18 = moment().subtract(17, 'days');
var d19 = moment().subtract(18, 'days');
var d20 = moment().subtract(19, 'days');
var d21 = moment().subtract(20, 'days');
var d22 = moment().subtract(21, 'days');
var d23 = moment().subtract(22, 'days');
var d24 = moment().subtract(23, 'days');
var d25 = moment().subtract(24, 'days');
var d26 = moment().subtract(25, 'days');
var d27 = moment().subtract(26, 'days');
var d28 = moment().subtract(27, 'days');
var d29 = moment().subtract(28, 'days');
var d30 = moment().subtract(29, 'days');

    function k1(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW()) and  groupname= 'Information Security Policies' ",defered.makeNodeResolver());
      return defered.promise;
  }
  function k2(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 1 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
  }
  function k3(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 2 DAY) and  groupname= 'Information Security Policies'",defered.makeNodeResolver());
    return defered.promise;
  }
  function k4(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 3 DAY) and groupname= 'Information Security Policies' ",defered.makeNodeResolver());
    return defered.promise;
  }
  function k5(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 4 DAY) and groupname= 'Information Security Policies' ",defered.makeNodeResolver());
    return defered.promise;
  }
  function k6() {
    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 5 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
    return defered.promise;
  }
  function k7(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 6 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
    return defered.promise;
  }
  function k8(){
    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 7 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
    return defered.promise;
  }
  function k9(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 8 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
    return defered.promise;
  }
  function k10(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 9 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
    return defered.promise;
  }
  function k11(){


    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 10 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
    return defered.promise;
  }
    function k12(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 11 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function k13(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 12 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function k14(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 13 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function k15(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 14 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function k16(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 15 DAY) and groupname= 'Information Security Policies' ",defered.makeNodeResolver());
      return defered.promise;
    }
    function k17(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 16 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function k18(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 17 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;;
    }
    function k19(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 18 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function k20(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 19 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function k21(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 20 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function k22(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 21 DAY) and groupname= 'Information Security Policies' ",defered.makeNodeResolver());
      return defered.promise;
    }
    function k23(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 22 DAY)  and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function k24(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 23 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function k25(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 24 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function k26(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 25 DAY) and groupname= 'Information Security Policies' ",defered.makeNodeResolver());
      return defered.promise;
    }
    function k27(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 26 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function k28(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 27 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function k29(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 28 DAY)  and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function k30(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 29 DAY) and  groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function k31(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count FROM score_history WHERE groupname= 'Information Security Policies' AND MONTH(created) = MONTH(CURRENT_DATE()) AND YEAR(created) = YEAR(CURRENT_DATE())",defered.makeNodeResolver());
      return defered.promise;
    }
    function k32(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count FROM score_history WHERE  score = -1 and groupname= 'Information Security Policies' AND MONTH(created) = MONTH(CURRENT_DATE()) AND YEAR(created) = YEAR(CURRENT_DATE())",defered.makeNodeResolver());
      return defered.promise;
    }
    function k33(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count FROM score_history WHERE  score = 1 and groupname= 'Information Security Policies' AND MONTH(created) = MONTH(CURRENT_DATE()) AND YEAR(created) = YEAR(CURRENT_DATE())",defered.makeNodeResolver());
      return defered.promise;
    }
    function k34(){
      var defered = Q.defer();
      db.query("SELECT sum(score)+10 as count, MONTH(created) FROM score_history WHERE groupname= 'Information Security Policies' AND MONTH(created) = MONTH(CURRENT_DATE())-1 AND YEAR(created) = YEAR(CURRENT_DATE()) ",defered.makeNodeResolver());
      return defered.promise;
    }
    function y1(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW()) and  groupname= 'Information Security Policies' ",defered.makeNodeResolver());
      return defered.promise;
  }
  function y2(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 1 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
  }
  function y3(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 2 DAY) and  groupname= 'Information Security Policies'",defered.makeNodeResolver());
    return defered.promise;
  }
  function y4(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE  score = 1 and DATE(created) = DATE(NOW() - INTERVAL 3 DAY) and groupname= 'Information Security Policies' ",defered.makeNodeResolver());
    return defered.promise;
  }
  function y5(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 4 DAY) and groupname= 'Information Security Policies' ",defered.makeNodeResolver());
    return defered.promise;
  }
  function y6() {
    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 5 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
    return defered.promise;
  }
  function y7(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and  DATE(created) = DATE(NOW() - INTERVAL 6 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
    return defered.promise;
  }
  function y8(){
    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 7 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
    return defered.promise;
  }
  function y9(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 8 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
    return defered.promise;
  }
  function y10(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and  DATE(created) = DATE(NOW() - INTERVAL 9 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
    return defered.promise;
  }
  function y11(){


    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 10 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
    return defered.promise;
  }
    function y12(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 11 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function y13(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 12 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function y14(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 13 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function y15(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and  DATE(created) = DATE(NOW() - INTERVAL 14 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function y16(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and  DATE(created) = DATE(NOW() - INTERVAL 15 DAY) and groupname= 'Information Security Policies' ",defered.makeNodeResolver());
      return defered.promise;
    }
    function y17(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 16 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function y18(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 17 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;;
    }
    function y19(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 18 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function y20(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 19 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function y21(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 20 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function y22(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 21 DAY) and groupname= 'Information Security Policies' ",defered.makeNodeResolver());
      return defered.promise;
    }
    function y23(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 22 DAY)  and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function y24(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 23 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function y25(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 24 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function y26(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and  DATE(created) = DATE(NOW() - INTERVAL 25 DAY) and groupname= 'Information Security Policies' ",defered.makeNodeResolver());
      return defered.promise;
    }
    function y27(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 26 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function y28(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 27 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function y29(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 28 DAY)  and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function y30(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count FROM score_history WHERE  score = -1 and DATE(created) = DATE(NOW() - INTERVAL 29 DAY) and  groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function n1(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW()) and  groupname= 'Information Security Policies' ",defered.makeNodeResolver());
      return defered.promise;
  }
  function n2(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 1 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
  }
  function n3(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 2 DAY) and  groupname= 'Information Security Policies'",defered.makeNodeResolver());
    return defered.promise;
  }
  function n4(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE  score = -1 and DATE(created) = DATE(NOW() - INTERVAL 3 DAY) and groupname= 'Information Security Policies' ",defered.makeNodeResolver());
    return defered.promise;
  }
  function n5(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 4 DAY) and groupname= 'Information Security Policies' ",defered.makeNodeResolver());
    return defered.promise;
  }
  function n6() {
    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 5 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
    return defered.promise;
  }
  function n7(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and  DATE(created) = DATE(NOW() - INTERVAL 6 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
    return defered.promise;
  }
  function n8(){
    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 7 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
    return defered.promise;
  }
  function n9(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 8 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
    return defered.promise;
  }
  function n10(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and  DATE(created) = DATE(NOW() - INTERVAL 9 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
    return defered.promise;
  }
  function n11(){


    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 10 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
    return defered.promise;
  }
    function n12(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 11 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function n13(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 12 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function n14(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 13 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function n15(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and  DATE(created) = DATE(NOW() - INTERVAL 14 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function n16(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and  DATE(created) = DATE(NOW() - INTERVAL 15 DAY) and groupname= 'Information Security Policies' ",defered.makeNodeResolver());
      return defered.promise;
    }
    function n17(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 16 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function n18(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 17 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;;
    }
    function n19(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 18 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function n20(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 19 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function n21(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 20 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function n22(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 21 DAY) and groupname= 'Information Security Policies' ",defered.makeNodeResolver());
      return defered.promise;
    }
    function n23(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 22 DAY)  and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function n24(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 23 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function n25(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 24 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function n26(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and  DATE(created) = DATE(NOW() - INTERVAL 25 DAY) and groupname= 'Information Security Policies' ",defered.makeNodeResolver());
      return defered.promise;
    }
    function n27(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 26 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function n28(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 27 DAY) and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function n29(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 28 DAY)  and groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    function n30(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count FROM score_history WHERE  score = -1 and DATE(created) = DATE(NOW() - INTERVAL 29 DAY) and  groupname= 'Information Security Policies'",defered.makeNodeResolver());
      return defered.promise;
    }
    Q.all([ k1(),k2(),k3(),k4(),k5(),k6(),k7(),k8(),k9(),k10(),k11(),k12(),k13(),k14(),k15(),k16(),k17(),k18(),k19(),k20(),k21(),k22(),
    k23(),k24(),k25(),k26(),k27(),k28(),k29(),k30(),k31(),k32(),k33(),k34(),y1(),y2(),y3(),y4(),y5(),y6(),y7(),y8(),y9(),y10(),y11(),y12(),y13(),y14(),y15(),y16(),y17(),y18(),y19(),y20(),y21(),y22(),y23(),y24(),y25(),y26(),y27(),y28(),y29(),y30(),
    n1(),n2(),n3(),n4(),n5(),n6(),n7(),n8(),n9(),n10(),n11(),n12(),n13(),n14(),n15(),n16(),n17(),n18(),n19(),n20(),n21(),n22(),n23(),n24(),n25(),n26(),n27(),n28(),n29(),n30()]).then(function(results){


        res.json({ success: true, v1:results[0][0][0].count,v2:results[1][0][0].count, v3:results[2][0][0].count,v4:results[3][0][0].count,
          v5:results[4][0][0].count,v6:results[5][0][0].count, v7:results[6][0][0].count,v8:results[7][0][0].count,
          v9:results[8][0][0].count,v10:results[9][0][0].count, v11:results[10][0][0].count,v12:results[11][0][0].count,
          v13:results[12][0][0].count,v14:results[13][0][0].count, v15:results[14][0][0].count,v16:results[15][0][0].count,
          v17:results[16][0][0].count,v18:results[17][0][0].count, v19:results[18][0][0].count,v20:results[19][0][0].count,
          v21:results[20][0][0].count,v22:results[21][0][0].count, v23:results[22][0][0].count,v24:results[23][0][0].count,
          v25:results[24][0][0].count,v26:results[25][0][0].count, v27:results[26][0][0].count,v28:results[27][0][0].count,
          v29:results[28][0][0].count,v30:results[29][0][0].count,current_total: results[30][0][0].count , current_no: results[31][0][0].count ,
           current_yes: results[32][0][0].count,previous_month: results[33][0][0].count,y1: results[34][0][0].count,y2: results[35][0][0].count,y3: results[36][0][0].count,y4: results[37][0][0].count,y5: results[38][0][0].count,y6: results[39][0][0].count,y7: results[40][0][0].count,y8: results[41][0][0].count,y9: results[42][0][0].count,y10: results[43][0][0].count,y11: results[44][0][0].count,y12: results[45][0][0].count,y13: results[46][0][0].count,y14: results[47][0][0].count,y15: results[48][0][0].count,y16: results[49][0][0].count,y17: results[50][0][0].count,y18: results[51][0][0].count,y19: results[52][0][0].count,y20: results[53][0][0].count,y21: results[54][0][0].count,y22: results[55][0][0].count,y23: results[56][0][0].count,y24: results[57][0][0].count,y25: results[58][0][0].count,y26: results[59][0][0].count,y27: results[60][0][0].count,y28: results[61][0][0].count,y29: results[62][0][0].count,y30: results[63][0][0].count,
           n1: results[64][0][0].count,n2: results[65][0][0].count,n3: results[66][0][0].count,n4: results[67][0][0].count,n5: results[68][0][0].count,n6: results[69][0][0].count,n7: results[70][0][0].count,n8: results[71][0][0].count,n9: results[72][0][0].count,n10: results[73][0][0].count,n11: results[74][0][0].count,n12: results[75][0][0].count,n13: results[76][0][0].count,n14: results[77][0][0].count,n15: results[78][0][0].count,n16: results[79][0][0].count,n17: results[80][0][0].count,n18: results[81][0][0].count,n19: results[82][0][0].count,n20: results[83][0][0].count,n21: results[84][0][0].count,n22: results[85][0][0].count,n23: results[86][0][0].count,n24: results[87][0][0].count,n25: results[88][0][0].count,n26: results[89][0][0].count,n27: results[90][0][0].count,n28: results[91][0][0].count,n29: results[92][0][0].count,n30: results[93][0][0].count,
           d1: d1,d2:d2, d3:d3,d4:d4,d5:d5,d6:d6,d7:d7,d8:d8,d9:d9,d10:d10,d12:d12,d13:d13,d14:d14,d15:d15,d16:d16,d17:d17,d18:d18,d19:d19,d20,d20,d21:d21,d22:d22,d23:d23,d24:d24,d25:d25,d26:d26,d27:d27,d28:d28,d29:d29,d30:d30

        })
    });

});
module.exports = router;

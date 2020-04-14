const express = require('express');
const router = express.Router();
var Q = require('Q');
//const ctrlUser = require('../controllers/user.controller');
var secret = 'harrypotter';
var nodemailer = require('nodemailer');
const db=require('../db/config');
var jwt = require('jsonwebtoken');

const Speakeasy = require("speakeasy");

const  multipart  =  require('connect-multiparty');
const  multipartMiddleware  =  multipart({ uploadDir:  './uploads' });

router.put('/editgoveg', function (req, res) {
  id=req.body.position;
  question=req.body.name;
  score=req.body.weight;
  user=req.body.symbol;
  audit=req.body.auditor;
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
      sql="update governance_eg set score="+scname+" where id="+id+"";
      //sql1="INSERT INTO comment_history VALUES ('"+question+"','','Regulatory Compliance','Security Procedure and Policies','"+c+"','"+audit+"',CURRENT_TIMESTAMP,'"+scname+"',"+id+");"
      sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,uname,created) values("+id+",'REG-SPP "+id+"','"+question+"','Regulatory Compliance','Security Procedure and Policies','"+scname+"','"+audit+"',NOW())";
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
      sql="update  governance_eg set comment='"+req.body.comment+"' where id="+id+"";
      sql1="INSERT INTO comment_history VALUES ('"+question+"','','Regulatory Compliance','Security Procedure and Policies','"+req.body.comment+"','"+audit+"',CURRENT_TIMESTAMP,'"+scname+"',"+id+");"
      sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,uname,created) values("+id+",'REG-SPP "+id+"','"+question+"','Regulatory Compliance','Security Procedure and Policies','"+scname+"','"+audit+"',NOW())";
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
      sql="update  governance_eg set score="+scname+",comment='"+req.body.comment+"' where id="+id+"";
      sql1="INSERT INTO comment_history VALUES ('"+question+"','','Regulatory Compliance','Security Procedure and Policies','"+req.body.comment+"','"+audit+"',CURRENT_TIMESTAMP,'"+scname+"',"+id+");"
      sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,uname,created) values("+id+",'REG-SPP "+id+"','"+question+"','Regulatory Compliance','Security Procedure and Policies','"+scname+"','"+audit+"',NOW())";
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
//console.log(sql2);


});
router.put('/hist_reg', function (req, res) {
  id=req.body.position;

  sql="SELECT COMMENT FROM `comment_history` WHERE qoid="+id+" and groupname='"+req.body.groupname+"' and secpractice='"+req.body.secpractice+"'";
 //console.log(sql);
  db.query(sql,(err,results)=>
  {
      if(err) throw err;

          res.json({success: true,values:results});

  })
 // res.json({sql:sql,id:req.body.position});
});
router.post('/upload', multipartMiddleware, (req, res) => {
  res.json({
      'message': 'File uploaded successfully'
  });
});
router.post('/upload', multipartMiddleware, (req, res) => {
  res.json({
      'message': 'File uploaded successfully'
  });
});

router.get('/reg_la_tab', function (req, res) {
  sql="SELECT * FROM governance_eg  WHERE project='vSSAMM' ORDER BY id ASC ";
  db.query(sql,(err,results)=>
  {
      if(err) throw err;
      res.json({success: true, values:results});
  })
});
module.exports = router;

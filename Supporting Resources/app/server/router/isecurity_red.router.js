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

//****************TABLE********************* *//
router.get('/isecurity_red_tab', function (req, res) {
  sql="SELECT * FROM isecurity_red  ORDER BY iso_id ASC ";
  db.query(sql,(err,results)=>
  {
      if(err) throw err;
      res.json({success: true, values:results});
  })
});
//fetch uploaded files
router.post('/isecurity_red_getuploaded_files', function(req,res)
{
  sql="SELECT filename FROM `isecurity_red` WHERE iso_id='"+req.body.id+"'";
 console.log(sql);
  db.query(sql,(err,results)=>
  {
      if(err) throw err;
      res.json({success: true,results:results});
  })
});
//update
router.put('/isecurity_red_edit', function (req, res) {
  console.log(req.body);
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
      sql="update isecurity_red set status="+scname+" where iso_id="+id+"";
      //sql1="INSERT INTO comment_history VALUES ('"+question+"','','Regulatory Compliance','Security Procedure and Policies','"+c+"','"+audit+"',CURRENT_TIMESTAMP,'"+scname+"',"+id+");"
      sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,uname,created) values("+id+",'SECURITY-RED "+id+"','"+question+"','Information Security Aspects of Business Continuity Management','Redundancies','"+scname+"','"+audit+"',NOW())";
      db.query(sql,(err,results)=>
      {
          if(err) throw err;

              db.query(sql2,(err,resul)=>
              {
              res.json({success: true});
              });

      })
  }
  else if(req.body.score==undefined)
  {
      sql="update isecurity_red set comment='"+req.body.comment+"' where iso_id="+id+"";
      sql1="INSERT INTO comment_history VALUES ('"+question+"','','Information Security Aspects of Business Continuity Management','Redundancies','"+req.body.comment+"','"+audit+"',CURRENT_TIMESTAMP,'"+scname+"',"+id+");"
      sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,uname,created) values("+id+",'SECURITY-RED "+id+"','"+question+"','Information Security Aspects of Business Continuity Management','Redundancies','"+scname+"','"+audit+"',NOW())";
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
      sql="update isecurity_red set status="+scname+",comment='"+req.body.comment+"' where iso_id="+id+"";
      sql1="INSERT INTO comment_history VALUES ('"+question+"','','Information Security Aspects of Business Continuity Management','Redundancies','"+req.body.comment+"','"+audit+"',CURRENT_TIMESTAMP,'"+scname+"',"+id+");"
      sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,uname,created) values("+id+",'SECURITY-RED "+id+"','"+question+"','Information Security Aspects of Business Continuity Management','Redundancies','"+scname+"','"+audit+"',NOW())";
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
module.exports = router;



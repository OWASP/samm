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
/************************************   Second Graph Total Score *******************************************/

/************************************ EDUCATION AND GUIDANCE ************************************************/
router.get('/isacsecondgraph',function(req,res){
  // console.log("hii");


function egfunction(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from operations_isac where status!=-1 ",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([egfunction()]).then(function(results){
  score = results[0][0][0].score;
  total = results[0][0][0].total;
egtotalscore = Math.round((score/total)*100);

  res.json({success:true ,egscore:egtotalscore});
    // console.log("hii");
});
});



/****************************************************  First Graph Values ***************************************************************/
router.get('/isacfirstvalue',function(req,res){
  // console.log("hii");
  function fun1(){
    var defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  operations_backup where status!=-1 ",defered.makeNodeResolver());
    return defered.promise;
  }

  function fun2(){
    var defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  operations_cos where status!=-1  ",defered.makeNodeResolver());
    return defered.promise;
  }

  function fun3(){
    var defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from operations_isac where status!=-1 ",defered.makeNodeResolver());
    return defered.promise;
  }
  function fun4(){
    var defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  operations_lm where status!=-1 ",defered.makeNodeResolver());
    return defered.promise;
  }

  function fun5(){
    var defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  operations_opr where status!=-1  ",defered.makeNodeResolver());
    return defered.promise;
  }

  function fun6(){
    var defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from operations_pm where status!=-1 ",defered.makeNodeResolver());
    return defered.promise;
  }

  function fun7(){
    var defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from operations_tvm where status!=-1 ",defered.makeNodeResolver());
    return defered.promise;
  }

  Q.all([fun1(),fun2(),fun3(),fun4(),fun5(),fun6(),fun7()]).then(function(results){

    strategy_and_metrices = results[0][0][0].score;
    education_and_guidance = results[1][0][0].score;
    pc = results[2][0][0].score;
    lm = results[3][0][0].score;
    opr = results[4][0][0].score;
    pm = results[5][0][0].score;
    tvm = results[6][0][0].score;
     res.json({success:true, sm:strategy_and_metrices ,eg:education_and_guidance,pc:pc,lm:lm,opr:opr,pm:pm,tvm:tvm });
   });

  });
/************************************************* Second Graph Score ****************************************************/
/*
$query_yes= mysqli_query($connection,"select count(*) as score from governance_eg where score=1  and project='$proj' ");
$query_half= mysqli_query($connection,"select count(*) as score from governance_eg where score=0.5  and project='$proj'  ");
$query_no= mysqli_query($connection,"select count(*) as score from governance_eg where score=0  and project='$proj' ");
$query_na= mysqli_query($connection,"select count(*) as score from governance_eg where score=-1  and project='$proj' ");

$yes= mysqli_fetch_object($query_yes);
$half= mysqli_fetch_object($query_half);
$no= mysqli_fetch_object($query_no);
$na= mysqli_fetch_object($query_na); */
router.get('/isacsecondvalue',function(req,res){
  // console.log("hii");
function eg_yes(){
  var defered = Q.defer();
  db.query("select count(*) as score from operations_isac where status = 1  ",defered.makeNodeResolver());
  return defered.promise;
}

function eg_half(){
  var defered = Q.defer();
  db.query("select count(*) as score from operations_isac where status = 0.5  ",defered.makeNodeResolver());
  return defered.promise;
}

function eg_no(){
  var defered = Q.defer();
  db.query("select count(*) as score from operations_isac where status = 0 ",defered.makeNodeResolver());
  return defered.promise;
}

Q.all([eg_yes(),eg_half(),eg_no()]).then(function(results){

 eg_yes1 = results[0][0][0].score;
 eg_half1 = results[1][0][0].score;;
 eg_no1 = results[2][0][0].score;
  // console.log(eg_yes1);
  //  console.log(eg_half1);
  //  console.log( eg_no1);
  res.json({success:true, yes:eg_yes1 ,half:eg_half1, no:eg_no1 });
 // res.json({success:true, eg:education_and_guidance});
 // res.json({success:true,  pc:policy_and_compliance});
});
});

/***************************************************** Chart Three *******************************************************/
/**************************************************** SECURITY READINESS FACTOR ******************************************/

     router.get('/isacthirdvalue',function(req,res){
      // console.log("hii");
      function rf_yes(){
        var defered = Q.defer();
        db.query("select count(*) as score from operations_isac where status=1  ",defered.makeNodeResolver());
        return defered.promise;
      }
      function rf_no(){
        var defered = Q.defer();
        db.query("select count(*) as score from operations_isac where status=0  ",defered.makeNodeResolver());
        return defered.promise;
      }

      Q.all([rf_yes(),rf_no()]).then(function(results){

        rf_yes = results[0][0][0].score;
        rf_no = results[1][0][0].score;
        // console.log(rf_yes);
        //  console.log( rf_no);
        res.json({success:true, rfyes:rf_yes, rfno: rf_no });
      });
      });

/**************************************************** Edit Options In Table *************************************************/
/**********************************************TABLE GOV ***************************************/
router.get('/isacalltable',function(req,res){
  function vsamm(){
    var defered = Q.defer();
    db.query("SELECT * FROM operations_isac ORDER BY iso_id ASC",defered.makeNodeResolver());
    return defered.promise;
  }
  Q.all([vsamm()]).then(function(results){
    all = results[0][0];
    res.json({success:true, "all": all});
  });
});
/***********************************************  VSSAMM Table Data Updation   **********************************/

router.put('/isaceditgoveg', function (req, res) {
  id=req.body.is;
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
      sql="update operations_isac set status="+scname+" where iso_id="+id+"";
      //sql1="INSERT INTO comment_history VALUES ('"+question+"','','Regulatory Compliance','Security Procedure and Policies','"+c+"','"+audit+"',CURRENT_TIMESTAMP,'"+scname+"',"+id+");"
      sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,uname,created) values("+id+",'OPE-ISAC "+id+"','"+question+"','Operational Procedures and responsibilities','Information systems audit considerations','"+scname+"','"+audit+"',NOW())";
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
      sql="update operations_isac set comment='"+req.body.comment+"' where iso_id="+id+"";
      sql1="INSERT INTO comment_history VALUES ('"+question+"','','Operational Procedures and responsibilities','Information systems audit considerations','"+req.body.comment+"','"+audit+"',CURRENT_TIMESTAMP,'"+scname+"',"+id+");"
      sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,uname,created) values("+id+",'OPE-ISAC "+id+"','"+question+"','Operational Procedures and responsibilities','Information systems audit considerations','"+scname+"','"+audit+"',NOW())";
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
      sql="update operations_isac set status="+scname+",comment='"+req.body.comment+"' where iso_id="+id+"";
      sql1="INSERT INTO comment_history VALUES ('"+question+"','','Operational Procedures and responsibilities','Information systems audit considerations','"+req.body.comment+"','"+audit+"',CURRENT_TIMESTAMP,'"+scname+"',"+id+");"
      sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,uname,created) values("+id+",'OPE-ISAC "+id+"','"+question+"','Operational Procedures and responsibilities','Information systems audit considerations','"+scname+"','"+audit+"',NOW())";
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
router.get('/isacreg_la_tab', function (req, res) {
  sql="SELECT * FROM operations_isac ORDER BY iso_id ASC ";
  db.query(sql,(err,results)=>
  {
      if(err) throw err;
      res.json({success: true, values:results});
  })
});
router.put('/isachist_reg', function (req, res) {
  id = req.body.is;

  sql="SELECT COMMENT FROM `comment_history` WHERE qoid="+id+" and groupname='"+req.body.groupname+"' and secpractice='"+req.body.secpractice+"'";
 //console.log(sql);
  db.query(sql,(err,results)=>
  {
      if(err) throw err;

          res.json({success: true,values:results});

  })
 // res.json({sql:sql,id:req.body.is});
});
router.get('/cosreg_la_tab', function (req, res) {
  sql="SELECT * FROM operations_isac   ORDER BY iso_id ASC ";
  db.query(sql,(err,results)=>
  {
      if(err) throw err;
      res.json({success: true, values:results});
  })
});
//to upload
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
var Dir='./uploads/';
var storage = multer.diskStorage({ //multers disk storage settings
  destination: function (req, file, cb) {
      cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
      fs.exists(Dir + file.originalname, function(exists,res) {
          let uploadedFileName;
          if (exists) {
           uploadedFileName = Date.now() + '.' + file.originalname;
          //cb(new Error("Error:File already exist"), false);
           // console.log("file already exist");
          } else {
              uploadedFileName = file.originalname;

          }
          cb(null, uploadedFileName);
      });
      //cb(null,file.originalname);
  }
});
/*  fs.exists(Dir + file.originalname, function(exists,res) {
          let uploadedFileName;
          if (exists) {
           uploadedFileName = Date.now() + '.' + file.originalname;
          //cb(new Error("Error:File already exist"), false);
           // console.log("file already exist");
          } else {
              uploadedFileName = file.originalname;

          }
          cb(null, uploadedFileName);
      });
*/
var upload = multer({ //multer settings
              storage: storage
}).array('file');
router.post('/upload',(req, res) => {
  upload(req,res,function(err){
     // console.log(req.file);

      if(err)
      {
           res.json({error_code:1,err_desc:err});
           return;
      }
      res.json({error_code:0,err_desc:null,message:"File uploaded successfully",success:true});
  });
});
router.post('/download',function(req,res){
  filepath=path.join(__dirname,"../uploads")+'\\'+req.body.filename;
  console.log(filepath);
  res.sendFile(filepath);
});
//getupload
router.post('/isacgetupload', function(req,res)
{
  sql="SELECT filename FROM ` operations_isac  ` WHERE iso_id='"+req.body.is+"'";
 // console.log(sql);
  db.query(sql,(err,results)=>
  {
      if(err) throw err;
      res.json({success: true,results:results});
  })
});

///uploadreg_db
router.post("/isacuploadreg_db",function(req,res){
  //console.log(req.body);
 //sql="UPDATE `api_sm` SET `upload`='upload/',`filename`='"+req.body.files+"'  WHERE id='"+req.body.is+"'";
 //console.log(sql);
  if(req.body.groupname=="Operational Procedures and responsibilities" && req.body.secpractice=="Information systems audit considerations")
  {
      //UPDATE `api_sm` SET `upload`='upload/',filename=IF(`filename`!='',concat(filename,', "+req.body.files+"'),filename ),filename=IF(`filename`='',concat(filename,'"+req.body.files+"'),filename ) WHERE id='"+req.body.is+"'
    //  sql="UPDATE `api_sm` SET `upload`='upload/',filename=IF(`filename`!='',concat(filename,', "+req.body.files+"'),filename ),filename=IF(`filename`='',concat(filename,'"+req.body.files+"'),filename ) WHERE id='"+req.body.is+"'";
      //console.log(sql);
      //console.log(sql);
      function doQuery_tab()
      {
          var defered = Q.defer();
          db.query("UPDATE ` operations_isac` SET `upload`='upload/',filename=IF(`filename`!='',concat(filename,', "+req.body.files+"'),filename ),filename=IF(`filename`='',concat(filename,'"+req.body.files+"'),filename ) WHERE iso_id='"+req.body.is+"'",defered.makeNodeResolver());
          return defered.promise;
      }
      function doQuery_upload()
      {
          var defered = Q.defer();
          db.query("INSERT INTO `uploads`(`id`, `filename`, `groupname`, `secpractice`,`qoid`) VALUES ('','"+req.body.files+"','"+req.body.groupname+"','"+req.body.secpractice+"','"+req.body.is+"')",defered.makeNodeResolver());
          return defered.promise;
      }
  }
 Q.all([ doQuery_tab(),doQuery_upload()
  ]).then(function(results)
  {

      res.json({success:true});
  });
 /*db.query(sql,(err,results)=>
  {
      if(err) throw err;
      res.json({success: true});
  })*/
});
module.exports = router;

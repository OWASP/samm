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

router.get('/sdspfourvalue',function(req,res){
  // console.log("hii");


function egfunction(){
  var defered = Q.defer();
  db.query("select sum(score) as score, count(*) as total from  score_history where groupname = 'System Acquisition,Development and Maintenance' ",defered.makeNodeResolver());
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
router.get('/sdspfirstvalue',function(req,res){
  // console.log("hii");
function asset_ic(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  system_sdsp where status!=-1 ",defered.makeNodeResolver());
  return defered.promise;
}

function asset_mh(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  system_sris where status!=-1  ",defered.makeNodeResolver());
  return defered.promise;
}

function asset_ra(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from system_td where status!=-1 ",defered.makeNodeResolver());
  return defered.promise;
}
function fun1(){
  var defered = Q.defer();
  db.query("select count(*) as total from  asset_ic ",defered.makeNodeResolver());
  return defered.promise;
}

function fun2(){
  var defered = Q.defer();
  db.query("select count(*) as total from  asset_mh  ",defered.makeNodeResolver());
  return defered.promise;
}

function fun3(){
  var defered = Q.defer();
  db.query("select count(*) as total from  asset_ra ",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([asset_ic(),asset_mh(),asset_ra(),fun1(),fun2(),fun3()]).then(function(results){

  ic = results[0][0][0].score;
  mh = results[1][0][0].score;
  ra = results[2][0][0].score;
  i = results[3][0][0].total;
 m = results[4][0][0].total;
 r = results[5][0][0].total;
 v1 = Math.round((ic/i)*100);
 v2 = Math.round((mh/m)*100);
 v3 = Math.round((ra/r)*100);
   res.json({success:true,brac:v1,sac:v2,uam:v3 });
 });

});
/************************************************* Second Graph Score ****************************************************/
router.get('/sdspsecondvalue',function(req,res){
  // console.log("hii");
function brac_1(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  system_sdsp where compliance_section = 'A.14.2.1-Secure development policy' ",defered.makeNodeResolver());
  return defered.promise;
}
function brac_2(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  system_sdsp where compliance_section = 'A.14.2.2-System change control procedures'",defered.makeNodeResolver());
  return defered.promise;
}
function sac_1(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  system_sdsp where compliance_section = 'A.14.2.3-Technical review of applications after operating platform changes'",defered.makeNodeResolver());
  return defered.promise;
}
function sac_2(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  system_sdsp where compliance_section = 'A.14.2.4-Restrictions on changes to software packages'",defered.makeNodeResolver());
  return defered.promise;
}
function sac_3(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  system_sdsp where compliance_section = 'A.14.2.5-Secure system engineering principles'",defered.makeNodeResolver());
  return defered.promise;
}
function sac_4(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  system_sdsp where compliance_section = 'A.14.2.6-Secure development environment'",defered.makeNodeResolver());
  return defered.promise;
}
function sac_5(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from  system_sdsp where compliance_section = 'A.14.2.7-Outsourced development'",defered.makeNodeResolver());
  return defered.promise;
}
function uam_1(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from system_sdsp where compliance_section = 'A.14.2.8-System security testing' ",defered.makeNodeResolver());
  return defered.promise;
}
function uam_2(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from system_sdsp where compliance_section = 'A.14.2.9-System acceptance testing' ",defered.makeNodeResolver());
  return defered.promise;
}
function uam_3(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from system_sris where compliance_section = 'A.14.1.1-Information security requirements analysis and specification' ",defered.makeNodeResolver());
  return defered.promise;
}

function uam_4(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from system_sris where compliance_section = 'A.14.1.2-Securing application services on public networks' ",defered.makeNodeResolver());
  return defered.promise;
}
function uam_5(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from system_sris where compliance_section = 'A.14.1.3-Protecting application services transactions' ",defered.makeNodeResolver());
  return defered.promise;
}
function uam_6(){
  var defered = Q.defer();
  db.query("select sum(status) as score, count(*) as total from system_td where compliance_section = 'A.14.3.1-Protection of test data' ",defered.makeNodeResolver());
  return defered.promise;
}


Q.all([brac_1(),brac_2(),sac_1(),sac_2(),sac_3(),sac_4(),sac_5(),uam_1(),uam_2(),uam_3(),uam_4(),uam_5(),uam_6()]).then(function(results){

  brac1 = results[0][0][0].score;
  brac2 = results[1][0][0].score;
  sac1 = results[2][0][0].score;
  sac2 = results[3][0][0].score;
  sac3 = results[4][0][0].score;
  sac4 = results[5][0][0].score;
  sac5 = results[6][0][0].score;
   uam1 = results[7][0][0].score;
  uam2 = results[8][0][0].score;
  uam3 = results[9][0][0].score;
  uam4 = results[10][0][0].score;
  uam5 = results[11][0][0].score;
  uam6 = results[12][0][0].score;

    res.json({success:true,brac1:brac1,brac2:brac2,sac1:sac1,sac2:sac2,sac3:sac3,sac4:sac4,sac5:sac5,uam1:uam1,uam2:uam2,uam3:uam3,uam4:uam4,uam5:uam5,uam6:uam6});
 });

});

/***************************************************** Chart Three *******************************************************/
/**************************************************** SECURITY READINESS FACTOR ******************************************/

 router.get('/sdspthirdvalue',function(req,res){
      // console.log("hii");
      function brac_yes(){
        var defered = Q.defer();
        db.query("select count(*) as score from system_sdsp where status = 1  ",defered.makeNodeResolver());
        return defered.promise;
      }
      function brac_no(){
        var defered = Q.defer();
        db.query("select count(*) as score from system_sdsp  where status = 0  ",defered.makeNodeResolver());
        return defered.promise;
      }
      function sac_yes(){
        var defered = Q.defer();
        db.query("select count(*) as score from system_sris where status = 1  ",defered.makeNodeResolver());
        return defered.promise;
      }
      function sac_no(){
        var defered = Q.defer();
        db.query("select count(*) as score from system_sris  where status = 0  ",defered.makeNodeResolver());
        return defered.promise;
      }
      function uam_yes(){
        var defered = Q.defer();
        db.query("select count(*) as score from system_td where status = 1  ",defered.makeNodeResolver());
        return defered.promise;
      }
      function uam_no(){
        var defered = Q.defer();
        db.query("select count(*) as score from system_td  where status = 0  ",defered.makeNodeResolver());
        return defered.promise;
      }

      Q.all([brac_yes(),brac_no(),sac_yes(),sac_no(),uam_yes(),uam_no()]).then(function(results){

        brac_yes = (results[0][0][0].score/10);
        brac_no = (results[1][0][0].score/10);
        sac_yes = (results[2][0][0].score/10);
        sac_no = (results[3][0][0].score/10);
        uam_yes = (results[4][0][0].score/10);
        uam_no = (results[5][0][0].score/10);
        res.json({success:true, brac_yes:brac_yes, brac_no: brac_no ,sac_yes: sac_yes,sac_no: sac_no,uam_yes:uam_yes,uam_no: uam_no});
      });
      });

/**************************************************** Edit Options In Table *************************************************/
/**********************************************TABLE GOV ***************************************/
router.get('/sdspalltable',function(req,res){
  function vsamm(){
    var defered = Q.defer();
    db.query("SELECT * FROM  system_sdsp ORDER BY iso_id ASC",defered.makeNodeResolver());
    return defered.promise;
  }
  Q.all([vsamm()]).then(function(results){
    all = results[0][0];
    res.json({success:true, "all": all});
  });
});
/***********************************************  VSSAMM Table Data Updation   **********************************/

router.put('/sdspeditgoveg', function (req, res) {
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
      sql="update system_sdsp set status="+scname+" where iso_id="+id+"";
      //sql1="INSERT INTO comment_history VALUES ('"+question+"','','Regulatory Compliance','Security Procedure and Policies','"+c+"','"+audit+"',CURRENT_TIMESTAMP,'"+scname+"',"+id+");"
      sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,uname,created) values("+id+",'SYS-SDSP "+id+"','"+question+"','System Acquisition,Development and Maintenance','Security in development and support processes','"+scname+"','"+audit+"',NOW())";
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
      sql="update system_sdsp set comment='"+req.body.comment+"' where iso_id="+id+"";
      sql1="INSERT INTO comment_history VALUES ('"+question+"','','System Acquisition,Development and Maintenance','Security in development and support processes','"+req.body.comment+"','"+audit+"',CURRENT_TIMESTAMP,'"+scname+"',"+id+");"
      sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,uname,created) values("+id+",'SYS-SDSP "+id+"','"+question+"','System Acquisition,Development and Maintenance','Security in development and support processes','"+scname+"','"+audit+"',NOW())";

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
      sql="update system_sdsp set status="+scname+",comment='"+req.body.comment+"' where iso_id="+id+"";
      sql1="INSERT INTO comment_history VALUES ('"+question+"','','System Acquisition,Development and Maintenance','Security in development and support processes','"+req.body.comment+"','"+audit+"',CURRENT_TIMESTAMP,'"+scname+"',"+id+");"
      sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,uname,created) values("+id+",'SYS-SDSP "+id+"','"+question+"','System Acquisition,Development and Maintenance','Security in development and support processes','"+scname+"','"+audit+"',NOW())";
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

router.get('/sdspreg_la_tab', function (req, res) {
  sql="SELECT * FROM system_sdsp ORDER BY iso_id ASC ";
  db.query(sql,(err,results)=>
  {
      if(err) throw err;
      res.json({success: true, values:results});
  })
});


router.put('/sdsphist_reg', function (req, res) {
  id = req.body.id;

  sql="SELECT COMMENT FROM `comment_history` WHERE qoid="+id+" and groupname='"+req.body.groupname+"' and secpractice='"+req.body.secpractice+"'";
 //console.log(sql);
  db.query(sql,(err,results)=>
  {
      if(err) throw err;

          res.json({success: true,values:results});

  })
 // res.json({sql:sql,id:req.body.id});
});
router.get('/sdspreg_la_tab', function (req, res) {
  sql="SELECT * FROM  system_sdsp   ORDER BY iso_id ASC ";
  db.query(sql,(err,results)=>
  {
      if(err) throw err;
      res.json({success: true, values:results});
  })
});
//to upload
router.use(function(req, res, next) {
  res.header("system-Control-Allow-Origin", "*");
  res.header("system-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
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
router.post('/sdspgetupload', function(req,res)
{
  sql="SELECT filename FROM ` system_sdsp ` WHERE iso_id='"+req.body.id+"'";
 // console.log(sql);
  db.query(sql,(err,results)=>
  {
      if(err) throw err;
      res.json({success: true,results:results});
  })
});

///uploadreg_db
router.post("/sdspuploadreg_db",function(req,res){
  //console.log(req.body);
 //sql="UPDATE `api_sm` SET `upload`='upload/',`filename`='"+req.body.files+"'  WHERE id='"+req.body.id+"'";
 //console.log(sql);
  if(req.body.groupname=="System Acquisition,Development and Maintenance" && req.body.secpractice=="Security in development and support processes")
  {
      //UPDATE `api_sm` SET `upload`='upload/',filename=IF(`filename`!='',concat(filename,', "+req.body.files+"'),filename ),filename=IF(`filename`='',concat(filename,'"+req.body.files+"'),filename ) WHERE id='"+req.body.id+"'
    //  sql="UPDATE `api_sm` SET `upload`='upload/',filename=IF(`filename`!='',concat(filename,', "+req.body.files+"'),filename ),filename=IF(`filename`='',concat(filename,'"+req.body.files+"'),filename ) WHERE id='"+req.body.id+"'";
      //console.log(sql);
      //console.log(sql);
      function doQuery_tab()
      {
          var defered = Q.defer();
          db.query("UPDATE ` system_sdsp` SET `upload`='upload/',filename=IF(`filename`!='',concat(filename,', "+req.body.files+"'),filename ),filename=IF(`filename`='',concat(filename,'"+req.body.files+"'),filename ) WHERE iso_id='"+req.body.id+"'",defered.makeNodeResolver());
          return defered.promise;
      }
      function doQuery_upload()
      {
          var defered = Q.defer();
          db.query("INSERT INTO `uploads`(`id`, `filename`, `groupname`, `secpractice`,`qoid`) VALUES ('','"+req.body.files+"','"+req.body.groupname+"','"+req.body.secpractice+"','"+req.body.id+"')",defered.makeNodeResolver());
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

/******************************************* SRIS  *******************************************************/

router.get('/srisalltable',function(req,res){
  function vsamm(){
    var defered = Q.defer();
    db.query("SELECT * FROM  system_sris ORDER BY iso_id ASC",defered.makeNodeResolver());
    return defered.promise;
  }
  Q.all([vsamm()]).then(function(results){
    all = results[0][0];
    res.json({success:true, "all": all});
  });
});
/***********************************************  VSSAMM Table Data Updation   **********************************/

router.put('/sriseditgoveg', function (req, res) {
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
      sql="update system_sris set status="+scname+" where iso_id="+id+"";
      //sql1="INSERT INTO comment_history VALUES ('"+question+"','','Regulatory Compliance','Security Procedure and Policies','"+c+"','"+audit+"',CURRENT_TIMESTAMP,'"+scname+"',"+id+");"
      sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,uname,created) values("+id+",'SYS-SRIS "+id+"','"+question+"','System Acquisition,Development and Maintenance','Security requirements of information systems','"+scname+"','"+audit+"',NOW())";
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
      sql="update system_sris set comment='"+req.body.comment+"' where iso_id="+id+"";
      sql1="INSERT INTO comment_history VALUES ('"+question+"','','System Acquisition,Development and Maintenance','Security requirements of information systems','"+req.body.comment+"','"+audit+"',CURRENT_TIMESTAMP,'"+scname+"',"+id+");"
      sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,uname,created) values("+id+",'SYS-SRIS "+id+"','"+question+"','System Acquisition,Development and Maintenance','Security requirements of information systems','"+scname+"','"+audit+"',NOW())";
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
      sql="update system_sris set status="+scname+",comment='"+req.body.comment+"' where iso_id="+id+"";
      sql1="INSERT INTO comment_history VALUES ('"+question+"','','System Acquisition,Development and Maintenance','Security requirements of information systems','"+req.body.comment+"','"+audit+"',CURRENT_TIMESTAMP,'"+scname+"',"+id+");"
      sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,uname,created) values("+id+",'SYS-SRIS "+id+"','"+question+"','System Acquisition,Development and Maintenance','Security requirements of information systems','"+scname+"','"+audit+"',NOW())";
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
router.get('/srisreg_la_tab', function (req, res) {
  sql="SELECT * FROM system_sris ORDER BY iso_id ASC ";
  db.query(sql,(err,results)=>
  {
      if(err) throw err;
      res.json({success: true, values:results});
  })
});


router.put('/srishist_reg', function (req, res) {
  id = req.body.id;

  sql="SELECT COMMENT FROM `comment_history` WHERE qoid="+id+" and groupname='"+req.body.groupname+"' and secpractice='"+req.body.secpractice+"'";
 //console.log(sql);
  db.query(sql,(err,results)=>
  {
      if(err) throw err;

          res.json({success: true,values:results});

  })
 // res.json({sql:sql,id:req.body.id});
});
router.get('/srisreg_la_tab', function (req, res) {
  sql="SELECT * FROM  system_sris   ORDER BY iso_id ASC ";
  db.query(sql,(err,results)=>
  {
      if(err) throw err;
      res.json({success: true, values:results});
  })
});
//to upload
router.use(function(req, res, next) {
  res.header("system-Control-Allow-Origin", "*");
  res.header("system-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
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
router.post('/srisgetupload', function(req,res)
{
  sql="SELECT filename FROM ` system_sris ` WHERE iso_id='"+req.body.id+"'";
 // console.log(sql);
  db.query(sql,(err,results)=>
  {
      if(err) throw err;
      res.json({success: true,results:results});
  })
});

///uploadreg_db
router.post("/srisuploadreg_db",function(req,res){
  //console.log(req.body);
 //sql="UPDATE `api_sm` SET `upload`='upload/',`filename`='"+req.body.files+"'  WHERE id='"+req.body.id+"'";
 //console.log(sql);
  if(req.body.groupname=="System Acquisition,Development and Maintenance" && req.body.secpractice=="Security requirements of information systems")
  {
      //UPDATE `api_sm` SET `upload`='upload/',filename=IF(`filename`!='',concat(filename,', "+req.body.files+"'),filename ),filename=IF(`filename`='',concat(filename,'"+req.body.files+"'),filename ) WHERE id='"+req.body.id+"'
    //  sql="UPDATE `api_sm` SET `upload`='upload/',filename=IF(`filename`!='',concat(filename,', "+req.body.files+"'),filename ),filename=IF(`filename`='',concat(filename,'"+req.body.files+"'),filename ) WHERE id='"+req.body.id+"'";
      //console.log(sql);
      //console.log(sql);
      function doQuery_tab()
      {
          var defered = Q.defer();
          db.query("UPDATE ` system_sris` SET `upload`='upload/',filename=IF(`filename`!='',concat(filename,', "+req.body.files+"'),filename ),filename=IF(`filename`='',concat(filename,'"+req.body.files+"'),filename ) WHERE iso_id='"+req.body.id+"'",defered.makeNodeResolver());
          return defered.promise;
      }
      function doQuery_upload()
      {
          var defered = Q.defer();
          db.query("INSERT INTO `uploads`(`id`, `filename`, `groupname`, `secpractice`,`qoid`) VALUES ('','"+req.body.files+"','"+req.body.groupname+"','"+req.body.secpractice+"','"+req.body.id+"')",defered.makeNodeResolver());
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


/********************************************* TD   **********************************************/

router.get('/tdalltable',function(req,res){
  function vsamm(){
    var defered = Q.defer();
    db.query("SELECT * FROM  system_td ORDER BY iso_id ASC",defered.makeNodeResolver());
    return defered.promise;
  }
  Q.all([vsamm()]).then(function(results){
    all = results[0][0];
    res.json({success:true, "all": all});
  });
});
/***********************************************  VSSAMM Table Data Updation   **********************************/

router.put('/tdeditgoveg', function (req, res) {
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
      sql="update system_td set status="+scname+" where iso_id="+id+"";
      //sql1="INSERT INTO comment_history VALUES ('"+question+"','','Regulatory Compliance','Security Procedure and Policies','"+c+"','"+audit+"',CURRENT_TIMESTAMP,'"+scname+"',"+id+");"
      sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,uname,created) values("+id+",'SYS-TD "+id+"','"+question+"','System Acquisition,Development and Maintenance','Test data','"+scname+"','"+audit+"',NOW())";
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
      sql="update system_td set comment='"+req.body.comment+"' where iso_id="+id+"";
      sql1="INSERT INTO comment_history VALUES ('"+question+"','','System Acquisition,Development and Maintenance','Test data','"+req.body.comment+"','"+audit+"',CURRENT_TIMESTAMP,'"+scname+"',"+id+");"
      sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,uname,created) values("+id+",'SYS-TD "+id+"','"+question+"','System Acquisition,Development and Maintenance','Test data','"+scname+"','"+audit+"',NOW())";
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
      sql="update system_td set status="+scname+",comment='"+req.body.comment+"' where iso_id="+id+"";
      sql1="INSERT INTO comment_history VALUES ('"+question+"','','System Acquisition,Development and Maintenance','Test data','"+req.body.comment+"','"+audit+"',CURRENT_TIMESTAMP,'"+scname+"',"+id+");"
      sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,uname,created) values("+id+",'SYS-TD "+id+"','"+question+"','System Acquisition,Development and Maintenance','Test data','"+scname+"','"+audit+"',NOW())";
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

router.get('/tdreg_la_tab', function (req, res) {
  sql="SELECT * FROM system_td ORDER BY iso_id ASC ";
  db.query(sql,(err,results)=>
  {
      if(err) throw err;
      res.json({success: true, values:results});
  })
});

router.put('/tdhist_reg', function (req, res) {
  id = req.body.id;

  sql="SELECT COMMENT FROM `comment_history` WHERE qoid="+id+" and groupname='"+req.body.groupname+"' and secpractice='"+req.body.secpractice+"'";
 //console.log(sql);
  db.query(sql,(err,results)=>
  {
      if(err) throw err;

          res.json({success: true,values:results});

  })
 // res.json({sql:sql,id:req.body.id});
});
router.get('/tdreg_la_tab', function (req, res) {
  sql="SELECT * FROM  system_td   ORDER BY iso_id ASC ";
  db.query(sql,(err,results)=>
  {
      if(err) throw err;
      res.json({success: true, values:results});
  })
});
//to upload
router.use(function(req, res, next) {
  res.header("system-Control-Allow-Origin", "*");
  res.header("system-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
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
router.post('/tdgetupload', function(req,res)
{
  sql="SELECT filename FROM ` system_td ` WHERE iso_id='"+req.body.id+"'";
 // console.log(sql);
  db.query(sql,(err,results)=>
  {
      if(err) throw err;
      res.json({success: true,results:results});
  })
});

///uploadreg_db
router.post("/tduploadreg_db",function(req,res){
  //console.log(req.body);
 //sql="UPDATE `api_sm` SET `upload`='upload/',`filename`='"+req.body.files+"'  WHERE id='"+req.body.id+"'";
 //console.log(sql);
  if(req.body.groupname=="System Acquisition,Development and Maintenance" && req.body.secpractice=="Test data")
  {
      //UPDATE `api_sm` SET `upload`='upload/',filename=IF(`filename`!='',concat(filename,', "+req.body.files+"'),filename ),filename=IF(`filename`='',concat(filename,'"+req.body.files+"'),filename ) WHERE id='"+req.body.id+"'
    //  sql="UPDATE `api_sm` SET `upload`='upload/',filename=IF(`filename`!='',concat(filename,', "+req.body.files+"'),filename ),filename=IF(`filename`='',concat(filename,'"+req.body.files+"'),filename ) WHERE id='"+req.body.id+"'";
      //console.log(sql);
      //console.log(sql);
      function doQuery_tab()
      {
          var defered = Q.defer();
          db.query("UPDATE ` system_td` SET `upload`='upload/',filename=IF(`filename`!='',concat(filename,', "+req.body.files+"'),filename ),filename=IF(`filename`='',concat(filename,'"+req.body.files+"'),filename ) WHERE iso_id='"+req.body.id+"'",defered.makeNodeResolver());
          return defered.promise;
      }
      function doQuery_upload()
      {
          var defered = Q.defer();
          db.query("INSERT INTO `uploads`(`id`, `filename`, `groupname`, `secpractice`,`qoid`) VALUES ('','"+req.body.files+"','"+req.body.groupname+"','"+req.body.secpractice+"','"+req.body.id+"')",defered.makeNodeResolver());
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

router.get('/dovagraph_sys', function (req, res) {
  var d = new Date();
  var curr =[];
  curr[0]= d.getDate();
  curr[1] = d.getDate()-1;
  curr[2] = d.getDate()-2;
  curr[3] = d.getDate()-3;
  curr[4] = d.getDate()-4;
  curr[5] = d.getDate()-5;
  curr[6] = d.getDate()-6;
  curr[7] = d.getDate()-7;
  curr[8] = d.getDate()-8;
  curr[9] = d.getDate()-9;
  curr[10] = d.getDate()-10;
  curr[11] = d.getDate()-11;
  curr[12] = d.getDate()-12;
  curr[13] = d.getDate()-13;
  curr[14] = d.getDate()-14;
  curr[15] = d.getDate()-15;
  curr[16] = d.getDate()-16;
  curr[17] = d.getDate()-17;
  curr[18] = d.getDate()-18;
  curr[19] = d.getDate()-19;
  curr[20] = d.getDate()-20;
  curr[21] = d.getDate()-21;
  curr[22] = d.getDate()-22;
  curr[23] = d.getDate()-23;
  curr[24] = d.getDate()-24;
  curr[25] = d.getDate()-25;
  curr[26] = d.getDate()-26;
  curr[27] = d.getDate()-27;
  curr[28] = d.getDate()-28;
  curr[29] = d.getDate()+28;
  curr[30] = d.getDate()+29;

  function k1(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW()) and  groupname= 'System Acquisition,Development and Maintenance' ",defered.makeNodeResolver());
    return defered.promise;
}
function k2(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 1 DAY) and groupname= 'System Acquisition,Development and Maintenance'",defered.makeNodeResolver());
    return defered.promise;
}
function k3(){

  var defered = Q.defer();
  db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 2 DAY) and  groupname= 'System Acquisition,Development and Maintenance'",defered.makeNodeResolver());
  return defered.promise;
}
function k4(){

  var defered = Q.defer();
  db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 3 DAY) and groupname= 'System Acquisition,Development and Maintenance' ",defered.makeNodeResolver());
  return defered.promise;
}
function k5(){

  var defered = Q.defer();
  db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 4 DAY) and groupname= 'System Acquisition,Development and Maintenance' ",defered.makeNodeResolver());
  return defered.promise;
}
function k6() {
  var defered = Q.defer();
  db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 5 DAY) and groupname= 'System Acquisition,Development and Maintenance'",defered.makeNodeResolver());
  return defered.promise;
}
function k7(){

  var defered = Q.defer();
  db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 6 DAY) and groupname= 'System Acquisition,Development and Maintenance'",defered.makeNodeResolver());
  return defered.promise;
}
function k8(){
  var defered = Q.defer();
  db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 7 DAY) and groupname= 'System Acquisition,Development and Maintenance'",defered.makeNodeResolver());
  return defered.promise;
}
function k9(){

  var defered = Q.defer();
  db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 8 DAY) and groupname= 'System Acquisition,Development and Maintenance'",defered.makeNodeResolver());
  return defered.promise;
}
function k10(){

  var defered = Q.defer();
  db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 9 DAY) and groupname= 'System Acquisition,Development and Maintenance'",defered.makeNodeResolver());
  return defered.promise;
}
function k11(){


  var defered = Q.defer();
  db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 10 DAY) and groupname= 'System Acquisition,Development and Maintenance'",defered.makeNodeResolver());
  return defered.promise;
}
  function k12(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 11 DAY) and groupname= 'System Acquisition,Development and Maintenance'",defered.makeNodeResolver());
    return defered.promise;
  }
  function k13(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 12 DAY) and groupname= 'System Acquisition,Development and Maintenance'",defered.makeNodeResolver());
    return defered.promise;
  }
  function k14(){
    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 13 DAY) and groupname= 'System Acquisition,Development and Maintenance'",defered.makeNodeResolver());
    return defered.promise;
  }
  function k15(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 14 DAY) and groupname= 'System Acquisition,Development and Maintenance'",defered.makeNodeResolver());
    return defered.promise;
  }
  function k16(){
    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 15 DAY) and groupname= 'System Acquisition,Development and Maintenance' ",defered.makeNodeResolver());
    return defered.promise;
  }
  function k17(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 16 DAY) and groupname= 'System Acquisition,Development and Maintenance'",defered.makeNodeResolver());
    return defered.promise;
  }
  function k18(){
    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 17 DAY) and groupname= 'System Acquisition,Development and Maintenance'",defered.makeNodeResolver());
    return defered.promise;;
  }
  function k19(){
    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 18 DAY) and groupname= 'System Acquisition,Development and Maintenance'",defered.makeNodeResolver());
    return defered.promise;
  }
  function k20(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 19 DAY) and groupname= 'System Acquisition,Development and Maintenance'",defered.makeNodeResolver());
    return defered.promise;
  }
  function k21(){
    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 20 DAY) and groupname= 'System Acquisition,Development and Maintenance'",defered.makeNodeResolver());
    return defered.promise;
  }
  function k22(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 21 DAY) and groupname= 'System Acquisition,Development and Maintenance' ",defered.makeNodeResolver());
    return defered.promise;
  }
  function k23(){
    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 22 DAY)  and groupname= 'System Acquisition,Development and Maintenance'",defered.makeNodeResolver());
    return defered.promise;
  }
  function k24(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 23 DAY) and groupname= 'System Acquisition,Development and Maintenance'",defered.makeNodeResolver());
    return defered.promise;
  }
  function k25(){
    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 24 DAY) and groupname= 'System Acquisition,Development and Maintenance'",defered.makeNodeResolver());
    return defered.promise;
  }
  function k26(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 25 DAY) and groupname= 'System Acquisition,Development and Maintenance' ",defered.makeNodeResolver());
    return defered.promise;
  }
  function k27(){
    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 26 DAY) and groupname= 'System Acquisition,Development and Maintenance'",defered.makeNodeResolver());
    return defered.promise;
  }
  function k28(){
    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 27 DAY) and groupname= 'System Acquisition,Development and Maintenance'",defered.makeNodeResolver());
    return defered.promise;
  }
  function k29(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 28 DAY)  and groupname= 'System Acquisition,Development and Maintenance'",defered.makeNodeResolver());
    return defered.promise;
  }
  function k30(){
    var defered = Q.defer();
    db.query("SELECT sum(score) as count FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 29 DAY) and  groupname= 'System Acquisition,Development and Maintenance'",defered.makeNodeResolver());
    return defered.promise;
  }
  function k31(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count FROM score_history WHERE groupname= 'System Acquisition,Development and Maintenance' AND MONTH(created) = MONTH(CURRENT_DATE()) AND YEAR(created) = YEAR(CURRENT_DATE())",defered.makeNodeResolver());
    return defered.promise;
  }
  function k32(){
    var defered = Q.defer();
    db.query("SELECT sum(score) as count FROM score_history WHERE  score = -1 and groupname= 'System Acquisition,Development and Maintenance' AND MONTH(created) = MONTH(CURRENT_DATE()) AND YEAR(created) = YEAR(CURRENT_DATE())",defered.makeNodeResolver());
    return defered.promise;
  }
  function k33(){
    var defered = Q.defer();
    db.query("SELECT sum(score) as count FROM score_history WHERE  score = 1 and groupname= 'System Acquisition,Development and Maintenance' AND MONTH(created) = MONTH(CURRENT_DATE()) AND YEAR(created) = YEAR(CURRENT_DATE())",defered.makeNodeResolver());
    return defered.promise;
  }
  function k34(){
    var defered = Q.defer();
    db.query("SELECT sum(score)+10 as count, MONTH(created) FROM score_history WHERE groupname= 'System Acquisition,Development and Maintenance' AND MONTH(created) = MONTH(CURRENT_DATE())-1 AND YEAR(created) = YEAR(CURRENT_DATE()) ",defered.makeNodeResolver());
    return defered.promise;
  }

  Q.all([ k1(),k2(),k3(),k4(),k5(),k6(),k7(),k8(),k9(),k10(),k11(),k12(),k13(),k14(),k15(),k16(),k17(),k18(),k19(),k20(),k21(),k22(),
  k23(),k24(),k25(),k26(),k27(),k28(),k29(),k30(),k31(),k32(),k33(),k34()]).then(function(results){


      res.json({ success: true, v1:results[0][0][0].count,v2:results[1][0][0].count, v3:results[2][0][0].count,v4:results[3][0][0].count,
        v5:results[4][0][0].count,v6:results[5][0][0].count, v7:results[6][0][0].count,v8:results[7][0][0].count,
        v9:results[8][0][0].count,v10:results[9][0][0].count, v11:results[10][0][0].count,v12:results[11][0][0].count,
        v13:results[12][0][0].count,v14:results[13][0][0].count, v15:results[14][0][0].count,v16:results[15][0][0].count,
        v17:results[16][0][0].count,v18:results[17][0][0].count, v19:results[18][0][0].count,v20:results[19][0][0].count,
        v21:results[20][0][0].count,v22:results[21][0][0].count, v23:results[22][0][0].count,v24:results[23][0][0].count,
        v25:results[24][0][0].count,v26:results[25][0][0].count, v27:results[26][0][0].count,v28:results[27][0][0].count,
        v29:results[28][0][0].count,v30:results[29][0][0].count,current_total: results[30][0][0].count , current_no: results[31][0][0].count , current_yes: results[32][0][0].count,previous_month: results[33][0][0].count,
      d1: curr[0],
      d2: curr[1] ,
      d3: curr[2] ,
      d4: curr[3],
     d5:  curr[4] ,
     d6 :  curr[5],
     d7: curr[6],
     d8:  curr[7],
      d9: curr[8],
      d10: curr[9],
      d1: curr[10],
     d12: curr[11],
      d13: curr[12],
      d14 : curr[13],
      d15 : curr[14],
    d16 :   curr[15],
    d17 :   curr[16],
      d18 : curr[17],
    d19 :  curr[18],
     d20 :  curr[19],
     d21:  curr[20],
    d22:  curr[21],
    d23:   curr[22],
    d24:  curr[23],
    d25 :   curr[24],
    d26 :  curr[25],
    d27 :   curr[26],
    d28 :  curr[27],
    d29 :  curr[28],
    d30 :   curr[29],
    d31 :   curr[30],
      })
  });

});
module.exports = router;

const express = require('express');
const router = express.Router();
const Q = require('Q');
//const ctrlUser = require('../controllers/user.controller');
const secret = 'harrypotter';
const nodemailer = require('nodemailer');
const db = require('../db/config');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const fs = require('fs');
const Speakeasy = require("speakeasy");

const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({uploadDir: './uploads'});
const spawn = require("child_process").spawn;

router.get('/backupscores', function (req, res) {
  // console.log("hii");
  function fun1() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  operations_backup where status!=-1", defered.makeNodeResolver());
    return defered.promise;
  }

  function fun2() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  operations_cos where status!=-1 ", defered.makeNodeResolver());
    return defered.promise;
  }

  function fun3() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  operations_isac where status!=-1", defered.makeNodeResolver());
    return defered.promise;
  }

  function fun4() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  operations_lm where status!=-1", defered.makeNodeResolver());
    return defered.promise;
  }

  function fun5() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  operations_opr where status!=-1 ", defered.makeNodeResolver());
    return defered.promise;
  }

  function fun6() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  operations_tvm where status!=-1", defered.makeNodeResolver());
    return defered.promise;
  }

  function fun7() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  operations_pm where status!=-1", defered.makeNodeResolver());
    return defered.promise;
  }

  Q.all([fun1(), fun2(), fun3(), fun4(), fun5(), fun6(), fun7()]).then(function (results) {
    govall = results[0][0][0].score + results[1][0][0].score + results[2][0][0].score + results[3][0][0].score + results[4][0][0].score + results[5][0][0].score + results[6][0][0].score;
    // console.log(govall);
    all = results[0][0][0].total + results[1][0][0].total + results[2][0][0].total + results[3][0][0].total + results[4][0][0].total + results[5][0][0].total + results[6][0][0].total;
    // console.log(all);
    totalscore = Math.round((govall / all) * 100);
    // console.log(totalscore);
    res.json({success: true, data: totalscore});
  });
});
/************************************   Second Graph Total Score *******************************************/

/************************************ EDUCATION AND GUIDANCE ************************************************/
router.get('/backupsecondgraph', function (req, res) {
  // console.log("hii");


  function egfunction() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from operations_backup where status!=-1 ", defered.makeNodeResolver());
    return defered.promise;
  }

  Q.all([egfunction()]).then(function (results) {
    score = results[0][0][0].score;
    total = results[0][0][0].total;
    egtotalscore = Math.round((score / total) * 100);

    res.json({success: true, egscore: egtotalscore});
    // console.log("hii");
  });
});


/****************************************************  First Graph Values ***************************************************************/
router.get('/backupfirstvalue', function (req, res) {
  // console.log("hii");
  function fun1() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  operations_backup where status!=-1 ", defered.makeNodeResolver());
    return defered.promise;
  }

  function fun2() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  operations_cos where status!=-1  ", defered.makeNodeResolver());
    return defered.promise;
  }

  function fun3() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from operations_isac where status!=-1 ", defered.makeNodeResolver());
    return defered.promise;
  }

  function fun4() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  operations_lm where status!=-1 ", defered.makeNodeResolver());
    return defered.promise;
  }

  function fun5() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  operations_opr where status!=-1  ", defered.makeNodeResolver());
    return defered.promise;
  }

  function fun6() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from operations_pm where status!=-1 ", defered.makeNodeResolver());
    return defered.promise;
  }

  function fun7() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from operations_tvm where status!=-1 ", defered.makeNodeResolver());
    return defered.promise;
  }

  Q.all([fun1(), fun2(), fun3(), fun4(), fun5(), fun6(), fun7()]).then(function (results) {

    strategy_and_metrices = results[0][0][0].score;
    education_and_guidance = results[1][0][0].score;
    pc = results[2][0][0].score;
    lm = results[3][0][0].score;
    opr = results[4][0][0].score;
    pm = results[5][0][0].score;
    tvm = results[6][0][0].score;
    res.json({
      success: true,
      sm: strategy_and_metrices,
      eg: education_and_guidance,
      pc: pc,
      lm: lm,
      opr: opr,
      pm: pm,
      tvm: tvm
    });
  });

});
router.get('/backupsecondvalue', function (req, res) {
  // console.log("hii");
  function eg_yes() {
    const defered = Q.defer();
    db.query("select count(*) as score from operations_backup where status = 1  ", defered.makeNodeResolver());
    return defered.promise;
  }

  function eg_half() {
    const defered = Q.defer();
    db.query("select count(*) as score from operations_backup where status = 0.5  ", defered.makeNodeResolver());
    return defered.promise;
  }

  function eg_no() {
    const defered = Q.defer();
    db.query("select count(*) as score from operations_backup where status = 0 ", defered.makeNodeResolver());
    return defered.promise;
  }

  Q.all([eg_yes(), eg_half(), eg_no()]).then(function (results) {

    eg_yes1 = results[0][0][0].score;
    eg_half1 = results[1][0][0].score;
    ;
    eg_no1 = results[2][0][0].score;
    // console.log(eg_yes1);
    //  console.log(eg_half1);
    //  console.log( eg_no1);
    res.json({success: true, yes: eg_yes1, half: eg_half1, no: eg_no1});
    // res.json({success:true, eg:education_and_guidance});
    // res.json({success:true,  pc:policy_and_compliance});
  });
});

/***************************************************** Chart Three *******************************************************/
/**************************************************** SECURITY READINESS FACTOR ******************************************/

router.get('/backupthirdvalue', function (req, res) {
  // console.log("hii");
  function rf_yes() {
    const defered = Q.defer();
    db.query("select count(*) as score from operations_backup where status=1  ", defered.makeNodeResolver());
    return defered.promise;
  }

  function rf_no() {
    const defered = Q.defer();
    db.query("select count(*) as score from operations_backup where status=0  ", defered.makeNodeResolver());
    return defered.promise;
  }

  Q.all([rf_yes(), rf_no()]).then(function (results) {

    rf_yes = results[0][0][0].score;
    rf_no = results[1][0][0].score;
    // console.log(rf_yes);
    //  console.log( rf_no);
    res.json({success: true, rfyes: rf_yes, rfno: rf_no});
  });
});

/**************************************************** Edit Options In Table *************************************************/
/**********************************************TABLE GOV ***************************************/
router.get('/backupalltable', function (req, res) {
  function vsamm() {
    const defered = Q.defer();
    db.query("SELECT * FROM operations_backup ORDER BY iso_id ASC", defered.makeNodeResolver());
    return defered.promise;
  }

  Q.all([vsamm()]).then(function (results) {
    all = results[0][0];
    res.json({success: true, "all": all});
  });
});
/***********************************************  VSSAMM Table Data Updation   **********************************/

router.put('/backupeditgoveg', function (req, res) {
  id = req.body.id;
  question = req.body.name;
  score = req.body.score;
  user = req.body.symbol;
  audit = req.body.auditor;
  csection = req.body.section;
  let scname;
  if (score == "No") {
    scname = 0;
  } else if (score == "Yes") {
    scname = 1;
  } else if (score == "Implementing") {
    scname = 0.5;
  } else if (score == "NA") {
    scname = -1;
  } else if (score == "N/A") {
    scname = -1;
  }
  if (req.body.comment == undefined) {
    const c = '';
    sql = "update operations_backup set status=" + scname + " where iso_id=" + id + "";
    //sql1="INSERT INTO comment_history VALUES ('"+question+"','','Regulatory Compliance','Security Procedure and Policies','"+c+"','"+audit+"',CURRENT_TIMESTAMP,'"+scname+"',"+id+");"
    sql2 = "Insert into score_history(qoid,qoname,question,groupname, secpractice,score,uname,created) values(" + id + ",'OPE-BACKUP " + id + "','" + question + "','Operational Procedures and responsibilities','Backup','" + scname + "','" + audit + "',NOW())";
    db.query(sql, (err, results) => {
      if (err) throw err;

      db.query(sql2, (err, resul) => {
        res.json({success: true});
      });

    })
  } else if (req.body.score == undefined) {
    sql = "update operations_backup set comment='" + req.body.comment + "' where iso_id=" + id + "";
    sql1 = "INSERT INTO comment_history VALUES ('" + question + "','','Operational Procedures and responsibilities','Backup','" + req.body.comment + "','" + audit + "',CURRENT_TIMESTAMP,'" + scname + "'," + id + ");"
    sql2 = "Insert into score_history(qoid,qoname,question,groupname, secpractice,score,uname,created) values(" + id + ",'OPE-BACKUP " + id + "','" + question + "','Operational Procedures and responsibilities','Backup','" + scname + "','" + audit + "',NOW())";
    db.query(sql, (err, results) => {
      if (err) throw err;
      db.query(sql1, (err, result) => {
        db.query(sql2, (err, resul) => {
          res.json({success: true});
        });
      });
    })
  } else {
    sql = "update  operations_backup  set status=" + scname + ",comment='" + req.body.comment + "' where iso_id=" + id + "";
    sql1 = "INSERT INTO comment_history VALUES ('" + question + "','','Operational Procedures and responsibilities','Backup','" + req.body.comment + "','" + audit + "',CURRENT_TIMESTAMP,'" + scname + "'," + id + ");"
    sql2 = "Insert into score_history(qoid,qoname,question,groupname, secpractice,score,uname,created) values(" + id + ",'OPE-BACKUP " + id + "','" + question + "','Operational Procedures and responsibilities','Backup','" + scname + "','" + audit + "',NOW())";
    db.query(sql, (err, results) => {
      if (err) throw err;
      db.query(sql1, (err, result) => {
        db.query(sql2, (err, resul) => {
          res.json({success: true});
        });
      });
    })
  }
//console.log(sql2);


});
router.get('/backupreg_la_tab', function (req, res) {
  sql = "SELECT * FROM operations_backup ORDER BY iso_id ASC ";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json({success: true, values: results});
  })
});
router.put('/backuphist_reg', function (req, res) {
  id = req.body.id;

  sql = "SELECT COMMENT FROM `comment_history` WHERE qoid=" + id + " and groupname='" + req.body.groupname + "' and secpractice='" + req.body.secpractice + "'";
  //console.log(sql);
  db.query(sql, (err, results) => {
    if (err) throw err;

    res.json({success: true, values: results});

  })
  // res.json({sql:sql,id:req.body.id});
});
router.get('/backupreg_la_tab', function (req, res) {
  sql = "SELECT * FROM  operations_backup   ORDER BY iso_id ASC ";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json({success: true, values: results});
  })
});
//to upload
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
const Dir = './uploads/';
const storage = multer.diskStorage({ //multers disk storage settings
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    fs.exists(Dir + file.originalname, function (exists, res) {
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
const upload = multer({ //multer settings
  storage: storage
}).array('file');
router.post('/upload', (req, res) => {
  upload(req, res, function (err) {
    // console.log(req.file);

    if (err) {
      res.json({error_code: 1, err_desc: err});
      return;
    }
    res.json({error_code: 0, err_desc: null, message: "File uploaded successfully", success: true});
  });
});
router.post('/download', function (req, res) {
  filepath = path.join(__dirname, "../uploads") + '\\' + req.body.filename;
  console.log(filepath);
  res.sendFile(filepath);
});
//getupload
router.post('/backupgetupload', function (req, res) {
  sql = "SELECT filename FROM ` operations_backup  ` WHERE iso_id='" + req.body.id + "'";
  // console.log(sql);
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json({success: true, results: results});
  })
});

///uploadreg_db
router.post("/backupuploadreg_db", function (req, res) {
  //console.log(req.body);
  //sql="UPDATE `api_sm` SET `upload`='upload/',`filename`='"+req.body.files+"'  WHERE id='"+req.body.id+"'";
  //console.log(sql);
  if (req.body.groupname == "Operational Procedures and responsibilities" && req.body.secpractice == "Backup") {
    //UPDATE `api_sm` SET `upload`='upload/',filename=IF(`filename`!='',concat(filename,', "+req.body.files+"'),filename ),filename=IF(`filename`='',concat(filename,'"+req.body.files+"'),filename ) WHERE id='"+req.body.id+"'
    //  sql="UPDATE `api_sm` SET `upload`='upload/',filename=IF(`filename`!='',concat(filename,', "+req.body.files+"'),filename ),filename=IF(`filename`='',concat(filename,'"+req.body.files+"'),filename ) WHERE id='"+req.body.id+"'";
    //console.log(sql);
    //console.log(sql);
    function doQuery_tab() {
      const defered = Q.defer();
      db.query("UPDATE ` operations_backup` SET `upload`='upload/',filename=IF(`filename`!='',concat(filename,', " + req.body.files + "'),filename ),filename=IF(`filename`='',concat(filename,'" + req.body.files + "'),filename ) WHERE iso_id='" + req.body.id + "'", defered.makeNodeResolver());
      return defered.promise;
    }

    function doQuery_upload() {
      const defered = Q.defer();
      db.query("INSERT INTO `uploads`(`id`, `filename`, `groupname`, `secpractice`,`qoid`) VALUES ('','" + req.body.files + "','" + req.body.groupname + "','" + req.body.secpractice + "','" + req.body.id + "')", defered.makeNodeResolver());
      return defered.promise;
    }
  }
  Q.all([doQuery_tab(), doQuery_upload()
  ]).then(function (results) {

    res.json({success: true});
  });
  /*db.query(sql,(err,results)=>
   {
       if(err) throw err;
       res.json({success: true});
   })*/
});

// ***************************SHASWATA GRAPHS starts**********************
/****************************************************  First Graph Values ***************************************************************/
router.get('/OperationsFirstGraph', function (req, res) {
  // console.log("hii");
  function operations_backup() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  operations_backup where status!=-1 ", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_cos() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  operations_cos where status!=-1", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_isac() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from operations_isac where status!=-1 ", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_lm() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from operations_lm where status!=-1 ", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_opr() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from operations_opr where status!=-1 ", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_pm() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from operations_pm where status!=-1 ", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_tvm() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from operations_tvm where status!=-1 ", defered.makeNodeResolver());
    return defered.promise;
  }

  function Totaloperations_backup() {
    const defered = Q.defer();
    db.query("select count(*) as total from  operations_backup ", defered.makeNodeResolver());
    return defered.promise;
  }

  function Totaloperations_cos() {
    const defered = Q.defer();
    db.query("select count(*) as total from  operations_cos  ", defered.makeNodeResolver());
    return defered.promise;
  }

  function Totaloperations_isac() {
    const defered = Q.defer();
    db.query("select count(*) as total from  operations_isac ", defered.makeNodeResolver());
    return defered.promise;
  }

  function Totaloperations_lm() {
    const defered = Q.defer();
    db.query("select count(*) as total from  operations_lm ", defered.makeNodeResolver());
    return defered.promise;
  }

  function Totaloperations_opr() {
    const defered = Q.defer();
    db.query("select count(*) as total from  operations_opr ", defered.makeNodeResolver());
    return defered.promise;
  }

  function Totaloperations_pm() {
    const defered = Q.defer();
    db.query("select count(*) as total from  operations_pm ", defered.makeNodeResolver());
    return defered.promise;
  }

  function Totaloperations_tvm() {
    const defered = Q.defer();
    db.query("select count(*) as total from  operations_tvm ", defered.makeNodeResolver());
    return defered.promise;
  }

  Q.all([operations_backup(), operations_cos(), operations_isac(), operations_lm(),
    operations_opr(), operations_pm(), operations_tvm(),
    Totaloperations_backup(), Totaloperations_cos(), Totaloperations_isac(),
    Totaloperations_lm(), Totaloperations_opr(), Totaloperations_pm(),
    Totaloperations_tvm()]).then(function (results) {
    // console.log("Debug:", results)
    let opbackup = results[0][0][0].score;
    let opcos = results[1][0][0].score;
    let opisac = results[2][0][0].score;
    let oplm = results[3][0][0].score;
    let opopr = results[4][0][0].score;
    let oppm = results[5][0][0].score;
    let optvm = results[6][0][0].score;

    let Totopbackup = results[7][0][0].total;
    let Totopcos = results[8][0][0].total;
    let Totopisac = results[9][0][0].total;
    let Totoplm = results[10][0][0].total;
    let Totopopr = results[11][0][0].total;
    let Totoppm = results[12][0][0].total;
    let Totoptvm = results[13][0][0].total;

    let v1 = Math.round((opbackup / Totopbackup) * 100);
    let v2 = Math.round((opcos / Totopcos) * 100);
    let v3 = Math.round((opisac / Totopisac) * 100);
    let v4 = Math.round((oplm / Totoplm * 100));
    let v5 = Math.round((opopr / Totopopr) * 100);
    let v6 = Math.round((oppm / Totoppm) * 100);
    let v7 = Math.round((optvm / Totoptvm) * 100);
    res.json({
      success: true, opbackup: v1, opcos: v2,
      opisac: v3, oplm: v4, opopr: v5, oppm: v6, optvm: v7
    });
  });

});
/************************************************* Second Graph Score ****************************************************/
router.get('/OperationsSecondGraph', function (req, res) {
  // console.log("hii");
  function operations_backupIB() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  operations_backup where compliance_section = 'A.12.3.1-Information backup'", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_cos() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  operations_cos where compliance_section = 'A.12.5.1'", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_isac() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  operations_isac where compliance_section = 'A.12.7.1-Information systems audit controls'", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_lmEL() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  operations_lm where compliance_section = 'A.12.4.1-Event Logging'", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_lmPLI() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  operations_lm where compliance_section = 'A.12.4.2-Protection of log information'", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_lmAOL() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  operations_lm where compliance_section = 'A.12.4.3-Administrator and operator logs'", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_lmCLS() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  operations_lm where compliance_section = 'A.12.4.4-Clock synchronisation'", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_oprDOP() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from operations_opr where compliance_section = 'A.12.1.1-Documented operating procedures' ", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_oprCM() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from operations_opr where compliance_section = 'A.12.1.2-Change management' ", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_oprCap() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from operations_opr where compliance_section = 'A.12.1.3-Capacity management' ", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_oprDTOE() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from operations_opr where compliance_section = 'A.12.1.4-Separation of development, testing and operational environments' ", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_pmCAM() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from operations_pm where compliance_section = 'A.12.2.1-Controls against malware' ", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_tvmMTV() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from operations_tvm where compliance_section = 'A.12.6.1-Management of technical vulnerabilities' ", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_tvmRSI() {
    const defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from operations_tvm where compliance_section = 'A.12.6.2-Restrictions on software installations' ", defered.makeNodeResolver());
    return defered.promise;
  }


  Q.all([operations_backupIB(), operations_cos(), operations_isac(), operations_lmEL(), operations_lmPLI(), operations_lmAOL(),
    operations_lmCLS(), operations_oprDOP(), operations_oprCM(), operations_oprCap(), operations_oprDTOE(), operations_pmCAM(),
    operations_tvmMTV(), operations_tvmRSI(),
  ]).then(function (results) {
    console.log("Debug:", JSON.stringify(results))
    let operations_backupIBvalue = results[0][0][0].score;
    let operations_cosvalue = results[1][0][0].score;
    let operations_isacvalue = results[2][0][0].score;
    let operations_lmELvalue = results[3][0][0].score;
    let operations_lmPLIvalue = results[4][0][0].score;
    let operations_lmAOLvalue = results[5][0][0].score;
    let operations_lmCLSvalue = results[6][0][0].score;
    let operations_oprDOPvalue = results[7][0][0].score;
    let operations_oprCMvalue = results[8][0][0].score;
    let operations_oprCapvalue = results[9][0][0].score;
    let operations_oprDTOEvalue = results[10][0][0].score;
    let operations_pmCAMvalue = results[11][0][0].score;
    let operations_tvmMTVvalue = results[12][0][0].score;
    let operations_tvmRSIvalue = results[13][0][0].score;
    res.json({
      success: true,
      operations_backupIBvalue: operations_backupIBvalue,
      operations_cosvalue: operations_cosvalue,
      operations_isacvalue: operations_isacvalue,
      operations_lmELvalue: operations_lmELvalue,
      operations_lmPLIvalue: operations_lmPLIvalue,
      operations_lmAOLvalue: operations_lmAOLvalue,
      operations_lmCLSvalue: operations_lmCLSvalue,
      operations_oprDOPvalue: operations_oprDOPvalue,
      operations_oprCMvalue: operations_oprCMvalue,
      operations_oprCapvalue: operations_oprCapvalue,
      operations_oprDTOEvalue: operations_oprDTOEvalue,
      operations_pmCAMvalue: operations_pmCAMvalue,
      operations_tvmMTVvalue: operations_tvmMTVvalue,
      operations_tvmRSIvalue: operations_tvmRSIvalue
    })
    ;
  });

});

/***************************************************** Chart Three *******************************************************/
/**************************************************** SECURITY READINESS FACTOR ******************************************/

router.get('/OperationsThirdGraph', function (req, res) {
  // console.log("hii");
  function operations_backup_yes() {
    const defered = Q.defer();
    db.query("select count(*) as score from operations_backup  where status = 1  ", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_backup_no() {
    const defered = Q.defer();
    db.query("select count(*) as score from operations_backup  where status = 0  ", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_cos_yes() {
    const defered = Q.defer();
    db.query("select count(*) as score from operations_cos  where status = 1  ", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_cos_no() {
    const defered = Q.defer();
    db.query("select count(*) as score from operations_cos  where status = 0  ", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_isac_yes() {
    const defered = Q.defer();
    db.query("select count(*) as score from operations_isac  where status = 1  ", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_isac_no() {
    const defered = Q.defer();
    db.query("select count(*) as score from operations_isac  where status = 0  ", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_lm_yes() {
    const defered = Q.defer();
    db.query("select count(*) as score from operations_lm  where status = 1  ", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_lm_no() {
    const defered = Q.defer();
    db.query("select count(*) as score from operations_lm  where status = 0  ", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_opr_yes() {
    const defered = Q.defer();
    db.query("select count(*) as score from operations_opr  where status = 1  ", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_opr_no() {
    const defered = Q.defer();
    db.query("select count(*) as score from operations_opr  where status = 0  ", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_pm_yes() {
    const defered = Q.defer();
    db.query("select count(*) as score from operations_pm  where status = 1  ", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_pm_no() {
    const defered = Q.defer();
    db.query("select count(*) as score from operations_pm  where status = 0  ", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_tvm_yes() {
    const defered = Q.defer();
    db.query("select count(*) as score from operations_tvm  where status = 1 ", defered.makeNodeResolver());
    return defered.promise;
  }

  function operations_tvm_no() {
    const defered = Q.defer();
    db.query("select count(*) as score from operations_tvm  where status = 0  ", defered.makeNodeResolver());
    return defered.promise;
  }

  Q.all([operations_backup_yes(), operations_backup_no(), operations_cos_yes(),
    operations_cos_no(), operations_isac_yes(), operations_isac_no(), operations_lm_yes(),
    operations_lm_no(), operations_opr_yes(), operations_opr_no(), operations_pm_yes(),
    operations_pm_no(), operations_tvm_yes(), operations_tvm_no()]).then(function (results) {

    let operations_backup_yesValue = (results[0][0][0].score / 10);
    let operations_backup_noValue = (results[1][0][0].score / 10);
    let operations_cos_yesValue = (results[2][0][0].score / 10);
    let operations_cos_noValue = (results[3][0][0].score / 10);
    let operations_isac_yesValue = (results[4][0][0].score / 10);
    let operations_isac_noValue = (results[5][0][0].score / 10);
    let operations_lm_yesValue = (results[6][0][0].score / 10);
    let operations_lm_noValue = (results[7][0][0].score / 10);
    let operations_opr_yesValue = (results[8][0][0].score / 10);
    let operations_opr_noValue = (results[9][0][0].score / 10);
    let operations_pm_yesValue = (results[10][0][0].score / 10);
    let operations_pm_noValue = (results[11][0][0].score / 10);
    let operations_tvm_yesValue = (results[12][0][0].score / 10);
    let operations_tvm_noValue = (results[13][0][0].score / 10);
  res.json({
    success: true,
    operations_backup_yesValue: operations_backup_yesValue,
    operations_backup_noValue: operations_backup_noValue,
    operations_cos_yesValue: operations_cos_yesValue,
    operations_cos_noValue: operations_cos_noValue,
    operations_isac_yesValue: operations_isac_yesValue,
    operations_isac_noValue: operations_isac_noValue,
    operations_lm_yesValue: operations_lm_yesValue,
    operations_lm_noValue: operations_lm_noValue,
    operations_opr_yesValue: operations_opr_yesValue,
    operations_opr_noValue: operations_opr_noValue,
    operations_pm_yesValue: operations_pm_yesValue,
    operations_pm_noValue: operations_pm_noValue,
    operations_tvm_yesValue: operations_tvm_yesValue,
    operations_tvm_noValue: operations_tvm_noValue
  });
});
})
;
// ********************************SHASWATA GRAPHS END******************
router.get('/dovagraph_ope', function (req, res) {
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
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW()) and  groupname= 'Operational Procedures and responsibilities' ",defered.makeNodeResolver());
      return defered.promise;
  }
  function k2(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 1 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
  }
  function k3(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 2 DAY) and  groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
    return defered.promise;
  }
  function k4(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 3 DAY) and groupname= 'Operational Procedures and responsibilities' ",defered.makeNodeResolver());
    return defered.promise;
  }
  function k5(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 4 DAY) and groupname= 'Operational Procedures and responsibilities' ",defered.makeNodeResolver());
    return defered.promise;
  }
  function k6() {
    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 5 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
    return defered.promise;
  }
  function k7(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 6 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
    return defered.promise;
  }
  function k8(){
    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 7 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
    return defered.promise;
  }
  function k9(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 8 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
    return defered.promise;
  }
  function k10(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 9 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
    return defered.promise;
  }
  function k11(){


    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 10 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
    return defered.promise;
  }
    function k12(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 11 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function k13(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 12 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function k14(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 13 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function k15(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 14 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function k16(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 15 DAY) and groupname= 'Operational Procedures and responsibilities' ",defered.makeNodeResolver());
      return defered.promise;
    }
    function k17(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 16 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function k18(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 17 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;;
    }
    function k19(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 18 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function k20(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 19 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function k21(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 20 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function k22(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 21 DAY) and groupname= 'Operational Procedures and responsibilities' ",defered.makeNodeResolver());
      return defered.promise;
    }
    function k23(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 22 DAY)  and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function k24(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 23 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function k25(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 24 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function k26(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 25 DAY) and groupname= 'Operational Procedures and responsibilities' ",defered.makeNodeResolver());
      return defered.promise;
    }
    function k27(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 26 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function k28(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 27 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function k29(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 28 DAY)  and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function k30(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count FROM score_history WHERE DATE(created) = DATE(NOW() - INTERVAL 29 DAY) and  groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function k31(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count FROM score_history WHERE groupname= 'Operational Procedures and responsibilities' AND MONTH(created) = MONTH(CURRENT_DATE()) AND YEAR(created) = YEAR(CURRENT_DATE())",defered.makeNodeResolver());
      return defered.promise;
    }
    function k32(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count FROM score_history WHERE  score = -1 and groupname= 'Operational Procedures and responsibilities' AND MONTH(created) = MONTH(CURRENT_DATE()) AND YEAR(created) = YEAR(CURRENT_DATE())",defered.makeNodeResolver());
      return defered.promise;
    }
    function k33(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count FROM score_history WHERE  score = 1 and groupname= 'Operational Procedures and responsibilities' AND MONTH(created) = MONTH(CURRENT_DATE()) AND YEAR(created) = YEAR(CURRENT_DATE())",defered.makeNodeResolver());
      return defered.promise;
    }
    function k34(){
      var defered = Q.defer();
      db.query("SELECT sum(score)+10 as count, MONTH(created) FROM score_history WHERE groupname= 'Operational Procedures and responsibilities' AND MONTH(created) = MONTH(CURRENT_DATE())-1 AND YEAR(created) = YEAR(CURRENT_DATE()) ",defered.makeNodeResolver());
      return defered.promise;
    }
    function y1(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW()) and  groupname= 'Operational Procedures and responsibilities' ",defered.makeNodeResolver());
      return defered.promise;
  }
  function y2(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 1 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
  }
  function y3(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 2 DAY) and  groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
    return defered.promise;
  }
  function y4(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE  score = 1 and DATE(created) = DATE(NOW() - INTERVAL 3 DAY) and groupname= 'Operational Procedures and responsibilities' ",defered.makeNodeResolver());
    return defered.promise;
  }
  function y5(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 4 DAY) and groupname= 'Operational Procedures and responsibilities' ",defered.makeNodeResolver());
    return defered.promise;
  }
  function y6() {
    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 5 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
    return defered.promise;
  }
  function y7(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and  DATE(created) = DATE(NOW() - INTERVAL 6 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
    return defered.promise;
  }
  function y8(){
    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 7 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
    return defered.promise;
  }
  function y9(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 8 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
    return defered.promise;
  }
  function y10(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and  DATE(created) = DATE(NOW() - INTERVAL 9 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
    return defered.promise;
  }
  function y11(){


    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 10 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
    return defered.promise;
  }
    function y12(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 11 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function y13(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 12 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function y14(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 13 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function y15(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and  DATE(created) = DATE(NOW() - INTERVAL 14 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function y16(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and  DATE(created) = DATE(NOW() - INTERVAL 15 DAY) and groupname= 'Operational Procedures and responsibilities' ",defered.makeNodeResolver());
      return defered.promise;
    }
    function y17(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 16 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function y18(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 17 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;;
    }
    function y19(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 18 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function y20(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 19 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function y21(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 20 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function y22(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 21 DAY) and groupname= 'Operational Procedures and responsibilities' ",defered.makeNodeResolver());
      return defered.promise;
    }
    function y23(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 22 DAY)  and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function y24(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 23 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function y25(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 24 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function y26(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and  DATE(created) = DATE(NOW() - INTERVAL 25 DAY) and groupname= 'Operational Procedures and responsibilities' ",defered.makeNodeResolver());
      return defered.promise;
    }
    function y27(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 26 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function y28(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 27 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function y29(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = 1 and DATE(created) = DATE(NOW() - INTERVAL 28 DAY)  and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function y30(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count FROM score_history WHERE  score = -1 and DATE(created) = DATE(NOW() - INTERVAL 29 DAY) and  groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function n1(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW()) and  groupname= 'Operational Procedures and responsibilities' ",defered.makeNodeResolver());
      return defered.promise;
  }
  function n2(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 1 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
  }
  function n3(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 2 DAY) and  groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
    return defered.promise;
  }
  function n4(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE  score = -1 and DATE(created) = DATE(NOW() - INTERVAL 3 DAY) and groupname= 'Operational Procedures and responsibilities' ",defered.makeNodeResolver());
    return defered.promise;
  }
  function n5(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 4 DAY) and groupname= 'Operational Procedures and responsibilities' ",defered.makeNodeResolver());
    return defered.promise;
  }
  function n6() {
    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 5 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
    return defered.promise;
  }
  function n7(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and  DATE(created) = DATE(NOW() - INTERVAL 6 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
    return defered.promise;
  }
  function n8(){
    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 7 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
    return defered.promise;
  }
  function n9(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 8 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
    return defered.promise;
  }
  function n10(){

    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and  DATE(created) = DATE(NOW() - INTERVAL 9 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
    return defered.promise;
  }
  function n11(){


    var defered = Q.defer();
    db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 10 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
    return defered.promise;
  }
    function n12(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 11 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function n13(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 12 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function n14(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 13 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function n15(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and  DATE(created) = DATE(NOW() - INTERVAL 14 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function n16(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and  DATE(created) = DATE(NOW() - INTERVAL 15 DAY) and groupname= 'Operational Procedures and responsibilities' ",defered.makeNodeResolver());
      return defered.promise;
    }
    function n17(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 16 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function n18(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 17 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;;
    }
    function n19(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 18 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function n20(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 19 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function n21(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 20 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function n22(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 21 DAY) and groupname= 'Operational Procedures and responsibilities' ",defered.makeNodeResolver());
      return defered.promise;
    }
    function n23(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 22 DAY)  and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function n24(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 23 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function n25(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 24 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function n26(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and  DATE(created) = DATE(NOW() - INTERVAL 25 DAY) and groupname= 'Operational Procedures and responsibilities' ",defered.makeNodeResolver());
      return defered.promise;
    }
    function n27(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 26 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function n28(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 27 DAY) and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function n29(){

      var defered = Q.defer();
      db.query("SELECT sum(score) as count  FROM score_history WHERE score = -1 and DATE(created) = DATE(NOW() - INTERVAL 28 DAY)  and groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
      return defered.promise;
    }
    function n30(){
      var defered = Q.defer();
      db.query("SELECT sum(score) as count FROM score_history WHERE  score = -1 and DATE(created) = DATE(NOW() - INTERVAL 29 DAY) and  groupname= 'Operational Procedures and responsibilities'",defered.makeNodeResolver());
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

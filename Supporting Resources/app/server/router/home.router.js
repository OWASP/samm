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


// A.9	Access control

router.get('/access',function(req,res){
  function fun1(){
    var defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  access_brac where status = 1",defered.makeNodeResolver());
    return defered.promise;
  }

  function fun2(){
    var defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  access_sac where status = 1 ",defered.makeNodeResolver());
    return defered.promise;
  }

  function fun3(){
    var defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  access_uam where status = 1",defered.makeNodeResolver());
    return defered.promise;
  }
  function fun4(){
    var defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  access_ur where status = 1",defered.makeNodeResolver());
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
  // Asset management
  router.get('/asset',function(req,res){
    function fun1(){
      var defered = Q.defer();
      db.query("select sum(status) as score, count(*) as total from  `asset_ic` where status = 1",defered.makeNodeResolver());
      return defered.promise;
    }

    function fun2(){
      var defered = Q.defer();
      db.query("select sum(status) as score, count(*) as total from  `asset_mh` where status = 1 ",defered.makeNodeResolver());
      return defered.promise;
    }

    function fun3(){
      var defered = Q.defer();
      db.query("select sum(status) as score, count(*) as total from  `asset_ra` where status = 1",defered.makeNodeResolver());
      return defered.promise;
    }

    Q.all([fun1(),fun2(),fun3()]).then(function(results){
      govall = results[0][0][0].score+results[1][0][0].score+results[2][0][0].score;
      // console.log(govall);
      all = results[0][0][0].total+results[1][0][0].total+results[2][0][0].total;
     // console.log(all);
      totalscore = Math.round((govall/all)*100);
      // console.log(totalscore);
      res.json({success:true ,data:totalscore});
    }); });

    //  Communications

    router.get('/comm',function(req,res){
      function fun1(){
        var defered = Q.defer();
        db.query("select sum(status) as score, count(*) as total from   `communications_it`  where status = 1",defered.makeNodeResolver());
        return defered.promise;
      }

      function fun2(){
        var defered = Q.defer();
        db.query("select sum(status) as score, count(*) as total from    `communications_nsm`   where status = 1 ",defered.makeNodeResolver());
        return defered.promise;
      }

      Q.all([fun1(),fun2()]).then(function(results){
        govall = results[0][0][0].score+results[1][0][0].score;
        // console.log(govall);
        all = results[0][0][0].total+results[1][0][0].total;
       // console.log(all);
        totalscore = Math.round((govall/all)*100);
        // console.log(totalscore);
        res.json({success:true ,data:totalscore});
      }); });

// Compliance

      router.get('/comp',function(req,res){
        function fun1(){
          var defered = Q.defer();
          db.query("select sum(status) as score, count(*) as total from   `compliance_isr`   where status = 1",defered.makeNodeResolver());
          return defered.promise;
        }

        function fun2(){
          var defered = Q.defer();
          db.query("select sum(status) as score, count(*) as total from  `compliance_lcr`   where status = 1 ",defered.makeNodeResolver());
          return defered.promise;
        }

        Q.all([fun1(),fun2()]).then(function(results){
          govall = results[0][0][0].score+results[1][0][0].score;
          // console.log(govall);
          all = results[0][0][0].total+results[1][0][0].total;
         // console.log(all);
          totalscore = Math.round((govall/all)*100);
          // console.log(totalscore);
          res.json({success:true ,data:totalscore});
        }); });

        // crypto

      router.get('/crypto',function(req,res){
        function fun1(){
          var defered = Q.defer();
          db.query("select sum(status) as score, count(*) as total from   `cryptography_con`   where status = 1",defered.makeNodeResolver());
          return defered.promise;
        }

        Q.all([fun1()]).then(function(results){
          govall = results[0][0][0].score;
          // console.log(govall);
          all = results[0][0][0].totall;
         // console.log(all);
          totalscore = Math.round((govall/all)*100);
          // console.log(totalscore);
          res.json({success:true ,data:totalscore});
        }); });

// human

router.get('/human',function(req,res){
  function fun1(){
    var defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from   `human_de`   where status = 1",defered.makeNodeResolver());
    return defered.promise;
  }

  function fun2(){
    var defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from  `human_pe`   where status = 1 ",defered.makeNodeResolver());
    return defered.promise;
  }

  Q.all([fun1(),fun2()]).then(function(results){
    govall = results[0][0][0].score+results[1][0][0].score;
    // console.log(govall);
    all = results[0][0][0].total+results[1][0][0].total;
   // console.log(all);
    totalscore = Math.round((govall/all)*100);
    // console.log(totalscore);
    res.json({success:true ,data:totalscore});
  }); });

  // Information security incident management

        router.get('/mis',function(req,res){
          function fun1(){
            var defered = Q.defer();
            db.query("select sum(status) as score, count(*) as total from   `information_mis` where status = 1",defered.makeNodeResolver());
            return defered.promise;
          }

          Q.all([fun1()]).then(function(results){
            govall = results[0][0][0].score;
            // console.log(govall);
            all = results[0][0][0].totall;
           // console.log(all);
            totalscore = Math.round((govall/all)*100);
            // console.log(totalscore);
            res.json({success:true ,data:totalscore});
          }); });

  // Information security aspects of business continuity management

  router.get('/isecurity',function(req,res){
    function fun1(){
      var defered = Q.defer();
      db.query("select sum(status) as score, count(*) as total from   `isecurity_isc`    where status = 1",defered.makeNodeResolver());
      return defered.promise;
    }

    function fun2(){
      var defered = Q.defer();
      db.query("select sum(status) as score, count(*) as total from `isecurity_red`    where status = 1 ",defered.makeNodeResolver());
      return defered.promise;
    }

    Q.all([fun1(),fun2()]).then(function(results){
      govall = results[0][0][0].score+results[1][0][0].score;
      // console.log(govall);
      all = results[0][0][0].total+results[1][0][0].total;
     // console.log(all);
      totalscore = Math.round((govall/all)*100);
      // console.log(totalscore);
      res.json({success:true ,data:totalscore});
    }); });

// Information Security Policies


router.get('/mdis',function(req,res){
  function fun1(){
    var defered = Q.defer();
    db.query("select sum(status) as score, count(*) as total from   information_mdis   where status = 1",defered.makeNodeResolver());
    return defered.promise;
  }

  Q.all([fun1()]).then(function(results){
    govall = results[0][0][0].score;
    // console.log(govall);
    all = results[0][0][0].totall;
   // console.log(all);
    totalscore = Math.round((govall/all)*100);
    // console.log(totalscore);
    res.json({success:true ,data:totalscore});
  }); });

  // Operations security

  router.get('/ope',function(req,res){
    function fun1(){
      var defered = Q.defer();
      db.query("select sum(status) as score, count(*) as total from  `operations_backup`  where status = 1",defered.makeNodeResolver());
      return defered.promise;
    }

    function fun2(){
      var defered = Q.defer();
      db.query("select sum(status) as score, count(*) as total from  `operations_cos`  where status = 1 ",defered.makeNodeResolver());
      return defered.promise;
    }

    function fun3(){
      var defered = Q.defer();
      db.query("select sum(status) as score, count(*) as total from  `operations_isac`  where status = 1",defered.makeNodeResolver());
      return defered.promise;
    }
    function fun4(){
      var defered = Q.defer();
      db.query("select sum(status) as score, count(*) as total from  `operations_lm`  where status = 1",defered.makeNodeResolver());
      return defered.promise;
    }
    function fun5(){
      var defered = Q.defer();
      db.query("select sum(status) as score, count(*) as total from  `operations_opr`  where status = 1",defered.makeNodeResolver());
      return defered.promise;
    }
    function fun6(){
      var defered = Q.defer();
      db.query("select sum(status) as score, count(*) as total from  `operations_pm`  where status = 1",defered.makeNodeResolver());
      return defered.promise;
    }
    function fun7(){
      var defered = Q.defer();
      db.query("select sum(status) as score, count(*) as total from  `operations_tvm`  where status = 1",defered.makeNodeResolver());
      return defered.promise;
    }

    Q.all([fun1(),fun2(),fun3(),fun4(),fun5(),fun6(),fun7()]).then(function(results){
      govall = results[0][0][0].score+results[1][0][0].score+results[2][0][0].score+results[3][0][0].score+result[4][0][0].score+result[5][0][0].score+result[6][0][0].score;
      // console.log(govall);
      all = results[0][0][0].total+results[1][0][0].total+results[2][0][0].total+results[3][0][0].total+result[4][0][0].total+result[5][0][0].total+result[6][0][0].total;
     // console.log(all);
      totalscore = Math.round((govall/all)*100);
      // console.log(totalscore);
      res.json({success:true ,data:totalscore});
    }); });

    // Organisation of information security

    router.get('/org',function(req,res){
      function fun1(){
        var defered = Q.defer();
        db.query("select sum(status) as score, count(*) as total from   `organisation_io` where status = 1",defered.makeNodeResolver());
        return defered.promise;
      }

      function fun2(){
        var defered = Q.defer();
        db.query("select sum(status) as score, count(*) as total from `organisation_mdt` where status = 1 ",defered.makeNodeResolver());
        return defered.promise;
      }

      Q.all([fun1(),fun2()]).then(function(results){
        govall = results[0][0][0].score+results[1][0][0].score;
        // console.log(govall);
        all = results[0][0][0].total+results[1][0][0].total;
       // console.log(all);
        totalscore = Math.round((govall/all)*100);
        // console.log(totalscore);
        res.json({success:true ,data:totalscore});
      }); });

      // Physical and environmental security

      router.get('/phy',function(req,res){
        function fun1(){
          var defered = Q.defer();
          db.query("select sum(status) as score, count(*) as total from   `physical_equ` where status = 1",defered.makeNodeResolver());
          return defered.promise;
        }

        function fun2(){
          var defered = Q.defer();
          db.query("select sum(status) as score, count(*) as total from `physical_sa` where status = 1 ",defered.makeNodeResolver());
          return defered.promise;
        }

        Q.all([fun1(),fun2()]).then(function(results){
          govall = results[0][0][0].score+results[1][0][0].score;
          // console.log(govall);
          all = results[0][0][0].total+results[1][0][0].total;
         // console.log(all);
          totalscore = Math.round((govall/all)*100);
          // console.log(totalscore);
          res.json({success:true ,data:totalscore});
        }); });

    // Supplier relationships

    router.get('/sup',function(req,res){
      function fun1(){
        var defered = Q.defer();
        db.query("select sum(status) as score, count(*) as total from   supplier_sdm where status = 1",defered.makeNodeResolver());
        return defered.promise;
      }

      function fun2(){
        var defered = Q.defer();
        db.query("select sum(status) as score, count(*) as total from supplier_isr where status = 1 ",defered.makeNodeResolver());
        return defered.promise;
      }

      Q.all([fun1(),fun2()]).then(function(results){
        govall = results[0][0][0].score+results[1][0][0].score;
        // console.log(govall);
        all = results[0][0][0].total+results[1][0][0].total;
       // console.log(all);
        totalscore = Math.round((govall/all)*100);
        // console.log(totalscore);
        res.json({success:true ,data:totalscore});
      }); });

    // System acquisition, development and maintenance

    router.get('/sys',function(req,res){
      function fun1(){
        var defered = Q.defer();
        db.query("select sum(status) as score, count(*) as total from   `system_sdsp`  where status = 1",defered.makeNodeResolver());
        return defered.promise;
      }

      function fun2(){
        var defered = Q.defer();
        db.query("select sum(status) as score, count(*) as total from `system_sris`  where status = 1 ",defered.makeNodeResolver());
        return defered.promise;
      }
      function fun3(){
        var defered = Q.defer();
        db.query("select sum(status) as score, count(*) as total from   `system_sdm`  where status = 1",defered.makeNodeResolver());
        return defered.promise;
      }

      function fun4(){
        var defered = Q.defer();
        db.query("select sum(status) as score, count(*) as total from `system_td`  where status = 1 ",defered.makeNodeResolver());
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

      /********************************************  center graph month wise  *********************************************/

      router.post("/center_chart_data", function (req, res, next) {
        let and = false;
        let where = false;
        let body = req.body;
        // console.log(body);
        let sql = "select  score from `score_history`";
        if ("uname" in body) {
          if (where == false) {
            sql += " where";
          }
          sql += ' qoname="' + body["uname"] + '"';
          and = true;
          where = true;
        }
        if ("group" in body) {
          if (where == false) {
            sql += " where";
          }
          if (and == true) {
            sql += " and";
          }
          sql += ' groupname="' + body["group"] + '"';
          and = true;
          where = true;
        }
        if ("score" in body) {
          if (where == false) {
            sql += " where";
          }
          if (and == true) {
            sql += " and";
          }
          sql += " score=" + body["score"];
          and = true;
          where = true;
        }
        let fromDate;
        let toDate;
        if ("fromDate" in body && "toDate" in body) {
          fromDate =
            "'" +
            body["fromDate"]["year"] +
            "-" +
            body["fromDate"]["month"] +
            "-" +
            body["fromDate"]["day"] +
            "'";
          toDate =
            "'" +
            body["toDate"]["year"] +
            "-" +
            body["toDate"]["month"] +
            "-" +
            body["toDate"]["day"] +
            "'";
          if (where == false) {
            sql += " where";
          }
          if (and == true) {
            sql += " and";
          }
          sql +=
            " created BETWEEN CAST(" +
            fromDate +
            " AS DATE) AND CAST(" +
            toDate +
            " AS DATE)";
          and = true;
          where = true;
        }
        if ("security_practice" in body) {
          if (where == false) {
            sql += " where";
          }
          if (and == true) {
            sql += " and";
          }
          sql += ' secpractice="' + body["security_practice"] + '"';
        }
        // console.log("sql", sql);
        db.query(sql, (err, results) => {
          // console.log(results);
          res.json({success: true, idfilterall: results});
          if (err) throw err;
        });
      });


     // ---------------------------------------------------------   hours -----------------------------------------//
     router.get('/hours',function(req,res){
      function fun1(){
        var defered = Q.defer();
        sql="SELECT sum(DATE_FORMAT(created, '%H'))  as `time` from score_history where groupname = 'Access Control' and created <= Date_sub(now(),interval 1 hour) ";

        db.query(sql,defered.makeNodeResolver());
        return defered.promise;
      }

      function fun2(){
        var defered = Q.defer();
        sql2="SELECT sum(DATE_FORMAT(created, '%H'))  as `time` from score_history where groupname = 'Information Security Policies ' and created <= Date_sub(now(),interval 1 hour) ";

        db.query(sql2,defered.makeNodeResolver());
        return defered.promise;
      }
      function fun3(){
        var defered = Q.defer();
        sql="SELECT sum(DATE_FORMAT(created, '%H'))  as `time` from score_history where groupname = 'Organisation of information security        ' and created <= Date_sub(now(),interval 1 hour) ";

        db.query(sql,defered.makeNodeResolver());
        return defered.promise;
      }

      function fun4(){
        var defered = Q.defer();
        sql2="SELECT sum(DATE_FORMAT(created, '%H'))  as `time` from score_history where groupname = 'Human resources security        ' and created <= Date_sub(now(),interval 1 hour) ";

        db.query(sql2,defered.makeNodeResolver());
        return defered.promise;
      }
      function fun5(){
        var defered = Q.defer();
        sql="SELECT sum(DATE_FORMAT(created, '%H'))  as `time` from score_history where groupname = 'Asset management        ' and created <= Date_sub(now(),interval 1 hour) ";

        db.query(sql,defered.makeNodeResolver());
        return defered.promise;
      }

      function fun6(){
        var defered = Q.defer();
        sql2="SELECT sum(DATE_FORMAT(created, '%H'))  as `time` from score_history where groupname = 'Cryptography        ' and created <= Date_sub(now(),interval 1 hour) ";

        db.query(sql2,defered.makeNodeResolver());
        return defered.promise;
      }
      function fun7(){
        var defered = Q.defer();
        sql="SELECT sum(DATE_FORMAT(created, '%H'))  as `time` from score_history where groupname = 'Physical and environmental security        ' and created <= Date_sub(now(),interval 1 hour) ";

        db.query(sql,defered.makeNodeResolver());
        return defered.promise;
      }

      function fun8(){
        var defered = Q.defer();
        sql2="SELECT sum(DATE_FORMAT(created, '%H'))  as `time` from score_history where groupname = 'Operations security        ' and created <= Date_sub(now(),interval 1 hour) ";

        db.query(sql2,defered.makeNodeResolver());
        return defered.promise;
      }
      function fun9(){
        var defered = Q.defer();
        sql="SELECT sum(DATE_FORMAT(created, '%H'))  as `time` from score_history where groupname = 'Communications security        ' and created <= Date_sub(now(),interval 1 hour) ";

        db.query(sql,defered.makeNodeResolver());
        return defered.promise;
      }

      function fun10(){
        var defered = Q.defer();
        sql2="SELECT sum(DATE_FORMAT(created, '%H'))  as `time` from score_history where groupname = 'System acquisition, development and maintenance        ' and created <= Date_sub(now(),interval 1 hour) ";

        db.query(sql2,defered.makeNodeResolver());
        return defered.promise;
      }
      function fun11(){
        var defered = Q.defer();
        sql="SELECT sum(DATE_FORMAT(created, '%H'))  as `time` from score_history where groupname = 'Supplier relationships        ' and created <= Date_sub(now(),interval 1 hour) ";

        db.query(sql,defered.makeNodeResolver());
        return defered.promise;
      }

      function fun12(){
        var defered = Q.defer();
        sql2="SELECT sum(DATE_FORMAT(created, '%H'))  as `time` from score_history where groupname = 'Information security incident management  ' and created <= Date_sub(now(),interval 1 hour) ";

        db.query(sql2,defered.makeNodeResolver());
        return defered.promise;
      }
      function fun13(){
        var defered = Q.defer();
        sql="SELECT sum(DATE_FORMAT(created, '%H'))  as `time` from score_history where groupname = 'Information security aspects of business continuity management  ' and created <= Date_sub(now(),interval 1 hour) ";

        db.query(sql,defered.makeNodeResolver());
        return defered.promise;
      }

      function fun14(){
        var defered = Q.defer();
        sql2="SELECT sum(DATE_FORMAT(created, '%H'))  as `time` from score_history where groupname = 'Compliance        ' and created <= Date_sub(now(),interval 1 hour) ";

        db.query(sql2,defered.makeNodeResolver());
        return defered.promise;
      }
      Q.all([fun1(),fun2(),fun3(),fun4(),fun5(),fun6(),fun7(),fun8(),fun9(),fun10(),fun11(),fun12(),fun13(),fun14()]).then(function(results){
         access = results[0][0][0].time;
         info = results[1][0][0].time;
         org = results[2][0][0].time;
         human = results[3][0][0].time;
         asset = results[4][0][0].time;
         crypto = results[5][0][0].time;
         phy =results[6][0][0].time;
         ope = results[7][0][0].time;
         comm = results[8][0][0].time;
         sys = results[9][0][0].time;
         sup =results[10][0][0].time;
         isim = results[11][0][0].time;
         isabcm = results[12][0][0].time;
         comp = results[13][0][0].time;

        res.json({success:true ,access : access,  info :  info , org  : org ,human : human,asset :asset,crypto :crypto,phy:phy,ope:ope,comm:comm,sys:sys,sup:sup,isim:isim,isabcm:isabcm,comp:comp});
      }); });


       // ---------------------------------------------------------  card persentage -----------------------------------------//

      router.get('/persentage',function(req,res){
        function fun1(){
          var defered = Q.defer();
          sql="SELECT sum(score)  as score from score_history where groupname = 'Access Control' and YEAR(created) ";

          db.query(sql,defered.makeNodeResolver());
          return defered.promise;
        }
        function fun2(){
          var defered = Q.defer();
          sql2="SELECT sum(score)  as score from score_history where groupname = 'Information Security Policies ' and YEAR(created) ";

          db.query(sql2,defered.makeNodeResolver());
          return defered.promise;
        }
        function fun3(){
          var defered = Q.defer();
          sql="SELECT sum(score)  as score from score_history where groupname = 'Organisation of information security        ' and YEAR(created) ";

          db.query(sql,defered.makeNodeResolver());
          return defered.promise;
        }

        function fun4(){
          var defered = Q.defer();
          sql2="SELECT sum(score)  as score from score_history where groupname = 'Human resources security        ' and YEAR(created) ";

          db.query(sql2,defered.makeNodeResolver());
          return defered.promise;
        }
        function fun5(){
          var defered = Q.defer();
          sql="SELECT sum(score)  as score from score_history  where groupname = 'Asset management        ' and YEAR(created) ";

          db.query(sql,defered.makeNodeResolver());
          return defered.promise;
        }

        function fun6(){
          var defered = Q.defer();
          sql2="SELECT sum(score)  as score from score_history  where groupname = 'Cryptography  ' and YEAR(created) ";
           //console.log(sql2);
          db.query(sql2,defered.makeNodeResolver());
          return defered.promise;
        }
        function fun7(){
          var defered = Q.defer();
          sql="SELECT sum(score)  as score from score_history where groupname = 'Physical and environmental security ' and YEAR(created) ";

          db.query(sql,defered.makeNodeResolver());
          return defered.promise;
        }

        function fun8(){
          var defered = Q.defer();
          sql2="SELECT sum(score)  as score from score_history where groupname = 'Operations security  ' and YEAR(created) ";

          db.query(sql2,defered.makeNodeResolver());
          return defered.promise;
        }
        function fun9(){
          var defered = Q.defer();
          sql="SELECT sum(score)  as score  from score_history where groupname = 'Communications security   ' and YEAR(created) ";

          db.query(sql,defered.makeNodeResolver());
          return defered.promise;
        }

        function fun10(){
          var defered = Q.defer();
          sql2="SELECT sum(score)  as score from score_history  where groupname = 'System acquisition, development and maintenance  ' and YEAR(created) ";

          db.query(sql2,defered.makeNodeResolver());
          return defered.promise;
        }
        function fun11(){
          var defered = Q.defer();
          sql="SELECT sum(score)  as score from score_history where groupname = 'Supplier relationships' and YEAR(created) ";

          db.query(sql,defered.makeNodeResolver());
          return defered.promise;
        }

        function fun12(){
          var defered = Q.defer();
          sql2="SELECT sum(score)  as score  from score_history where groupname = 'Information security incident management  ' and YEAR(created) ";

          db.query(sql2,defered.makeNodeResolver());
          return defered.promise;
        }
        function fun13(){
          var defered = Q.defer();
          sql="SELECT sum(score)  as score from score_history where groupname = 'Information security aspects of business continuity management  ' and YEAR(created) ";

          db.query(sql,defered.makeNodeResolver());
          return defered.promise;
        }

        function fun14(){
          var defered = Q.defer();
          sql2="SELECT sum(score)  as score from score_history  where groupname = 'Compliance' and YEAR(created) ";

          db.query(sql2,defered.makeNodeResolver());
          return defered.promise;
        }
        Q.all([fun1(),fun2(),fun3(),fun4(),fun5(),fun6(),fun7(),fun8(),fun9(),fun10(),fun11(),fun12(),fun13(),fun14()]).then(function(results){
          access = Math.round(results[0][0][0].score);
          info = Math.round(results[1][0][0].score);
          org = Math.round(results[2][0][0].score);
          human = Math.round(results[3][0][0].score);
          asset = Math.round(results[4][0][0].score);
          crypto = Math.round(results[5][0][0].score);
          phy =Math.round(results[6][0][0].score);
          ope = Math.round(results[7][0][0].score);
          comm = Math.round(results[8][0][0].score);
          sys = Math.round(results[9][0][0].score);
          sup = Math.round(results[10][0][0].score);
          isim = Math.round(results[11][0][0].score);
          isabcm = Math.round(results[12][0][0].score);
          comp = Math.round(results[13][0][0].score);
          access1 = 1; info1 =1; org1 =1; human1 = 1; asset1 = 1; crypto1 = 1;  phy1 =1; ope1= 1; comm1 =1; sys1 =1; sup1 =1; isim1 = 1; isabcm1 = 1; comp1 = 1;
// console.log(results);
         res.json({success:true ,access : access, info : info , org  : org ,human : human,asset :asset,crypto :crypto,phy:phy,ope:ope,comm:comm,
           sys:sys,sup:sup,isim:isim,isabcm:isabcm,comp:comp,access1:access1,info1:info1,org1:org1,human1:human1,asset1:asset1,crypto1:crypto1,phy1:phy1,
           ope1:ope1,comm1:comm1,sys1:sys1,sup1:sup1,isim1:isim1,isabcm1:isabcm1,comp1:comp1});
       }); });



module.exports = router;

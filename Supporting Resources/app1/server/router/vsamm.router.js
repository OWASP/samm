const express = require('express');
const router = express.Router();
var Q = require('Q');
//const ctrlUser = require('../controllers/user.controller');
var secret = 'harrypotter';
var nodemailer = require('nodemailer');
var db=require('../db/config_vsamm');
var jwt = require('jsonwebtoken');
var multer = require('multer');
var path=require("path");
const Speakeasy = require("speakeasy");
var fs = require('fs');
const  multipart  =  require('connect-multiparty');
const  multipartMiddleware  =  multipart({ uploadDir:  './uploads' });
var bcrypt = require('bcryptjs');
//===================================RTC CORONA==========================================
router.get('/rtc_corona', function (req, res) 
{
 //console.log('hi');
  function Governance(){
    var defered = Q.defer();
    sql="SELECT round(avg(Jan),2) as Jan,round(avg(Feb),2) as Feb, round(avg(Mar),2) as Mar,round(avg(Apr),2) as Apr, round(avg(May),2) as May,round(avg(Jun),2) as Jun, round(avg(Jul),2) as Jul,round(avg(Aug),2) as Aug, round(avg(Sep),2) as Sep, round(avg(Oct),2) as Oct, round(avg(Nov),2) as Nov,round(avg(`Dec`),2) as `Dec` FROM `history` WHERE groupname='Governance'   ";
    //console.log(sql);
    db.query(sql,defered.makeNodeResolver());
    return defered.promise;
  }
  function Design(){
    var defered = Q.defer();
    sql="SELECT round(avg(Jan),2) as Jan,round(avg(Feb),2) as Feb, round(avg(Mar),2) as Mar,round(avg(Apr),2) as Apr, round(avg(May),2) as May,round(avg(Jun),2) as Jun, round(avg(Jul),2) as Jul,round(avg(Aug),2) as Aug, round(avg(Sep),2) as Sep, round(avg(Oct),2) as Oct, round(avg(Nov),2) as Nov,round(avg(`Dec`),2) as `Dec` FROM `history` WHERE groupname='Design'   ";
    
    //console.log(sql);
    db.query(sql,defered.makeNodeResolver());
    return defered.promise;
  }
 function Implementation(){
    var defered = Q.defer();
    sql="SELECT round(avg(Jan),2) as Jan,round(avg(Feb),2) as Feb, round(avg(Mar),2) as Mar,round(avg(Apr),2) as Apr, round(avg(May),2) as May,round(avg(Jun),2) as Jun, round(avg(Jul),2) as Jul,round(avg(Aug),2) as Aug, round(avg(Sep),2) as Sep, round(avg(Oct),2) as Oct, round(avg(Nov),2) as Nov,round(avg(`Dec`),2) as `Dec` FROM `history` WHERE groupname='Implementation'   ";
    
    //console.log(sql);
    db.query(sql,defered.makeNodeResolver());
    return defered.promise;
  }
  function Verification(){
    var defered = Q.defer();
    sql="SELECT round(avg(Jan),2) as Jan,round(avg(Feb),2) as Feb, round(avg(Mar),2) as Mar,round(avg(Apr),2) as Apr, round(avg(May),2) as May,round(avg(Jun),2) as Jun, round(avg(Jul),2) as Jul,round(avg(Aug),2) as Aug, round(avg(Sep),2) as Sep, round(avg(Oct),2) as Oct, round(avg(Nov),2) as Nov,round(avg(`Dec`),2) as `Dec` FROM `history` WHERE groupname='Verification'   ";
    
    //console.log(sql);
    db.query(sql,defered.makeNodeResolver());
    return defered.promise;
  }
  function Operations(){
    var defered = Q.defer();
    sql="SELECT round(avg(Jan),2) as Jan,round(avg(Feb),2) as Feb, round(avg(Mar),2) as Mar,round(avg(Apr),2) as Apr, round(avg(May),2) as May,round(avg(Jun),2) as Jun, round(avg(Jul),2) as Jul,round(avg(Aug),2) as Aug, round(avg(Sep),2) as Sep, round(avg(Oct),2) as Oct, round(avg(Nov),2) as Nov,round(avg(`Dec`),2) as `Dec` FROM `history` WHERE groupname='Operations'   ";
    
    //console.log(sql);
    db.query(sql,defered.makeNodeResolver());
    return defered.promise;
  }
  Q.all([Governance(),Design(),Implementation(),Verification(),Operations()]).then(function(results){
    console.log('results[0][0]')
    
    res.json({success:true, 
      //current month, eg: March
      Jan:results[0][0][0].Jan+results[1][0][0].Jan+results[2][0][0].Jan+results[3][0][0].Jan+results[4][0][0].Jan,
      Feb:results[0][0][0].Feb+results[1][0][0].Feb+results[2][0][0].Feb+results[3][0][0].Feb+results[4][0][0].Feb,
      Mar:results[0][0][0].Mar+results[1][0][0].Mar+results[2][0][0].Mar+results[3][0][0].Mar+results[4][0][0].Mar,
      Apr:results[0][0][0].Apr+results[1][0][0].Apr+results[2][0][0].Apr+results[3][0][0].Apr+results[4][0][0].Apr,
      May:results[0][0][0].May+results[1][0][0].May+results[2][0][0].May+results[3][0][0].May+results[4][0][0].May,
      Jun:results[0][0][0].Jun+results[1][0][0].Jun+results[2][0][0].Jun+results[3][0][0].Jun+results[4][0][0].Jun,
      Jul:results[0][0][0].Jul+results[1][0][0].Jul+results[2][0][0].Jul+results[3][0][0].Jul+results[4][0][0].Jul,
      Aug:results[0][0][0].Aug+results[1][0][0].Aug+results[2][0][0].Aug+results[3][0][0].Aug+results[4][0][0].Aug,
      Sep:results[0][0][0].Sep+results[1][0][0].Sep+results[2][0][0].Sep+results[3][0][0].Sep+results[4][0][0].Sep,
      Oct:results[0][0][0].Oct+results[1][0][0].Oct+results[2][0][0].Oct+results[3][0][0].Oct+results[4][0][0].Oct,
      Nov:results[0][0][0].Nov+results[1][0][0].Nov+results[2][0][0].Nov+results[3][0][0].Nov+results[4][0][0].Nov,
      Dec:results[0][0][0].Dec+results[1][0][0].Dec+results[2][0][0].Dec+results[3][0][0].Dec+results[4][0][0].Dec,
    });
  });
});
router.get('/rtc_corona_jdsjk', function (req, res) 
{
 //console.log('hi');
  function Jan(){
    var defered = Q.defer();
    sql="SELECT round(sum(Jan),2) as Jan FROM `history`  ";
    //console.log(sql);
    db.query(sql,defered.makeNodeResolver());
    return defered.promise;
  }
  function Feb(){
    var defered = Q.defer();
    sql="SELECT round(sum(Feb),2) as Feb FROM `history`  ";
    //console.log(sql);
    db.query(sql,defered.makeNodeResolver());
    return defered.promise;
  }
 function Mar(){
    var defered = Q.defer();
    sql="SELECT round(sum(Mar),2) as Mar FROM `history`  ";
    //console.log(sql);
    db.query(sql,defered.makeNodeResolver());
    return defered.promise;
  }
  function Apr(){
    var defered = Q.defer();
    sql="SELECT round(sum(Apr),2) as Apr FROM `history`  ";
    //console.log(sql);
    db.query(sql,defered.makeNodeResolver());
    return defered.promise;
  }
  function May(){
    var defered = Q.defer();
    sql="SELECT round(sum(May),2) as May FROM `history`  ";
    //console.log(sql);
    db.query(sql,defered.makeNodeResolver());
    return defered.promise;
  }
  function Jun(){
    var defered = Q.defer();
    sql="SELECT round(sum(Jun),2) as Jun FROM `history`  ";
    //console.log(sql);
    db.query(sql,defered.makeNodeResolver());
    return defered.promise;
  }
   function Jul(){
    var defered = Q.defer();
    sql="SELECT round(sum(Jul),2) as Jul FROM `history`  ";
    //console.log(sql);
    db.query(sql,defered.makeNodeResolver());
    return defered.promise;
  }
  function Aug(){
    var defered = Q.defer();
    sql="SELECT round(sum(Aug),2) as Aug FROM `history`  ";
    //console.log(sql);
    db.query(sql,defered.makeNodeResolver());
    return defered.promise;
  }
  function Sep(){
    var defered = Q.defer();
    sql="SELECT round(sum(Sep),2) as Sep FROM `history`  ";
    //console.log(sql);
    db.query(sql,defered.makeNodeResolver());
    return defered.promise;
  }
  function Oct(){
    var defered = Q.defer();
    sql="SELECT round(sum(Oct),2) as Oct FROM `history`  ";
    //console.log(sql);
    db.query(sql,defered.makeNodeResolver());
    return defered.promise;
  }
  function Nov(){
    var defered = Q.defer();
    sql="SELECT round(sum(Nov),2) as Nov FROM `history`  ";
    //console.log(sql);
    db.query(sql,defered.makeNodeResolver());
    return defered.promise;
  }
  function Dec(){
    var defered = Q.defer();
    sql="SELECT round(sum(`Dec`),2) as Dece FROM `history`  ";
    //console.log(sql);
    db.query(sql,defered.makeNodeResolver());
    return defered.promise;
  }
  Q.all([Jan(),Feb(),Mar(),Apr(),May(),Jun(),
  Jul(),Aug(),Sep(),Oct(),Nov(),Dec()]).then(function(results){
    console.log('results[0][0]')
  
    res.json({success:true, 
      //current month, eg: March
      Jan:results[0][0][0].Jan,
      Feb:results[1][0][0].Feb,
      Mar:results[2][0][0].Mar,
     Apr:results[3][0][0].Apr,
      May:results[4][0][0].May,
      Jun:results[5][0][0].Jun,
      Jul:results[6][0][0].Jul,
      Aug:results[7][0][0].Aug,
      Sep:results[8][0][0].Sep,
     Oct:results[9][0][0].Oct,
      Nov:results[10][0][0].Nov,
      Dece:results[11][0][0].Dece
      
    });
  });
});
//=================================first & second graph of governance=========================================
router.post('/last_graph_gover', function (req, res) 
{
  var d = new Date();
  var curr =[];
  var c,p,f;
  curr[0]= d.getMonth();
  curr[1] = d.getMonth()-1;
  curr[2] = d.getMonth()-2;
  if(curr[0]==0)
  {
      curr[1]=11;
      curr[2]=10;
  }
  if(curr[0]==1)
  {
      curr[1]=0;
      curr[2]=11;
  }
  for(var i=0;i<3;i++)
  {
      if(curr[i]==0)
          curr[i]='Jan'
      else if(curr[i]==1)
          curr[i]='Feb'
      else if(curr[i]==2)
          curr[i]='Mar'
      else if(curr[i]==3)
          curr[i]='Apr'
      else if(curr[i]==4)
          curr[i]='May'
      else if(curr[i]==5)
          curr[i]='Jun'
      else if(curr[i]==6)
          curr[i]='Jul'
      else if(curr[i]==7)
          curr[i]='Aug'
      else if(curr[i]==8)
          curr[i]='Sep'
      else if(curr[i]==9)
          curr[i]='Oct'
      else if(curr[i]==10)
          curr[i]='Nov'
      else if(curr[i]==11)
          curr[i]='Dec'
  }
  function third_graph_score(){
    var defered = Q.defer();
    sql="SELECT "+curr[2]+","+curr[1]+", "+curr[0]+" FROM `history` WHERE groupname='Governance' and secpractice='"+req.body.secpractice+"' ";
    //console.log(sql);
    db.query(sql,defered.makeNodeResolver());
    return defered.promise;
  }
  Q.all([third_graph_score()]).then(function(results){
    var mon=[];
    for(var i=0;i<3;i++)
    {
    if(curr[i]=='Jan')
          mon[i]=results[0][0][0].Jan;
      else if(curr[i]=='Feb')
      mon[i]=results[0][0][0].Feb;
      else if(curr[i]=='Mar')
      mon[i]=results[0][0][0].Mar;
      else if(curr[i]=='Apr')
      mon[i]=results[0][0][0].Apr;
      else if(curr[i]=='May')
      mon[i]=results[0][0][0].May;
      else if(curr[i]='Jun')
      mon[i]=results[0][0][0].Jun
      else if(curr[i]=='Jul')
      mon[i]=results[0][0][0].Jul;
      else if(curr[i]=='Aug')
      mon[i]=results[0][0][0].Aug;
      else if(curr[i]=='Sep')
      mon[i]=results[0][0][0].Sep;
      else if(curr[i]=='Oct')
      mon[i]=results[0][0][0].Oct;
      else if(curr[i]=='Nov')
      mon[i]=results[0][0][0].Nov;
      else if(curr[i]=='Dec')
      mon[i]=results[0][0][0].Dec;
    //console.log(results[0][0][0].Mar);
    if(mon[i]==null)

      {
        mon[i]=0
      }
    }
    res.json({success:true, month_pre:curr[0],month_before_1: curr[1], month_before_2: curr[2],
                            score_cur:mon[0], score_before_1:mon[1],score_before_2:mon[2]});
  });
});
router.get('/gover_first_graph', function (req, res) {
  //==========================================GOVERNANCE==============================================================================
    function strategy_maturity_1(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM governance_strategy WHERE maturity_level=1",defered.makeNodeResolver());
        return defered.promise;
      }
      function  strategy_maturity_2(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM governance_strategy WHERE maturity_level=2",defered.makeNodeResolver());
        return defered.promise;
      }
      function  strategy_maturity_3(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM governance_strategy WHERE maturity_level=3",defered.makeNodeResolver());
        return defered.promise;
      }
      function education_maturity_1(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM governance_education WHERE maturity_level=1",defered.makeNodeResolver());
        return defered.promise;
      }
      function education_maturity_2(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM governance_education WHERE maturity_level=2",defered.makeNodeResolver());
        return defered.promise;
      }
      function education_maturity_3(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM governance_education WHERE maturity_level=3",defered.makeNodeResolver());
        return defered.promise;
      }
      function policy_maturity_1(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM governance_policy WHERE maturity_level=1",defered.makeNodeResolver());
        return defered.promise;
      }
      function policy_maturity_2(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM governance_policy WHERE maturity_level=2",defered.makeNodeResolver());
        return defered.promise;
      }
      function policy_maturity_3(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM governance_policy WHERE maturity_level=3",defered.makeNodeResolver());
        return defered.promise;
      }
      //===================================Design========================================================================
      function threat_maturity_1(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM design_threat WHERE maturity_level=1",defered.makeNodeResolver());
        return defered.promise;
      }
      function  threat_maturity_2(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM design_threat WHERE maturity_level=2",defered.makeNodeResolver());
        return defered.promise;
      }
      function  threat_maturity_3(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM design_threat WHERE maturity_level=3",defered.makeNodeResolver());
        return defered.promise;
      }
      function security_maturity_1(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM design_security WHERE maturity_level=1",defered.makeNodeResolver());
        return defered.promise;
      }
      function security_maturity_2(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM design_security WHERE maturity_level=2",defered.makeNodeResolver());
        return defered.promise;
      }
      function security_maturity_3(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM design_security WHERE maturity_level=3",defered.makeNodeResolver());
        return defered.promise;
      }
      function secure_arch_maturity_1(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM design_secure_arch WHERE maturity_level=1",defered.makeNodeResolver());
        return defered.promise;
      }
      function secure_arch_maturity_2(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM design_secure_arch WHERE maturity_level=2",defered.makeNodeResolver());
        return defered.promise;
      }
      function secure_arch_maturity_3(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM design_secure_arch WHERE maturity_level=3",defered.makeNodeResolver());
        return defered.promise;
      }
      //==================================IMPLEMENTATION========================================
      function defect_maturity_1(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM implement_defect WHERE maturity_level=1",defered.makeNodeResolver());
        return defered.promise;
      }
      function  defect_maturity_2(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM implement_defect WHERE maturity_level=2",defered.makeNodeResolver());
        return defered.promise;
      }
      function  defect_maturity_3(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM implement_defect WHERE maturity_level=3",defered.makeNodeResolver());
        return defered.promise;
      }
      function secure_build_maturity_1(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM implement_secure_build WHERE maturity_level=1",defered.makeNodeResolver());
        return defered.promise;
      }
      function secure_build_maturity_2(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM implement_secure_build WHERE maturity_level=2",defered.makeNodeResolver());
        return defered.promise;
      }
      function secure_build_maturity_3(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM implement_secure_build WHERE maturity_level=3",defered.makeNodeResolver());
        return defered.promise;
      }
      function secure_deploy_maturity_1(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM implement_secure_deploy WHERE maturity_level=1",defered.makeNodeResolver());
        return defered.promise;
      }
      function secure_deploy_maturity_2(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM implement_secure_deploy WHERE maturity_level=2",defered.makeNodeResolver());
        return defered.promise;
      }
      function secure_deploy_maturity_3(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM implement_secure_deploy WHERE maturity_level=3",defered.makeNodeResolver());
        return defered.promise;
      }
      //==================================VERIFICATION========================================
      function verify_arch_maturity_1(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM verify_arch WHERE maturity_level=1",defered.makeNodeResolver());
        return defered.promise;
      }
      function  verify_arch_maturity_2(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM verify_arch WHERE maturity_level=2",defered.makeNodeResolver());
        return defered.promise;
      }
      function  verify_arch_maturity_3(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM verify_arch WHERE maturity_level=3",defered.makeNodeResolver());
        return defered.promise;
      }
      function verify_requirement_maturity_1(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM verify_requirement WHERE maturity_level=1",defered.makeNodeResolver());
        return defered.promise;
      }
      function verify_requirement_maturity_2(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM verify_requirement WHERE maturity_level=2",defered.makeNodeResolver());
        return defered.promise;
      }
      function verify_requirement_maturity_3(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM verify_requirement WHERE maturity_level=3",defered.makeNodeResolver());
        return defered.promise;
      }
      function verify_security_maturity_1(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM verify_security WHERE maturity_level=1",defered.makeNodeResolver());
        return defered.promise;
      }
      function verify_security_maturity_2(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM verify_security WHERE maturity_level=2",defered.makeNodeResolver());
        return defered.promise;
      }
      function verify_security_maturity_3(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM verify_security WHERE maturity_level=3",defered.makeNodeResolver());
        return defered.promise;
      }
      //==================================OPERATION========================================
      function operate_environment_maturity_1(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM operate_environment WHERE maturity_level=1",defered.makeNodeResolver());
        return defered.promise;
      }
      function  operate_environment_maturity_2(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM operate_environment WHERE maturity_level=2",defered.makeNodeResolver());
        return defered.promise;
      }
      function  operate_environment_maturity_3(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM operate_environment WHERE maturity_level=3",defered.makeNodeResolver());
        return defered.promise;
      }
      function operate_incident_maturity_1(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM operate_incident WHERE maturity_level=1",defered.makeNodeResolver());
        return defered.promise;
      }
      function operate_incident_maturity_2(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM operate_incident WHERE maturity_level=2",defered.makeNodeResolver());
        return defered.promise;
      }
      function operate_incident_maturity_3(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM operate_incident WHERE maturity_level=3",defered.makeNodeResolver());
        return defered.promise;
      }
      function operate_operational_maturity_1(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM operate_operational WHERE maturity_level=1",defered.makeNodeResolver());
        return defered.promise;
      }
      function operate_operational_maturity_2(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM operate_operational WHERE maturity_level=2",defered.makeNodeResolver());
        return defered.promise;
      }
      function operate_operational_maturity_3(){
        var defered = Q.defer();
        db.query("SELECT avg(status) as rating FROM operate_operational WHERE maturity_level=3",defered.makeNodeResolver());
        return defered.promise;
      }
      //===============================================================================================================================
      Q.all([
      strategy_maturity_1(),strategy_maturity_2(),strategy_maturity_3(),
      education_maturity_1(),education_maturity_2(),education_maturity_3(),
      policy_maturity_1(),policy_maturity_2(),policy_maturity_3(),
        threat_maturity_1(),threat_maturity_2(),threat_maturity_3(),
        security_maturity_1(),security_maturity_2(),security_maturity_3(),
        secure_arch_maturity_1(),secure_arch_maturity_2(),secure_arch_maturity_3(),
      defect_maturity_1(),defect_maturity_2(),defect_maturity_3(),
      secure_build_maturity_1(),secure_build_maturity_2(),secure_build_maturity_3(),
      secure_deploy_maturity_1(),secure_deploy_maturity_2(),secure_deploy_maturity_3(),
        defect_maturity_1(),defect_maturity_2(),defect_maturity_3(),
        secure_build_maturity_1(),secure_build_maturity_2(),secure_build_maturity_3(),
        secure_deploy_maturity_1(),secure_deploy_maturity_2(),secure_deploy_maturity_3(),
      verify_arch_maturity_1(),verify_arch_maturity_2(),verify_arch_maturity_3(),
      verify_requirement_maturity_1(),verify_requirement_maturity_2(),verify_requirement_maturity_3(),
      verify_security_maturity_1(),verify_security_maturity_2(),verify_security_maturity_3(),
        operate_environment_maturity_1(),operate_environment_maturity_2(),operate_environment_maturity_3(),
        operate_incident_maturity_1(),operate_incident_maturity_2(),operate_incident_maturity_3(),
        operate_operational_maturity_1(),operate_operational_maturity_2(),operate_operational_maturity_3()
      ]).then(function(results){
        //======================================GOVERNANCE STRATEGY=========================================================
        var strategy_level_1=results[0][0][0].rating;
        var strategy_level_2=results[1][0][0].rating;
        var strategy_level_3=results[2][0][0].rating;
        var strategy_rating=parseFloat((strategy_level_1+strategy_level_2+strategy_level_3).toFixed(2));
        //========================================GOVERNANCE EDUCATION=======================================================
        var education_level_1=results[3][0][0].rating;
        var education_level_2=results[4][0][0].rating;
        var education_level_3=results[5][0][0].rating;
        var education_rating=parseFloat((education_level_1+education_level_2+education_level_3).toFixed(2));
        //=========================================GOVERNANCE POLICY======================================================
        var policy_level_1=results[6][0][0].rating;
        var policy_level_2=results[7][0][0].rating;
        var policy_level_3=results[8][0][0].rating;
        var policy_rating=parseFloat((policy_level_1+policy_level_2+policy_level_3).toFixed(2));
        //============================================GOVERNANCE===================================================
        var governance_corona=strategy_rating+ education_rating+ policy_rating;
        var governance=parseFloat(((strategy_rating+ education_rating+ policy_rating)/3).toFixed(2));
        //============================================DESIGN THREAT========================================================
        var threat_level_1=results[9][0][0].rating;
        var threat_level_2=results[10][0][0].rating;
        var threat_level_3=results[11][0][0].rating;
        var threat_rating=parseFloat((threat_level_1+threat_level_2+threat_level_3).toFixed(2));
        //=============================================DESIGN SECURITY======================================================
        var security_level_1=results[12][0][0].rating;
        var security_level_2=results[13][0][0].rating;
        var security_level_3=results[14][0][0].rating;
        var security_rating=parseFloat((security_level_1+security_level_2+security_level_3).toFixed(2));
        //================================================DESIGN SECURE ARCHITECTURE===================================================
        var secure_arch_level_1=results[15][0][0].rating;
        var secure_arch_level_2=results[16][0][0].rating;
        var secure_arch_level_3=results[17][0][0].rating;
        var secure_arch_rating=parseFloat((secure_arch_level_1+secure_arch_level_2+secure_arch_level_3).toFixed(2)); 
        //============================================DESIGN===================================================
        var design_corona=threat_rating+ security_rating+ secure_arch_rating;
        var design=parseFloat(((threat_rating+ security_rating+ secure_arch_rating)/3).toFixed(2));
//------------------------------------------------------------------------------------------------------------------------------------------------------
          //============================================IMPLEMENTATION DEFECT========================================================
          var defect_level_1=results[18][0][0].rating;
          var defect_level_2=results[19][0][0].rating;
          var defect_level_3=results[20][0][0].rating;
          var defect_rating=parseFloat((defect_level_1+defect_level_2+defect_level_3).toFixed(2));
          //=============================================IMPLEMENTATION secure_build======================================================
          var secure_build_level_1=results[21][0][0].rating;
          var secure_build_level_2=results[22][0][0].rating;
          var secure_build_level_3=results[23][0][0].rating;
          var secure_build_rating=parseFloat((secure_build_level_1+secure_build_level_2+secure_build_level_3).toFixed(2));
          //================================================IMPLEMENTATION secure_deploy===================================================
          var secure_deploy_level_1=results[24][0][0].rating;
          var secure_deploy_level_2=results[25][0][0].rating;
          var secure_deploy_level_3=results[26][0][0].rating;
          var secure_deploy_rating=parseFloat((secure_deploy_level_1+secure_deploy_level_2+secure_deploy_level_3).toFixed(2)); 
          //============================================IMPLEMENTATION===================================================
          var implementation=parseFloat(((defect_rating+ secure_build_rating+ secure_deploy_rating)/3).toFixed(2));
          var implementation_corona=defect_rating+ secure_build_rating+ secure_deploy_rating;
          //------------------------------------------------------------------------------------------------------------------------------------------------------
          //============================================VERIFICATION verify_arch========================================================
          var verify_arch_level_1=results[27][0][0].rating;
          var verify_arch_level_2=results[28][0][0].rating;
          var verify_arch_level_3=results[29][0][0].rating;
          var verify_arch_rating=parseFloat((verify_arch_level_1+verify_arch_level_2+verify_arch_level_3).toFixed(2));
          //=============================================VERIFICATION verify_requirement======================================================
          var verify_requirement_level_1=results[30][0][0].rating;
          var verify_requirement_level_2=results[31][0][0].rating;
          var verify_requirement_level_3=results[32][0][0].rating;
          var verify_requirement_rating=parseFloat((verify_requirement_level_1+verify_requirement_level_2+verify_requirement_level_3).toFixed(2));
          //================================================VERIFICATION verify_security===================================================
          var verify_security_level_1=results[33][0][0].rating;
          var verify_security_level_2=results[34][0][0].rating;
          var verify_security_level_3=results[35][0][0].rating;
          var verify_security_rating=parseFloat((verify_security_level_1+verify_security_level_2+verify_security_level_3).toFixed(2)); 
          //============================================VERIFICATION===================================================
          var verification=parseFloat(((verify_arch_rating+ verify_requirement_rating+ verify_security_rating)/3).toFixed(2));
          var verification_corona=verify_arch_rating+ verify_requirement_rating+ verify_security_rating;
          //------------------------------------------------------------------------------------------------------------------------------------------------------
          //============================================OPERATION operate_environment========================================================
          var operate_environment_level_1=results[36][0][0].rating;
          var operate_environment_level_2=results[37][0][0].rating;
          var operate_environment_level_3=results[38][0][0].rating;
          var operate_environment_rating=parseFloat((operate_environment_level_1+operate_environment_level_2+operate_environment_level_3).toFixed(2));
          //=============================================OPERATION operate_incident======================================================
          var operate_incident_level_1=results[39][0][0].rating;
          var operate_incident_level_2=results[40][0][0].rating;
          var operate_incident_level_3=results[41][0][0].rating;
          var operate_incident_rating=parseFloat((operate_incident_level_1+operate_incident_level_2+operate_incident_level_3).toFixed(2));
          //================================================OPERATION operate_operational===================================================
          var operate_operational_level_1=results[42][0][0].rating;
          var operate_operational_level_2=results[43][0][0].rating;
          var operate_operational_level_3=results[44][0][0].rating;
          var operate_operational_rating=parseFloat((operate_operational_level_1+operate_operational_level_2+operate_operational_level_3).toFixed(2)); 
          //============================================OPERATION===================================================
          var operational=parseFloat(((operate_environment_rating+ operate_incident_rating+ operate_operational_rating)/3).toFixed(2));
          var operational_corona=operate_environment_rating+ operate_incident_rating+ operate_operational_rating
        //==========================================RESPONSE=====================================================
        res.json({success:true,strategy_level_1:strategy_level_1,strategy_level_2:strategy_level_2,strategy_level_3:strategy_level_3,
            strategy_rating:strategy_rating,
            education_level_1:education_level_1,education_level_2:education_level_2,education_level_3:education_level_3,
            education_rating:education_rating,
            policy_level_1:policy_level_1,policy_level_2:policy_level_2,policy_level_3:policy_level_3,
            policy_rating:policy_rating,
            governance:governance,
          //===============================================
          threat_level_1:threat_level_1,threat_level_2:threat_level_2,threat_level_3:threat_level_3,
          threat_rating:threat_rating,
          security_level_1:security_level_1,security_level_2:security_level_2,security_level_3:security_level_3,
          security_rating:security_rating,
          secure_arch_level_1:secure_arch_level_1,secure_arch_level_2:secure_arch_level_2,secure_arch_level_3:secure_arch_level_3,
          secure_arch_rating:secure_arch_rating,
          design:design,
          //===============================================
          defect_level_1:defect_level_1,defect_level_2:defect_level_2,defect_level_3:defect_level_3,
          defect_rating:defect_rating,
          secure_build_level_1:secure_build_level_1,secure_build_level_2:secure_build_level_2,secure_build_level_3:secure_build_level_3,
          secure_build_rating:secure_build_rating,
          secure_deploy_level_1:secure_deploy_level_1,secure_deploy_level_2:secure_deploy_level_2,secure_deploy_level_3:secure_deploy_level_3,
          secure_deploy_rating:secure_deploy_rating,
          implementation:implementation,
          //==================================================
          verify_arch_level_1:verify_arch_level_1,verify_arch_level_2:verify_arch_level_2,verify_arch_level_3:verify_arch_level_3,
          verify_arch_rating:verify_arch_rating,
          verify_requirement_level_1:verify_requirement_level_1,verify_requirement_level_2:verify_requirement_level_2,verify_requirement_level_3:verify_requirement_level_3,
          verify_requirement_rating:verify_requirement_rating,
          verify_security_level_1:verify_security_level_1,verify_security_level_2:verify_security_level_2,verify_security_level_3:verify_security_level_3,
          verify_security_rating:verify_security_rating,
          verification:verification,
          //=======================================================
          operate_environment_level_1:operate_environment_level_1,operate_environment_level_2:operate_environment_level_2,operate_environment_level_3:operate_environment_level_3,
          operate_environment_rating:operate_environment_rating,
          operate_incident_level_1:operate_incident_level_1,operate_incident_level_2:operate_incident_level_2,operate_incident_level_3:operate_incident_level_3,
          operate_incident_rating:operate_incident_rating,
          operate_operational_level_1:operate_operational_level_1,operate_operational_level_2:operate_operational_level_2,operate_operational_level_3:operate_operational_level_3,
          operate_operational_rating:operate_operational_rating,
          operational:operational,

          governance_corona:governance_corona,design_corona:design_corona,implementation_corona:implementation_corona,verification_corona:verification_corona,operational_corona:operational_corona
        });
       });
    
});
//============================third graph of governance strategy========================================
router.get('/gover_strategy_third_graph', function (req, res) {
    function Create_and_Promote(){
        var defered = Q.defer();
        db.query("SELECT status FROM `governance_strategy` where stream='Create and Promote' order by maturity_level",defered.makeNodeResolver());
        return defered.promise;
      }
      function Measure_and_Improve(){
        var defered = Q.defer();
        db.query("SELECT status FROM `governance_strategy` where stream='Measure and Improve' order by maturity_level",defered.makeNodeResolver());
        return defered.promise;
      }
      
      Q.all([Create_and_Promote(),Measure_and_Improve()]).then(function(results){
        Create_and_Promote_l1=results[0][0][0].status;
        Create_and_Promote_l2=results[0][0][1].status;
        Create_and_Promote_l3=results[0][0][2].status
        Measure_and_Improve_l1=results[1][0][0].status;
        Measure_and_Improve_l2=results[1][0][1].status;
        Measure_and_Improve_l3=results[1][0][2].status;
         res.json({success:true,Create_and_Promote_l1:Create_and_Promote_l1,Create_and_Promote_l2:Create_and_Promote_l2,Create_and_Promote_l3:Create_and_Promote_l3,
            Measure_and_Improve_l1:Measure_and_Improve_l1,Measure_and_Improve_l2:Measure_and_Improve_l2,Measure_and_Improve_l3:Measure_and_Improve_l3});
       });
    
});
//============================strategic governance table========================================
router.get('/governance_strategy_table',function(req,res){
    function vsamm(){
      var defered = Q.defer();
      db.query("SELECT * FROM governance_strategy",defered.makeNodeResolver());
      return defered.promise;
    }
    Q.all([vsamm()]).then(function(results){
      all = results[0][0];
      res.json({success:true, "all": all});
    });
  });

//=======================strategic governance popup select values==============================
router.post('/get_select_options_strategy',function(req,res){
  //console.log(req.body)
  function vsamm(){
    var defered = Q.defer();
    db.query("SELECT ans1,ans2,ans3,ans4 FROM governance_strategy where vsamm_id='"+req.body.id+"'",defered.makeNodeResolver());
    return defered.promise;
  }
  Q.all([vsamm()]).then(function(results){
    ans1 = results[0][0][0].ans1;
    ans2 = results[0][0][0].ans2;
    ans3 = results[0][0][0].ans3;
    ans4 = results[0][0][0].ans4;
    res.json({success:true, ans1:ans1,ans2:ans2,ans3:ans3,ans4:ans4});
  });
});
//=======================strategic governance update==============================
router.put('/governance_strategy_edit', function (req, res) {
  let and = false;
  let where = false;
  let body = req.body;
  console.log("====================================================")
  console.log(body);
  sql =
    'update governance_strategy  set'
  if ("quests" in body) {
   
    sql += ' question="' + body["quests"] + '"';
   and=true;
  }
  
  if ("findings" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' findings="' + body["findings"] + '"';
  }
  if ("recommendations" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' recommendations="' + body["recommendations"] + '"';
  }
  if ("reviews" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' documents reviewed="' + body["reviews"] + '"';
  }
  if ("comment" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' comment="' + body["comment"] + '" , commentor="'+ body["commentor"]+'"';
    if(body["role"] =='Auditor')
    {
      
      if (and == true) {
        sql += ' ,'
      }
        sql += 'auditor="'+body["commentor"]+'"';
    }
    else if(body["role"] =='User')
    {
      
      if (and == true) {
        sql += ' ,'
      }
        sql += 'user="'+body["commentor"]+'"';
    }
   
      sql1="INSERT INTO comment_history VALUES ('"+body["quests"]+"','','Governance','Strategy & Metrics','"+req.body.comment+"','"+ body["commentor"]+"',CURRENT_TIMESTAMP,'"+req.body.score+"','"+req.body.id+"','"+req.body.answer+"');"
      //console.log(sql1)
  }
  else
    sql1="select * from comment_history";
  if ("answer" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += 'answer="'+req.body.answer+'" ,status= CASE  WHEN ans1="'+req.body.answer+'" THEN 0  WHEN ans2="'+req.body.answer+'" THEN 0.25 WHEN ans3="'+req.body.answer+'" THEN 0.5 ELSE 1 END';
  }
  sql +=" WHERE vsamm_id = '"+req.body.id+"'";
  sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,created) values('"+req.body.id+"','"+req.body.id+"','"+req.body.quests+"','Governance','Strategy & Metrics','"+req.body.score+"',NOW())";
    console.log("sql:", sql);
  
  //console.log("sql:", sql2);
  //console.log("sql:", sql1);
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
  
  
    
     
});
//===============get the uploaded files for governance strategy=======================
router.post('/getuploaded_governance_strategy', function(req,res)
{
  sql="SELECT filename FROM `governance_strategy` WHERE vsamm_id='"+req.body.id+"'";
 console.log(sql);
  db.query(sql,(err,results)=>
  {
      if(err) throw err;
      res.json({success: true,results:results});
  })
});
//=============download files====================
router.post('/download_files',function(req,res){
  filepath=path.join(__dirname,"../uploads")+'\\'+req.body.filename;
  console.log(filepath);
  res.sendFile(filepath);
});
//==============GET COMMENT HISTORY======
router.put('/comm_hist', function (req, res) {

  id = req.body.id;

  sql="SELECT COMMENT FROM `comment_history` WHERE qoid='"+id+"'";
  console.log(sql);
 //console.log(sql);
 db.query(sql,(err,results)=>
  {
      if(err) throw err;

          res.json({success: true,values:results});

  })
 // res.json({sql:sql,id:req.body.position});
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
//===================================upload============================
var upload = multer({ //multer settings
              storage: storage
}).array('file');
router.post('/upload_files_vsamm',(req, res) => {
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
//=====upload db path========
router.post("/upload_path_db_vsamm",function(req,res){
  if(req.body.groupname=="Governance" && req.body.secpractice=="Strategy & Metrics")
  {
      sql="UPDATE `governance_strategy` SET `upload`='uploads/',filename=IF(`filename`!='',concat(filename,', "+req.body.files+"'),filename ),filename=IF(`filename`='',concat(filename,'"+req.body.files+"'),filename ) WHERE vsamm_id='"+req.body.id+"'";
  }
  else if(req.body.groupname=="Governance" && req.body.secpractice=="Policy & Compliance")
  {
      sql="UPDATE `governance_policy` SET `upload`='uploads/',filename=IF(`filename`!='',concat(filename,', "+req.body.files+"'),filename ),filename=IF(`filename`='',concat(filename,'"+req.body.files+"'),filename ) WHERE vsamm_id='"+req.body.id+"'";
  }
  else if(req.body.groupname=="Governance" && req.body.secpractice=="Education & Guidance")
  {
      sql="UPDATE `governance_education` SET `upload`='uploads/',filename=IF(`filename`!='',concat(filename,', "+req.body.files+"'),filename ),filename=IF(`filename`='',concat(filename,'"+req.body.files+"'),filename ) WHERE vsamm_id='"+req.body.id+"'";
  }
  else if(req.body.groupname=="Operations" && req.body.secpractice=="Incident Management")
  {
    sql="UPDATE `operate_incident` SET `upload`='uploads/',filename=IF(`filename`!='',concat(filename,', "+req.body.files+"'),filename ),filename=IF(`filename`='',concat(filename,'"+req.body.files+"'),filename ) WHERE vsamm_id='"+req.body.id+"'";
  }
  else if(req.body.groupname=="Operations" && req.body.secpractice=="Environment Management")
  {
    sql="UPDATE `operate_environment` SET `upload`='uploads/',filename=IF(`filename`!='',concat(filename,', "+req.body.files+"'),filename ),filename=IF(`filename`='',concat(filename,'"+req.body.files+"'),filename ) WHERE vsamm_id='"+req.body.id+"'";
  }
  else if(req.body.groupname=="Operations" && req.body.secpractice=="Operational Management")
  {
    sql="UPDATE `operate_operational` SET `upload`='uploads/',filename=IF(`filename`!='',concat(filename,', "+req.body.files+"'),filename ),filename=IF(`filename`='',concat(filename,'"+req.body.files+"'),filename ) WHERE vsamm_id='"+req.body.id+"'";
  }
  else if(req.body.groupname=="Verification" && req.body.secpractice=="Architecture Assessment")
  {
    sql="UPDATE `verify_arch` SET `upload`='uploads/',filename=IF(`filename`!='',concat(filename,', "+req.body.files+"'),filename ),filename=IF(`filename`='',concat(filename,'"+req.body.files+"'),filename ) WHERE vsamm_id='"+req.body.id+"'";
  }
  else if(req.body.groupname=="Verification" && req.body.secpractice=="Requirements Driven Testing")
  {
    sql="UPDATE `verify_requirement` SET `upload`='uploads/',filename=IF(`filename`!='',concat(filename,', "+req.body.files+"'),filename ),filename=IF(`filename`='',concat(filename,'"+req.body.files+"'),filename ) WHERE vsamm_id='"+req.body.id+"'";
  }
  else if(req.body.groupname=="Verification" && req.body.secpractice=="Security Testing")
  {
    sql="UPDATE `verify_security` SET `upload`='uploads/',filename=IF(`filename`!='',concat(filename,', "+req.body.files+"'),filename ),filename=IF(`filename`='',concat(filename,'"+req.body.files+"'),filename ) WHERE vsamm_id='"+req.body.id+"'";
  }
  else if(req.body.groupname=="Implementation" && req.body.secpractice=="Secure Build")
  {
    sql="UPDATE `implement_secure_build` SET `upload`='uploads/',filename=IF(`filename`!='',concat(filename,', "+req.body.files+"'),filename ),filename=IF(`filename`='',concat(filename,'"+req.body.files+"'),filename ) WHERE vsamm_id='"+req.body.id+"'";
  }
  else if(req.body.groupname=="Implementation" && req.body.secpractice=="Secure Deployment")
  {
    sql="UPDATE `implement_secure_deploy` SET `upload`='uploads/',filename=IF(`filename`!='',concat(filename,', "+req.body.files+"'),filename ),filename=IF(`filename`='',concat(filename,'"+req.body.files+"'),filename ) WHERE vsamm_id='"+req.body.id+"'";
  }
  else if(req.body.groupname=="Implementation" && req.body.secpractice=="Defect Management")
  {
    sql="UPDATE `implement_defect` SET `upload`='uploads/',filename=IF(`filename`!='',concat(filename,', "+req.body.files+"'),filename ),filename=IF(`filename`='',concat(filename,'"+req.body.files+"'),filename ) WHERE vsamm_id='"+req.body.id+"'";
  }
  else if(req.body.groupname=="Design" && req.body.secpractice=="Threat Assessment")
  {
    sql="UPDATE `design_threat` SET `upload`='uploads/',filename=IF(`filename`!='',concat(filename,', "+req.body.files+"'),filename ),filename=IF(`filename`='',concat(filename,'"+req.body.files+"'),filename ) WHERE vsamm_id='"+req.body.id+"'";
  }
  else if(req.body.groupname=="Design" && req.body.secpractice=="Security Requirements")
  {
    sql="UPDATE `design_security` SET `upload`='uploads/',filename=IF(`filename`!='',concat(filename,', "+req.body.files+"'),filename ),filename=IF(`filename`='',concat(filename,'"+req.body.files+"'),filename ) WHERE vsamm_id='"+req.body.id+"'";
  }
  else if(req.body.groupname=="Design" && req.body.secpractice=="Secure Architecture")
  {
    sql="UPDATE `design_secure_arch` SET `upload`='uploads/',filename=IF(`filename`!='',concat(filename,', "+req.body.files+"'),filename ),filename=IF(`filename`='',concat(filename,'"+req.body.files+"'),filename ) WHERE vsamm_id='"+req.body.id+"'";
  }
 // console.log(sql);
db.query(sql,(err,results)=>
{
   if(err) throw err;

   res.json({success:true});
});
/*db.query(sql,(err,results)=>
{
   if(err) throw err;
   res.json({success: true});
})*/
});
//=========================GOVERNANCE POLICY==========================================
//============================third graph of governance policy========================================
router.get('/gover_policy_third_graph', function (req, res) {
  function Policy_and_Standards(){
      var defered = Q.defer();
      db.query("SELECT status FROM `governance_policy` where stream='Policy and Standards' order by maturity_level",defered.makeNodeResolver());
      return defered.promise;
    }
    function Compliance_Management(){
      var defered = Q.defer();
      db.query("SELECT status FROM `governance_policy` where stream='Compliance Management' order by maturity_level",defered.makeNodeResolver());
      return defered.promise;
    }
    
    Q.all([Policy_and_Standards(),Compliance_Management()]).then(function(results){
      Policy_and_Standards_l1=results[0][0][0].status;
      Policy_and_Standards_l2=results[0][0][1].status;
      Policy_and_Standards_l3=results[0][0][2].status
      Compliance_Management_l1=results[1][0][0].status;
      Compliance_Management_l2=results[1][0][1].status;
      Compliance_Management_l3=results[1][0][2].status;
       res.json({success:true,Policy_and_Standards_l1:Policy_and_Standards_l1,Policy_and_Standards_l2:Policy_and_Standards_l2,Policy_and_Standards_l3:Policy_and_Standards_l3,
          Compliance_Management_l1:Compliance_Management_l1,Compliance_Management_l2:Compliance_Management_l2,Compliance_Management_l3:Compliance_Management_l3});
     });
  
});
//============================POLICY governance table========================================
router.get('/governance_policy_table',function(req,res){
 // console.log('/governance_policy_table');
  function vsamm(){
    var defered = Q.defer();
    db.query("SELECT * FROM governance_policy",defered.makeNodeResolver());
    return defered.promise;
  }
  Q.all([vsamm()]).then(function(results){
    all = results[0][0];
    res.json({success:true, "all": all});
  });
});

//=======================policy governance popup select values==============================
router.post('/get_select_options_policy',function(req,res){
//console.log(req.body)
function vsamm(){
  var defered = Q.defer();
  db.query("SELECT ans1,ans2,ans3,ans4 FROM governance_policy where vsamm_id='"+req.body.id+"'",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([vsamm()]).then(function(results){
  ans1 = results[0][0][0].ans1;
  ans2 = results[0][0][0].ans2;
  ans3 = results[0][0][0].ans3;
  ans4 = results[0][0][0].ans4;
  res.json({success:true, ans1:ans1,ans2:ans2,ans3:ans3,ans4:ans4});
});
});
//=======================policy governance update==============================
router.put('/governance_policy_edit', function (req, res) {
let and = false;
let where = false;
let body = req.body;
//console.log("====================================================")
//  console.log(body);
  sql =
    'update governance_policy  set'
  if ("quests" in body) {
   
    sql += ' question="' + body["quests"] + '"';
   and=true;
  }
  
  if ("findings" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' findings="' + body["findings"] + '"';
  }
  if ("recommendations" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' recommendations="' + body["recommendations"] + '"';
  }
  if ("reviews" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' documents reviewed="' + body["reviews"] + '"';
  }
  if ("comment" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' comment="' + body["comment"] + '" , commentor="'+ body["commentor"]+'"';
    if(body["role"] =='Auditor')
    {
      
      if (and == true) {
        sql += ' ,'
      }
        sql += 'auditor="'+body["commentor"]+'"';
    }
    else if(body["role"] =='User')
    {
      
      if (and == true) {
        sql += ' ,'
      }
        sql += 'user="'+body["commentor"]+'"';
    }
   
      sql1="INSERT INTO comment_history VALUES ('"+body["quests"]+"','','Governance','Policy & Compliance','"+req.body.comment+"','"+ body["commentor"]+"',CURRENT_TIMESTAMP,'"+req.body.score+"','"+req.body.id+"','"+req.body.answer+"');"
      //console.log(sql1)
  }
  else
    sql1="select * from comment_history";
  if ("answer" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += 'answer="'+req.body.answer+'" ,status= CASE  WHEN ans1="'+req.body.answer+'" THEN 0  WHEN ans2="'+req.body.answer+'" THEN 0.25 WHEN ans3="'+req.body.answer+'" THEN 0.5 ELSE 1 END';
  }
  sql +=" WHERE vsamm_id = '"+req.body.id+"'";
  sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,created) values('"+req.body.id+"','"+req.body.id+"','"+req.body.quests+"','Governance','Policy & Compliance','"+req.body.score+"',NOW())";
    //console.log("sql:", sql);
  
  //console.log("sql:", sql2);
  //console.log("sql:", sql1);
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
  
  


});
//===============get the uploaded files for governance policy=======================
router.post('/getuploaded_governance_policy', function(req,res)
{
sql="SELECT filename FROM `governance_policy` WHERE vsamm_id='"+req.body.id+"'";
//console.log(sql);
db.query(sql,(err,results)=>
{
    if(err) throw err;
    res.json({success: true,results:results});
})
});
//=========================GOVERNANCE EDUCATION==========================================
//============================third graph of governance education========================================
router.get('/gover_education_third_graph', function (req, res) {
  function Training_and_Awareness(){
      var defered = Q.defer();
      db.query("SELECT status FROM `governance_education` where stream='Training and Awareness' order by maturity_level",defered.makeNodeResolver());
      return defered.promise;
    }
    function Organization_and_Culture(){
      var defered = Q.defer();
      db.query("SELECT status FROM `governance_education` where stream='Organization and Culture' order by maturity_level",defered.makeNodeResolver());
      return defered.promise;
    }
    
    Q.all([Training_and_Awareness(),Organization_and_Culture()]).then(function(results){
      Training_and_Awareness_l1=results[0][0][0].status;
      Training_and_Awareness_l2=results[0][0][1].status;
      Training_and_Awareness_l3=results[0][0][2].status
      Organization_and_Culture_l1=results[1][0][0].status;
      Organization_and_Culture_l2=results[1][0][1].status;
      Organization_and_Culture_l3=results[1][0][2].status;
       res.json({success:true,Training_and_Awareness_l1:Training_and_Awareness_l1,Training_and_Awareness_l2:Training_and_Awareness_l2,Training_and_Awareness_l3:Training_and_Awareness_l3,
          Organization_and_Culture_l1:Organization_and_Culture_l1,Organization_and_Culture_l2:Organization_and_Culture_l2,Organization_and_Culture_l3:Organization_and_Culture_l3});
     });
  
});
//============================education governance table========================================
router.get('/governance_education_table',function(req,res){
  function vsamm(){
    var defered = Q.defer();
    db.query("SELECT * FROM governance_education",defered.makeNodeResolver());
    return defered.promise;
  }
  Q.all([vsamm()]).then(function(results){
    all = results[0][0];
    res.json({success:true, "all": all});
  });
});

//=======================education governance popup select values==============================
router.post('/get_select_options_education',function(req,res){
//console.log(req.body)
function vsamm(){
  var defered = Q.defer();
  db.query("SELECT ans1,ans2,ans3,ans4 FROM governance_education where vsamm_id='"+req.body.id+"'",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([vsamm()]).then(function(results){
  ans1 = results[0][0][0].ans1;
  ans2 = results[0][0][0].ans2;
  ans3 = results[0][0][0].ans3;
  ans4 = results[0][0][0].ans4;
  res.json({success:true, ans1:ans1,ans2:ans2,ans3:ans3,ans4:ans4});
});
});
//=======================education governance update==============================
router.put('/governance_education_edit', function (req, res) {
let and = false;
let where = false;
let body = req.body;
//console.log("====================================================")
  //console.log(body);
  sql =
    'update governance_education  set'
  if ("quests" in body) {
   
    sql += ' question="' + body["quests"] + '"';
   and=true;
  }
  
  if ("findings" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' findings="' + body["findings"] + '"';
  }
  if ("recommendations" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' recommendations="' + body["recommendations"] + '"';
  }
  if ("reviews" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' documents reviewed="' + body["reviews"] + '"';
  }
  if ("comment" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' comment="' + body["comment"] + '" , commentor="'+ body["commentor"]+'"';
    if(body["role"] =='Auditor')
    {
      
      if (and == true) {
        sql += ' ,'
      }
        sql += 'auditor="'+body["commentor"]+'"';
    }
    else if(body["role"] =='User')
    {
      
      if (and == true) {
        sql += ' ,'
      }
        sql += 'user="'+body["commentor"]+'"';
    }
   
      sql1="INSERT INTO comment_history VALUES ('"+body["quests"]+"','','Governance','Education & Guidance','"+req.body.comment+"','"+ body["commentor"]+"',CURRENT_TIMESTAMP,'"+req.body.score+"','"+req.body.id+"','"+req.body.answer+"');"
      //console.log(sql1)
  }
  else
    sql1="select * from comment_history";
  if ("answer" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += 'answer="'+req.body.answer+'" ,status= CASE  WHEN ans1="'+req.body.answer+'" THEN 0  WHEN ans2="'+req.body.answer+'" THEN 0.25 WHEN ans3="'+req.body.answer+'" THEN 0.5 ELSE 1 END';
  }
  sql +=" WHERE vsamm_id = '"+req.body.id+"'";
  sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,created) values('"+req.body.id+"','"+req.body.id+"','"+req.body.quests+"','Governance','Education & Guidance','"+req.body.score+"',NOW())";
    console.log("sql:", sql);
  
  //console.log("sql:", sql2);
  //console.log("sql:", sql1);
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
  
  


});
//===============get the uploaded files for governance education=======================
router.post('/getuploaded_governance_education', function(req,res)
{
  sql="SELECT filename FROM `governance_education` WHERE vsamm_id='"+req.body.id+"'";
  console.log(sql);
  db.query(sql,(err,results)=>
  {
      if(err) throw err;
      res.json({success: true,results:results});
  })
});

//=================================DESIGN THREAT===========================
//=========================LAST DESIGN GRAPH=======================================
router.post('/last_graph_design', function (req, res) 
{
  var d = new Date();
  var curr =[];
  var c,p,f;
  curr[0]= d.getMonth();
  curr[1] = d.getMonth()-1;
  curr[2] = d.getMonth()-2;
  if(curr[0]==0)
  {
      curr[1]=11;
      curr[2]=10;
  }
  if(curr[0]==1)
  {
      curr[1]=0;
      curr[2]=11;
  }
  for(var i=0;i<3;i++)
  {
      if(curr[i]==0)
          curr[i]='Jan'
      else if(curr[i]==1)
          curr[i]='Feb'
      else if(curr[i]==2)
          curr[i]='Mar'
      else if(curr[i]==3)
          curr[i]='Apr'
      else if(curr[i]==4)
          curr[i]='May'
      else if(curr[i]==5)
          curr[i]='Jun'
      else if(curr[i]==6)
          curr[i]='Jul'
      else if(curr[i]==7)
          curr[i]='Aug'
      else if(curr[i]==8)
          curr[i]='Sep'
      else if(curr[i]==9)
          curr[i]='Oct'
      else if(curr[i]==10)
          curr[i]='Nov'
      else if(curr[i]==11)
          curr[i]='Dec'
  }
  function third_graph_score(){
    var defered = Q.defer();
    sql="SELECT "+curr[2]+","+curr[1]+", "+curr[0]+" FROM `history` WHERE groupname='Design' and secpractice='"+req.body.secpractice+"'";
    //console.log(sql);
    db.query(sql,defered.makeNodeResolver());
    return defered.promise;
  }
  Q.all([third_graph_score()]).then(function(results){
    var mon=[];
    for(var i=0;i<3;i++)
    {
    if(curr[i]=='Jan')
          mon[i]=results[0][0][0].Jan;
      else if(curr[i]=='Feb')
      mon[i]=results[0][0][0].Feb;
      else if(curr[i]=='Mar')
      mon[i]=results[0][0][0].Mar;
      else if(curr[i]=='Apr')
      mon[i]=results[0][0][0].Apr;
      else if(curr[i]=='May')
      mon[i]=results[0][0][0].May;
      else if(curr[i]='Jun')
      mon[i]=results[0][0][0].Jun
      else if(curr[i]=='Jul')
      mon[i]=results[0][0][0].Jul;
      else if(curr[i]=='Aug')
      mon[i]=results[0][0][0].Aug;
      else if(curr[i]=='Sep')
      mon[i]=results[0][0][0].Sep;
      else if(curr[i]=='Oct')
      mon[i]=results[0][0][0].Oct;
      else if(curr[i]=='Nov')
      mon[i]=results[0][0][0].Nov;
      else if(curr[i]=='Dec')
      mon[i]=results[0][0][0].Dec;
    //console.log(results[0][0][0].Mar);
    if(mon[i]==null)

      {
        mon[i]=0
      }
    }
    res.json({success:true, month_pre:curr[0],month_before_1: curr[1], month_before_2: curr[2],
                            score_cur:mon[0], score_before_1:mon[1],score_before_2:mon[2]});
  });
});
//=========================THIRD DESIGN GRAPH=======================================
router.get('/design_threat_third_graph', function (req, res) {
  function Application_Risk_Profile(){
      var defered = Q.defer();
      db.query("SELECT status FROM `design_threat` where stream='Application Risk Profile' order by maturity_level",defered.makeNodeResolver());
      return defered.promise;
    }
    function Threat_Modeling(){
      var defered = Q.defer();
      db.query("SELECT status FROM `design_threat` where stream='Threat Modeling' order by maturity_level",defered.makeNodeResolver());
      return defered.promise;
    }
    
    Q.all([Application_Risk_Profile(),Threat_Modeling()]).then(function(results){
      Application_Risk_Profile_l1=results[0][0][0].status;
      Application_Risk_Profile_l2=results[0][0][1].status;
      Application_Risk_Profile_l3=results[0][0][2].status
      Threat_Modeling_l1=results[1][0][0].status;
      Threat_Modeling_l2=results[1][0][1].status;
      Threat_Modeling_l3=results[1][0][2].status;
       res.json({success:true,Application_Risk_Profile_l1:Application_Risk_Profile_l1,Application_Risk_Profile_l2:Application_Risk_Profile_l2,Application_Risk_Profile_l3:Application_Risk_Profile_l3,
          Threat_Modeling_l1:Threat_Modeling_l1,Threat_Modeling_l2:Threat_Modeling_l2,Threat_Modeling_l3:Threat_Modeling_l3});
     });
  
});
//============================DESIGN THREAT table========================================
router.get('/design_threat_table',function(req,res){
  //console.log('/governance_policy_table');
  function vsamm(){
    var defered = Q.defer();
    db.query("SELECT * FROM design_threat",defered.makeNodeResolver());
    return defered.promise;
  }
  Q.all([vsamm()]).then(function(results){
    all = results[0][0];
    res.json({success:true, "all": all});
  });
});

//=======================DESIGN THREAT popup select values==============================
router.post('/get_select_options_design_threat',function(req,res){
//console.log(req.body)
function vsamm(){
  var defered = Q.defer();
  db.query("SELECT ans1,ans2,ans3,ans4 FROM design_threat where vsamm_id='"+req.body.id+"'",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([vsamm()]).then(function(results){
  ans1 = results[0][0][0].ans1;
  ans2 = results[0][0][0].ans2;
  ans3 = results[0][0][0].ans3;
  ans4 = results[0][0][0].ans4;
  res.json({success:true, ans1:ans1,ans2:ans2,ans3:ans3,ans4:ans4});
});
});
//=======================design_threat update==============================
router.put('/design_threat_edit', function (req, res) {
let and = false;
let where = false;
let body = req.body;
console.log("====================================================")
  console.log(body);
  sql =
    'update design_threat  set'
  if ("quests" in body) {
   
    sql += ' question="' + body["quests"] + '"';
   and=true;
  }
  
  if ("findings" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' findings="' + body["findings"] + '"';
  }
  if ("recommendations" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' recommendations="' + body["recommendations"] + '"';
  }
  if ("reviews" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' documents reviewed="' + body["reviews"] + '"';
  }
  if ("comment" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' comment="' + body["comment"] + '" , commentor="'+ body["commentor"]+'"';
    if(body["role"] =='Auditor')
    {
      
      if (and == true) {
        sql += ' ,'
      }
        sql += 'auditor="'+body["commentor"]+'"';
    }
    else if(body["role"] =='User')
    {
      
      if (and == true) {
        sql += ' ,'
      }
        sql += 'user="'+body["commentor"]+'"';
    }
   
      sql1="INSERT INTO comment_history VALUES ('"+body["quests"]+"','','Design','Threat Assessment','"+req.body.comment+"','"+ body["commentor"]+"',CURRENT_TIMESTAMP,'"+req.body.score+"','"+req.body.id+"','"+req.body.answer+"');"
      //console.log(sql1)
  }
  else
    sql1="select * from comment_history";
  if ("answer" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += 'answer="'+req.body.answer+'" ,status= CASE  WHEN ans1="'+req.body.answer+'" THEN 0  WHEN ans2="'+req.body.answer+'" THEN 0.25 WHEN ans3="'+req.body.answer+'" THEN 0.5 ELSE 1 END';
  }
  sql +=" WHERE vsamm_id = '"+req.body.id+"'";
  sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,created) values('"+req.body.id+"','"+req.body.id+"','"+req.body.quests+"','Design','Threat Assessment','"+req.body.score+"',NOW())";
    console.log("sql:", sql);
  
  //console.log("sql:", sql2);
  //console.log("sql:", sql1);
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
  
  


});
//===============get the uploaded files for design_threat=======================
router.post('/getuploaded_design_threat', function(req,res)
{
sql="SELECT filename FROM `design_threat` WHERE vsamm_id='"+req.body.id+"'";
console.log(sql);
db.query(sql,(err,results)=>
{
    if(err) throw err;
    res.json({success: true,results:results});
})
});

//=============================================DESIGN SECURITY==================
//=========================THIRD security GRAPH=======================================
router.get('/design_security_third_graph', function (req, res) {
  function Software_Requirements(){
      var defered = Q.defer();
      db.query("SELECT status FROM `design_security` where stream='Software Requirements' order by maturity_level",defered.makeNodeResolver());
      return defered.promise;
    }
    function Supplier_Security(){
      var defered = Q.defer();
      db.query("SELECT status FROM `design_security` where stream='Supplier Security' order by maturity_level",defered.makeNodeResolver());
      return defered.promise;
    }
    
    Q.all([Software_Requirements(),Supplier_Security()]).then(function(results){
      Software_Requirements_l1=results[0][0][0].status;
      Software_Requirements_l2=results[0][0][1].status;
      Software_Requirements_l3=results[0][0][2].status
      Supplier_Security_l1=results[1][0][0].status;
      Supplier_Security_l2=results[1][0][1].status;
      Supplier_Security_l3=results[1][0][2].status;
       res.json({success:true,Software_Requirements_l1:Software_Requirements_l1,Software_Requirements_l2:Software_Requirements_l2,Software_Requirements_l3:Software_Requirements_l3,
          Supplier_Security_l1:Supplier_Security_l1,Supplier_Security_l2:Supplier_Security_l2,Supplier_Security_l3:Supplier_Security_l3});
     });
  
});
//============================DESIGN security table========================================
router.get('/design_security_table',function(req,res){
  //console.log('/governance_policy_table');
  function vsamm(){
    var defered = Q.defer();
    db.query("SELECT * FROM design_security",defered.makeNodeResolver());
    return defered.promise;
  }
  Q.all([vsamm()]).then(function(results){
    all = results[0][0];
    res.json({success:true, "all": all});
  });
});

//=======================DESIGN security popup select values==============================
router.post('/get_select_options_design_security',function(req,res){
//console.log(req.body)
function vsamm(){
  var defered = Q.defer();
  db.query("SELECT ans1,ans2,ans3,ans4 FROM design_security where vsamm_id='"+req.body.id+"'",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([vsamm()]).then(function(results){
  ans1 = results[0][0][0].ans1;
  ans2 = results[0][0][0].ans2;
  ans3 = results[0][0][0].ans3;
  ans4 = results[0][0][0].ans4;
  res.json({success:true, ans1:ans1,ans2:ans2,ans3:ans3,ans4:ans4});
});
});
//=======================design_security update==============================
router.put('/design_security_edit', function (req, res) {
let and = false;
let where = false;
let body = req.body;
console.log("====================================================")
  console.log(body);
  sql =
    'update design_security  set'
  if ("quests" in body) {
   
    sql += ' question="' + body["quests"] + '"';
   and=true;
  }
  
  if ("findings" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' findings="' + body["findings"] + '"';
  }
  if ("recommendations" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' recommendations="' + body["recommendations"] + '"';
  }
  if ("reviews" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' documents reviewed="' + body["reviews"] + '"';
  }
  if ("comment" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' comment="' + body["comment"] + '" , commentor="'+ body["commentor"]+'"';
    if(body["role"] =='Auditor')
    {
      
      if (and == true) {
        sql += ' ,'
      }
        sql += 'auditor="'+body["commentor"]+'"';
    }
    else if(body["role"] =='User')
    {
      
      if (and == true) {
        sql += ' ,'
      }
        sql += 'user="'+body["commentor"]+'"';
    }
   
      sql1="INSERT INTO comment_history VALUES ('"+body["quests"]+"','','Design','Security Requirements','"+req.body.comment+"','"+ body["commentor"]+"',CURRENT_TIMESTAMP,'"+req.body.score+"','"+req.body.id+"','"+req.body.answer+"');"
      //console.log(sql1)
  }
  else
    sql1="select * from comment_history";
  if ("answer" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += 'answer="'+req.body.answer+'" ,status= CASE  WHEN ans1="'+req.body.answer+'" THEN 0  WHEN ans2="'+req.body.answer+'" THEN 0.25 WHEN ans3="'+req.body.answer+'" THEN 0.5 ELSE 1 END';
  }
  sql +=" WHERE vsamm_id = '"+req.body.id+"'";
  sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,created) values('"+req.body.id+"','"+req.body.id+"','"+req.body.quests+"','Design','Security Requirements','"+req.body.score+"',NOW())";
    console.log("sql:", sql);
  
  //console.log("sql:", sql2);
  //console.log("sql:", sql1);
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
  
  


});
//===============get the uploaded files for design_security=======================
router.post('/getuploaded_design_security', function(req,res)
{
sql="SELECT filename FROM `design_security` WHERE vsamm_id='"+req.body.id+"'";
console.log(sql);
db.query(sql,(err,results)=>
{
    if(err) throw err;
    res.json({success: true,results:results});
})
});
//=============================================DESIGN secure_arch==================
//=========================THIRD secure_arch GRAPH=======================================
router.get('/design_secure_arch_third_graph', function (req, res) {
  function Architecture_Design(){
      var defered = Q.defer();
      db.query("SELECT status FROM `design_secure_arch` where stream='Architecture Design' order by maturity_level",defered.makeNodeResolver());
      return defered.promise;
    }
    function Technology_Management(){
      var defered = Q.defer();
      db.query("SELECT status FROM `design_secure_arch` where stream='Technology Management' order by maturity_level",defered.makeNodeResolver());
      return defered.promise;
    }
    
    Q.all([Architecture_Design(),Technology_Management()]).then(function(results){
      Architecture_Design_l1=results[0][0][0].status;
      Architecture_Design_l2=results[0][0][1].status;
      Architecture_Design_l3=results[0][0][2].status
      Technology_Management_l1=results[1][0][0].status;
      Technology_Management_l2=results[1][0][1].status;
      Technology_Management_l3=results[1][0][2].status;
       res.json({success:true,Architecture_Design_l1:Architecture_Design_l1,Architecture_Design_l2:Architecture_Design_l2,Architecture_Design_l3:Architecture_Design_l3,
          Technology_Management_l1:Technology_Management_l1,Technology_Management_l2:Technology_Management_l2,Technology_Management_l3:Technology_Management_l3});
     });
  
});
//============================DESIGN secure_arch table========================================
router.get('/design_secure_arch_table',function(req,res){
  //console.log('/governance_policy_table');
  function vsamm(){
    var defered = Q.defer();
    db.query("SELECT * FROM design_secure_arch",defered.makeNodeResolver());
    return defered.promise;
  }
  Q.all([vsamm()]).then(function(results){
    all = results[0][0];
    res.json({success:true, "all": all});
  });
});

//=======================DESIGN secure_arch popup select values==============================
router.post('/get_select_options_design_secure_arch',function(req,res){
//console.log(req.body)
function vsamm(){
  var defered = Q.defer();
  db.query("SELECT ans1,ans2,ans3,ans4 FROM design_secure_arch where vsamm_id='"+req.body.id+"'",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([vsamm()]).then(function(results){
  ans1 = results[0][0][0].ans1;
  ans2 = results[0][0][0].ans2;
  ans3 = results[0][0][0].ans3;
  ans4 = results[0][0][0].ans4;
  res.json({success:true, ans1:ans1,ans2:ans2,ans3:ans3,ans4:ans4});
});
});
//=======================design_secure_arch update==============================
router.put('/design_secure_arch_edit', function (req, res) {
let and = false;
let where = false;
let body = req.body;
console.log("====================================================")
  console.log(body);
  sql =
    'update design_secure_arch  set'
  if ("quests" in body) {
   
    sql += ' question="' + body["quests"] + '"';
   and=true;
  }
  
  if ("findings" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' findings="' + body["findings"] + '"';
  }
  if ("recommendations" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' recommendations="' + body["recommendations"] + '"';
  }
  if ("reviews" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' documents reviewed="' + body["reviews"] + '"';
  }
  if ("comment" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' comment="' + body["comment"] + '" , commentor="'+ body["commentor"]+'"';
    if(body["role"] =='Auditor')
    {
      
      if (and == true) {
        sql += ' ,'
      }
        sql += 'auditor="'+body["commentor"]+'"';
    }
    else if(body["role"] =='User')
    {
      
      if (and == true) {
        sql += ' ,'
      }
        sql += 'user="'+body["commentor"]+'"';
    }
   
      sql1="INSERT INTO comment_history VALUES ('"+body["quests"]+"','','Design','Secure Architecture','"+req.body.comment+"','"+ body["commentor"]+"',CURRENT_TIMESTAMP,'"+req.body.score+"','"+req.body.id+"','"+req.body.answer+"');"
      //console.log(sql1)
  }
  else
    sql1="select * from comment_history";
  if ("answer" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += 'answer="'+req.body.answer+'" ,status= CASE  WHEN ans1="'+req.body.answer+'" THEN 0  WHEN ans2="'+req.body.answer+'" THEN 0.25 WHEN ans3="'+req.body.answer+'" THEN 0.5 ELSE 1 END';
  }
  sql +=" WHERE vsamm_id = '"+req.body.id+"'";
  sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,created) values('"+req.body.id+"','"+req.body.id+"','"+req.body.quests+"','Design','Secure Architecture','"+req.body.score+"',NOW())";
    console.log("sql:", sql);
  
  //console.log("sql:", sql2);
  //console.log("sql:", sql1);
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
  
  

});
//===============get the uploaded files for design_secure_arch=======================
router.post('/getuploaded_design_secure_arch', function(req,res)
{
sql="SELECT filename FROM `design_secure_arch` WHERE vsamm_id='"+req.body.id+"'";
console.log(sql);
db.query(sql,(err,results)=>
{
    if(err) throw err;
    res.json({success: true,results:results});
})
});

//=====================IMPLEMENTATION=============================================

//=================================implement THREAT===========================
//==============================HISTORY TABLE IMPLEMENT

router.post('/edit_history_score_implement', function (req, res) 
{
  console.log("=====================HISTORY TABLE==============================")
  console.log(req.body)
  
    var d = new Date();
  var curr ='';
  var c,p,f;
  curr= d.getMonth();
      if(curr==0)
          curr='Jan'
      else if(curr==1)
          curr='Feb'
      else if(curr==2)
          curr='Mar'
      else if(curr==3)
          curr='Apr'
      else if(curr==4)
          curr='May'
      else if(curr==5)
          curr='Jun'
      else if(curr==6)
          curr='Jul'
      else if(curr==7)
          curr='Aug'
      else if(curr==8)
          curr='Sep'
      else if(curr==9)
          curr='Oct'
      else if(curr[i]==10)
          curr='Nov'
      else if(curr[i]==11)
          curr='Dec'
  //console.log(curr[i])
sql2="UPDATE `history` set `"+ curr+"`="+req.body.secure_deploy_rating+" WHERE groupname='"+req.body.groupname+"' and secpractice='"+req.body.secpractice+"'";
if(req.body.groupname=="Governance" && req.body.secpractice=="Strategy & Metrics")
{
  sql2="UPDATE `history` set `"+ curr+"`="+req.body.strategy_rating+" WHERE groupname='"+req.body.groupname+"' and secpractice='"+req.body.secpractice+"'";
}
else if(req.body.groupname=="Governance" && req.body.secpractice=="Policy & Compliance")
{
  sql2="UPDATE `history` set `"+ curr+"`="+req.body.policy_rating+" WHERE groupname='"+req.body.groupname+"' and secpractice='"+req.body.secpractice+"'";
}
else if(req.body.groupname=="Governance" && req.body.secpractice=="Education & Guidance")
{
  sql2="UPDATE `history` set `"+ curr+"`="+req.body.education_rating+" WHERE groupname='"+req.body.groupname+"' and secpractice='"+req.body.secpractice+"'";
}
else if(req.body.groupname=="Operations" && req.body.secpractice=="Incident Management")
{
  sql2="UPDATE `history` set `"+ curr+"`="+req.body.operate_incident_rating+" WHERE groupname='"+req.body.groupname+"' and secpractice='"+req.body.secpractice+"'";
}
else if(req.body.groupname=="Operations" && req.body.secpractice=="Environment Management")
{
  sql2="UPDATE `history` set `"+ curr+"`="+req.body.operate_environment_rating+" WHERE groupname='"+req.body.groupname+"' and secpractice='"+req.body.secpractice+"'";
}
else if(req.body.groupname=="Operations" && req.body.secpractice=="Operational Management")
{
  sql2="UPDATE `history` set `"+ curr+"`="+req.body.operate_operational_rating+" WHERE groupname='"+req.body.groupname+"' and secpractice='"+req.body.secpractice+"'";
}
else if(req.body.groupname=="Verification" && req.body.secpractice=="Architecture Assessment")
{
  sql2="UPDATE `history` set `"+ curr+"`="+req.body.verify_arch_rating+" WHERE groupname='"+req.body.groupname+"' and secpractice='"+req.body.secpractice+"'";
}
else if(req.body.groupname=="Verification" && req.body.secpractice=="Requirements Driven Testing")
{
  sql2="UPDATE `history` set `"+ curr+"`="+req.body.verify_requirement_rating+" WHERE groupname='"+req.body.groupname+"' and secpractice='"+req.body.secpractice+"'";
}
else if(req.body.groupname=="Verification" && req.body.secpractice=="Security Testing")
{
  sql2="UPDATE `history` set `"+ curr+"`="+req.body.verify_security_rating+" WHERE groupname='"+req.body.groupname+"' and secpractice='"+req.body.secpractice+"'";
}
else if(req.body.groupname=="Implementation" && req.body.secpractice=="Secure Build")
{
  sql2="UPDATE `history` set `"+ curr+"`="+req.body.secure_build_rating+" WHERE groupname='"+req.body.groupname+"' and secpractice='"+req.body.secpractice+"'";
}
else if(req.body.groupname=="Implementation" && req.body.secpractice=="Secure Deployment")
{
  sql2="UPDATE `history` set `"+ curr+"`="+req.body.secure_deploy_rating+" WHERE groupname='"+req.body.groupname+"' and secpractice='"+req.body.secpractice+"'";
}
else if(req.body.groupname=="Implementation" && req.body.secpractice=="Defect Management")
{
  sql2="UPDATE `history` set `"+ curr+"`="+req.body.defect_rating+" WHERE groupname='"+req.body.groupname+"' and secpractice='"+req.body.secpractice+"'";
}
else if(req.body.groupname=="Design" && req.body.secpractice=="Threat Assessment")
{
  sql2="UPDATE `history` set `"+ curr+"`="+req.body.threat_rating+" WHERE groupname='"+req.body.groupname+"' and secpractice='"+req.body.secpractice+"'";
}
else if(req.body.groupname=="Design" && req.body.secpractice=="Security Requirements")
{
  sql2="UPDATE `history` set `"+ curr+"`="+req.body.security_rating+" WHERE groupname='"+req.body.groupname+"' and secpractice='"+req.body.secpractice+"'";
}
else if(req.body.groupname=="Design" && req.body.secpractice=="Secure Architecture")
{
  sql2="UPDATE `history` set `"+ curr+"`="+req.body.secure_arch_rating+" WHERE groupname='"+req.body.groupname+"' and secpractice='"+req.body.secpractice+"'";
}  
console.log(sql2)
   
    db.query(sql2,(err,resul)=>
    {
      res.json({success: true});
    });
    // res.json({success:true,implement:implement});
 
});
//=========================LAST implement GRAPH=======================================
router.post('/last_graph_implement', function (req, res) 
{
  console.log(req.body)
  var d = new Date();
  var curr =[];
  var c,p,f;
  curr[0]= d.getMonth();
  curr[1] = d.getMonth()-1;
  curr[2] = d.getMonth()-2;
  if(curr[0]==0)
  {
      curr[1]=11;
      curr[2]=10;
  }
  if(curr[0]==1)
  {
      curr[1]=0;
      curr[2]=11;
  }
  for(var i=0;i<3;i++)
  {
      if(curr[i]==0)
          curr[i]='Jan'
      else if(curr[i]==1)
          curr[i]='Feb'
      else if(curr[i]==2)
          curr[i]='Mar'
      else if(curr[i]==3)
          curr[i]='Apr'
      else if(curr[i]==4)
          curr[i]='May'
      else if(curr[i]==5)
          curr[i]='Jun'
      else if(curr[i]==6)
          curr[i]='Jul'
      else if(curr[i]==7)
          curr[i]='Aug'
      else if(curr[i]==8)
          curr[i]='Sep'
      else if(curr[i]==9)
          curr[i]='Oct'
      else if(curr[i]==10)
          curr[i]='Nov'
      else if(curr[i]==11)
          curr[i]='Dec'
  }
  function third_graph_score(){
    var defered = Q.defer();
    sql="SELECT "+curr[2]+","+curr[1]+", "+curr[0]+" FROM `history` WHERE groupname='Implementation' and secpractice='"+req.body.secpractice+"'";
    //console.log(sql);
    db.query(sql,defered.makeNodeResolver());
    return defered.promise;
  }
  Q.all([third_graph_score()]).then(function(results){
    var mon=[];
    for(var i=0;i<3;i++)
    {
    if(curr[i]=='Jan')
          mon[i]=results[0][0][0].Jan;
      else if(curr[i]=='Feb')
      mon[i]=results[0][0][0].Feb;
      else if(curr[i]=='Mar')
      mon[i]=results[0][0][0].Mar;
      else if(curr[i]=='Apr')
      mon[i]=results[0][0][0].Apr;
      else if(curr[i]=='May')
      mon[i]=results[0][0][0].May;
      else if(curr[i]='Jun')
      mon[i]=results[0][0][0].Jun
      else if(curr[i]=='Jul')
      mon[i]=results[0][0][0].Jul;
      else if(curr[i]=='Aug')
      mon[i]=results[0][0][0].Aug;
      else if(curr[i]=='Sep')
      mon[i]=results[0][0][0].Sep;
      else if(curr[i]=='Oct')
      mon[i]=results[0][0][0].Oct;
      else if(curr[i]=='Nov')
      mon[i]=results[0][0][0].Nov;
      else if(curr[i]=='Dec')
      mon[i]=results[0][0][0].Dec;
    //console.log(results[0][0][0].Mar);
      if(mon[i]==null)

      {
        mon[i]=0
      }
    }
    
    res.json({success:true, month_pre:curr[0],month_before_1: curr[1], month_before_2: curr[2],
                            score_cur:mon[0], score_before_1:mon[1],score_before_2:mon[2]});
  });
});
//=========================THIRD Implementation GRAPH=======================================
router.get('/implement_defect_third_graph', function (req, res) {
  function Defect_Tracking(){
      var defered = Q.defer();
      db.query("SELECT status FROM `implement_defect` where stream='Defect Tracking (Flaws/Bugs/Process)' order by maturity_level",defered.makeNodeResolver());
      return defered.promise;
    }
    function Metrics_and_Feedback(){
      var defered = Q.defer();
      db.query("SELECT status FROM `implement_defect` where stream='Metrics and Feedback/Learning' order by maturity_level",defered.makeNodeResolver());
      return defered.promise;
    }
    
    Q.all([Defect_Tracking(),Metrics_and_Feedback()]).then(function(results){
      Defect_Tracking_l1=results[0][0][0].status;
      Defect_Tracking_l2=results[0][0][1].status;
      Defect_Tracking_l3=results[0][0][2].status
      Metrics_and_Feedback_l1=results[1][0][0].status;
      Metrics_and_Feedback_l2=results[1][0][1].status;
      Metrics_and_Feedback_l3=results[1][0][2].status;
       res.json({success:true,Defect_Tracking_l1:Defect_Tracking_l1,Defect_Tracking_l2:Defect_Tracking_l2,Defect_Tracking_l3:Defect_Tracking_l3,
          Metrics_and_Feedback_l1:Metrics_and_Feedback_l1,Metrics_and_Feedback_l2:Metrics_and_Feedback_l2,Metrics_and_Feedback_l3:Metrics_and_Feedback_l3});
     });
  
});
//============================implement_defect table========================================
router.get('/implement_defect_table',function(req,res){
  //console.log('/governance_policy_table');
  function vsamm(){
    var defered = Q.defer();
    db.query("SELECT * FROM implement_defect",defered.makeNodeResolver());
    return defered.promise;
  }
  Q.all([vsamm()]).then(function(results){
    all = results[0][0];
    res.json({success:true, "all": all});
  });
});

//=======================DESIGN THREAT popup select values==============================
router.post('/get_select_options_implement_defect',function(req,res){
//console.log(req.body)
function vsamm(){
  var defered = Q.defer();
  db.query("SELECT ans1,ans2,ans3,ans4 FROM implement_defect where vsamm_id='"+req.body.id+"'",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([vsamm()]).then(function(results){
  ans1 = results[0][0][0].ans1;
  ans2 = results[0][0][0].ans2;
  ans3 = results[0][0][0].ans3;
  ans4 = results[0][0][0].ans4;
  res.json({success:true, ans1:ans1,ans2:ans2,ans3:ans3,ans4:ans4});
});
});
//=======================design_threat update==============================
router.put('/implement_defect_edit', function (req, res) {
let and = false;
let where = false;
let body = req.body;
//console.log("====================================================")
  //console.log(body);
  sql =
    'update implement_defect  set'
  if ("quests" in body) {
   
    sql += ' question="' + body["quests"] + '"';
   and=true;
  }
  
  if ("findings" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' findings="' + body["findings"] + '"';
  }
  if ("recommendations" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' recommendations="' + body["recommendations"] + '"';
  }
  if ("reviews" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' documents reviewed="' + body["reviews"] + '"';
  }
  if ("comment" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' comment="' + body["comment"] + '" , commentor="'+ body["commentor"]+'"';
    if(body["role"] =='Auditor')
    {
      
      if (and == true) {
        sql += ' ,'
      }
        sql += 'auditor="'+body["commentor"]+'"';
    }
    else if(body["role"] =='User')
    {
      
      if (and == true) {
        sql += ' ,'
      }
        sql += 'user="'+body["commentor"]+'"';
    }
   
      sql1="INSERT INTO comment_history VALUES ('"+body["quests"]+"','','Implementation','Defect Management','"+req.body.comment+"','"+ body["commentor"]+"',CURRENT_TIMESTAMP,'"+req.body.score+"','"+req.body.id+"','"+req.body.answer+"');"
      //console.log(sql1)
  }
  else
    sql1="select * from comment_history";
  if ("answer" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += 'answer="'+req.body.answer+'" ,status= CASE  WHEN ans1="'+req.body.answer+'" THEN 0  WHEN ans2="'+req.body.answer+'" THEN 0.25 WHEN ans3="'+req.body.answer+'" THEN 0.5 ELSE 1 END';
  }
  sql +=" WHERE vsamm_id = '"+req.body.id+"'";
  sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,created) values('"+req.body.id+"','"+req.body.id+"','"+req.body.quests+"','Implementation','Defect Management','"+req.body.score+"',NOW())";
   // console.log("sql:", sql);

  //console.log("sql:", sql2);
  //console.log("sql:", sql1);
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
  
  


});
//===============get the uploaded files for design_threat=======================
router.post('/getuploaded_implement_defect', function(req,res)
{
sql="SELECT filename FROM `implement_defect` WHERE vsamm_id='"+req.body.id+"'";
console.log(sql);
db.query(sql,(err,results)=>
{
    if(err) throw err;
    res.json({success: true,results:results});
})
});

//=============================================implement_secure_build==================
//=========================THIRD implement_secure_build GRAPH=======================================
router.get('/implement_secure_build_third_graph', function (req, res) {
  function Build_Process(){
      var defered = Q.defer();
      db.query("SELECT status FROM `implement_secure_build` where stream='Build Process' order by maturity_level",defered.makeNodeResolver());
      return defered.promise;
    }
    function Software_Dependencies(){
      var defered = Q.defer();
      db.query("SELECT status FROM `implement_secure_build` where stream='Software Dependencies' order by maturity_level",defered.makeNodeResolver());
      return defered.promise;
    }
    
    Q.all([Build_Process(),Software_Dependencies()]).then(function(results){
      Build_Process_l1=results[0][0][0].status;
      Build_Process_l2=results[0][0][1].status;
      Build_Process_l3=results[0][0][2].status
      Software_Dependencies_l1=results[1][0][0].status;
      Software_Dependencies_l2=results[1][0][1].status;
      Software_Dependencies_l3=results[1][0][2].status;
       res.json({success:true,Build_Process_l1:Build_Process_l1,Build_Process_l2:Build_Process_l2,Build_Process_l3:Build_Process_l3,
          Software_Dependencies_l1:Software_Dependencies_l1,Software_Dependencies_l2:Software_Dependencies_l2,Software_Dependencies_l3:Software_Dependencies_l3});
     });
  
});
//============================implement_secure table========================================
router.get('/implement_secure_build_table',function(req,res){
  //console.log('/governance_policy_table');
  function vsamm(){
    var defered = Q.defer();
    db.query("SELECT * FROM implement_secure_build",defered.makeNodeResolver());
    return defered.promise;
  }
  Q.all([vsamm()]).then(function(results){
    all = results[0][0];
    res.json({success:true, "all": all});
  });
});

//=======================implement_secure popup select values==============================
router.post('/get_select_options_implement_secure_build',function(req,res){
//console.log(req.body)
function vsamm(){
  var defered = Q.defer();
  db.query("SELECT ans1,ans2,ans3,ans4 FROM implement_secure_build where vsamm_id='"+req.body.id+"'",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([vsamm()]).then(function(results){
  ans1 = results[0][0][0].ans1;
  ans2 = results[0][0][0].ans2;
  ans3 = results[0][0][0].ans3;
  ans4 = results[0][0][0].ans4;
  res.json({success:true, ans1:ans1,ans2:ans2,ans3:ans3,ans4:ans4});
});
});
//=======================implement_secure_build update==============================
router.put('/implement_secure_build_edit', function (req, res) {
let and = false;
let where = false;
let body = req.body;
console.log("====================================================")
  console.log(body);
  sql =
    'update implement_secure_build  set'
  if ("quests" in body) {
   
    sql += ' question="' + body["quests"] + '"';
   and=true;
  }
  
  if ("findings" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' findings="' + body["findings"] + '"';
  }
  if ("recommendations" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' recommendations="' + body["recommendations"] + '"';
  }
  if ("reviews" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' documents reviewed="' + body["reviews"] + '"';
  }
  if ("comment" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' comment="' + body["comment"] + '" , commentor="'+ body["commentor"]+'"';
    if(body["role"] =='Auditor')
    {
      
      if (and == true) {
        sql += ' ,'
      }
        sql += 'auditor="'+body["commentor"]+'"';
    }
    else if(body["role"] =='User')
    {
      
      if (and == true) {
        sql += ' ,'
      }
        sql += 'user="'+body["commentor"]+'"';
    }
   
      sql1="INSERT INTO comment_history VALUES ('"+body["quests"]+"','','Implementation','Secure Build','"+req.body.comment+"','"+ body["commentor"]+"',CURRENT_TIMESTAMP,'"+req.body.score+"','"+req.body.id+"','"+req.body.answer+"');"
      //console.log(sql1)
  }
  else
    sql1="select * from comment_history";
  if ("answer" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += 'answer="'+req.body.answer+'" ,status= CASE  WHEN ans1="'+req.body.answer+'" THEN 0  WHEN ans2="'+req.body.answer+'" THEN 0.25 WHEN ans3="'+req.body.answer+'" THEN 0.5 ELSE 1 END';
  }
  sql +=" WHERE vsamm_id = '"+req.body.id+"'";
  sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,created) values('"+req.body.id+"','"+req.body.id+"','"+req.body.quests+"','Implementation','Secure Build','"+req.body.score+"',NOW())";
    console.log("sql:", sql);
  
  //console.log("sql:", sql2);
  //console.log("sql:", sql1);
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
  
  

});
//===============get the uploaded files for implement_secure_build=======================
router.post('/getuploaded_implement_secure_build', function(req,res)
{
sql="SELECT filename FROM `implement_secure_build` WHERE vsamm_id='"+req.body.id+"'";
console.log(sql);
db.query(sql,(err,results)=>
{
    if(err) throw err;
    res.json({success: true,results:results});
})
});
//=============================================implement_secure_deploy==================
//=========================THIRD implement_secure_deploy GRAPH=======================================
router.get('/implement_secure_deploy_third_graph', function (req, res) {
  function Deployment_Process(){
      var defered = Q.defer();
      db.query("SELECT status FROM `implement_secure_deploy` where stream='Deployment Process' order by maturity_level",defered.makeNodeResolver());
      return defered.promise;
    }
    function Secret_Management(){
      var defered = Q.defer();
      db.query("SELECT status FROM `implement_secure_deploy` where stream='Secret Management' order by maturity_level",defered.makeNodeResolver());
      return defered.promise;
    }
    
    Q.all([Deployment_Process(),Secret_Management()]).then(function(results){
      Deployment_Process_l1=results[0][0][0].status;
      Deployment_Process_l2=results[0][0][1].status;
      Deployment_Process_l3=results[0][0][2].status;
      Secret_Management_l1=results[1][0][0].status;
      Secret_Management_l2=results[1][0][1].status;
      Secret_Management_l3=results[1][0][2].status;
       res.json({success:true,Deployment_Process_l1:Deployment_Process_l1,Deployment_Process_l2:Deployment_Process_l2,Deployment_Process_l3:Deployment_Process_l3,
          Secret_Management_l1:Secret_Management_l1,Secret_Management_l2:Secret_Management_l2,Secret_Management_l3:Secret_Management_l3});
     });
  
});
//============================DESIGN secure_arch table========================================
router.get('/implement_secure_deploy_table',function(req,res){
  //console.log('/governance_policy_table');
  function vsamm(){
    var defered = Q.defer();
    db.query("SELECT * FROM implement_secure_deploy",defered.makeNodeResolver());
    return defered.promise;
  }
  Q.all([vsamm()]).then(function(results){
    all = results[0][0];
    res.json({success:true, "all": all});
  });
});

//=======================DESIGN secure_arch popup select values==============================
router.post('/get_select_options_implement_secure_deploy',function(req,res){
//console.log(req.body)
function vsamm(){
  var defered = Q.defer();
  db.query("SELECT ans1,ans2,ans3,ans4 FROM implement_secure_deploy where vsamm_id='"+req.body.id+"'",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([vsamm()]).then(function(results){
  ans1 = results[0][0][0].ans1;
  ans2 = results[0][0][0].ans2;
  ans3 = results[0][0][0].ans3;
  ans4 = results[0][0][0].ans4;
  res.json({success:true, ans1:ans1,ans2:ans2,ans3:ans3,ans4:ans4});
});
});
//=======================design_secure_arch update==============================
router.put('/implement_secure_deploy_edit', function (req, res) {
let and = false;
let where = false;
let body = req.body;
console.log("====================================================")
console.log(body);
sql =
  'update implement_secure_deploy  set'
if ("quests" in body) {
 
  sql += ' question="' + body["quests"] + '"';
 and=true;
}

if ("findings" in body) {
 
  if (and == true) {
    sql += ' ,'
  }
  sql += ' findings="' + body["findings"] + '"';
}
if ("recommendations" in body) {
 
  if (and == true) {
    sql += ' ,'
  }
  sql += ' recommendations="' + body["recommendations"] + '"';
}
if ("reviews" in body) {
 
  if (and == true) {
    sql += ' ,'
  }
  sql += ' documents reviewed="' + body["reviews"] + '"';
}
if ("comment" in body) {
 
  if (and == true) {
    sql += ' ,'
  }
  sql += ' comment="' + body["comment"] + '" , commentor="'+ body["commentor"]+'"';
  if(body["role"] =='Auditor')
  {
    
    if (and == true) {
      sql += ' ,'
    }
      sql += 'auditor="'+body["commentor"]+'"';
  }
  else if(body["role"] =='User')
  {
    
    if (and == true) {
      sql += ' ,'
    }
      sql += 'user="'+body["commentor"]+'"';
  }
 
    sql1="INSERT INTO comment_history VALUES ('"+body["quests"]+"','','Implementation','Secure Deployment','"+req.body.comment+"','"+ body["commentor"]+"',CURRENT_TIMESTAMP,'"+req.body.score+"','"+req.body.id+"','"+req.body.answer+"');"
    //console.log(sql1)
}
else
  sql1="select * from comment_history";
if ("answer" in body) {
 
  if (and == true) {
    sql += ' ,'
  }
  sql += 'answer="'+req.body.answer+'" ,status= CASE  WHEN ans1="'+req.body.answer+'" THEN 0  WHEN ans2="'+req.body.answer+'" THEN 0.25 WHEN ans3="'+req.body.answer+'" THEN 0.5 ELSE 1 END';
}
sql +=" WHERE vsamm_id = '"+req.body.id+"'";
sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,created) values('"+req.body.id+"','"+req.body.id+"','"+req.body.quests+"','Implementation','Secure Deployment','"+req.body.score+"',NOW())";
  console.log("sql:", sql);

//console.log("sql:", sql2);
//console.log("sql:", sql1);
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


});
//===============get the uploaded files for design_secure_arch=======================
router.post('/getuploaded_implement_secure_deploy', function(req,res)
{
sql="SELECT filename FROM `implement_secure_deploy` WHERE vsamm_id='"+req.body.id+"'";
console.log(sql);
db.query(sql,(err,results)=>
{
    if(err) throw err;
    res.json({success: true,results:results});
})
});

//=====================Verification=============================================

//=================================verify_archT===========================
//=========================LAST verify_arch GRAPH=======================================
router.post('/last_graph_verification', function (req, res) 
{
  var d = new Date();
  var curr =[];
  var c,p,f;
  curr[0]= d.getMonth();
  curr[1] = d.getMonth()-1;
  curr[2] = d.getMonth()-2;
  if(curr[0]==0)
  {
      curr[1]=11;
      curr[2]=10;
  }
  if(curr[0]==1)
  {
      curr[1]=0;
      curr[2]=11;
  }
  for(var i=0;i<3;i++)
  {
      if(curr[i]==0)
          curr[i]='Jan'
      else if(curr[i]==1)
          curr[i]='Feb'
      else if(curr[i]==2)
          curr[i]='Mar'
      else if(curr[i]==3)
          curr[i]='Apr'
      else if(curr[i]==4)
          curr[i]='May'
      else if(curr[i]==5)
          curr[i]='Jun'
      else if(curr[i]==6)
          curr[i]='Jul'
      else if(curr[i]==7)
          curr[i]='Aug'
      else if(curr[i]==8)
          curr[i]='Sep'
      else if(curr[i]==9)
          curr[i]='Oct'
      else if(curr[i]==10)
          curr[i]='Nov'
      else if(curr[i]==11)
          curr[i]='Dec'
  }
  function third_graph_score(){
    var defered = Q.defer();
    sql="SELECT "+curr[2]+","+curr[1]+", "+curr[0]+" FROM `history` WHERE groupname='Verification' and secpractice='"+req.body.secpractice+"' ";
    //console.log(sql);
    db.query(sql,defered.makeNodeResolver());
    return defered.promise;
  }
  Q.all([third_graph_score()]).then(function(results){
    var mon=[];
    for(var i=0;i<3;i++)
    {
    if(curr[i]=='Jan')
          mon[i]=results[0][0][0].Jan;
      else if(curr[i]=='Feb')
      mon[i]=results[0][0][0].Feb;
      else if(curr[i]=='Mar')
      mon[i]=results[0][0][0].Mar;
      else if(curr[i]=='Apr')
      mon[i]=results[0][0][0].Apr;
      else if(curr[i]=='May')
      mon[i]=results[0][0][0].May;
      else if(curr[i]='Jun')
      mon[i]=results[0][0][0].Jun
      else if(curr[i]=='Jul')
      mon[i]=results[0][0][0].Jul;
      else if(curr[i]=='Aug')
      mon[i]=results[0][0][0].Aug;
      else if(curr[i]=='Sep')
      mon[i]=results[0][0][0].Sep;
      else if(curr[i]=='Oct')
      mon[i]=results[0][0][0].Oct;
      else if(curr[i]=='Nov')
      mon[i]=results[0][0][0].Nov;
      else if(curr[i]=='Dec')
      mon[i]=results[0][0][0].Dec;
    //console.log(results[0][0][0].Mar);
    if(mon[i]==null)

      {
        mon[i]=0
      }
    }
    res.json({success:true, month_pre:curr[0],month_before_1: curr[1], month_before_2: curr[2],
                            score_cur:mon[0], score_before_1:mon[1],score_before_2:mon[2]});
  });
});
//=========================THIRD verify_arch GRAPH=======================================
router.get('/verify_arch_third_graph', function (req, res) {
  function Architecture_Validation(){
      var defered = Q.defer();
      db.query("SELECT status FROM `verify_arch` where stream='Architecture Validation' order by maturity_level",defered.makeNodeResolver());
      return defered.promise;
    }
    function Architecture_Compliance(){
      var defered = Q.defer();
      db.query("SELECT status FROM `verify_arch` where stream='Architecture Compliance' order by maturity_level",defered.makeNodeResolver());
      return defered.promise;
    }
    
    Q.all([Architecture_Validation(),Architecture_Compliance()]).then(function(results){
      Architecture_Validation_l1=results[0][0][0].status;
      Architecture_Validation_l2=results[0][0][1].status;
      Architecture_Validation_l3=results[0][0][2].status
      Architecture_Compliance_l1=results[1][0][0].status;
      Architecture_Compliance_l2=results[1][0][1].status;
      Architecture_Compliance_l3=results[1][0][2].status;
       res.json({success:true,Architecture_Validation_l1:Architecture_Validation_l1,Architecture_Validation_l2:Architecture_Validation_l2,Architecture_Validation_l3:Architecture_Validation_l3,
          Architecture_Compliance_l1:Architecture_Compliance_l1,Architecture_Compliance_l2:Architecture_Compliance_l2,Architecture_Compliance_l3:Architecture_Compliance_l3});
     });
  
});
//============================verify_arch table========================================
router.get('/verify_arch_table',function(req,res){
  //console.log('/governance_policy_table');
  function vsamm(){
    var defered = Q.defer();
    db.query("SELECT * FROM verify_arch",defered.makeNodeResolver());
    return defered.promise;
  }
  Q.all([vsamm()]).then(function(results){
    all = results[0][0];
    res.json({success:true, "all": all});
  });
});

//=======================verify_arch popup select values==============================
router.post('/get_select_options_verify_arch',function(req,res){
//console.log(req.body)
function vsamm(){
  var defered = Q.defer();
  db.query("SELECT ans1,ans2,ans3,ans4 FROM verify_arch where vsamm_id='"+req.body.id+"'",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([vsamm()]).then(function(results){
  ans1 = results[0][0][0].ans1;
  ans2 = results[0][0][0].ans2;
  ans3 = results[0][0][0].ans3;
  ans4 = results[0][0][0].ans4;
  res.json({success:true, ans1:ans1,ans2:ans2,ans3:ans3,ans4:ans4});
});
});
//=======================verify_arch update==============================
router.put('/verify_arch_edit', function (req, res) {
let and = false;
let where = false;
let body = req.body;
console.log("====================================================")
  console.log(body);
  sql =
    'update verify_arch  set'
  if ("quests" in body) {
   
    sql += ' question="' + body["quests"] + '"';
   and=true;
  }
  
  if ("findings" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' findings="' + body["findings"] + '"';
  }
  if ("recommendations" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' recommendations="' + body["recommendations"] + '"';
  }
  if ("reviews" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' documents reviewed="' + body["reviews"] + '"';
  }
  if ("comment" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' comment="' + body["comment"] + '" , commentor="'+ body["commentor"]+'"';
    if(body["role"] =='Auditor')
    {
      
      if (and == true) {
        sql += ' ,'
      }
        sql += 'auditor="'+body["commentor"]+'"';
    }
    else if(body["role"] =='User')
    {
      
      if (and == true) {
        sql += ' ,'
      }
        sql += 'user="'+body["commentor"]+'"';
    }
   
      sql1="INSERT INTO comment_history VALUES ('"+body["quests"]+"','','Verification','Architecture Assessment','"+req.body.comment+"','"+ body["commentor"]+"',CURRENT_TIMESTAMP,'"+req.body.score+"','"+req.body.id+"','"+req.body.answer+"');"
      //console.log(sql1)
  }
  else
    sql1="select * from comment_history";
  if ("answer" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += 'answer="'+req.body.answer+'" ,status= CASE  WHEN ans1="'+req.body.answer+'" THEN 0  WHEN ans2="'+req.body.answer+'" THEN 0.25 WHEN ans3="'+req.body.answer+'" THEN 0.5 ELSE 1 END';
  }
  sql +=" WHERE vsamm_id = '"+req.body.id+"'";
  sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,created) values('"+req.body.id+"','"+req.body.id+"','"+req.body.quests+"','Verification','Architecture Assessment','"+req.body.score+"',NOW())";
    console.log("sql:", sql);
  
  //console.log("sql:", sql2);
  //console.log("sql:", sql1);
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
  
  

});
//===============get the uploaded files for design_threat=======================
router.post('/getuploaded_verify_arch', function(req,res)
{
sql="SELECT filename FROM `verify_arch` WHERE vsamm_id='"+req.body.id+"'";
console.log(sql);
db.query(sql,(err,results)=>
{
    if(err) throw err;
    res.json({success: true,results:results});
})
});

//=============================================verify_requirement==================
//=========================THIRD verify_requirement GRAPH=======================================
router.get('/verify_requirement_third_graph', function (req, res) {
  function Control_Verification(){
      var defered = Q.defer();
      db.query("SELECT status FROM `verify_requirement` where stream='Control Verification' order by maturity_level",defered.makeNodeResolver());
      return defered.promise;
    }
    function MisuseAbuse_Testing(){
      var defered = Q.defer();
      db.query("SELECT status FROM `verify_requirement` where stream='Misuse/Abuse Testing' order by maturity_level",defered.makeNodeResolver());
      return defered.promise;
    }
    
    Q.all([Control_Verification(),MisuseAbuse_Testing()]).then(function(results){
      Control_Verification_l1=results[0][0][0].status;
      Control_Verification_l2=results[0][0][1].status;
      Control_Verification_l3=results[0][0][2].status
      MisuseAbuse_Testing_l1=results[1][0][0].status;
      MisuseAbuse_Testing_l2=results[1][0][1].status;
      MisuseAbuse_Testing_l3=results[1][0][2].status;
       res.json({success:true,Control_Verification_l1:Control_Verification_l1,Control_Verification_l2:Control_Verification_l2,Control_Verification_l3:Control_Verification_l3,
          MisuseAbuse_Testing_l1:MisuseAbuse_Testing_l1,MisuseAbuse_Testing_l2:MisuseAbuse_Testing_l2,MisuseAbuse_Testing_l3:MisuseAbuse_Testing_l3});
     });
  
});
//============================verify_requirement table========================================
router.get('/verify_requirement_table',function(req,res){
  //console.log('/governance_policy_table');
  function vsamm(){
    var defered = Q.defer();
    db.query("SELECT * FROM verify_requirement",defered.makeNodeResolver());
    return defered.promise;
  }
  Q.all([vsamm()]).then(function(results){
    all = results[0][0];
    res.json({success:true, "all": all});
  });
});

//=======================verify_requirement popup select values==============================
router.post('/get_select_options_verify_requirement',function(req,res){
//console.log(req.body)
function vsamm(){
  var defered = Q.defer();
  db.query("SELECT ans1,ans2,ans3,ans4 FROM verify_requirement where vsamm_id='"+req.body.id+"'",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([vsamm()]).then(function(results){
  ans1 = results[0][0][0].ans1;
  ans2 = results[0][0][0].ans2;
  ans3 = results[0][0][0].ans3;
  ans4 = results[0][0][0].ans4;
  res.json({success:true, ans1:ans1,ans2:ans2,ans3:ans3,ans4:ans4});
});
});
//=======================verify_requirement update==============================
router.put('/verify_requirement_edit', function (req, res) {
let and = false;
let where = false;
let body = req.body;
console.log("====================================================")
  console.log(body);
  sql =
    'update verify_requirement  set'
  if ("quests" in body) {
   
    sql += ' question="' + body["quests"] + '"';
   and=true;
  }
  
  if ("findings" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' findings="' + body["findings"] + '"';
  }
  if ("recommendations" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' recommendations="' + body["recommendations"] + '"';
  }
  if ("reviews" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' documents reviewed="' + body["reviews"] + '"';
  }
  if ("comment" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' comment="' + body["comment"] + '" , commentor="'+ body["commentor"]+'"';
    if(body["role"] =='Auditor')
    {
      
      if (and == true) {
        sql += ' ,'
      }
        sql += 'auditor="'+body["commentor"]+'"';
    }
    else if(body["role"] =='User')
    {
      
      if (and == true) {
        sql += ' ,'
      }
        sql += 'user="'+body["commentor"]+'"';
    }
   
      sql1="INSERT INTO comment_history VALUES ('"+body["quests"]+"','','Verification','Requirements Driven Testing','"+req.body.comment+"','"+ body["commentor"]+"',CURRENT_TIMESTAMP,'"+req.body.score+"','"+req.body.id+"','"+req.body.answer+"');"
      //console.log(sql1)
  }
  else
    sql1="select * from comment_history";
  if ("answer" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += 'answer="'+req.body.answer+'" ,status= CASE  WHEN ans1="'+req.body.answer+'" THEN 0  WHEN ans2="'+req.body.answer+'" THEN 0.25 WHEN ans3="'+req.body.answer+'" THEN 0.5 ELSE 1 END';
  }
  sql +=" WHERE vsamm_id = '"+req.body.id+"'";
  sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,created) values('"+req.body.id+"','"+req.body.id+"','"+req.body.quests+"','Verification','Requirements Driven Testing','"+req.body.score+"',NOW())";
    console.log("sql:", sql);
  
  //console.log("sql:", sql2);
  //console.log("sql:", sql1);
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
  
  

});
//===============get the uploaded files for verify_requirement=======================
router.post('/getuploaded_verify_requirement', function(req,res)
{
sql="SELECT filename FROM `verify_requirement` WHERE vsamm_id='"+req.body.id+"'";
console.log(sql);
db.query(sql,(err,results)=>
{
    if(err) throw err;
    res.json({success: true,results:results});
})
});
//=============================================verify_security==================
//=========================THIRD verify_security GRAPH=======================================
router.get('/verify_security_third_graph', function (req, res) {
  function Scalable_Baseline(){
      var defered = Q.defer();
      db.query("SELECT status FROM `verify_security` where stream='Scalable Baseline' order by maturity_level",defered.makeNodeResolver());
      return defered.promise;
    }
    function Deep_Understanding(){
      var defered = Q.defer();
      db.query("SELECT status FROM `verify_security` where stream='Deep Understanding' order by maturity_level",defered.makeNodeResolver());
      return defered.promise;
    }
    
    Q.all([Scalable_Baseline(),Deep_Understanding()]).then(function(results){
      Scalable_Baseline_l1=results[0][0][0].status;
      Scalable_Baseline_l2=results[0][0][1].status;
      Scalable_Baseline_l3=results[0][0][2].status
      Deep_Understanding_l1=results[1][0][0].status;
      Deep_Understanding_l2=results[1][0][1].status;
      Deep_Understanding_l3=results[1][0][2].status;
       res.json({success:true,Scalable_Baseline_l1:Scalable_Baseline_l1,Scalable_Baseline_l2:Scalable_Baseline_l2,Scalable_Baseline_l3:Scalable_Baseline_l3,
          Deep_Understanding_l1:Deep_Understanding_l1,Deep_Understanding_l2:Deep_Understanding_l2,Deep_Understanding_l3:Deep_Understanding_l3});
     });
  
});
//============================verify_security table========================================
router.get('/verify_security_table',function(req,res){
  //console.log('/governance_policy_table');
  function vsamm(){
    var defered = Q.defer();
    db.query("SELECT * FROM verify_security",defered.makeNodeResolver());
    return defered.promise;
  }
  Q.all([vsamm()]).then(function(results){
    all = results[0][0];
    res.json({success:true, "all": all});
  });
});

//=======================verify_security popup select values==============================
router.post('/get_select_options_verify_security',function(req,res){
//console.log(req.body)
function vsamm(){
  var defered = Q.defer();
  db.query("SELECT ans1,ans2,ans3,ans4 FROM verify_security where vsamm_id='"+req.body.id+"'",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([vsamm()]).then(function(results){
  ans1 = results[0][0][0].ans1;
  ans2 = results[0][0][0].ans2;
  ans3 = results[0][0][0].ans3;
  ans4 = results[0][0][0].ans4;
  res.json({success:true, ans1:ans1,ans2:ans2,ans3:ans3,ans4:ans4});
});
});
//=======================verify_security update==============================
router.put('/verify_security_edit', function (req, res) {
let and = false;
let where = false;
let body = req.body;
console.log("====================================================")
  console.log(body);
  sql =
    'update verify_security  set'
  if ("quests" in body) {
   
    sql += ' question="' + body["quests"] + '"';
   and=true;
  }
  
  if ("findings" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' findings="' + body["findings"] + '"';
  }
  if ("recommendations" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' recommendations="' + body["recommendations"] + '"';
  }
  if ("reviews" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' documents reviewed="' + body["reviews"] + '"';
  }
  if ("comment" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' comment="' + body["comment"] + '" , commentor="'+ body["commentor"]+'"';
    if(body["role"] =='Auditor')
    {
      
      if (and == true) {
        sql += ' ,'
      }
        sql += 'auditor="'+body["commentor"]+'"';
    }
    else if(body["role"] =='User')
    {
      
      if (and == true) {
        sql += ' ,'
      }
        sql += 'user="'+body["commentor"]+'"';
    }
   
      sql1="INSERT INTO comment_history VALUES ('"+body["quests"]+"','','Verification','Security Testing','"+req.body.comment+"','"+ body["commentor"]+"',CURRENT_TIMESTAMP,'"+req.body.score+"','"+req.body.id+"','"+req.body.answer+"');"
      //console.log(sql1)
  }
  else
    sql1="select * from comment_history";
  if ("answer" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += 'answer="'+req.body.answer+'" ,status= CASE  WHEN ans1="'+req.body.answer+'" THEN 0  WHEN ans2="'+req.body.answer+'" THEN 0.25 WHEN ans3="'+req.body.answer+'" THEN 0.5 ELSE 1 END';
  }
  sql +=" WHERE vsamm_id = '"+req.body.id+"'";
  sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,created) values('"+req.body.id+"','"+req.body.id+"','"+req.body.quests+"','Verification','Security Testing','"+req.body.score+"',NOW())";
    console.log("sql:", sql);
  
  //console.log("sql:", sql2);
  //console.log("sql:", sql1);
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
  
  


});
//===============get the uploaded files for verify_security=======================
router.post('/getuploaded_verify_security', function(req,res)
{
sql="SELECT filename FROM `verify_security` WHERE vsamm_id='"+req.body.id+"'";
console.log(sql);
db.query(sql,(err,results)=>
{
    if(err) throw err;
    res.json({success: true,results:results});
})
});
//=====================Operation=============================================

//=================================operate_environment===========================
//=========================LAST operate_environment GRAPH=======================================
router.post('/last_graph_operation', function (req, res) 
{
  var d = new Date();
  var curr =[];
  var c,p,f;
  curr[0]= d.getMonth();
  curr[1] = d.getMonth()-1;
  curr[2] = d.getMonth()-2;
  if(curr[0]==0)
  {
      curr[1]=11;
      curr[2]=10;
  }
  if(curr[0]==1)
  {
      curr[1]=0;
      curr[2]=11;
  }
  for(var i=0;i<3;i++)
  {
      if(curr[i]==0)
          curr[i]='Jan'
      else if(curr[i]==1)
          curr[i]='Feb'
      else if(curr[i]==2)
          curr[i]='Mar'
      else if(curr[i]==3)
          curr[i]='Apr'
      else if(curr[i]==4)
          curr[i]='May'
      else if(curr[i]==5)
          curr[i]='Jun'
      else if(curr[i]==6)
          curr[i]='Jul'
      else if(curr[i]==7)
          curr[i]='Aug'
      else if(curr[i]==8)
          curr[i]='Sep'
      else if(curr[i]==9)
          curr[i]='Oct'
      else if(curr[i]==10)
          curr[i]='Nov'
      else if(curr[i]==11)
          curr[i]='Dec'
  }
  function third_graph_score(){
    var defered = Q.defer();
    sql="SELECT "+curr[2]+","+curr[1]+", "+curr[0]+" FROM `history` WHERE groupname='Operations' and secpractice='"+req.body.secpractice+"' ";
    //console.log(sql);
    db.query(sql,defered.makeNodeResolver());
    return defered.promise;
  }
  Q.all([third_graph_score()]).then(function(results){
    var mon=[];
    for(var i=0;i<3;i++)
    {
    if(curr[i]=='Jan')
          mon[i]=results[0][0][0].Jan;
      else if(curr[i]=='Feb')
      mon[i]=results[0][0][0].Feb;
      else if(curr[i]=='Mar')
      mon[i]=results[0][0][0].Mar;
      else if(curr[i]=='Apr')
      mon[i]=results[0][0][0].Apr;
      else if(curr[i]=='May')
      mon[i]=results[0][0][0].May;
      else if(curr[i]='Jun')
      mon[i]=results[0][0][0].Jun
      else if(curr[i]=='Jul')
      mon[i]=results[0][0][0].Jul;
      else if(curr[i]=='Aug')
      mon[i]=results[0][0][0].Aug;
      else if(curr[i]=='Sep')
      mon[i]=results[0][0][0].Sep;
      else if(curr[i]=='Oct')
      mon[i]=results[0][0][0].Oct;
      else if(curr[i]=='Nov')
      mon[i]=results[0][0][0].Nov;
      else if(curr[i]=='Dec')
      mon[i]=results[0][0][0].Dec;
    //console.log(results[0][0][0].Mar);
    if(mon[i]==null)

      {
        mon[i]=0
      }
    }
    res.json({success:true, month_pre:curr[0],month_before_1: curr[1], month_before_2: curr[2],
                            score_cur:mon[0], score_before_1:mon[1],score_before_2:mon[2]});
  });
});
//=========================THIRD operate_environment GRAPH=======================================
router.get('/operate_environment_third_graph', function (req, res) {
  function Configuration_Hardening(){
      var defered = Q.defer();
      db.query("SELECT status FROM `operate_environment` where stream='Configuration Hardening' order by maturity_level",defered.makeNodeResolver());
      return defered.promise;
    }
    function Patching_and_Updating(){
      var defered = Q.defer();
      db.query("SELECT status FROM `operate_environment` where stream='Patching and Updating' order by maturity_level",defered.makeNodeResolver());
      return defered.promise;
    }
    
    Q.all([Configuration_Hardening(),Patching_and_Updating()]).then(function(results){
      Configuration_Hardening_l1=results[0][0][0].status;
      Configuration_Hardening_l2=results[0][0][1].status;
      Configuration_Hardening_l3=results[0][0][2].status
      Patching_and_Updating_l1=results[1][0][0].status;
      Patching_and_Updating_l2=results[1][0][1].status;
      Patching_and_Updating_l3=results[1][0][2].status;
       res.json({success:true,Configuration_Hardening_l1:Configuration_Hardening_l1,Configuration_Hardening_l2:Configuration_Hardening_l2,Configuration_Hardening_l3:Configuration_Hardening_l3,
          Patching_and_Updating_l1:Patching_and_Updating_l1,Patching_and_Updating_l2:Patching_and_Updating_l2,Patching_and_Updating_l3:Patching_and_Updating_l3});
     });
  
});
//============================operate_environment table========================================
router.get('/operate_environment_table',function(req,res){
  //console.log('/governance_policy_table');
  function vsamm(){
    var defered = Q.defer();
    db.query("SELECT * FROM operate_environment",defered.makeNodeResolver());
    return defered.promise;
  }
  Q.all([vsamm()]).then(function(results){
    all = results[0][0];
    res.json({success:true, "all": all});
  });
});

//=======================operate_environment popup select values==============================
router.post('/get_select_options_operate_environment',function(req,res){
//console.log(req.body)
function vsamm(){
  var defered = Q.defer();
  db.query("SELECT ans1,ans2,ans3,ans4 FROM operate_environment where vsamm_id='"+req.body.id+"'",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([vsamm()]).then(function(results){
  ans1 = results[0][0][0].ans1;
  ans2 = results[0][0][0].ans2;
  ans3 = results[0][0][0].ans3;
  ans4 = results[0][0][0].ans4;
  res.json({success:true, ans1:ans1,ans2:ans2,ans3:ans3,ans4:ans4});
});
});
//=======================operate_environment update==============================
router.put('/operate_environment_edit', function (req, res) {
let and = false;
let where = false;
let body = req.body;
console.log("====================================================")
  console.log(body);
  sql =
    'update operate_environment  set'
  if ("quests" in body) {
   
    sql += ' question="' + body["quests"] + '"';
   and=true;
  }
  
  if ("findings" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' findings="' + body["findings"] + '"';
  }
  if ("recommendations" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' recommendations="' + body["recommendations"] + '"';
  }
  if ("reviews" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' documents reviewed="' + body["reviews"] + '"';
  }
  if ("comment" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' comment="' + body["comment"] + '" , commentor="'+ body["commentor"]+'"';
    if(body["role"] =='Auditor')
    {
      
      if (and == true) {
        sql += ' ,'
      }
        sql += 'auditor="'+body["commentor"]+'"';
    }
    else if(body["role"] =='User')
    {
      
      if (and == true) {
        sql += ' ,'
      }
        sql += 'user="'+body["commentor"]+'"';
    }
   
      sql1="INSERT INTO comment_history VALUES ('"+body["quests"]+"','','Operations','Environment Management','"+req.body.comment+"','"+ body["commentor"]+"',CURRENT_TIMESTAMP,'"+req.body.score+"','"+req.body.id+"','"+req.body.answer+"');"
      //console.log(sql1)
  }
  else
    sql1="select * from comment_history";
  if ("answer" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += 'answer="'+req.body.answer+'" ,status= CASE  WHEN ans1="'+req.body.answer+'" THEN 0  WHEN ans2="'+req.body.answer+'" THEN 0.25 WHEN ans3="'+req.body.answer+'" THEN 0.5 ELSE 1 END';
  }
  sql +=" WHERE vsamm_id = '"+req.body.id+"'";
  sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,created) values('"+req.body.id+"','"+req.body.id+"','"+req.body.quests+"','Operations','Environment Management','"+req.body.score+"',NOW())";
    console.log("sql:", sql);
  
  //console.log("sql:", sql2);
  //console.log("sql:", sql1);
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
  
  


});
//===============get the uploaded files for operate_environment=======================
router.post('/getuploaded_operate_environment', function(req,res)
{
sql="SELECT filename FROM `operate_environment` WHERE vsamm_id='"+req.body.id+"'";
console.log(sql);
db.query(sql,(err,results)=>
{
    if(err) throw err;
    res.json({success: true,results:results});
})
});

//=============================================operate_incident==================
//=========================THIRD operate_incident GRAPH=======================================
router.get('/operate_incident_third_graph', function (req, res) {
  function Incident_Detection(){
      var defered = Q.defer();
      db.query("SELECT status FROM `operate_incident` where stream='Incident Detection' order by maturity_level",defered.makeNodeResolver());
      return defered.promise;
    }
    function Incident_Response(){
      var defered = Q.defer();
      db.query("SELECT status FROM `operate_incident` where stream='Incident Response' order by maturity_level",defered.makeNodeResolver());
      return defered.promise;
    }
    
    Q.all([Incident_Detection(),Incident_Response()]).then(function(results){
      Incident_Detection_l1=results[0][0][0].status;
      Incident_Detection_l2=results[0][0][1].status;
      Incident_Detection_l3=results[0][0][2].status
      Incident_Response_l1=results[1][0][0].status;
      Incident_Response_l2=results[1][0][1].status;
      Incident_Response_l3=results[1][0][2].status;
       res.json({success:true,Incident_Detection_l1:Incident_Detection_l1,Incident_Detection_l2:Incident_Detection_l2,Incident_Detection_l3:Incident_Detection_l3,
          Incident_Response_l1:Incident_Response_l1,Incident_Response_l2:Incident_Response_l2,Incident_Response_l3:Incident_Response_l3});
     });
  
});
//============================operate_incident table========================================
router.get('/operate_incident_table',function(req,res){
  //console.log('/governance_policy_table');
  function vsamm(){
    var defered = Q.defer();
    db.query("SELECT * FROM operate_incident",defered.makeNodeResolver());
    return defered.promise;
  }
  Q.all([vsamm()]).then(function(results){
    all = results[0][0];
    res.json({success:true, "all": all});
  });
});

//=======================operate_incident popup select values==============================
router.post('/get_select_options_operate_incident',function(req,res){
//console.log(req.body)
function vsamm(){
  var defered = Q.defer();
  db.query("SELECT ans1,ans2,ans3,ans4 FROM operate_incident where vsamm_id='"+req.body.id+"'",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([vsamm()]).then(function(results){
  ans1 = results[0][0][0].ans1;
  ans2 = results[0][0][0].ans2;
  ans3 = results[0][0][0].ans3;
  ans4 = results[0][0][0].ans4;
  res.json({success:true, ans1:ans1,ans2:ans2,ans3:ans3,ans4:ans4});
});
});
//=======================operate_incident update==============================
router.put('/operate_incident_edit', function (req, res) {
let and = false;
let where = false;
let body = req.body;
console.log("====================================================")
  console.log(body);
  sql =
    'update operate_incident  set'
  if ("quests" in body) {
   
    sql += ' question="' + body["quests"] + '"';
   and=true;
  }
  
  if ("findings" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' findings="' + body["findings"] + '"';
  }
  if ("recommendations" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' recommendations="' + body["recommendations"] + '"';
  }
  if ("reviews" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' documents reviewed="' + body["reviews"] + '"';
  }
  if ("comment" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' comment="' + body["comment"] + '" , commentor="'+ body["commentor"]+'"';
    if(body["role"] =='Auditor')
    {
      
      if (and == true) {
        sql += ' ,'
      }
        sql += 'auditor="'+body["commentor"]+'"';
    }
    else if(body["role"] =='User')
    {
      
      if (and == true) {
        sql += ' ,'
      }
        sql += 'user="'+body["commentor"]+'"';
    }
   
      sql1="INSERT INTO comment_history VALUES ('"+body["quests"]+"','','Operations','Incident Management','"+req.body.comment+"','"+ body["commentor"]+"',CURRENT_TIMESTAMP,'"+req.body.score+"','"+req.body.id+"','"+req.body.answer+"');"
      //console.log(sql1)
  }
  else
    sql1="select * from comment_history";
  if ("answer" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += 'answer="'+req.body.answer+'" ,status= CASE  WHEN ans1="'+req.body.answer+'" THEN 0  WHEN ans2="'+req.body.answer+'" THEN 0.25 WHEN ans3="'+req.body.answer+'" THEN 0.5 ELSE 1 END';
  }
  sql +=" WHERE vsamm_id = '"+req.body.id+"'";
  sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,created) values('"+req.body.id+"','"+req.body.id+"','"+req.body.quests+"','Operations','Incident Management','"+req.body.score+"',NOW())";
    console.log("sql:", sql);
  
  //console.log("sql:", sql2);
  //console.log("sql:", sql1);
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
  
  


});
//===============get the uploaded files for operate_incident=======================
router.post('/getuploaded_operate_incident', function(req,res)
{
sql="SELECT filename FROM `operate_incident` WHERE vsamm_id='"+req.body.id+"'";
console.log(sql);
db.query(sql,(err,results)=>
{
    if(err) throw err;
    res.json({success: true,results:results});
})
});
//=============================================operate_operational==================
//=========================THIRD operate_operational GRAPH=======================================
router.get('/operate_operational_third_graph', function (req, res) {
  function Data_Protection(){
      var defered = Q.defer();
      db.query("SELECT status FROM `operate_operational` where stream='Data Protection' order by maturity_level",defered.makeNodeResolver());
      return defered.promise;
    }
    function System_decommissioningLegacy_management(){
      var defered = Q.defer();
      db.query("SELECT status FROM `operate_operational` where stream='System decommissioning / Legacy management' order by maturity_level",defered.makeNodeResolver());
      return defered.promise;
    }
    
    Q.all([Data_Protection(),System_decommissioningLegacy_management()]).then(function(results){
      Data_Protection_l1=results[0][0][0].status;
      Data_Protection_l2=results[0][0][1].status;
      Data_Protection_l3=results[0][0][2].status
      System_decommissioningLegacy_management_l1=results[1][0][0].status;
      System_decommissioningLegacy_management_l2=results[1][0][1].status;
      System_decommissioningLegacy_management_l3=results[1][0][2].status;
       res.json({success:true,Data_Protection_l1:Data_Protection_l1,Data_Protection_l2:Data_Protection_l2,Data_Protection_l3:Data_Protection_l3,
          System_decommissioningLegacy_management_l1:System_decommissioningLegacy_management_l1,System_decommissioningLegacy_management_l2:System_decommissioningLegacy_management_l2,System_decommissioningLegacy_management_l3:System_decommissioningLegacy_management_l3});
     });
  
});
//============================operate_operational table========================================
router.get('/operate_operational_table',function(req,res){
  //console.log('/governance_policy_table');
  function vsamm(){
    var defered = Q.defer();
    db.query("SELECT * FROM operate_operational",defered.makeNodeResolver());
    return defered.promise;
  }
  Q.all([vsamm()]).then(function(results){
    all = results[0][0];
    res.json({success:true, "all": all});
  });
});

//=======================operate_operational popup select values==============================
router.post('/get_select_options_operate_operational',function(req,res){
//console.log(req.body)
function vsamm(){
  var defered = Q.defer();
  db.query("SELECT ans1,ans2,ans3,ans4 FROM operate_operational where vsamm_id='"+req.body.id+"'",defered.makeNodeResolver());
  return defered.promise;
}
Q.all([vsamm()]).then(function(results){
  ans1 = results[0][0][0].ans1;
  ans2 = results[0][0][0].ans2;
  ans3 = results[0][0][0].ans3;
  ans4 = results[0][0][0].ans4;
  res.json({success:true, ans1:ans1,ans2:ans2,ans3:ans3,ans4:ans4});
});
});
//=======================operate_operational update==============================
router.put('/operate_operational_edit', function (req, res) {
let and = false;
let where = false;
let body = req.body;
console.log("====================================================")
  console.log(body);
  sql =
    'update operate_operational  set'
  if ("quests" in body) {
   
    sql += ' question="' + body["quests"] + '"';
   and=true;
  }
  
  if ("findings" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' findings="' + body["findings"] + '"';
  }
  if ("recommendations" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' recommendations="' + body["recommendations"] + '"';
  }
  if ("reviews" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' documents reviewed="' + body["reviews"] + '"';
  }
  if ("comment" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += ' comment="' + body["comment"] + '" , commentor="'+ body["commentor"]+'"';
    if(body["role"] =='Auditor')
    {
      
      if (and == true) {
        sql += ' ,'
      }
        sql += 'auditor="'+body["commentor"]+'"';
    }
    else if(body["role"] =='User')
    {
      
      if (and == true) {
        sql += ' ,'
      }
        sql += 'user="'+body["commentor"]+'"';
    }
   
      sql1="INSERT INTO comment_history VALUES ('"+body["quests"]+"','','Operations','Operational Management','"+req.body.comment+"','"+ body["commentor"]+"',CURRENT_TIMESTAMP,'"+req.body.score+"','"+req.body.id+"','"+req.body.answer+"');"
      //console.log(sql1)
  }
  else
    sql1="select * from comment_history";
  if ("answer" in body) {
   
    if (and == true) {
      sql += ' ,'
    }
    sql += 'answer="'+req.body.answer+'" ,status= CASE  WHEN ans1="'+req.body.answer+'" THEN 0  WHEN ans2="'+req.body.answer+'" THEN 0.25 WHEN ans3="'+req.body.answer+'" THEN 0.5 ELSE 1 END';
  }
  sql +=" WHERE vsamm_id = '"+req.body.id+"'";
  sql2="Insert into score_history(qoid,qoname,question,groupname, secpractice,score,created) values('"+req.body.id+"','"+req.body.id+"','"+req.body.quests+"','Operations','Operational Management','"+req.body.score+"',NOW())";
    console.log("sql:", sql);
  
  //console.log("sql:", sql2);
  //console.log("sql:", sql1);
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
  
  

});
//===============get the uploaded files for operate_operational=======================
router.post('/getuploaded_operate_operational', function(req,res)
{
sql="SELECT filename FROM `operate_operational` WHERE vsamm_id='"+req.body.id+"'";
console.log(sql);
db.query(sql,(err,results)=>
{
    if(err) throw err;
    res.json({success: true,results:results});
})
});
//adduser
router.post('/adduser', function(req,res)
{
  console.log(req.body);
  sql="INSERT INTO `users`(`name`, `username`, `email`,`role`) VALUES ('"+req.body.fname+"','"+req.body.username+"','"+req.body.email+"','"+req.body.role+"')";
  //console.log(sql)
  
  db.query(sql,(err,results)=>
  {
      if(err) throw err;
      res.json({success: true});
  })
});
//confirmpass
router.post('/confirmpass', function(req,res)
{
  //console.log(req.body);
  sql="select password from users where username='"+req.body.username+"'";
  
  console.log(sql);
db.query(sql,(err,results)=>
{
  console.log(req.body)
  var passwordIsValid = bcrypt.compareSync(req.body.old, results[0].password);
  console.log(passwordIsValid);
  if (!passwordIsValid) 
    res.json({success: false, message:"Sorry password is wrong"});
  else
  res.json({success: true});
  //console.log(results[0].password)
})
 
});
//updatepass
router.post('/updatepass', function(req,res)
{
  //console.log(req.body);
  password= bcrypt.hashSync(req.body.confirmp, 8)
  sql="UPDATE `users` SET `password`='"+password+"' where username='"+req.body.username+"'";
  
  //console.log(sql);
  db.query(sql,(err,results)=>
  {
    //console.log(req.body)
    
    res.json({success: true,message:'Password have been updated'});
    //console.log(results[0].password)
  })
});

//=====================CORONA=================
router.get('/corona', function(req,res)
{
  //console.log('hiiii')
  function governance_education_p(){
    var defered = Q.defer();
    db.query("SELECT count(*) as count FROM `governance_education` WHERE `status`=1",defered.makeNodeResolver());
    return defered.promise;
  }
  function governance_education_n(){
    var defered = Q.defer();
    db.query("SELECT count(*) as count FROM `governance_education` WHERE `status`!=1",defered.makeNodeResolver());
    return defered.promise;
  }
  function governance_policy_p(){
    var defered = Q.defer();
    db.query("SELECT count(*) as count FROM `governance_policy` WHERE `status`=1",defered.makeNodeResolver());
    return defered.promise;
  }
  function governance_policy_n(){
    var defered = Q.defer();
    db.query("SELECT count(*) as count FROM `governance_policy` WHERE `status`!=1",defered.makeNodeResolver());
    return defered.promise;
  }
  function governance_strategy_p(){
    var defered = Q.defer();
    db.query("SELECT count(*) as count FROM `governance_strategy` WHERE `status`=1",defered.makeNodeResolver());
    return defered.promise;
  }
  function governance_strategy_n(){
    var defered = Q.defer();
    db.query("SELECT count(*) as count FROM `governance_strategy` WHERE `status`!=1",defered.makeNodeResolver());
    return defered.promise;
  }
  function design_threat_p(){
    var defered = Q.defer();
    db.query("SELECT count(*) as count FROM `design_threat` WHERE `status`=1",defered.makeNodeResolver());
    return defered.promise;
  }
  function design_threat_n(){
    var defered = Q.defer();
    db.query("SELECT count(*) as count FROM `design_threat` WHERE `status`!=1",defered.makeNodeResolver());
    return defered.promise;
  }
  function design_security_p(){
    var defered = Q.defer();
    db.query("SELECT count(*) as count FROM `design_security` WHERE `status`=1",defered.makeNodeResolver());
    return defered.promise;
  }
  function design_security_n(){
    var defered = Q.defer();
    db.query("SELECT count(*) as count FROM `design_security` WHERE `status`!=1",defered.makeNodeResolver());
    return defered.promise;
  }
  function design_secure_arch_p(){
    var defered = Q.defer();
    db.query("SELECT count(*) as count FROM `design_secure_arch` WHERE `status`=1",defered.makeNodeResolver());
    return defered.promise;
  }
  function design_secure_arch_n(){
    var defered = Q.defer();
    db.query("SELECT count(*) as count FROM `design_secure_arch` WHERE `status`!=1",defered.makeNodeResolver());
    return defered.promise;
  }
  function implement_defect_p(){
    var defered = Q.defer();
    db.query("SELECT count(*) as count FROM `implement_defect` WHERE `status`=1",defered.makeNodeResolver());
    return defered.promise;
  }
  function implement_defect_n(){
    var defered = Q.defer();
    db.query("SELECT count(*) as count FROM `implement_defect` WHERE `status`!=1",defered.makeNodeResolver());
    return defered.promise;
  }
  function implement_secure_build_p(){
    var defered = Q.defer();
    db.query("SELECT count(*) as count FROM `implement_secure_build` WHERE `status`=1",defered.makeNodeResolver());
    return defered.promise;
  }
  function implement_secure_build_n(){
    var defered = Q.defer();
    db.query("SELECT count(*) as count FROM `implement_secure_build` WHERE `status`!=1",defered.makeNodeResolver());
    return defered.promise;
  }
  function implement_secure_deploy_p(){
    var defered = Q.defer();
    db.query("SELECT count(*) as count FROM `implement_secure_deploy` WHERE `status`=1",defered.makeNodeResolver());
    return defered.promise;
  }
  function implement_secure_deploy_n(){
    var defered = Q.defer();
    db.query("SELECT count(*) as count FROM `implement_secure_deploy` WHERE `status`!=1",defered.makeNodeResolver());
    return defered.promise;
  }
  function operate_environment_p(){
    var defered = Q.defer();
    db.query("SELECT count(*) as count FROM `operate_environment` WHERE `status`=1",defered.makeNodeResolver());
    return defered.promise;
  }
  function operate_environment_n(){
    var defered = Q.defer();
    db.query("SELECT count(*) as count FROM `operate_environment` WHERE `status`!=1",defered.makeNodeResolver());
    return defered.promise;
  }
  function operate_incident_p(){
    var defered = Q.defer();
    db.query("SELECT count(*) as count FROM `operate_incident` WHERE `status`=1",defered.makeNodeResolver());
    return defered.promise;
  }
  function operate_incident_n(){
    var defered = Q.defer();
    db.query("SELECT count(*) as count FROM `operate_incident` WHERE `status`!=1",defered.makeNodeResolver());
    return defered.promise;
  }
  //operate_operational
  function operate_operational_p(){
    var defered = Q.defer();
    db.query("SELECT count(*) as count FROM `operate_operational` WHERE `status`=1",defered.makeNodeResolver());
    return defered.promise;
  }
  function operate_operational_n(){
    var defered = Q.defer();
    db.query("SELECT count(*) as count FROM `operate_operational` WHERE `status`!=1",defered.makeNodeResolver());
    return defered.promise;
  }
  function verify_arch_p(){
    var defered = Q.defer();
    db.query("SELECT count(*) as count FROM `verify_arch` WHERE `status`=1",defered.makeNodeResolver());
    return defered.promise;
  }
  function verify_arch_n(){
    var defered = Q.defer();
    db.query("SELECT count(*) as count FROM `verify_arch` WHERE `status`!=1",defered.makeNodeResolver());
    return defered.promise;
  }
  function verify_requirement_p(){
    var defered = Q.defer();
    db.query("SELECT count(*) as count FROM `verify_requirement` WHERE `status`=1",defered.makeNodeResolver());
    return defered.promise;
  }
  function verify_requirement_n(){
    var defered = Q.defer();
    db.query("SELECT count(*) as count FROM `verify_requirement` WHERE `status`!=1",defered.makeNodeResolver());
    return defered.promise;
  }
  function verify_security_p(){
    var defered = Q.defer();
    db.query("SELECT count(*) as count FROM `verify_security` WHERE `status`=1",defered.makeNodeResolver());
    return defered.promise;
  }
  function verify_security_n(){
    var defered = Q.defer();
    db.query("SELECT count(*) as count FROM `verify_security` WHERE `status`!=1",defered.makeNodeResolver());
    return defered.promise;
  }
  
  Q.all([governance_education_p(),governance_policy_p(), governance_strategy_p(),
    governance_education_n(),governance_policy_n(),governance_strategy_n(),  
     design_threat_p(),design_security_p(),design_secure_arch_p(),
    design_threat_n(), design_security_n(),design_secure_arch_n(),
    implement_defect_p(),implement_secure_build_p(),implement_secure_deploy_p(),
    implement_defect_n(),implement_secure_build_n(),implement_secure_deploy_n(),
    operate_environment_p(),operate_incident_p(),operate_operational_p(),
    operate_environment_n(),operate_incident_n(),operate_operational_n(),
    verify_arch_p(),verify_requirement_p(),verify_security_p(),
    verify_arch_n(),verify_requirement_n(),verify_security_n()]).then(function(results){
      governance_p=results[0][0][0].count+results[1][0][0].count+results[2][0][0].count;
      governance_n=results[3][0][0].count+results[4][0][0].count+results[5][0][0].count;

      design_p=results[6][0][0].count+results[7][0][0].count+results[8][0][0].count;
      design_n=results[9][0][0].count+results[10][0][0].count+results[11][0][0].count;

      implement_p=results[12][0][0].count+results[13][0][0].count+results[14][0][0].count;
      implement_n=results[15][0][0].count+results[16][0][0].count+results[17][0][0].count;

      operate_p=results[18][0][0].count+results[19][0][0].count+results[20][0][0].count;
      operate_n=results[21][0][0].count+results[22][0][0].count+results[23][0][0].count;

      verify_p=results[24][0][0].count+results[25][0][0].count+results[26][0][0].count;
      verify_n=results[27][0][0].count+results[28][0][0].count+results[29][0][0].count;
     res.json({success:true,governance_p:governance_p,governance_n:governance_n,
      design_p:design_p,design_n:design_n,
      implement_p:implement_p,implement_n:implement_n,
      operate_p:operate_p,operate_n:operate_n,
      verify_p:verify_p,verify_n:verify_n
        });
   });
  
});
module.exports = router;
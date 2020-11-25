const moment = require('moment');
const express = require("express");
const router = express.Router();
const Q = require("Q");
const json2xls = require("json2xls");
//const ctrlUser = require('../controllers/user.controller');
require("nodemailer");
const db = require("../db/config_vsamm");
require("jsonwebtoken");
const fs = require("fs");
require("speakeasy");
router.get("/filter", function (req, res) {
  // console.log("hii");
  function fun1() {
    const defered = Q.defer();
    db.query(
      "SELECT * FROM `score_history` WHERE uname = 'Auditor'  ORDER BY id ASC",
      defered.makeNodeResolver()
    );
    return defered.promise;
  }

  Q.all([fun1()]).then(function (results) {
    alldata = results[0][0];

    res.json({success: true, data: alldata});
  });
});


router.post("/reportdata", function (req, res, next) {
  let and = false;
  let where = false;
  let body = req.body;
  //console.log(body);
  let sql = "select distinct * from comment_history";
  if ("uname" in body) {
    if (where == false) {
      sql += " where";
    }
    sql += ' commentor="' + body["uname"] + '"';
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
      body["fromDate"]["date"] +
      "'";
    toDate =
      "'" +
      body["toDate"]["year"] +
      "-" +
      body["toDate"]["month"] +
      "-" +
      body["toDate"]["date"] +
      "'";
    if (where === false) {
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
  //sql='SELECT DISTINCT comment_history.`question`, comment_history.`id`, comment_history.`groupname`, comment_history.`secpractice`, comment_history.`comment`, comment_history.`commentor`, comment_history.`created`, comment_history.`score`, comment_history.`qoid`, vsamm_master.qname FROM comment_history, vsamm_master WHERE comment_history.secpractice = vsamm_master.secpractice'
  db.query(sql, (err, results) => {
    //console.log(results);
    res.json({success: true, idfilterall: results});
    if (err) throw err;
  });
});

router.get("/reportexcel", function (req, res) {
  db.query("select distinct * from comment_history", (err, results) => {
    // console.log(results);
    const xls = json2xls(results);
    fs.writeFileSync("report.xlsx", xls, "binary");
    res.download('report.xlsx');
    if (err) throw err;
  });
});

let data;

router.get("/reportPdf", function (req, res, next) {
  let sql = 'SELECT * FROM `comment_history` '
  db.query(sql, (err, results) => {
    console.log(results)
    data = {comments: results};
    const client = require('jsreport-client')('http://localhost:8001')
    client.render({
      template: {shortid: 'rkJTnK2ce', recipe: 'chrome-pdf', engine: 'handlebars'}, data: data
    }).then((response) => response.pipe(res))
      .catch(next)
    if (err) throw err;
  });

});
router.get("/reportPdf_re", function (req, res, next) {
  let and = false;
  let where = false;
  let body = JSON.parse(req.query.val);
  console.log(body);
  let sql =
    'select distinct * from comment_history'
  if ("uname" in body) {
    if (where == false) {
      sql += ' where'
    }
    sql += ' commentor="' + body["uname"] + '"';
    and = true;
    where = true;
  }
  if ("group" in body) {
    if (where == false) {
      sql += ' where'
    }
    if (and == true) {
      sql += ' and'
    }
    sql += ' groupname="' + body["group"] + '"';
    and = true;
    where = true;
  }
  if ("score" in body) {
    if (where == false) {
      sql += ' where'
    }
    if (and == true) {
      sql += ' and'
    }
    sql += ' score=' + body["score"];
    and = true;
    where = true;
  }
  let fromDate;
  let toDate;
  if ("fromDate" in body && "toDate" in body) {
    fromDate = moment(body["fromDate"]).utc().format('YYYY-MM-DD');
    toDate = moment(body["toDate"]).utc().format('YYYY-MM-DD');
    if (where == false) {
      sql += " where";
    }
    if (and == true) {
      sql += " and";
    }
    sql +=
      " created between '" +
      fromDate +
      "' AND '" +
      toDate +
      "' ";
    and = true;
    where = true;
  }
  if ("security_practice" in body) {
    if (where == false) {
      sql += ' where'
    }
    if (and == true) {
      sql += ' and'
    }
    sql += ' secpractice="' + body["security_practice"] + '"';
  }
  console.log("sql:", sql);
  //First Graph Queries
  let governance_strategy = "SELECT sum(status) as score FROM `governance_strategy` WHERE 1"
  let governance_policy = "SELECT sum(status) as score FROM `governance_policy` WHERE 1"
  let governance_education = "SELECT sum(status) as score  FROM `governance_education` WHERE 1"
  let design_security = "SELECT sum(status) as score FROM `design_security` WHERE 1"
  let design_secure_arch = "SELECT sum(status) as score FROM `design_secure_arch` WHERE 1"
  let design_threat = "SELECT sum(status) as score FROM `design_threat` WHERE 1"
  let implement_secure_build = "SELECT sum(status) as score FROM `implement_secure_build` WHERE 1"
  let implement_secure_deploy = "SELECT sum(status) as score FROM `implement_secure_deploy` WHERE 1"
  let implement_defect = "SELECT sum(status) as score FROM `implement_defect` WHERE 1"
  let verify_arch = "SELECT sum(status) as score FROM `verify_arch` WHERE 1"
  let verify_requirement = "SELECT sum(status) as score FROM `verify_requirement` WHERE 1"
  let verify_security = "SELECT sum(status) as score FROM `verify_security` WHERE 1"
  let operate_incident = "SELECT sum(status) as score FROM `operate_incident` WHERE 1"
  let operate_environment = "SELECT sum(status) as score FROM `operate_environment` WHERE 1"
  let operate_operational = "SELECT sum(status) as score FROM `operate_operational` WHERE 1"

  let governance_strategy0 = "SELECT count(*) as count FROM `governance_strategy` WHERE status=0"
  let governance_strategy25 = "SELECT count(*) as count FROM `governance_strategy` WHERE status=0.25"
  let governance_strategy50 = "SELECT count(*) as count FROM `governance_strategy` WHERE status=0.5"
  let governance_strategy1 = "SELECT count(*) as count FROM `governance_strategy` WHERE status=1"

  let governance_policy0 = "SELECT count(*) as count FROM `governance_policy` WHERE status=0"
  let governance_policy25 = "SELECT count(*) as count FROM `governance_policy` WHERE status=0.25"
  let governance_policy50 = "SELECT count(*) as count FROM `governance_policy` WHERE status=0.5"
  let governance_policy1 = "SELECT count(*) as count FROM `governance_policy` WHERE status=1"

  let governance_education0 = "SELECT count(*) as count FROM `governance_education` WHERE status=0"
  let governance_education25 = "SELECT count(*) as count FROM `governance_education` WHERE status=0.25"
  let governance_education50 = "SELECT count(*) as count FROM `governance_education` WHERE status=0.5"
  let governance_education1 = "SELECT count(*) as count FROM `governance_education` WHERE status=1"


  let design_security0 = "SELECT count(*) as count FROM `design_security` WHERE status=0"
  let design_security25 = "SELECT count(*) as count FROM `design_security` WHERE status=0.25"
  let design_security50 = "SELECT count(*) as count FROM `design_security` WHERE status=0.5"
  let design_security1 = "SELECT count(*) as count FROM `design_security` WHERE status=1"


  let design_secure_arch0 = "SELECT count(*) as count FROM `design_secure_arch` WHERE status=0"
  let design_secure_arch25 = "SELECT count(*) as count FROM `design_secure_arch` WHERE status=0.25"
  let design_secure_arch50 = "SELECT count(*) as count FROM `design_secure_arch` WHERE status=0.5"
  let design_secure_arch1 = "SELECT count(*) as count  FROM `design_secure_arch` WHERE status=1"

  let design_threat0 = "SELECT count(*) as count  FROM `design_threat` WHERE status=0"
  let design_threat25 = "SELECT count(*) as count  FROM `design_threat` WHERE status=0.25"
  let design_threat50 = "SELECT count(*) as count  FROM `design_threat` WHERE status=0.5"
  let design_threat1 = "SELECT count(*) as count FROM `design_threat` WHERE status=1"

  let implement_secure_build0 = "SELECT count(*) as count FROM `implement_secure_build` WHERE status=0"
  let implement_secure_build25 = "SELECT count(*) as count FROM `implement_secure_build` WHERE status=0.25"
  let implement_secure_build50 = "SELECT count(*) as count FROM `implement_secure_build` WHERE status=0.5"
  let implement_secure_build1 = "SELECT count(*) as count FROM `implement_secure_build` WHERE status=1"

  let implement_secure_deploy0 = "SELECT count(*) as count FROM `implement_secure_deploy` WHERE status=1"
  let implement_secure_deploy25 = "SELECT count(*) as count FROM `implement_secure_deploy` WHERE status=0.25"
  let implement_secure_deploy50 = "SELECT count(*) as count FROM `implement_secure_deploy` WHERE status=0.5"
  let implement_secure_deploy1 = "SELECT count(*) as count FROM `implement_secure_deploy` WHERE status=1"

  let implement_defect0 = "SELECT count(*) as count FROM `implement_defect` WHERE status=0"
  let implement_defect25 = "SELECT count(*) as count FROM `implement_defect` WHERE status=0.25"
  let implement_defect50 = "SELECT count(*) as count FROM `implement_defect` WHERE status=0.5"
  let implement_defect1 = "SELECT count(*) as count FROM `implement_defect` WHERE status=1"

  let verify_arch0 = "SELECT count(*) as count FROM `verify_arch` WHERE status=0"
  let verify_arch25 = "SELECT count(*) as count FROM `verify_arch` WHERE status=0.25"
  let verify_arch50 = "SELECT count(*) as count FROM `verify_arch` WHERE status=0.5"
  let verify_arch1 = "SELECT count(*) as count FROM `verify_arch` WHERE status=1"

  let verify_requirement0 = "SELECT count(*) as count FROM `verify_requirement` WHERE status=0"
  let verify_requirement25 = "SELECT count(*) as count FROM `verify_requirement` WHERE status=0.25"
  let verify_requirement50 = "SELECT count(*) as count FROM `verify_requirement` WHERE status=0.5"
  let verify_requirement1 = "SELECT count(*) as count FROM `verify_requirement` WHERE status=1"

  let verify_security0 = "SELECT count(*) as count FROM `verify_security` WHERE status=0"
  let verify_security25 = "SELECT count(*) as count FROM `verify_security` WHERE status=0.25"
  let verify_security50 = "SELECT count(*) as count FROM `verify_security` WHERE status=0.5"
  let verify_security1 = "SELECT count(*) as count FROM `verify_security` WHERE status=1"

  let operate_incident0 = "SELECT count(*) as count FROM `operate_incident` WHERE status=0"
  let operate_incident25 = "SELECT count(*) as count FROM `operate_incident` WHERE status=0.25"
  let operate_incident50 = "SELECT count(*) as count FROM `operate_incident` WHERE status=0.5"
  let operate_incident1 = "SELECT count(*) as count FROM `operate_incident` WHERE status=1"

  let operate_environment0 = "SELECT count(*) as count FROM `operate_environment` WHERE status=0"
  let operate_environment25 = "SELECT count(*) as count FROM `operate_environment` WHERE status=0"
  let operate_environment50 = "SELECT count(*) as count FROM `operate_environment` WHERE status=0"
  let operate_environment1 = "SELECT count(*) as count FROM `operate_environment` WHERE status=0"

  let operate_operational0 = "SELECT count(*) as count FROM `operate_operational` WHERE status=0"
  let operate_operational25 = "SELECT count(*) as count FROM `operate_operational` WHERE status=0.25"
  let operate_operational50 = "SELECT count(*) as count FROM `operate_operational` WHERE status=0.5"
  let operate_operational1 = "SELECT count(*) as count FROM `operate_operational` WHERE status=1"

  function SQLQ() {
    const defered = Q.defer();
    db.query(sql, defered.makeNodeResolver());
    return defered.promise;
  }

  function governance_strategyQ() {
    const defered = Q.defer();
    db.query(
      governance_strategy,
      defered.makeNodeResolver()
    );
    return defered.promise;
  }

  function governance_policyQ() {
    const defered = Q.defer();
    db.query(
      governance_policy,
      defered.makeNodeResolver()
    );
    return defered.promise;
  }

  function governance_educationQ() {
    const defered = Q.defer();
    db.query(
      governance_education,
      defered.makeNodeResolver()
    );
    return defered.promise;
  }

  function design_securityQ() {
    const defered = Q.defer();
    db.query(
      design_security,
      defered.makeNodeResolver()
    );
    return defered.promise;
  }

  function design_secure_archQ() {
    const defered = Q.defer();
    db.query(
      design_secure_arch,
      defered.makeNodeResolver()
    );
    return defered.promise;
  }

  function design_threatQ() {
    const defered = Q.defer();
    db.query(
      design_threat,
      defered.makeNodeResolver()
    );
    return defered.promise;
  }

  function implement_secure_buildQ() {
    const defered = Q.defer();
    db.query(
      implement_secure_build,
      defered.makeNodeResolver()
    );
    return defered.promise;
  }

  function implement_secure_deployQ() {
    const defered = Q.defer();
    db.query(
      implement_secure_deploy,
      defered.makeNodeResolver()
    );
    return defered.promise;
  }

  function implement_defectQ() {
    const defered = Q.defer();
    db.query(
      implement_defect,
      defered.makeNodeResolver()
    );
    return defered.promise;
  }

  function verify_archQ() {
    const defered = Q.defer();
    db.query(
      verify_arch,
      defered.makeNodeResolver()
    );
    return defered.promise;
  }

  function verify_requirementQ() {
    const defered = Q.defer();
    db.query(
      verify_requirement,
      defered.makeNodeResolver()
    );
    return defered.promise;
  }

  function verify_securityQ() {
    const defered = Q.defer();
    db.query(
      verify_security,
      defered.makeNodeResolver()
    );
    return defered.promise;
  }

  function operate_incidentQ() {
    const defered = Q.defer();
    db.query(
      operate_incident,
      defered.makeNodeResolver()
    );
    return defered.promise;
  }

  function operate_environmentQ() {
    const defered = Q.defer();
    db.query(
      operate_environment,
      defered.makeNodeResolver()
    );
    return defered.promise;
  }

  function operate_operationalQ() {
    const defered = Q.defer();
    db.query(
      operate_operational,
      defered.makeNodeResolver()
    );
    return defered.promise;
  }

  function governance_strategy0Q() {
    const defered = Q.defer();
    db.query(governance_strategy0, defered.makeNodeResolver());
    return defered.promise;
  }

  function governance_strategy25Q() {
    const defered = Q.defer();
    db.query(governance_strategy25, defered.makeNodeResolver());
    return defered.promise;
  }

  function governance_strategy50Q() {
    const defered = Q.defer();
    db.query(governance_strategy50, defered.makeNodeResolver());
    return defered.promise;
  }

  function governance_strategy1Q() {
    const defered = Q.defer();
    db.query(governance_strategy1, defered.makeNodeResolver());
    return defered.promise;
  }

  function governance_policy0Q() {
    const defered = Q.defer();
    db.query(governance_policy0, defered.makeNodeResolver());
    return defered.promise;
  }

  function governance_policy25Q() {
    const defered = Q.defer();
    db.query(governance_policy25, defered.makeNodeResolver());
    return defered.promise;
  }

  function governance_policy50Q() {
    const defered = Q.defer();
    db.query(governance_policy50, defered.makeNodeResolver());
    return defered.promise;
  }

  function governance_policy1Q() {
    const defered = Q.defer();
    db.query(governance_policy1, defered.makeNodeResolver());
    return defered.promise;
  }

  function governance_education0Q() {
    const defered = Q.defer();
    db.query(governance_education0, defered.makeNodeResolver());
    return defered.promise;
  }

  function governance_education25Q() {
    const defered = Q.defer();
    db.query(governance_education25, defered.makeNodeResolver());
    return defered.promise;
  }

  function governance_education50Q() {
    const defered = Q.defer();
    db.query(governance_education50, defered.makeNodeResolver());
    return defered.promise;
  }

  function governance_education1Q() {
    const defered = Q.defer();
    db.query(governance_education1, defered.makeNodeResolver());
    return defered.promise;
  }

  function design_security0Q() {
    const defered = Q.defer();
    db.query(design_security0, defered.makeNodeResolver());
    return defered.promise;
  }

  function design_security25Q() {
    const defered = Q.defer();
    db.query(design_security25, defered.makeNodeResolver());
    return defered.promise;
  }

  function design_security50Q() {
    const defered = Q.defer();
    db.query(design_security50, defered.makeNodeResolver());
    return defered.promise;
  }

  function design_security1Q() {
    const defered = Q.defer();
    db.query(design_security1, defered.makeNodeResolver());
    return defered.promise;
  }

  function design_secure_arch0Q() {
    const defered = Q.defer();
    db.query(design_secure_arch0, defered.makeNodeResolver());
    return defered.promise;
  }

  function design_secure_arch25Q() {
    const defered = Q.defer();
    db.query(design_secure_arch25, defered.makeNodeResolver());
    return defered.promise;
  }

  function design_secure_arch50Q() {
    const defered = Q.defer();
    db.query(design_secure_arch50, defered.makeNodeResolver());
    return defered.promise;
  }

  function design_secure_arch1Q() {
    const defered = Q.defer();
    db.query(design_secure_arch1, defered.makeNodeResolver());
    return defered.promise;
  }

  function design_threat0Q() {
    const defered = Q.defer();
    db.query(design_threat0, defered.makeNodeResolver());
    return defered.promise;
  }

  function design_threat25Q() {
    const defered = Q.defer();
    db.query(design_threat25, defered.makeNodeResolver());
    return defered.promise;
  }

  function design_threat50Q() {
    const defered = Q.defer();
    db.query(design_threat50, defered.makeNodeResolver());
    return defered.promise;
  }

  function design_threat1Q() {
    const defered = Q.defer();
    db.query(design_threat1, defered.makeNodeResolver());
    return defered.promise;
  }

  function implement_secure_build0Q() {
    const defered = Q.defer();
    db.query(implement_secure_build0, defered.makeNodeResolver());
    return defered.promise;
  }

  function implement_secure_build25Q() {
    const defered = Q.defer();
    db.query(implement_secure_build25, defered.makeNodeResolver());
    return defered.promise;
  }

  function implement_secure_build50Q() {
    const defered = Q.defer();
    db.query(implement_secure_build50, defered.makeNodeResolver());
    return defered.promise;
  }

  function implement_secure_build1Q() {
    const defered = Q.defer();
    db.query(implement_secure_build1, defered.makeNodeResolver());
    return defered.promise;
  }

  function implement_secure_deploy0Q() {
    const defered = Q.defer();
    db.query(implement_secure_deploy0, defered.makeNodeResolver());
    return defered.promise;
  }

  function implement_secure_deploy25Q() {
    const defered = Q.defer();
    db.query(implement_secure_deploy25, defered.makeNodeResolver());
    return defered.promise;
  }

  function implement_secure_deploy50Q() {
    const defered = Q.defer();
    db.query(implement_secure_deploy50, defered.makeNodeResolver());
    return defered.promise;
  }

  function implement_secure_deploy1Q() {
    const defered = Q.defer();
    db.query(implement_secure_deploy1, defered.makeNodeResolver());
    return defered.promise;
  }

  function implement_defect0Q() {
    const defered = Q.defer();
    db.query(implement_defect0, defered.makeNodeResolver());
    return defered.promise;
  }

  function implement_defect25Q() {
    const defered = Q.defer();
    db.query(implement_defect25, defered.makeNodeResolver());
    return defered.promise;
  }

  function implement_defect50Q() {
    const defered = Q.defer();
    db.query(implement_defect50, defered.makeNodeResolver());
    return defered.promise;
  }

  function implement_defect1Q() {
    const defered = Q.defer();
    db.query(implement_defect1, defered.makeNodeResolver());
    return defered.promise;
  }

  function verify_arch0Q() {
    const defered = Q.defer();
    db.query(verify_arch0, defered.makeNodeResolver());
    return defered.promise;
  }

  function verify_arch25Q() {
    const defered = Q.defer();
    db.query(verify_arch25, defered.makeNodeResolver());
    return defered.promise;
  }

  function verify_arch50Q() {
    const defered = Q.defer();
    db.query(verify_arch50, defered.makeNodeResolver());
    return defered.promise;
  }

  function verify_arch1Q() {
    const defered = Q.defer();
    db.query(verify_arch1, defered.makeNodeResolver());
    return defered.promise;
  }

  function verify_requirement0Q() {
    const defered = Q.defer();
    db.query(verify_requirement0, defered.makeNodeResolver());
    return defered.promise;
  }

  function verify_requirement25Q() {
    const defered = Q.defer();
    db.query(verify_requirement25, defered.makeNodeResolver());
    return defered.promise;
  }

  function verify_requirement50Q() {
    const defered = Q.defer();
    db.query(verify_requirement50, defered.makeNodeResolver());
    return defered.promise;
  }

  function verify_requirement1Q() {
    const defered = Q.defer();
    db.query(verify_requirement1, defered.makeNodeResolver());
    return defered.promise;
  }

  function verify_security0Q() {
    const defered = Q.defer();
    db.query(verify_security0, defered.makeNodeResolver());
    return defered.promise;
  }

  function verify_security25Q() {
    const defered = Q.defer();
    db.query(verify_security25, defered.makeNodeResolver());
    return defered.promise;
  }

  function verify_security50Q() {
    const defered = Q.defer();
    db.query(verify_security50, defered.makeNodeResolver());
    return defered.promise;
  }

  function verify_security1Q() {
    const defered = Q.defer();
    db.query(verify_security1, defered.makeNodeResolver());
    return defered.promise;
  }

  function operate_incident0Q() {
    const defered = Q.defer();
    db.query(operate_incident0, defered.makeNodeResolver());
    return defered.promise;
  }

  function operate_incident25Q() {
    const defered = Q.defer();
    db.query(operate_incident25, defered.makeNodeResolver());
    return defered.promise;
  }

  function operate_incident50Q() {
    const defered = Q.defer();
    db.query(operate_incident50, defered.makeNodeResolver());
    return defered.promise;
  }

  function operate_incident1Q() {
    const defered = Q.defer();
    db.query(operate_incident1, defered.makeNodeResolver());
    return defered.promise;
  }

  function operate_environment0Q() {
    const defered = Q.defer();
    db.query(operate_environment0, defered.makeNodeResolver());
    return defered.promise;
  }

  function operate_environment25Q() {
    const defered = Q.defer();
    db.query(operate_environment25, defered.makeNodeResolver());
    return defered.promise;
  }

  function operate_environment50Q() {
    const defered = Q.defer();
    db.query(operate_environment50, defered.makeNodeResolver());
    return defered.promise;
  }

  function operate_environment1Q() {
    const defered = Q.defer();
    db.query(operate_environment1, defered.makeNodeResolver());
    return defered.promise;
  }

  function operate_operational0Q() {
    const defered = Q.defer();
    db.query(operate_operational0, defered.makeNodeResolver());
    return defered.promise;
  }

  function operate_operational25Q() {
    const defered = Q.defer();
    db.query(operate_operational25, defered.makeNodeResolver());
    return defered.promise;
  }

  function operate_operational50Q() {
    const defered = Q.defer();
    db.query(operate_operational50, defered.makeNodeResolver());
    return defered.promise;
  }

  function operate_operational1Q() {
    const defered = Q.defer();
    db.query(operate_operational1, defered.makeNodeResolver());
    return defered.promise;
  }

  Q.all([SQLQ(), governance_strategyQ(), governance_policyQ(), governance_educationQ(),
    design_securityQ(), design_secure_archQ(), design_threatQ(), implement_secure_buildQ(),
    implement_secure_deployQ(), implement_defectQ(), verify_archQ(), verify_requirementQ(),
    verify_securityQ(), operate_incidentQ(), operate_environmentQ(), operate_operationalQ(),


    governance_strategy0Q(), governance_strategy25Q(), governance_strategy50Q(), governance_strategy1Q(),
    governance_policy0Q(), governance_policy25Q(), governance_policy50Q(), governance_policy1Q(),
    governance_education0Q(), governance_education25Q(), governance_education50Q(), governance_education1Q(),
    design_security0Q(), design_security25Q(), design_security50Q(), design_security1Q(), design_secure_arch0Q(),
    design_secure_arch25Q(), design_secure_arch50Q(), design_secure_arch1Q(), design_threat0Q(),
    design_threat25Q(), design_threat50Q(), design_threat1Q(), implement_secure_build0Q(), implement_secure_build25Q(),
    implement_secure_build50Q(), implement_secure_build1Q(), implement_secure_deploy0Q(), implement_secure_deploy25Q(),
    implement_secure_deploy50Q(), implement_secure_deploy1Q(), implement_defect0Q(), implement_defect25Q(),
    implement_defect50Q(), implement_defect1Q(), verify_arch0Q(), verify_arch25Q(), verify_arch50Q(), verify_arch1Q(),
    verify_requirement0Q(), verify_requirement25Q(), verify_requirement50Q(), verify_requirement1Q(), verify_security0Q(),
    verify_security25Q(), verify_security50Q(), verify_security1Q(), operate_incident0Q(), operate_incident25Q(),
    operate_incident50Q(), operate_incident1Q(), operate_environment0Q(), operate_environment25Q(), operate_environment50Q(),
    operate_environment1Q(), operate_operational0Q(), operate_operational25Q(), operate_operational50Q(), operate_operational1Q()

  ]).then(function (results) {

    let Total0 = 0, Total25 = 0, Total50 = 0, Total1 = 0
    for (let i = 16; i < results.length; i += 4) {
      Total0 = Total0 + results[i][0][0].count
      Total25 = Total0 + results[i + 1][0][0].count
      Total50 = Total0 + results[i + 2][0][0].count
      Total1 = Total0 + results[i + 3][0][0].count
    }
    let FirstGraph = {
      governance_strategy: results[1][0][0].score,
      governance_policy: results[2][0][0].score,
      governance_education: results[3][0][0].score,
      design_security: results[4][0][0].score,
      design_secure_arch: results[5][0][0].score,
      design_threat: results[6][0][0].score,
      implement_secure_build: results[7][0][0].score,
      implement_secure_deploy: results[8][0][0].score,
      implement_defect: results[9][0][0].score,
      verify_arch: results[10][0][0].score,
      verify_requirement: results[11][0][0].score,
      verify_security: results[12][0][0].score,
      operate_incident: results[13][0][0].score,
      operate_environment: results[14][0][0].score,
      operate_operational: results[15][0][0].score
    }
    // console.log("Debug:", FirstGraph)
    // console.log(JSON.stringify(results[0][0]));
    
    const SecondGraph = {
      Total0: Total0, Total25: Total25, Total50: Total50, Total1: Total1
    }
    data = {comments: results[0][0], FirstGraph: FirstGraph, SecondGraph: SecondGraph}
    // res.json(data)
    const client = require('jsreport-client')('http://localhost:8001')
    client.render({
      template: {shortid: 'rkJTnK2ce', recipe: 'chrome-pdf', engine: 'handlebars'}, data: data
    }).then((response) => response.pipe(res))
      .catch(next)
  });
});

module.exports = router;

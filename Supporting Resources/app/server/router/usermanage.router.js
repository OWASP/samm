const express = require('express');
var Q = require('Q');
const router = express.Router();
var secret = 'harrypotter';
var nodemailer = require('nodemailer');
const db=require('../db/config_vsamm');
var jwt = require('jsonwebtoken');
var Q = require('Q');
const Speakeasy = require("speakeasy");
var formidable = require('formidable');
var User = require('../models/user');
var path = require('path');
var async = require('async');
router.post('/changeprofile', function(req, res) {
    var form =new formidable.IncomingForm();
    form.parse(req);
    let reqPath= path.join(__dirname, '../');
    let newfilename;
    form.on('fileBegin', function(name, file){
        file.path = reqPath+ 'public/upload/'+ req.user.username + file.name;
        newfilename= req.user.username+ file.name;
    });
    form.on('file', function(name, file) {
        User.findOneAndUpdate({
            username: req.user.username
        },
        {
            'userImage': newfilename
        },
        function(err, result){
            if(err) {
                console.log(err);
            }
        });
    });
    req.flash('success_msg', 'Your profile picture has been uploaded');
    res.redirect('/');
});
///getdetails
router.get('/usermanage', function (req, res) {
  sql="SELECT * FROM user_manages ORDER BY username ASC";
  db.query(sql,(err,results)=>
  {
      if(err) throw err;
      res.json({success: true, values:results});
  })
});
router.put('/userdata', function (req, res) {
  email=req.body.Email;
 // console.log(req.body.action);
  sql="SELECT * FROM user_manages where Email='"+email+"'";
  db.query(sql,(err,results)=>
  {
      if(err) throw err;
      res.json({success: true, values:results});
  });
});
//update_user
router.put('/update_user', function (req, res) {
 //console.log(req.body);
// if(req.body.firstname!=undefined)
sql="UPDATE user_manages SET  firstname ='"+req.body.firstname+"', empid ='"+req.body.empid+"', email ='"+req.body.email+"', role ='"+req.body.role+"', groupname ='"+req.body.groupname+"', phone ='"+req.body.phone+"', created ='"+req.body.created+"', modified =now(), country ='"+req.body.country+"', company ='"+req.body.company+"', username ='"+req.body.username+"', password ='"+req.body.password+"', lastname ='"+req.body.lastname+"' WHERE id='"+req.body.id+"'";
//console.log(sql);
db.query(sql,(err,results)=>
{
    if(err) throw err;
    res.json({success: true});
})
});
//del_select
router.put('/del_select', function (req, res) {
  //console.log(req.body);
  sql="DELETE FROM `user_manages` WHERE email='"+req.body.Email+"'";
  db.query(sql,(err,results)=>
  {
      if(err) throw err;
      res.json({success: true});
  })
 // console.log(sql);
 // if(req.body.firstname!=undefined)

});
//del_col
router.put('/del_col', function (req, res) {
 // console.log(req.body);
  sql="DELETE FROM `user_manages` WHERE email='"+req.body.Email+"'";
  //console.log(sql);
  db.query(sql,(err,results)=>
  {
      if(err) throw err;
      res.json({success: true});
  })
 // console.log(sql);
 // if(req.body.firstname!=undefined)

});
//create_user
router.put('/create_user', function (req, res) {
 // console.log(req.body);
  sql="INSERT INTO `user_manages`(`firstname`, `empid`, `email`, `role`, `groupname`, `phone`, `created`, `modified`, `country`, `company`, `id`, `vsamm_uname`, `vsamm_pswd`, `lastname`) VALUES ('"+req.body.firstname+"','"+req.body.empid+"','"+req.body.email+"','"+req.body.role+"','"+req.body.groupname+"','"+req.body.phone+"',now(),now(),'"+req.body.country+"','"+req.body.company+"','','"+req.body.username+"','"+req.body.password+"','"+req.body.lastname+"')";
  //console.log(sql);
 db.query(sql,(err,results)=>
  {
      if(err) throw err;
      res.json({success: true});
  })
 // console.log(sql);
 // if(req.body.firstname!=undefined)

});
//add_project
router.put('/add_project', function (req, res) {
  //console.log(req.body);
 sql="INSERT INTO `project`(`projname`, `id`, `uname`) VALUES ('"+req.body.name+"','','')";
 // console.log(sql);
 db.query(sql,(err,results)=>
  {
      if(err) throw err;
      res.json({success: true});
  });
 // console.log(sql);
 // if(req.body.firstname!=undefined)

});
// update user profile


//update_user
router.put('/updateme', function (req, res) {
  //console.log(req.body);
 // if(req.body.firstname!=undefined)
 sql="UPDATE users SET  name ='"+req.body.name+"', empid ='"+req.body.empid+"', email ='"+req.body.email+"', role ='"+req.body.role+"',company = '"+req.body.company+"', groupname ='"+req.body.groupname+"', mobile ='"+req.body.phone+"', country ='"+req.body.country+"', username ='"+req.body.username+"' WHERE id='"+req.body.id+"'";
 //console.log(sql);
 sql2 = "UPDATE users SET  password = '"+req.body.password+"' WHERE id='"+req.body.id+"'";
 db.query(sql,(err,results)=>
 {
     if(err) throw err;
     res.json({success: true});
 })
 });


router.put('/profile_resetpass', function(req, res) {
//  console.log( req.body);
//  User.findOne({ _id: req.body._id }).select('email password').exec(function(err, user)
query="select email, password from users where email='"+ req.body.email+"'";
db.query(query,(err,result)=>
{
      if (err) throw err;
      if (req.body.password == null || req.body.password == '') {
          res.json({ success: false, message: 'Password not provided' });
      } else {
          password = req.body.password;
          //user.resettoken = false;
          // Save user's new data
          query="update user_manages set vsamm_pswd='"+password+"' where email='"+result[0].email+"'";
        //  user.save(function(err)
        db.query(query, (err)=>{
              if (err) {
                  res.json({ success: false, message: err });
              } else {

                  res.json({ success: true, message: 'Password has been reset!' });
              }
          });
      }
  });
});

module.exports = router;

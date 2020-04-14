const express = require('express');
const router = express.Router();
var Q = require('Q');
//const ctrlUser = require('../controllers/user.controller');
var secret = 'harrypotter';
var nodemailer = require('nodemailer');
const db=require('../db/config_vsamm');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const Speakeasy = require("speakeasy");

// console.log('hii');


router.post('/resetpassword', function(req, res,next) {
    console.log('hii');
    //console.log(req.body.emailid);
     //response.send("done");
     var email='';
     let query = "select email,name from users where email= '" +req.body.emailid+ "'";
     db.query(query , (err, result) => {
        // console.log('hii I\'m inside ');
        console.log(result);
         if (err) throw err; // Throw error if cannot connect
         if (result[0]==undefined) {
          // console.log('hii I\'m inside if');
             res.json({ success: false, message: 'Username was not found' });
         } /*else if (!user.active) {
             res.json({ success: false, message: 'Account has not yet been activated' });
         }*/
         else
         {
           // console.log('hii I\'m inside else');
       // console.log(result[0].email);
            resettoken = jwt.sign({ username: result[0].name, email: result[0].email }, secret, { expiresIn: '24h' });
           //console.log(resettoken);
            var secrets = Speakeasy.generateSecret({length: 20});
            tempotp = secrets.base32;
            let query="update users set resettoken='"+ resettoken+"',  tempotp= '"+ tempotp +"' where email='"+ result[0].email+"'";
           // console.log(query);
            // Save token to user in database
             db.query(query , (err) => {
                 if (err) {
                   //console.log('errrrrrrorr');
                     res.json({ success: false, message: err });
                 } else {
                   // console.log(result[0].email);
                     var x={
                         "tokens": Speakeasy.totp({
                             secret: tempotp,
                             encoding: "base32"
                         })

                     };

                     var string = JSON.stringify(x);
                     var objectValue = JSON.parse(string);


                     var client= nodemailer.createTransport({
                         service: 'gmail',
                         auth: {
                             user: '',
                             pass: ''
                         }
                     });
                     const emails = {
                         from: '',
                         to: result[0].email,
                         subject: 'Reset Password Request',
                         text: 'Hello , You recently requet a password reset. Please enter the OTP in your page:<br><br>'+ objectValue["tokens"],
                         html: 'Hello,<br><br>You recently request a password reset. Please enter the OTP in your page:<br><br><strong>'+objectValue["tokens"]+'</strong>'


                     };
                     // Function to send e-mail to the user

                     client.sendMail(emails, function(err, info) {
                         if (err)
                         {
                            //console.log('errrrrrrorr');
                             res.json({ success: false, message:err});

                         }
                         else
                             res.json({ success: true,user: result[0].email });
                         });

                 //	res.json({ success: true, message: 'Please check your e-mail for password reset link' });

                 }
             });
         }
     });
 });

 router.post("/totp-validate", (request, response) => {
     //email='vssammcyber@gmail.com';
    // console.log(request.body);
   // User.findOne({ email: request.body.email }).select('tempotp').exec(function(err, user)
   query="select tempotp,email from user where email='"+request.body.email +"'";
   db.query(query, (err,result)=>{
    if (err) throw err;
            var tokens = result[0].tempotp;
            var val=Speakeasy.totp.verify({
                    secret: tokens,
                    encoding: "base32",
                    token: request.body.otp,
                    window: 100
                });
            //	response.json({ success: false, message: val });
            if (val==false)
            {
                response.json({ success: false, message: 'otp didnt match' });
            }
            else if(val==true)
            {
                if (!result)
                {
                    response.json({ success: false, message: 'user name cant be fetched' });
                }
                else
                {
                    response.json({ success: true, message:"verified", user: result[0].email });
                }
            }

        });
});
router.put('/savepassword', function(req, res) {
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
            password= bcrypt.hashSync( req.body.password, 8)
            query="update users set password='"+password+"' where email='"+result[0].email+"'";
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

router.get('/firstgraphvalues', function (req, res)
{
    var d = new Date();
    var curr =[];
    var c,p,f;
    curr[0]= d.getMonth();
    curr[1] = d.getMonth()-1;
    curr[2] = d.getMonth()-2;
    //console.log( curr[0]);
    //console.log( curr[1]);
    //console.log( curr[2]);
    function doQuery_gov_curr0(){

        var defered = Q.defer();
        db.query("SELECT sum(score) as count FROM score_history where `groupname`='Governance' and month(created) = '"+curr[0]+"' ",defered.makeNodeResolver());
      //console.log( defered.promise);

        return defered.promise;
    }
    function doQuery_con_curr0(){

        var defered = Q.defer();
        db.query("SELECT sum(score) as count FROM score_history where `groupname`='Construction' and month(created) = '"+curr[0]+"' ",defered.makeNodeResolver());

      //  db.query("SELECT "+curr[0]+" as count FROM `history` WHERE `groupname`='Operational and Security Risk Management'",defered.makeNodeResolver());
       // console.log( defered.promise);
        return defered.promise;
    }
    function doQuery_ver_curr0(){

        var defered = Q.defer();
        db.query("SELECT sum(score) as count FROM score_history where `groupname`='Verification' and month(created) = '"+curr[0]+"' ",defered.makeNodeResolver());

       // db.query("SELECT "+curr[0]+" as count FROM `history` WHERE `groupname`='Third Party Ecosystem'",defered.makeNodeResolver());
        //console.log( defered.promise);
        return defered.promise;
    }
    function doQuery_oper_curr0(){

        var defered = Q.defer();
        db.query("SELECT sum(score) as count FROM score_history where `groupname`='Operations' and month(created) = '"+curr[0]+"' ",defered.makeNodeResolver());

        //db.query("SELECT "+curr[0]+" as count FROM `history` WHERE `groupname`='Technological Security'",defered.makeNodeResolver());
        //console.log( defered.promise);
        return defered.promise;
    }
    function doQuery_gov_curr1(){

        var defered = Q.defer();
        db.query("SELECT sum(score) as count FROM score_history where `groupname`='Governance' and month(created) = '"+curr[1]+"' ",defered.makeNodeResolver());
       // console.log( defered.promise);
        return defered.promise;
    }
    function doQuery_con_curr1(){

        var defered = Q.defer();
        db.query("SELECT sum(score) as count FROM score_history where `groupname`='Construction' and month(created) = '"+curr[1]+"' ",defered.makeNodeResolver());

        //db.query("SELECT "+curr[1]+" as count FROM `history` WHERE `groupname`='Operational and Security Risk Management'",defered.makeNodeResolver());
        //console.log( defered.promise);
        return defered.promise;
    }
    function doQuery_ver_curr1(){

        var defered = Q.defer();
        db.query("SELECT sum(score) as count FROM score_history where `groupname`='Verification' and month(created) = '"+curr[1]+"' ",defered.makeNodeResolver());

       // db.query("SELECT "+curr[1]+" as count FROM `history` WHERE `groupname`='Third Party Ecosystem'",defered.makeNodeResolver());
      //  console.log( defered.promise);
        return defered.promise;
    }
    function doQuery_oper_curr1(){

        var defered = Q.defer();
        db.query("SELECT sum(score) as count FROM score_history where `groupname`='Operations' and month(created) = '"+curr[1]+"' ",defered.makeNodeResolver());

      //  db.query("SELECT "+curr[1]+" as count FROM `history` WHERE `groupname`='Technological Security'",defered.makeNodeResolver());
      //  console.log( defered.promise);
        return defered.promise;
    }

    function doQuery_gov_curr2(){

        var defered = Q.defer();
        db.query("SELECT sum(score) as count FROM score_history where `groupname`='Governance' and month(created) = '"+curr[2]+"' ",defered.makeNodeResolver());

        //db.query("SELECT "+curr[2]+" as count FROM `history` WHERE `groupname`='Regulatory Compliance'",defered.makeNodeResolver());
      //  console.log( defered.promise);
        return defered.promise;
    }
    function doQuery_con_curr2(){

        var defered = Q.defer();
        db.query("SELECT sum(score) as count FROM score_history where `groupname`='Construction' and month(created) = '"+curr[2]+"' ",defered.makeNodeResolver());

        //db.query("SELECT "+curr[2]+" as count FROM `history` WHERE `groupname`='Operational and Security Risk Management'",defered.makeNodeResolver());
        //console.log( defered.promise);
        return defered.promise;
    }
    function doQuery_ver_curr2(){

        var defered = Q.defer();
        db.query("SELECT sum(score) as count FROM score_history where `groupname`='Verification' and month(created) = '"+curr[2]+"' ",defered.makeNodeResolver());

        //db.query("SELECT "+curr[2]+" as count FROM `history` WHERE `groupname`='Third Party Ecosystem'",defered.makeNodeResolver());
        //console.log( defered.promise);
        return defered.promise;
    }
    function doQuery_oper_curr2(){

        var defered = Q.defer();
        db.query("SELECT sum(score) as count FROM score_history where `groupname`='Operations' and month(created) = '"+curr[2]+"' ",defered.makeNodeResolver());

        //db.query("SELECT "+curr[2]+" as count FROM `history` WHERE `groupname`='Technological Security'",defered.makeNodeResolver());
       // console.log( defered.promise);
        return defered.promise;
    }

    Q.all([ doQuery_gov_curr0(),doQuery_con_curr0(),doQuery_ver_curr0(),doQuery_oper_curr0(),
        doQuery_gov_curr1(),doQuery_con_curr1(),doQuery_ver_curr1(),doQuery_oper_curr1(),
        doQuery_gov_curr2(),doQuery_con_curr2(),doQuery_ver_curr2(),doQuery_oper_curr2()]).then(function(results){
        // console.log( 'hi');
        //console.log(results[0][0][0]);
    for(var i=0;i<3;i++)
    {
        if(curr[i]==1)
            curr[i]='Jan'
        else if(curr[i]==2)
            curr[i]='Feb'
        else if(curr[i]==3)
            curr[i]='Mar'
        else if(curr[i]==4)
            curr[i]='Apr'
        else if(curr[i]==5)
            curr[i]='May'
        else if(curr[i]==6)
            curr[i]='Jun'
        else if(curr[i]==7)
            curr[i]='Jul'
        else if(curr[i]==8)
            curr[i]='Aug'
        else if(curr[i]==9)
            curr[i]='Sep'
        else if(curr[i]==10)
            curr[i]='Oct'
        else if(curr[i]==11)
            curr[i]='Nov'
        else if(curr[i]==12)
            curr[i]='Dec'
    }
    for(var i=0;i<12;i++)
    {
        //console.log(results[i][0][0]);
        if(results[i][0][0].count==null)
        {
            results[i][0][0].count=0;
        }
    }
        tot_curr0=results[0][0][0].count+results[1][0][0].count+results[2][0][0].count+results[3][0][0].count;
        tot_curr1=results[4][0][0].count+results[5][0][0].count+results[6][0][0].count+results[7][0][0].count;
        tot_curr2=results[8][0][0].count+results[9][0][0].count+results[10][0][0].count+results[11][0][0].count;

        res.json({ success: true, gov0:results[0][0][0].count,con0:results[1][0][0].count, ver0:results[2][0][0].count,oper0:results[3][0][0].count, tot_curr0:tot_curr0,
            gov1:results[4][0][0].count,con1:results[5][0][0].count, ver1:results[6][0][0].count,oper1:results[7][0][0].count, tot_curr1:tot_curr1,
            gov2:results[8][0][0].count,con2:results[9][0][0].count, ver2:results[10][0][0].count,oper2:results[11][0][0].count,  tot_curr2:tot_curr2,
            curr0:curr[0],curr1:curr[1],curr2:curr[2]});
    });

});

router.get('/values', function (req, res) {
    //Governance
    //console.log('hiiii this');
     function doQuery1(){
         var defered = Q.defer();
         db.query("select SUM(score) as score, count(*) as total from governance_sm where project='vSSAMM'",defered.makeNodeResolver());

         return defered.promise;
     }

     function doQuery2(){
         var defered = Q.defer();
         db.query("select SUM(score) as score, count(*) as total  from governance_eg where project='vSSAMM'",defered.makeNodeResolver());
         return defered.promise;
     }
     function doQuery3(){
         var defered = Q.defer();
         db.query("select SUM(score) as score, count(*) as total  from governance_pc where project='vSSAMM'",defered.makeNodeResolver());

         return defered.promise;
     }

     //Construction
     function doQuery1_co(){
         var defered = Q.defer();
         db.query("select SUM(score) as score, count(*) as total  from construction_ta where project='vSSAMM'",defered.makeNodeResolver());
         return defered.promise;
     }
     function doQuery2_co(){
         var defered = Q.defer();
         db.query("select SUM(score) as score, count(*) as total  from construction_sr where project='vSSAMM'",defered.makeNodeResolver());
         return defered.promise;
     }
     function doQuery3_co(){
         var defered = Q.defer();
         db.query("select SUM(score) as score, count(*) as total  from construction_sa where project='vSSAMM'",defered.makeNodeResolver());
         return defered.promise;
     }
     //Verification
     function doQuery1_ve(){
         var defered = Q.defer();
         db.query("select SUM(score) as score, count(*) as total  from verification_dr where project='vSSAMM'",defered.makeNodeResolver());
         return defered.promise;
     }
     function doQuery2_ve(){
        var defered = Q.defer();
        db.query("select SUM(score) as score, count(*) as total  from verification_ir where project='vSSAMM'",defered.makeNodeResolver());
        return defered.promise;
    }
    function doQuery3_ve(){
        var defered = Q.defer();
        db.query("select SUM(score) as score, count(*) as total  from verification_st where project='vSSAMM'",defered.makeNodeResolver());
        return defered.promise;
    }
     //Operations
     function doQuery1_oper(){
         var defered = Q.defer();
         db.query("select SUM(score) as score, count(*) as total from operations_im where project='vSSAMM'",defered.makeNodeResolver());
         return defered.promise;
     }
     function doQuery2_oper(){
         var defered = Q.defer();
         db.query("select SUM(score) as score, count(*) as total from operations_eh where project='vSSAMM' ",defered.makeNodeResolver());
         return defered.promise;
     }
     function doQuery3_oper(){
         var defered = Q.defer();
         db.query("select SUM(score) as score, count(*) as total from operations_oe where project='vSSAMM' ",defered.makeNodeResolver());
         return defered.promise;
     }

     //governance
     function gdoQuery1(){
        // console.log("I'm Inside graphvalues 1");
         var defered = Q.defer();
         db.query("select SUM(score) as score, count(*) as total  from governance_sm where project='vSSAMM' and score=1",defered.makeNodeResolver());

         return defered.promise;
    }

    function gdoQuery2(){
    // console.log("I'm Inside graphvalues 2");
        var defered = Q.defer();
        db.query("select SUM(score) as score, count(*) as total  from governance_eg where project='vSSAMM' and score=1",defered.makeNodeResolver());
        return defered.promise;
    }
    function gdoQuery3(){
    //  console.log("I'm Inside graphvalues 3");
        var defered = Q.defer();
        db.query("select SUM(score) as score, count(*) as total  from governance_pc where project='vSSAMM' and score=1",defered.makeNodeResolver());

        return defered.promise;
    }

     //Construction
     function gdoQuery1_co(){
         // console.log("I'm Inside graphvalues 1");
          var defered = Q.defer();
          db.query("select SUM(score) as score, count(*) as total  from construction_ta where project='vSSAMM' and score=1",defered.makeNodeResolver());

          return defered.promise;
     }

     function gdoQuery2_co(){
     // console.log("I'm Inside graphvalues 2");
         var defered = Q.defer();
         db.query("select SUM(score) as score, count(*) as total  from construction_sr where project='vSSAMM' and score=1",defered.makeNodeResolver());
         return defered.promise;
     }
     function gdoQuery3_co(){
     //  console.log("I'm Inside graphvalues 3");
         var defered = Q.defer();
         db.query("select SUM(score) as score, count(*) as total  from construction_sa where project='vSSAMM' and score=1",defered.makeNodeResolver());

         return defered.promise;
     }



     //oper
     function gdoQuery1_oper(){
     //  console.log("I'm Inside graphvalues 6");
         var defered = Q.defer();
         db.query("select SUM(score) as score, count(*) as total from operations_im where score=1",defered.makeNodeResolver());
         return defered.promise;
     }
     function gdoQuery2_oper(){
         var defered = Q.defer();
         db.query("select SUM(score) as score, count(*) as total from operations_eh where score=1",defered.makeNodeResolver());
         return defered.promise;
     }
     function gdoQuery3_oper(){
     // console.log("I'm Inside graphvalues 7");
         var defered = Q.defer();
         db.query("select SUM(score) as score, count(*) as total from operations_oe where score=1",defered.makeNodeResolver());
         return defered.promise;
     }


     //Verification
     function gdoQuery1_ver()
     {
         var defered = Q.defer();
         db.query("select SUM(score) as score, count(*) as total from verification_dr where score=1",defered.makeNodeResolver());
         return defered.promise;
     }
     function gdoQuery2_ver()
     {
         var defered = Q.defer();
         db.query("select SUM(score) as score, count(*) as total from verification_ir where score=1",defered.makeNodeResolver());
         return defered.promise;
     }
     function gdoQuery3_ver()
     {
         var defered = Q.defer();
         db.query("select SUM(score) as score, count(*) as total from verification_st where score=1",defered.makeNodeResolver());
         return defered.promise;
     }
    // console.log("hii looop ");


               //0         //1     //2        //3
     Q.all([doQuery1(),doQuery2(),doQuery3(),
         doQuery1_co(),doQuery2_co(),doQuery3_co(),
         doQuery1_oper(),doQuery2_oper(),doQuery3_oper(),
         doQuery1_ve(),doQuery2_ve(),doQuery3_ve(),
         gdoQuery1(),gdoQuery2(),gdoQuery3(),
         gdoQuery1_co(),gdoQuery2_co(),gdoQuery3_co(),
         gdoQuery1_oper(),gdoQuery2_oper(),gdoQuery3_oper(),
         gdoQuery1_ver(),gdoQuery2_ver(),gdoQuery3_ver()
 ]).then(function(results){
        // res.send(results[0][0][0].email+results[1][0][0].email);
        //Governance
        console.log("hii looop ");
        gov=results[0][0][0].score+results[1][0][0].score+results[2][0][0].score;
         govtotal=results[0][0][0].total+results[1][0][0].total+results[2][0][0].total;
        // console.log(results[0][0][0].score);
         //Construction
         con=results[3][0][0].score+results[4][0][0].score+results[5][0][0].score;
         contotal=results[3][0][0].total+results[4][0][0].total+results[5][0][0].total;
         //Verification
         ver=results[6][0][0].score+results[7][0][0].score+results[8][0][0].score;
         vertotal=results[6][0][0].total+results[7][0][0].total+results[8][0][0].total;
         //operations
         oper=results[9][0][0].score+results[10][0][0].score+results[11][0][0].score;
         opertotal=results[9][0][0].total+results[10][0][0].total+results[11][0][0].total;

         //total
         score= oper + gov + con + ver;
         total=opertotal + govtotal + contotal + vertotal;;

         //Governance
        //console.log("hii");
        Pgov=results[12][0][0].score+results[13][0][0].score+results[14][0][0].score;
        Pgovtotal=results[12][0][0].total+results[13][0][0].total+results[14][0][0].total;
        //Construction
        Pcon=results[15][0][0].score+results[16][0][0].score+results[17][0][0].score;
        Pcontotal=results[15][0][0].total+results[16][0][0].total+results[17][0][0].total;
        //Verification
        Pver=results[18][0][0].score+results[19][0][0].score+results[20][0][0].score;
        Pvertotal=results[18][0][0].total+results[19][0][0].total+results[20][0][0].total;
        //operations
        Poper=results[21][0][0].score+results[22][0][0].score+results[23][0][0].score;
        Popertotal=results[21][0][0].total+results[22][0][0].total+results[23][0][0].total;
         //total
         Ptotal= Pgov + Pcon + Pver  + Poper;
         Pcount = Pgovtotal + Pcontotal + Pvertotal  + Popertotal;
         //divide
    //console.log(Ptotal);
         Pgov=parseFloat(Pgov/govtotal).toFixed(2);
         Pcon= parseFloat(Pcon/contotal).toFixed(2);
         Pver= parseFloat(Pver/vertotal).toFixed(2);
        Poper=parseFloat(Poper/opertotal).toFixed(2);
        tot= parseFloat(Ptotal/total).toFixed(2);

 //console.log(gov);//13

 //console.log(govtotal);
 //console.log(gov/govTotal);


         per_gov=Math.round((gov/govtotal)*100);
         per_con=Math.round((con/contotal)*100);
         per_ver=Math.round((ver/vertotal)*100);
         per_oper=Math.round((oper/opertotal)*100);
      // console.log(per_oper);
        res.json({ success: true, data_gov:per_gov,data_con:per_con,data_ver:per_ver,data_oper:per_oper, gov:Pgov,con:Pcon,oper:Poper,ver:Pver,total:tot });
         // Hint : your third query would go here
     });
 });




module.exports = router;




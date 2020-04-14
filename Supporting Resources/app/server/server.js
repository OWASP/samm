var express = require('express');
var app = express();
var db=require('./db/config');
//var db1=require('./db/config_vsamm');
const rtsIndex = require('./router/index.router');
const bodyParser = require('body-parser');
const cors = require('cors');
const allscores = require('./router/allscores.router')
const report = require('./router/indexreport.router');
const usermanage = require('./router/usermanage.router');
const home = require('./router/home.router');
// middleware
const Users = require('./routes/Users');
const vsamm = require('./router/vsamm.router');
const profile=require('./router/Profile')
// app.use('/users', Users);
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended:false
  })
)
app.use(cors());
app.use('/api', rtsIndex ,allscores, report , usermanage, home,vsamm,profile);

// app.use('/api',accuam);
port = process.env.PORT || 3001;
app.listen(3000);

console.log('RESTful API server started on: ' + port);

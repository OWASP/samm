const express = require('express');
const router = express.Router();
const Q = require('Q');
const path = require('path')
// const db1 = require('../db/mobsf');
//const ctrlUser = require('../controllers/user.controller');
const secret = 'harrypotter';
const nodemailer = require('nodemailer');
// const db = require('../db/config');
// const dbVMS = require('../db/vms');
const jwt = require('jsonwebtoken');
const Speakeasy = require("speakeasy")
const multer = require('multer');
// http://localhost:3000/images/avatar.jpg
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images'))
    },
    filename: function (req, file, cb) {
        cb(null, 'avatar.jpg')
    }
});
const upload = multer({storage: storage});
router.post('/profilepic', upload.single('avatar'), async (req, res) => {
    try {
        const data = req.file;
        res.send({fileName: data.filename, originalName: data.originalname});
    } catch (err) {
        res.sendStatus(400);
    }
})
module.exports = router

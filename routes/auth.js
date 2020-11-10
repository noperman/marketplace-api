var express = require('express');
var router = express.Router();
const model = require("../models/index");
const bcrypt = require("bcrypt");
const path = require("path");
const fs = require("fs");
const keyPath = path.join(__dirname, "..", "private.key");
const PRIVATE_KEY = fs.readFileSync(keyPath, "utf8");
const jwt = require('jsonwebtoken');

router.get('/signin', async(req,res,next)=>{
  try{
    const params = req.body

    if(params.username && params.password){
      return await model.user.findOne({where:{username:this.params.username}})
        .then((user)=>{
          if(user==null){
            return res.status(403).json({
              msg: 'Username not found, please signup first'
            });
          }

          if(bcrypt.compareSync(params.password,user.password)){
            const data = {
              'isLogin' : true,
              'username' : user.username
            };

            const token = jwt.sign(data, PRIVATE_KEY, {
              algorithm: "RS256",
              expiresIn: "9h"
            });
            
            return res.status(200).json({
              msg: 'Signin successfull',
              token: token
            });
          }else{
            return res.status(403).json({
              msg: 'Username or password is not valid'
            });
          }
        })
    }else{
      return res.status(403).json({
        msg: 'Correct input requirements firt please'
      });
    }
  }catch(e){
    return res.status(403).json({
      msg: 'Authentication failed'
    });
  }
});

module.exports = router;

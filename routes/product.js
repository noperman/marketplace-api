var express = require('express');
const model = require("../models/index");
var router = express.Router();
const auth_middleware = require("../middleware/auth")

// router.get('/products', [auth_middleware], async(req,res,next)=>{
router.get('/products', async(req,res,next)=>{
  try{
    const data = await model.product.findAll();

    return res.status(200).json({
      msg: 'Success',
      datas: data
    });
  }catch(e){
    return res.status(403).json({
      msg: 'Something went wrong'
    });
  }
});

module.exports = router;
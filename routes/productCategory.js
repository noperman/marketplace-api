var express = require('express');
const model = require("../models/index");
var router = express.Router();
const auth_middleware = require("../middleware/auth")

// router.get('/product/category', [auth_middleware], async(req,res,next)=>{
router.get('/product/category', async(req,res,next)=>{
  try{
    const data = await model.productcategory.findAll();

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
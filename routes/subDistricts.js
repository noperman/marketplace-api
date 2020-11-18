var express = require('express');
const model = require("../models/index");
var router = express.Router();
const auth_middleware = require("../middleware/auth")

// helper
const dataProcessing = require("../helper/dataProcessing");

// router.get('/product/category', [auth_middleware], async(req,res,next)=>{
router.get('/subdistricts', async(req,res,next)=>{
  try{
    const data = await model.subdistricts.findAll({attributes: ['id','districtId','subDistricts']});

    return res.status(200).json({msg: dataProcessing.lengthCheck(data),data});
  }catch(e){
    return res.status(403).json({msg: 'Something went wrong'})
  }
});

module.exports = router;
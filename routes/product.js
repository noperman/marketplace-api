var express = require('express');
const model = require("../models/index");
var router = express.Router();
const auth_middleware = require("../middleware/auth");

// helper
const dataProcessing = require("../helper/dataProcessing");

// router.get('/products', [auth_middleware], async(req,res,next)=>{
router.post('/products', async(req,res,next)=>{
  const params = req.body
  try{
    let like = (params.search)?params.search:''
    let whereCategory = (params.category)?{id:params.category}:{}
    let wheresubdistricts = (params.subdistricts)?{id:params.subdistricts}:{}
  
    const data = await model.product.findAll({
      where: {
        name:{
          [model.Sequelize.Op.like]: '%'+like+'%'
        }
      },
      include: [{
        model: model.productcategory,
        as: 'productcategory',
        attributes: ['category'],
        where: whereCategory
      },{
        model: model.user,
        as: 'seller',
        attributes: ['address'],
        include: [{
          model: model.subdistricts,
          as: 'subdistrict',
          attributes: ['id','subDistricts'],
          where: wheresubdistricts
        }]
      }]
    })
  
    return res.status(200).json({msg: dataProcessing.lengthCheck(data),data});
  }catch(e){
    return res.status(403).json({msg: 'Something went wrong'})
  }
})


module.exports = router;
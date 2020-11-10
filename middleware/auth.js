const jwt = require('jsonwebtoken');
const path = require("path");
const fs = require("fs");
const keyPath = path.join(__dirname, "..", "public.key");
const PUBLIC_KEY = fs.readFileSync(keyPath, "utf8");

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  if(token){
    const splitToken = token.split(" ");
  
    console.log(token)
    try {
      jwt.verify(splitToken[1], PUBLIC_KEY, { algorithms: 'RS256'});
      next()
    } catch (e) {
      return res.status(403).json({
        msg: 'Unauthorized'
      });
    }  
  }else{
    return res.status(403).json({
      msg: 'Unauthorized'
    });
  }
};

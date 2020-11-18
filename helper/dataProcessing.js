"use strict"

module.exports = {
  lengthCheck : (arr)=>{
    if(arr.length < 1){
      return "Data not found!";
    }else{
      return "Success"
    }
  },
  datePlus7Hours: ()=>{
    var date = new Date(); 
    var now_utc =  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
    date.getUTCHours()+7, date.getUTCMinutes(), date.getUTCSeconds());

    return new Date(now_utc)
  }
}
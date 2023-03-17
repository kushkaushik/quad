const mongoose  = require('mongoose')
const express = require('express')
const fetch = require('node-fetch')
const route  = express.Router();
const INTERNDATA = mongoose.model("interndata")


route.post('/datainsert',(req,res)=>{

    


async function getData(){
    const data = await fetch("https://api.wazirx.com/api/v2/tickers")
   const response =  await data.json();
//    console.log(response)
const mxIter  = 10; let count = 0;
let iter = 1;
    for(const key in response){
        
        if(response.hasOwnProperty(key)){
        

      const Post =   new INTERNDATA({
            serial:iter,
            name:response[key]['name'],
            last:response[key]['last'],
            buy:response[key]['buy'],
            sell:response[key]['sell'],
            volume:response[key]['volume'],
            base_unit:response[key]['base_unit']


        })
        
            Post.save();

        }
        count++;
        iter++;
        if(count>=mxIter){
            break;
        }

    }
}




getData()

return res.json("Success")

})


route.get('/data',(req,res)=>{
    INTERNDATA.find().sort({"serial":1}).then(mydata=>{
        res.json({mydata:mydata})
    }).catch(error=>{
        console.log(error)
    })
})













module.exports = route;
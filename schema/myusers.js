const mongoose = require('mongoose')
const newSch = new  mongoose.Schema({
    serial:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    last:{
        type:Number,
        required:true
    },
    buy:{
        type:Number,
        required:true
    },
    sell:{
        type:Number,
        required:true
    },
    
    volume:{
        type:Number,
        required:true
    },
    base_unit:{
        type:String,
        required:true
    }
})

mongoose.model("interndata",newSch);

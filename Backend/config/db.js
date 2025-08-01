const mongoose = require('mongoose')
const LINK = process.env.MONGOLINK
const connetDB = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://creditzzz2024:Rohith2006@portfolio.xmm7vob.mongodb.net/");
        console.log("successfully connected")
    }
    catch(err){
        console.log(err)
    }
}
module.exports = connetDB
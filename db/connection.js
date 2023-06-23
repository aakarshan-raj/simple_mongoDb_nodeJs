const mongoose  = require("mongoose")


const connection = async(connect_string) =>{
     return mongoose.connect(connect_string)      
}

module.exports = {connection}
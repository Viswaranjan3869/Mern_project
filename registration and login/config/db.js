const mongoose = require('mongoose');
 
exports.dbConn = async ()=>{
    try{
        const dbURL = "mongodb+srv://Viswaranjan:anglovedic6069@cluster0.ctyymp0.mongodb.net/?retryWrites=true&w=majority"; 
        await mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})
        console.log('Database Connected');
    }
    catch(err){
        console.log(`Database connection error ${err.message}`);
    } 
}
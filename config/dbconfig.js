
const mongoose = require("mongoose");
//STTRICT FORM MODEL ACTIVE
mongoose.set('strictQuery', true);

//MONGODB CONNECTION 
mongoose
  .connect(
    process.env.MONGODB_URL
  )
  .then(() => {
    console.log("connected to database");

    
  })
  .catch(() => {
    console.log("connection to database failed");
  });


  module.exports = mongoose;
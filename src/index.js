 //require('dotenv').config({path:'./env'})
 import dotenv from 'dotenv'; // eslint-disable-line

//function connectDB(){}
 import connectDB  from "./db/index.js";

 dotenv.config({
  path: './env'
 })
connectDB()













/*import express from "express";

const app = express();
//connectDB()

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`);
    app.on("error", () => {
      console.log("db error", error);
      throw error;
    });
    app.listen(process.env.PORT, () =>
      console.log(`Server is running on port ${process.env.PORT}`)
    );
  } catch (error) {
    console.error("Error", error);
    throw err;
  }
})();
*/

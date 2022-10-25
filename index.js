const app = require("./app");
const connectDb = require("./config/db");
require("dotenv").config();

const cloudinary = require("cloudinary");

// connect db here
connectDb();

// cloudinary config
cloudinary.config({
    cloud_name : process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API,
    api_secret:process.env.CLOUDINARY_SECRET
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is Running at ${process.env.PORT}`);
})

const express = require("express");
var morgan = require("morgan");
const app = express();
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// cookie middlewares
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp/",
}))

// morgan middleware
app.use(morgan("tiny"));

// import all routes here
const home = require("./routes/home");


// router middleware
app.use("/api/v1",home);



// exports
module.exports = app;


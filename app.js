const express = require("express");
var morgan = require("morgan");
const app = express();
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");
// middlewares
app.use(cors({
  origin : "*"
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie middlewares
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// morgan middleware
app.use(morgan("tiny"));

// import all routes here
const home = require("./routes/home");
const user = require("./routes/user")
const jobs = require("./routes/job");
const message = require("./routes/message");
const payment = require("./routes/payment");


// router middleware
app.use("/api/v1",home);
app.use("/api/v1",user);
app.use("/api/v1",jobs);
app.use("/api/v1",message);
app.use("",payment);

// payments
app.use("/stripe", express.raw({ type: "*/*" }));

// exports
module.exports = app;

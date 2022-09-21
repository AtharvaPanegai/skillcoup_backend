const app = require("./app");
const connectDb = require("./config/db");
require("dotenv").config();

// connect db here
connectDb();

app.listen(process.env.PORT, () => {
  console.log(`Server is Running at ${process.env.PORT}`);
});

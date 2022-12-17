const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/dbConnect");

// connect to db
connectDB();

// routes
app.use(express.json());
app.use(cors());
app.use("/user", require("./routes/User"));
app.use("/post", require("./routes/PostRouter"));
// create server
const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is running on ${PORT}`)
);

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//Import Routes
const authRoute = require("./routes/auth");
// const msgRoute = require("./routes/msg");
const messengerRoute = require("./routes/messenger");
dotenv.config();

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);

//Middleware
app.use(express.json());
//Route Middlewares
app.use("/api/user", authRoute);
// app.use("/api/user", msgRoute);
app.use("/", messengerRoute);
app.use(express.static("./public"));
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));

require('dotenv').config()

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//my routes
const categoryRoutes = require("./routes/category");
const wallpaperRoutes = require("./routes/wallpaper");
const bannerRoutes = require("./routes/banner");




//Middlewear
 app.use(bodyParser.json());
 app.use(cookieParser());
 app.use(cors());

//My Router
app.use("/api", categoryRoutes);
app.use("/api", wallpaperRoutes);
app.use("/api", bannerRoutes);

//Port
const port = process.env.PORT || 5000;

const connectDB = async () => {
    try {
      mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true
       }).then(() => {
           console.log("DB connected");
       }).catch(
           console.log("DB not connected")
       );
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }

//Starting server

// DB connection
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`app is running at ${port}`);
    })
})

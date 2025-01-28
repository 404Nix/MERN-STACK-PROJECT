const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoutes = require("./routes/userRoutes");
const cors = require('cors')

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("DB connected");
    app.listen(process.env.PORT || 8000, (err) => {
        if (err) console.log(err);
        else console.log("server is active", process.env.PORT);
      });
  })
  .catch((err) => {
    console.log(err);
  });

  app.use(userRoutes);
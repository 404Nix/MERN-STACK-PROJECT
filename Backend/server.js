const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const user = require("./model/userModel");

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


// Create Operation

app.post('/', async (req, res) => {
    console.log(req.body);
    const {name, email, age} = req.body;
    try {
        const userAdded = await user.create({
            name:name,
            email:email,
            age:age,
        })
        
        res.status(201).json(userAdded);
    } catch (error) {
        console.log(error);
        res.status(400).json({error:error.message});
    }

})



app.get("/", async (req, res) => {
    try {
        const showAll = await user.find();
        res.status(200).json(showAll);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message});
    }

//   res.send("hello");
});
const express = require("express");
const user = require("../model/userModel");
const router = express.Router();

// Create Operation

router.post("/", async (req, res) => {
  console.log(req.body);
  const { name, email, age } = req.body;
  try {
    const userAdded = await user.create({
      name: name,
      email: email,
      age: age,
    });

    res.status(201).json(userAdded);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

// Read Operation
router.get("/", async (req, res) => {
  try {
    const showAll = await user.find();
    res.status(200).json(showAll);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }

  //   res.send("hello");
});

// Single User
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleUser = await user.findById({ _id: id });
    res.status(200).json(singleUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }

  //   res.send("hello");
});

// Delete operation

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await user.findByIdAndDelete({ _id: id });
    res.status(200).json(deleteUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }

  //   res.send("hello");
});

// Update
router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateUser = await user.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }

  //   res.send("hello");
});

module.exports = router;

const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const body_parser = require('body-parser');

const port = process.env.PORT || 7777;
const DB = process.env.MONGO_URL;

app.use(body_parser.json());

app.get("/", (req, res) => {
    res.send("hello kalviam");
});

app.post("/post", (req, res) => {
    const { name } = req.body;
    res.send(name);
});

try {
    mongoose.connect(DB);
    console.log("MongoDB connected successfully");
} catch (error) {
    console.error("MongoDB connection error:", error);
}

app.listen(port, () => {
    console.log(`Port listening successfully on ${port}`);
});

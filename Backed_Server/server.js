const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");
const port = process.env.PORT || 7777;
const DB = process.env.MONGO_URL;
const router = require("./routes");

app.use(cors());
app.use(bodyParser.json());
app.use("/user", router);

app.get("/", async (req, res) => {
    try {
       
        const isConnected = mongoose.connection.readyState === 1;
        res.send(`Database connection status: ${isConnected ? 'Connected' : 'Disconnected'}`);
    } catch (error) {
        res.status(500).send("Error checking database connection status");
    }
});

app.post("/post", (req, res) => {
    const { name } = req.body;
    res.send(name);
});

mongoose.connect(DB); 

app.listen(port, () => {
    console.log(`Port listening successfully on ${port}`);
});

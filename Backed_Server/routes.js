const express = require("express");
const router = express.Router();
const model = require("./model");  
const path = require("path");
const fs = require("fs");
const dataBody = require("./data");

// Add Data
router.post("/add", async (req, res) => {
    try {
        const dataBody = req.body;
        console.log(dataBody);
        const newData = await model.create(dataBody);
        
        res.status(200).send({ message: "Data received successfully", data: newData });
    } catch (err) {
        return res.status(400).send({ message: err.message });  // Changed status code to 400
    }
});


router.get("/jsondata", async (req, res) => {
    try {
        let userData = await model.find({});
        if (userData.length === 0) {
            let data = "empty";
            res.status(200).send({ message: "Route working successfully", request: data });
        } else {
            res.status(200).send({ message: "Route working successfully", request: userData });
        }
    } catch (err) {
        res.status(500).send({ message: "Internal Server Error", error: err.message });
    }
});

router.delete('/jsondata/:id', async (req, res) => {
    try {
        console.log('Delete request received with ID:', req.params.id);  
        const deleted = await model.findByIdAndDelete(req.params.id);  
        if (!deleted) {
            console.log('Data not found');  
            return res.status(404).send({ message: "Data not found" });
        }
        console.log('Item deleted:', deleted);  
        res.status(200).send({ message: "Data deleted successfully" });
    } catch (error) {
        console.log('Error deleting data:', error);  
        res.status(500).send({ message: "Internal Server Error", error: error.message });
    }
});

router.put("/jsondata/:id", async (req, res) => {
    try {
        const updatedData = await model.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedData) {
            return res.status(404).send({ message: "Data not found" });
        }
        res.status(200).send({ message: "Data updated successfully", data: updatedData });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal Server Error", error: error.message });
    }
});



module.exports = router;
const express = require("express");
const router = express.Router();
const { model, file } = require("./model");
const { signupSchema } = require("./JOI");
const { userSchema } = require("./userSchema");
const jwt = require("jsonwebtoken");

// Add Data
router.post("/add", async (req, res) => {
    try {
        const dataBody = req.body;
        console.log(dataBody);
        const newData = await file.create(dataBody); // Use the user model here
        
        res.status(200).send({ message: "Data received successfully", data: newData });
    } catch (err) {
        return res.status(400).send({ message: err.message }); // Changed status code to 400
    }
});

router.get("/jsondata", async (req, res) => {
    try {
        let userData = await file.find({});
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
        const deleted = await file.findByIdAndDelete(req.params.id);  
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
        const updatedData = await file.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedData) {
            return res.status(404).send({ message: "Data not found" });
        }
        res.status(200).send({ message: "Data updated successfully", data: updatedData });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal Server Error", error: error.message });
    }
});

// Validation
router.post("/data", async (req, res) => {
    const token=jwt.sign(req.body,process.env.password)
    const { error, value } = signupSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: "Invalid inputs entered", error: error.message });
    }
    try {
        const { name, email, password } = req.body;
        const newData = await model.create({ name, email, password , token:token});
        res.status(200).send({ message: "Data received successfully", data: newData });
    } catch (err) {
        return res.status(500).send({ message: "Internal Server Error", error: err.message });
    }
});

// Check data
router.post("/checkData", async (req, res) => {
    const { email, password } = req.body;
    try {
        const userD = await model.findOne({ email });
        if (!userD) {
            return res.status(400).json({ message: "Invalid email entered" });
        } else {
            if (password === userD.password) {
                return res.status(200).json({ message: "Successfully reached" });
            } else {
                return res.status(400).json({ message: "Wrong password" });
            }
        }
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
});

// Login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      return res.status(200).json({ message: "Login successful" });
    } catch (err) {
      return res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
  });


router.post("/logout", (req, res) => {
    
    return res.status(200).json({ message: "Logout successful" });
});
//search bar
router.get("/search",(req,res)=>{
    model.find({})
    .then((arrOfUsers) => {res.json({arrOfUsers})})
    .catch((error) => {res.json({error})})
})

router.get('/get', (req, res) => {
    file.find({})
    .then((arrOfdata) => {res.json({arrOfdata})})
    .catch((error) => {res.json({error})})
})



module.exports = router;

const express = require("express");
const Razorpay = require("razorpay");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(express.json())
app.use(cors())

app.get("/", (req,res) => {
 res.send("Hello")
})
app.post("/payment", async (req, res) => {

    let {amount}  = req.body;
    var instance = new Razorpay({ key_id: 'rzp_test_RLh2orj8xSBN9g', key_secret: 'bmIFT0wG4AueDFAT160V8VxV' })

    let order = await  instance.orders.create({
        amount: amount*100,
        currency: "INR",
        receipt: "receipt#1",
    })

    res.status(201).json({
        success : true, 
        order,
        amount
    })
})

app.listen(port, () =>{
    console.log("server is running");
})


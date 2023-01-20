const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("./config");
const Product = require("./product"); 

const app = express();



//share the data on mongodb
app.use(express.json());

//error fix by using cors
app.use(cors());



app.post("/create", async (req, resp) => {
    let data = new Product(req.body);
    const result = await data.save();
    resp.send(result);
});

app.get("/list", async (req, resp) => {
    let data = await Product.find();
    resp.send(data);
})

app.get("/", (req, resp) => {
    resp.json("server start")
  })
  
  const port = process.env.PORT || 5000
  
  app.listen(port,() => {
    console.log(`app running at ${port}`);
  });
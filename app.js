require("dotenv").config();
const express = require("express");

const app = express();

app.use("/api", (req, res, next) => {
    res.send("hello world")
})

const port = process.env.PORT || 4000;

app.listen(port, () =>{
    console.log(`App running on port ${port} and its connected`);
} )
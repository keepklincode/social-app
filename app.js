require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes")
const app = express();
app.use(express.json());       // Parse JSON request body
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", router);

// const db = "mongodb+srv://keepklincode:keepklin89@cluster0.w8inj22.mongodb.net/socialApp?retryWrites=true&w=majority"
const db = "mongodb+srv://keepklincode:keepklin89@cluster0.w8inj22.mongodb.net/socialApp"

mongoose.connect(db)
.then(() => app.listen(4000))
.then(() => console.log("connected to localhost listening to port 4000"))
.catch((err) => console.log(err));

// const port = process.env.PORT || 4000;

// app.listen(port, () =>{
//     console.log(`App running on port ${port} and its connected`);
// } )
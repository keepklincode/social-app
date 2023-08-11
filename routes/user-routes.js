const express = require("express");

const router = express.Router();

const { getAllUser, signUp} = require("../controllers/user-controller");

router.get("/",getAllUser);
router.post("/signup", signUp)

module.exports = router;
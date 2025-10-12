const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { getDashBoardData } = require("../controllers/dasboardController");

const router = express.Router();

router.get("/", protect, getDashBoardData);

module.exports = router;

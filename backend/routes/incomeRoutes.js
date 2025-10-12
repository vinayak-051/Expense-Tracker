const express = require("express");
const router = express.Router();

const {
  addIncome,
  getAllIncome,
  deleteIncome,
  downloadIncomeExcel,
} = require("../controllers/incomeController");

const { protect } = require("../middleware/authMiddleware");

router.post("/add", protect, addIncome);
router.get("/get", protect, getAllIncome);
router.get("/download", protect, downloadIncomeExcel);
router.delete("/:id", protect, deleteIncome);

module.exports = router;



const Income = require('../models/Income');
const ExcelJS = require('exceljs');

exports.addIncome = async (req, res) => {
  const userId = req.user.id;

  try {
    const { icon, source, amount, date } = req.body;

    if (!source || !amount || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newIncome = new Income({
      userId,
      icon,
      source,
      amount,
      date: new Date(date),
    });

    await newIncome.save();
    res.status(201).json({ message: "Income added successfully", income: newIncome });
  } catch (error) {
    console.error("Add Income Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAllIncome = async (req, res) => {
  const userId = req.user.id;

  try {
    const income = await Income.find({ userId }).sort({ date: -1 });
    res.status(200).json(income);
  } catch (error) {
    console.error("Get All Income Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteIncome = async (req, res) => {
  const userId = req.user.id;
  const incomeId = req.params.id;

  try {
    const income = await Income.findOneAndDelete({ _id: incomeId, userId });

    if (!income) {
      return res.status(404).json({ message: "Income not found or unauthorized" });
    }

    res.status(200).json({ message: "Income deleted successfully" });
  } catch (error) {
    console.error("Delete Income Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.downloadIncomeExcel = async (req, res) => {
  const userId = req.user.id;

  try {
    const incomes = await Income.find({ userId }).sort({ date: -1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Income');

    worksheet.columns = [
      { header: 'Source', key: 'source', width: 30 },
      { header: 'Amount', key: 'amount', width: 15 },
      { header: 'Date', key: 'date', width: 20 },
    ];

    incomes.forEach(income => {
      worksheet.addRow({
        source: income.source,
        amount: income.amount,
        date: income.date.toISOString().split('T')[0],
      });
    });

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=income.xlsx');

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error("Download Excel Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};



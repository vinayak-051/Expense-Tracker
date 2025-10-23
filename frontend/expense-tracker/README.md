# Expense Tracker Frontend

[Live Demo](https://expense-tracker-5-uaeq.onrender.com)  

---

## Table of Contents

- [Overview](#overview)  
- [Key Features](#key-features)  
- [Installation](#installation)  
- [Connecting to Backend](#connecting-to-backend)  
- [Running the Project](#running-the-project)  
- [Build & Deployment](#build--deployment)  
- [License](#license)  

---

## Overview

This is the **frontend** for the Expense Tracker application, built with **React**, **Vite**, and **Tailwind CSS**. It provides a responsive and interactive interface for managing expenses and incomes, and it communicates with the backend via RESTful API endpoints.

---

## Key Features

- **Responsive UI** with Tailwind CSS  
- **Expense and Income Management**  
- **Dashboard visualization** of financial data  
- **Integration with backend API** for CRUD operations  
- **File upload support** for receipts  
- **Clean and modular component structure**  


## Project Structure

```text
frontend/
├── expense-tracker/
│   ├── public/                     
│   │   └── index.html
│   ├── src/
│   │   ├── assets/
│   │   │   └── images/            # All images
│   │   ├── components/
│   │   │   ├── chart/             # Custom chart components
│   │   │   │   ├── CustomBar.jsx
│   │   │   │   ├── CustomLegend.jsx
│   │   │   │   ├── CustomLine.jsx
│   │   │   │   ├── CustomPie.jsx
│   │   │   │   └── CustomTooltip.jsx
│   │   │   ├── cards/             # Info and transaction cards
│   │   │   │   ├── InfoCard.jsx
│   │   │   │   └── TransactionInfoCard.jsx
│   │   │   ├── dashboard/         # Dashboard-specific components
│   │   │   │   ├── ExpenseTransactions.jsx
│   │   │   │   ├── FinancialOverview.jsx
│   │   │   │   ├── Last30DaysExpenses.jsx
│   │   │   │   ├── RecentIncome.jsx
│   │   │   │   ├── RecentTransaction.jsx
│   │   │   │   └── RecentIncomeWithChart.jsx
│   │   │   ├── expense/           # Expense-related components
│   │   │   │   ├── AddExpense.jsx
│   │   │   │   ├── ExpenseList.jsx
│   │   │   │   └── ExpenseOverview.jsx
│   │   │   ├── income/            # Income-related components
│   │   │   │   ├── AddIncome.jsx
│   │   │   │   ├── IncomeList.jsx
│   │   │   │   └── IncomeOverview.jsx
│   │   │   ├── input/             # Input components
│   │   │   │   ├── EmojiPicker.jsx
│   │   │   │   └── InputAvatar.jsx
│   │   │   └── layout/            # Layout components
│   │   │       ├── AuthLayout.jsx
│   │   │       ├── DashboardLayout.jsx
│   │   │       ├── Navbar.jsx
│   │   │       └── SideMenu.jsx
│   │   ├── context/
│   │   │   └── UserContext.jsx
│   │   ├── hooks/
│   │   │   └── useUserAuth.jsx
│   │   ├── pages/
│   │   │   ├── auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   └── Signup.jsx
│   │   │   └── dashboard/
│   │   │       ├── Home.jsx
│   │   │       ├── Expense.jsx
│   │   │       └── Income.jsx
│   │   ├── utils/
│   │   │   ├── apiPaths.js
│   │   │   ├── axiosInstance.js
│   │   │   ├── data.js
│   │   │   └── helper.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── index.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js

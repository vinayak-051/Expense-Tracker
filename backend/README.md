# Expense Tracker Backend

[Live Demo](https://expensetracker-nmye.onrender.com)

---

## Table of Contents

- [Overview](#overview)  
- [Key Features](#key-features)  
- [Project Structure](#project-structure)  
- [Authentication & Security](#authentication--security)  
- [Installation](#installation)  
- [Environment Variables](#environment-variables)  
- [Running the Project](#running-the-project)  
- [API Endpoints](#api-endpoints)  
- [License](#license)  

---

## Overview

This is the **backend** for the Expense Tracker application built with **Node.js**, **Express**, and **MongoDB**. It provides RESTful API endpoints for managing users, expenses, and incomes, enabling seamless integration with a frontend application.  

---

## Key Features

- **User authentication** using JWT (JSON Web Tokens)  
- **Authorization middleware** to protect sensitive routes  
- **CRUD operations** for expenses and incomes  
- **Dashboard aggregation** for quick summaries  
- **File upload support** for receipts or documents  
- **MongoDB integration** for persistent storage  
- **Secure password hashing** with bcrypt  
- **Modular and scalable architecture**  

---

## Project Structure

```text
backend/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   ├── dashboardController.js
│   ├── expenseController.js
│   ├── incomeController.js
├── middleware/
│   ├── auth.js
│   ├── upload.js
├── models/
│   ├── Expense.js
│   ├── Income.js
│   ├── User.js
├── routes/
│   ├── authRoutes.js
│   ├── dashboardRoutes.js
│   ├── expenseRoutes.js
│   ├── incomeRoutes.js
├── uploads/
├── node_modules/
├── package.json
├── package-lock.json
└── server.js

---

## Authentication & Security

- **JWT Authentication:**  
  Users receive a JWT upon login or registration. This token must be included in the `Authorization` header (`Bearer <token>`) to access protected routes.

- **Middleware:**  
  - `auth.js` → verifies JWT and protects routes  
  - `upload.js` → handles file uploads securely  

- **Password Security:**  
  User passwords are hashed using **bcrypt** before storing in the database.  

- **Protected Endpoints:**  
  All expense, income, and dashboard routes require a valid JWT.

---

## Installation

 Clone the repository:

```bash
git clone https://github.com/vinayak-051/Expense-Tracker.git






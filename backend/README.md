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
- **Modular and scalable architecture**  
- **Secure password hashing** with bcrypt  
- **Role-based access (optional)**  

---

## Project Structure
backend/
├── config/
│ └── db.js # Database connection configuration
├── controllers/
│ ├── authController.js # Handles authentication logic
│ ├── dashboardController.js # Handles dashboard-related requests
│ ├── expenseController.js # Handles expense CRUD operations
│ ├── incomeController.js # Handles income CRUD operations
├── middleware/
│ ├── auth.js # JWT authentication middleware
│ ├── upload.js # File upload middleware
├── models/
│ ├── Expense.js # Expense model
│ ├── Income.js # Income model
│ ├── User.js # User model
├── routes/
│ ├── authRoutes.js # Routes for authentication
│ ├── dashboardRoutes.js # Routes for dashboard
│ ├── expenseRoutes.js # Routes for expense
│ ├── incomeRoutes.js # Routes for income
├── uploads/ # Folder for uploaded files (e.g., receipts)
├── node_modules/ # Node.js dependencies
├── package.json # Project dependencies and scripts
├── package-lock.json # Exact dependency versions
└── server.js # Entry point of the server

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





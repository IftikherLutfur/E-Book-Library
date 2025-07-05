# 📚 E-Book Management

A frontend application for managing books and borrow operations. Built with React, this project allows users to view, add, edit, delete, and borrow books without requiring authentication.

---

## 🚀 Features

### 1. 🌐 Public Routes
- All pages are publicly accessible — no login/authentication required.
- Focused on essential book and borrow operations.

---

### 2. 🛠️ Book Management

#### 📋 Book List Table
- Displays all books in a responsive table layout.
- **Columns:** Title, Author, Genre, ISBN, Copies, Availability, Actions

#### 🧩 Actions:
- **✏️ Edit Book**  
  - Opens a modal pre-filled with current data  
  - Updates book info via API  
  - If copies are `0`, availability is auto-set to "Unavailable"

- **🗑️ Delete Book**  
  - Confirmation popup before deletion  
  - Book is removed via API and UI updates instantly

- **📥 Borrow Book**  
  - Opens a form to borrow the book  
  - Form includes quantity and due date  
  - Quantity can't exceed available copies  
  - If copies become `0`, book is marked unavailable

#### ➕ Add New Book
- Opens a modal form to create a new book
- Fields: Title, Author, Genre, ISBN, Description, Copies  
- "Available" is optional and defaults to `true`
- After submission:
  - Redirects to book list
  - UI updates instantly with the new entry

---

### 3. 🔁 Borrow Book Flow
- Launched via **"Borrow"** button from the book table
- Fields:
  - **Quantity**: Must be ≤ available copies  
  - **Due Date**: Required date input

- After successful submission:
  - API creates a borrow entry
  - Redirects to **Borrow Summary** page

---

### 4. 📊 Borrow Summary Page
- Displays all borrowed books
- **Fetched from an aggregation API**
- **Columns:** Book Title, ISBN, Total Quantity Borrowed

---

## 🛠️ Tech Stack

- **React.js**
- **TypeScript**
- **Tailwind CSS**
- **Redux Toolkit + RTK Query** – for API integration
- **React Hook Form**
- **SweetAlert2** – for modals
- **React Hot Toast** – for notifications

---

## 🧪 How to Run

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

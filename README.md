# 🍔 Food Ordering System (MERN Stack)

A full-stack Food Ordering Web Application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

This application allows users to browse restaurants, view trending dishes, add items to cart, and place orders. It also includes an Admin Dashboard for managing users, products, restaurants, and orders.

---

## 🚀 Tech Stack

**Frontend**
- React.js
- React Router DOM
- Bootstrap
- Axios

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---

## ✨ Features

### 👤 User Features
- User Registration & Login
- Browse Restaurants
- View Individual Restaurant Details
- View Trending Products
- Add to Cart
- Cart Management
- Secure Authentication

### 🛠 Admin Features
- Admin Dashboard
- View All Users
- View All Orders
- Manage Restaurants
- Manage Products

---

## 📂 Project Structure

food-ordering-system/
│
├── client/ # React Frontend
│
├── server/ # Node + Express Backend
│
└── README.md

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/foods-odering-system.git
cd foods-odering-system-

```
### 2️⃣ Setup Backend
```bash
cd server
npm install
```
Create a .env file inside server/ and add:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
Start backend:
```bash
npm start
```
### 3️⃣ Setup Frontend
Open a new terminal:
```bash
cd client
npm install
npm run dev
```
Frontend runs at:
```bash
http://localhost:5173
```
Backend runs at:
```bash
http://localhost:5000
```

---
## 🔐 Authentication

JWT-based authentication

Token stored in localStorage

Role-based access control (Admin / User)

---
## 📸 Screenshots

<img width="1898" height="912" alt="image" src="https://github.com/user-attachments/assets/dfc225fb-cc5d-4188-9706-2ba2c3990683" />

### Demo Video
https://youtu.be/12X3ypusgbw
---
## 🌍 Future Improvements

Online Payment Integration

Order Tracking System

Search & Filtering

Responsive UI Enhancements

Deployment (Render / Vercel)

---
## 👨‍💻 Author

KANTAMANI RENUKA SNIGDHA
---
## 📜 License

This project is for educational purposes.
---




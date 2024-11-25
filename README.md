# **Book Store API**

A robust and scalable API for managing books, processing orders, and calculating revenue. Built with Node.js, Express.js, and MongoDB, this API is designed with modular architecture for maintainability and scalability.

---

## **Features**

1. **Book Management**:
   - Add, update, retrieve, and delete books.
   - Manage book inventory and track availability.

2. **Order Management**:
   - Place orders and update inventory automatically.
   - Handle cases where stock is insufficient.

3. **Revenue Calculation**:
   - Aggregate revenue from all orders using MongoDB’s aggregation pipeline.

4. **Error Handling**:
   - Comprehensive and user-friendly error messages.

---

## **Technologies Used**

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Tools**: Postman for API testing

---

## **Setup Instructions**

Follow these steps to set up the project locally.

### **1. Prerequisites**

Make sure you have the following installed:

- **Node.js** (v16+ recommended)
- **MongoDB** (Running locally or use a connection string for a remote database)

---

### **2. Clone the Repository**

Run the following commands:

```bash
git clone https://github.com/your-username/book-store-api.git
cd book-store-api
```
### **3. Install Dependencies**
```
npm install
```
### **4. Configure Environment Variables**
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/bookstore
```
### **5. Start the Application**
```
npm run dev
npm start
```

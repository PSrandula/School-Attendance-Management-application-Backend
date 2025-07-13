# 📚 School Attendance Management System - Backend

This is a Node.js + Express backend application developed as part of **DETZ Internship Task 4**. It manages a school system's grades, classes, and students using **Firebase Realtime Database**. The backend supports full CRUD operations, input validation, and integration testing.

---

## 🚀 Project Overview

### 🔧 Features
- Manage **Grades** (Add, View, Update, Delete)
- Manage **Classes** under each Grade
- Manage **Students** under each Class
- Input validations (required fields, duplicates)
- Firebase integration for scalable data storage
- RESTful API architecture
- Integration testing with Jest + Supertest

---

## 🛠️ Technologies Used

| Tech         | Description                            |
|--------------|----------------------------------------|
| Node.js      | JavaScript runtime environment         |
| Express.js   | Web framework for Node.js              |
| Firebase     | Realtime Database for data storage     |
| Jest         | Testing framework                      |
| Supertest    | HTTP assertions for testing APIs       |
| express-validator | Middleware for input validation   |
| dotenv       | For managing environment variables     |

---

## 📁 Project Structure

attendance-management/
│
├── src/
│   ├── config/
│   │   └── firebase.js
│   │
│   ├── controllers/
│   │   ├── gradeController.js
│   │   ├── classController.js
│   │   └── studentController.js
│   │
│   ├── routes/
│   │   ├── gradeRoutes.js
│   │   ├── classRoutes.js
│   │   └── studentRoutes.js
│   │
│   ├── validation/                    # ✅ validation logic
│   │   ├── gradeValidation.js
│   │   ├── classValidation.js
│   │   └── studentValidation.js
│   │
│   ├── middleware/                   # ✅ middlewares here
│     └── handleValidation.js       # → used to handle express-validator results
│   
│                     
│
├── tests/
│   ├── grade.test.js
│   ├── class.test.js
│   └── student.test.js
│── app.js                    # main express app
├── serviceAccountKey.json
├── .env
├── package.json
└── README.md


---

## 🔧 Setup Instructions

### 📦 Prerequisites

- Node.js & npm installed
- Firebase project created
- Service Account Key JSON file from Firebase
- Firebase Realtime Database enabled

### 📥 Installation

```bash
git clone https://github.com/your-username/attendance-management.git
cd attendance-management
npm install

Environment Variables
Create a .env file in the root folder with the following:


FIREBASE_DB_URL=your_firebase_db_url
Place your serviceAccountKey.json file inside src/config/.

🚀 Start the Server
npm start
By default, the server runs on http://localhost:5000

API Endpoints
➕ Grade Endpoints
Method	Endpoint	Description
POST	/api/grades	Add new grade
GET	/api/grades	Get all grades
PUT	/api/grades/:id	Update a grade by ID
DELETE	/api/grades/:id	Delete a grade by ID

➕ Class Endpoints
Method	Endpoint	Description
POST	/api/classes/:gradeId	Add class under a grade
GET	/api/classes/:gradeId	Get all classes in a grade
PUT	/api/classes/:gradeId/:classId	Update a class by ID
DELETE	/api/classes/:gradeId/:classId	Delete a class by ID

➕ Student Endpoints
Method	Endpoint	Description
POST	/api/students/:gradeId/:classId	Add student under class
GET	/api/students/:gradeId/:classId	Get all students in a class
PUT	/api/students/:gradeId/:classId/:studentId	Update student details
DELETE	/api/students/:gradeId/:classId/:studentId	Delete student from class

🧪 Running Tests
Integration tests are written using Jest and Supertest to verify the correctness of API endpoints.
npm test

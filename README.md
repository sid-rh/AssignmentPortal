# Assignment Submission Portal

## Overview
This is a backend system for an assignment submission portal built with Node.js, Express, and MongoDB. The system supports two types of users: Users and Admins, with functionality for uploading, reviewing, and managing assignments.

## Features
- User Registration and Authentication
- Admin Registration and Authentication
- Assignment Upload
- Assignment Review (Accept/Reject)

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/sid-rh/AssignmentPortal.git
cd AssignmentPortal
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory with the following variables:
```
MONGODB_URI=<your_mongodb_url>
JWT_SECRET=<your_secret_key>
PORT=<your_port_number>
```

### 4. Start the Server
```bash
nodemon app
```

## API Endpoints

### User Endpoints
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - User login
- `GET /api/users/admins` - Fetch all admins
- `POST /api/assignments/upload` - Upload an assignment

### Admin Endpoints
- `POST /api/users/register` (with admin role) - Register a new admin
- `POST /api/users/login` - Admin login
- `GET /api/assignments` - View assignments tagged to the admin
- `POST /api/assignments/:id/accept` - Accept an assignment
- `POST /api/assignments/:id/reject` - Reject an assignment

## Authentication
- Use JWT (JSON Web Tokens) for authentication
- Include the token in the `Authorization` header as `Bearer <token>`

## Request Examples

### User Registration
```json
{
  "username": "user",
  "email": "user@example.com",
  "password": "passwrod@123"
}
```

### Assignment Upload
```json
{
  "task": "Create a task",
  "adminId": "admin_id"
}
```

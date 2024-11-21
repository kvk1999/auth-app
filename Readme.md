Here's a sample `README.md` file for your **User Authentication API** project:

---

# User Authentication API

Welcome to the **User Authentication API**! This API allows users to register, log in, log out, and access their personal information securely using **Bearer Tokens**. Built using **Node.js**, **Express.js**, **Mongoose**, and **JWT**, the application follows the MVC design pattern for clean and maintainable code.

---

## Features

- **User Registration:** New users can register with a username, email, and password.
- **User Login:** Existing users can log in and receive a JWT token.
- **User Logout:** Securely log out by invalidating the JWT token.
- **User Information:** Access personal user data with a valid JWT.
- **Secure Routes:** Middleware to protect routes by verifying JWT tokens.
- **Error Handling:** Clear and descriptive error messages for all endpoints.

---

## Technologies Used

- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **MongoDB**: Database for storing user data
- **Mongoose**: ODM for MongoDB
- **JSON Web Token (JWT)**: Token-based authentication
- **bcrypt**: Password hashing for security
- **dotenv**: Environment variable management

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables:
   Create a `.env` file in the root directory with the following keys:
   ```env
   MONGO_URL=your-mongodb-uri
   JWT_SECRET=your-secret-key
   PORT=3001
   ```

4. Start the server:
   ```bash
   npm start
   ```

---

## Endpoints

### **Base URL:** `http://localhost:3001`

### **Authentication Routes**

| Method | Endpoint         | Description                |
|--------|------------------|----------------------------|
| POST   | `/api/auth/register` | Register a new user        |
| POST   | `/api/auth/login`    | Log in and get a JWT token |
| POST   | `/api/auth/logout`   | Log out the user           |
| GET    | `/api/auth/me`       | Get user info (protected)  |

---

## Sample Requests and Responses

### 1. **Register a User**
   **Request:**
   ```json
   POST /api/auth/register
   {
     "username": "john_doe",
     "email": "john.doe@example.com",
     "password": "password123"
   }
   ```

   **Response:**
   ```json
   {
     "message": "User registered successfully!"
   }
   ```

### 2. **Login a User**
   **Request:**
   ```json
   POST /api/auth/login
   {
     "email": "john.doe@example.com",
     "password": "password123"
   }
   ```

   **Response:**
   ```json
   {
     "token": "your-jwt-token"
   }
   ```

### 3. **Logout User**
Logs out the authenticated user by invalidating their token.

- **URL:** `/api/auth/logout`
- **Method:** `POST`
- **Headers:** 
  - `Authorization: Bearer <token>`
- **Response:**
  - **Success:** 
    ```json
    {
      "message": "User logged out successfully"
    }
    ```


### 4. **Get User Info**
   **Request:** (Authorization header with Bearer token required)
   ```http
   GET /api/auth/me
   Authorization: Bearer your-jwt-token
   ```

   **Response:**
   ```json
   {
     "username": "john_doe",
     "email": "john.doe@example.com"
   }
   ```

---

## File Structure

```
.
├── controllers/
│   ├── authController.js       # Logic for authentication routes
├── middleware/
│   ├── authMiddleware.js       # JWT verification middleware
├── models/
│   ├── User.js                 # Mongoose User schema
├── routes/
│   ├── authRoutes.js           # Authentication routes
├── guvi.users.json             # Sample user data file
├── app.js                      # Main application entry point
├── .env                        # Environment variables
├── README.md                   # Project documentation
├── package.json                # Node.js dependencies
```

---

## Testing

You can test the API endpoints using tools like:

- [Postman](https://www.postman.com/)
- [cURL](https://curl.se/)

---



## Postman Documentation

[Here's the Postman API documentation](https://documenter.getpostman.com/view/38564233/2sAYBSjCv5)


## Author

Created by **Koushik K V**  
Feel free to reach out for feedback or collaboration!

---

Let me know if you need modifications!
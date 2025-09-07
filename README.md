# Project Management API

> A robust REST API for a full-featured project management application, built from scratch with Node.js, Express, and MongoDB. This backend system handles secure user authentication, email verification, and provides the foundational services for managing projects and tasks.

---

### ▶️ API in Action (Demo)

Here is a demonstration of the core authentication flow using Postman, from user login to accessing a protected route.

![Postman Demo GIF](https://github.com/user-attachments/assets/22be3ccb-2c55-43d7-8a42-1a8cf135e88f)
rohanwagh009/project-management-api/main/demo.gif)

---

### ✨ Features Implemented

This project currently has a complete foundational backend with the following features:

* **Authentication:**
    * Secure User Registration with password hashing (`bcrypt`).
    * User Login with JWT (`jsonwebtoken`).
    * Access Token and Refresh Token implementation for persistent user sessions.
    * Secure `httpOnly` cookie-based mechanism for storing and transferring tokens.
* **User & Security:**
    * Automated Email Verification for new users using `nodemailer`.
    * Secure "Forgot Password" and "Reset Password" functionality.
    * Middleware for authenticating and protecting routes (`verifyJWT`).
* **API Architecture:**
    * Standardized API responses (`ApiResonse`) and centralized error handling (`ApiError`).
    * Asynchronous request handling with a reusable `asyncHandler` utility.
    * Request validation using `express-validator`.

#### 📅 Planned Features (Roadmap)
* [ ] Full CRUD (Create, Read, Update, Delete) functionality for **Projects**.
* [ ] Full CRUD functionality for **Tasks** within projects.
* [ ] Ability to assign users to specific tasks.
* [ ] Commenting system on tasks.

---

### 🛠️ Tech Stack & Tools

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (with Mongoose)
* **Authentication:** JSON Web Tokens (JWT), bcrypt, Cookie-Parser
* **Validation:** express-validator
* **Email:** Nodemailer
* **Testing:** Postman

---

### API Endpoints

Here is a list of the main available API endpoints:

| Method | Endpoint | Description | Authentication |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/v1/users/register` | Register a new user | Public |
| `POST` | `/api/v1/users/login` | Login an existing user | Public |
| `GET` | `/api/v1/users/verify-email/:token` | Verify a user's email | Public |
| `POST` | `/api/v1/users/logout` | Logout the current user | **Protected** |
| `GET` | `/api/v1/users/current-user` | Get the current logged-in user | **Protected** |
| `POST` | `/api/v1/users/refresh-token` | Get a new access token | **Protected** |
| `POST` | `/api/v1/users/forgot-password`| Request a password reset email | Public |
| `POST` | `/api/v1/users/reset-password/:token`| Reset the user's password | Public |
| `POST` | `/api/v1/users/change-password` | Change password for a logged-in user | **Protected** |

---

### ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

#### Prerequisites

* Node.js and npm installed
* MongoDB Atlas account (or a local MongoDB installation)
* Postman for API testing

#### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/rohanwagh009/project-management-api.git](https://github.com/rohanwagh009/project-management-api.git)
    ```
2.  **Navigate into the directory:**
    ```sh
    cd project-management-api
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Create a `.env` file** in the root of the project. This file stores your secret keys and configuration. Add the following variables:
    ```env
    PORT=8000
    MONGODB_URI=your_mongodb_connection_string
    CORS_ORIGIN=*

    ACCESS_TOKEN_SECRET=your_super_secret_key_for_access_token
    ACCESS_TOKEN_EXPIRY=1d
    REFRESH_TOKEN_SECRET=your_super_secret_key_for_refresh_token
    REFRESH_TOKEN_EXPIRY=10d

    # Email credentials (e.g., for Mailtrap or another SMTP service)
    EMAIL_HOST=smtp.mailtrap.io
    EMAIL_PORT=2525
    EMAIL_USER=your_mailtrap_user
    EMAIL_PASS=your_mailtrap_password
    ```
5.  **Start the server:**
    ```sh
    npm run dev
    ```
The server will start on `http://localhost:8000` (or the port you specified).

---

### 👤 Author

**Rohan Wagh**

* **GitHub:** [@rohanwagh009](https://github.com/rohanwagh009)
* **LinkedIn:** [Rohan Wagh](https://www.linkedin.com/in/rohanwagh009/)

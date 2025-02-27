---

# Shop Management System

![Shop Management System](https://img.shields.io/badge/Node.js-14.x-green) ![React](https://img.shields.io/badge/React-18.x-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue) ![MongoDB](https://img.shields.io/badge/MongoDB-6.x-green) ![JWT](https://img.shields.io/badge/JWT-Auth-orange)

A modern **Shop Management System** built with **Node.js**, **React**, **TypeScript**, **JWT**, and **MongoDB**. This application allows shop owners to manage products, orders, and customers efficiently.

---

## Features

- **User Authentication**: Secure login and registration using JWT.
- **Product Management**: Add, update, delete, and view products.
- **Order Management**: Create and manage customer orders.
- **Customer Management**: Manage customer details and order history.
- **Responsive UI**: Built with React and styled using modern CSS frameworks.
- **RESTful API**: Backend powered by Node.js and Express.js.
- **Database**: MongoDB for storing products, orders, and user data.

---

## Tech Stack

- **Frontend**: React, TypeScript, Axios, React Router, Redux (or Context API)
- **Backend**: Node.js, Express.js, TypeScript, JWT, Mongoose
- **Database**: MongoDB
- **Styling**: TailwindCSS / Material-UI / styled-components
- **Tools**: ESLint, Prettier, Git, Postman (for API testing)

---

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- Git

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/shop-management-system.git
   cd shop-management-system
   ```

2. **Set up the Backend**
   - Navigate to the `backend` folder:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `backend` folder and add the following environment variables:
     ```env
     PORT=5000
     MONGO_URI=mongodb://localhost:27017/shopdb
     JWT_SECRET=your_jwt_secret_key
     ```
   - Start the backend server:
     ```bash
     npm run dev
     ```

3. **Set up the Frontend**
   - Navigate to the `frontend` folder:
     ```bash
     cd ../frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `frontend` folder and add the following environment variable:
     ```env
     REACT_APP_API_URL=http://localhost:5000
     ```
   - Start the frontend development server:
     ```bash
     npm start
     ```

4. **Access the Application**
   - Open your browser and go to `http://localhost:3000`.

---

## Folder Structure

### Backend
```
backend/
├── src/
│   ├── controllers/       # Route handlers
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   ├── utils/             # Utility functions
│   ├── config/            # Configuration files
│   ├── types/             # TypeScript types
│   └── app.ts             # Express app setup
├── .env                   # Environment variables
├── package.json
└── tsconfig.json          # TypeScript config
```

### Frontend
```
frontend/
├── public/
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   ├── store/             # Redux store (if using Redux)
│   ├── services/          # API service calls
│   ├── utils/             # Utility functions
│   ├── types/             # TypeScript types
│   ├── App.tsx            # Main app component
│   └── index.tsx          # Entry point
├── .env                   # Environment variables
├── package.json
└── tsconfig.json          # TypeScript config
```

---

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user.
- `POST /api/auth/login` - Login and get JWT token.

### Products
- `GET /api/products` - Get all products.
- `POST /api/products` - Add a new product (Admin only).
- `PUT /api/products/:id` - Update a product (Admin only).
- `DELETE /api/products/:id` - Delete a product (Admin only).

### Orders
- `GET /api/orders` - Get all orders.
- `POST /api/orders` - Create a new order.
- `PUT /api/orders/:id` - Update an order (Admin only).
- `DELETE /api/orders/:id` - Delete an order (Admin only).

---

## Screenshots

![Login Page](screenshots/login.png)
![Product Management](screenshots/products.png)
![Order Management](screenshots/orders.png)

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For any questions or feedback, feel free to reach out:

- **Email**: your-email@example.com
- **GitHub**: [your-username](https://github.com/your-username)
- **LinkedIn**: [Your Name](https://linkedin.com/in/your-profile)

---

Happy coding! 🚀

---

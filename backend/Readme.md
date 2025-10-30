# E-Commerce Cart Backend API

A RESTful API backend service for managing shopping cart functionality in an e-commerce application.



## Features

- Product management
- Cart operations (add, remove)
- Checkout process

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

## API Endpoints

### Products
- `GET /api/products` - Get all products

### Cart
- `GET /api/carts` - Get cart items
- `POST /api/carts/add` - Add item to cart
- `DELETE /api/carts/delete/:id` - Remove item from cart

### Checkout
- `POST /api/checkout` - Process checkout

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with:
```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

4. Run the development server:
```bash
npm run dev
```

## Environment Variables

- `PORT` - Server port (default: 3000)
- `MONGO_URI` - MongoDB connection string

## Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon


## Author

Siddharth Rukadikar
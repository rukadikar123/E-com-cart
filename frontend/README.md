# E-Commerce Cart Frontend

A React-based frontend application for an e-commerce shopping cart system.

## Features

- Product listing with add to cart functionality
- Shopping cart management
- Cart total calculation
- Checkout process 
- Responsive design using Tailwind CSS

## Tech Stack

- React.js
- Tailwind CSS
- Axios for API calls
- React Icons

## Components

- `ProductList` - Displays grid of available products
- `ProductCard` - Individual product display component
- `CartList` - Shows items in shopping cart
- `CartItem` - Individual cart item component

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with:
```
VITE_API_URL=http://localhost:3000/api
```

4. Start the development server:
```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Environment Variables

- `VITE_API_URL` - Backend API base URL

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── ProductList.jsx
│   │   ├── ProductCard.jsx
│   │   ├── CartList.jsx
│   │   └── CartItem.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

## Author

Siddharth Rukadikar
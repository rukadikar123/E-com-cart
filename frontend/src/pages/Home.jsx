import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import CartList from "../components/CartList";
import { FaCartShopping } from "react-icons/fa6";


function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Fetch products & cart
  const fetchProducts = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
    console.log("product data:",res?.data)
    
    setProducts(res?.data?.products);
  };

  const fetchCart = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/carts`);
    setCart(res?.data?.cartItems);
    setTotal(res?.data?.total);

  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  // Cart actions
  const addToCart = async (id) => {
    await axios.post(`${import.meta.env.VITE_API_URL}/carts/add`, { productId: id, qty: 1 });
    fetchCart();
    
  };
x
  const removeFromCart = async (id) => {
    await axios.delete(`${import.meta.env.VITE_API_URL}/carts/delete/${id}`);
  
    
    fetchCart();
  };

  const handleCheckout = async () => {
    const name = prompt("Enter your name:");
    const email = prompt("Enter your email:");
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/checkout`, { name, email });

    alert(
      `Receipt:\nName: ${res.data.receipt.User.name}\nTotal: Rs${
        res.data.receipt.total
      }\nTime: ${new Date(res.data.receipt.timestamp).toLocaleString()}`
    );

    fetchCart();
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">
        🛒 Vibe Mock E-Com
      </h1>

      <ProductList products={products} onAdd={addToCart} />

      <h2 className="text-2xl font-semibold mb-3 mt-20 text-center"><FaCartShopping className="inline pb-1"/> Your Cart</h2>
      <CartList cart={cart} onRemove={removeFromCart} />

      <div className="mt-5 flex justify-between items-center">
        <p className="text-xl font-bold">Total:Rs{total}</p>
        <button
          onClick={handleCheckout}
          disabled={cart?.length === 0}
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 disabled:bg-gray-400"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Home;

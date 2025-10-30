import mongoose from "mongoose";
import dotenv from "dotenv";
import fetch from "node-fetch";
import { Product } from "./models/Product.schema.js";
import { DBConnect } from "./config/DBConnect.js";

dotenv.config();

const seedProducts = async () => {
  await DBConnect()
  await Product.deleteMany();

  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  const formatted = data.slice(0, 10).map((item) => ({
    title: item.title,
    price: item.price,
    description: item.description,
  }));

  await Product.insertMany(formatted);
  console.log(" Seeded DB with Fake Store API products!");
  mongoose.connection.close();
};

seedProducts();

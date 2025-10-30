import { User } from "../models/User.schema.js";

async function getUser() {
  let user = await User.findOne({ email: "mockuser@example.com" });
  if (!user) {
    user = await User.create({ name: "Mock User", email: "mockuser@example.com" });
  }
  return user;
}

export default getUser
"use server"
import dbConnect, { collectionObj } from "@/lib/dbConnect";

export const registerUser = async (userData) => {
  const { name, email, password } = userData;
  if (!email || !password) return;
  const userCollection = dbConnect(collectionObj.userCollection);
  const user = await userCollection.findOne({ email });
  if (user) return;
  const result = await userCollection.insertOne(userData);
  return result;
};

import dbConnect, { collectionObj } from "@/lib/dbConnect";

export const loginUser = async (userData) => {
  const { email, password } = userData;
  if ((!email, !password)) return null;
  const userCollection = dbConnect(collectionObj.userCollection);
  const user = await userCollection.findOne({ email });
  if (!user) return null;
  const isPassword = user.password == password;

  if (!isPassword) return null;

  return user;
};

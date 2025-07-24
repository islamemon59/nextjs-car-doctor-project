import dbConnect, { collectionObj } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const bookingData = await req.json();
  console.log(bookingData);
  const bookingCollection = dbConnect(collectionObj.bookingCollection);
  const result = await bookingCollection.insertOne(bookingData);
  return NextResponse.json(result);
};

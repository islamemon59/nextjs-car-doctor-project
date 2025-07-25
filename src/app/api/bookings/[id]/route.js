import dbConnect, { collectionObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  const bookingCollection = dbConnect(collectionObj.bookingCollection);
  const result = await bookingCollection.findOne(query);
  return NextResponse.json(result);
};

export const PATCH = async (req, { params }) => {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  const body = await req.json();
  const option = {
    upsert: true,
  };
  const updatedDob = {
    $set: {
      ...body,
    },
  };
  const bookingCollection = dbConnect(collectionObj.bookingCollection);
  const result = await bookingCollection.updateOne(query, updatedDob, option);
  revalidatePath("/bookings")
  return NextResponse.json(result);
};

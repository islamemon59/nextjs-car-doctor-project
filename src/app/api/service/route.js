import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionObj } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const session = await getServerSession(authOptions);
    if(session){
        const email = session?.user?.email
        const bookingCollection = dbConnect(collectionObj.bookingCollection);
        const result = await bookingCollection.find({email}).toArray()
        return NextResponse.json(result)
    }

    return NextResponse.json({})
}

export const POST = async (req) => {
  const bookingData = await req.json();
  console.log(bookingData);
  const bookingCollection = dbConnect(collectionObj.bookingCollection);
  const result = await bookingCollection.insertOne(bookingData);
  return NextResponse.json(result);
};

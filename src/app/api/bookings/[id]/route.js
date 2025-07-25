import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  const session = await getServerSession(authOptions);
  const bookingCollection = dbConnect(collectionObj.bookingCollection);
  const result = await bookingCollection.findOne(query);

  const isUserOk = result?.email == session?.user?.email;

  if (isUserOk) {
    return NextResponse.json(result);
  } else {
    return NextResponse.json({ message: "Forbidden Action" }, { status: 403 });
  }
};

export const PATCH = async (req, { params }) => {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  const session = await getServerSession(authOptions);
  const bookingCollection = dbConnect(collectionObj.bookingCollection);

  const getUser = await bookingCollection.findOne(query);

  const isUserOk = getUser?.email == session?.user?.email;

  if (isUserOk) {
    const body = await req.json();
    const option = {
      upsert: true,
    };
    const updatedDob = {
      $set: {
        ...body,
      },
    };
    const result = await bookingCollection.updateOne(query, updatedDob, option);
    revalidatePath("/bookings");
    return NextResponse.json(result);
  } else {
    return NextResponse.json({ message: "Forbidden Access" }, { status: 403 });
  }
};

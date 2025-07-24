import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { id } = await params;
  const serviceCollection = dbConnect(collectionObj.carServiceCollection);
  const data = await serviceCollection.findOne({ _id: new ObjectId(id) });

  return NextResponse.json(data);
};

export const DELETE = async (req, { params }) => {
  const { id } = await params;
  const session = await getServerSession(authOptions);
  console.log("session", session);
  const query = { _id: new ObjectId(id) };
  const bookingCollection = dbConnect(collectionObj.bookingCollection);
  const currentBooking = await bookingCollection.findOne(query);
  const isOwnerOk = session?.user?.email == currentBooking?.email;

  if (isOwnerOk) {
    const result = await bookingCollection.deleteOne(query);
    revalidatePath("/bookings")
    return NextResponse.json(result);
  } else {
    return NextResponse.json(
      { success: false, message: "Forbidden Action" },
      { status: 403 }
    );
  }
};

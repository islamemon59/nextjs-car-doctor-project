import dbConnect, { collectionObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { id } = await params;
  const serviceCollection = dbConnect(collectionObj.carServiceCollection);
  const data = await serviceCollection.findOne({ _id: new ObjectId(id) });

  return NextResponse.json(data)
};

import dbConnect, { collectionObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import React from "react";

const ServiceDetails = async ({ params }) => {
  const { id } = await params;
  const serviceCollection = dbConnect(collectionObj.carServiceCollection);
  const data = await serviceCollection.findOne({ _id: new ObjectId(id) });
  console.log(data);

  return (
    <div className="max-w-7xl mx-auto">
      {id}
      <div className="relative">
        <Image
          src={"/assets/images/checkout/checkout.png"}
          width={1137}
          height={300}
          className="w-full"
          alt="banner"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/10 border-red-500"></div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-8">
          <p>{JSON.stringify(data)}</p>
          <Image src={data.img} width={300} height={300} />
          <p className="text-3xl font-bold">{data.title}</p>
          <p>{data.description}</p>
        </div>
        <div className="col-span-4 p-4">
          <button className="w-full btn bg-[#FF3811] text-white">Checkout</button>
          <p className="text-2xl font-bold text-center">Price : ${data.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

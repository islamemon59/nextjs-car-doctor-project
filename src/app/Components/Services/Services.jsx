import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import dbConnect, { collectionObj } from "@/lib/dbConnect";

const Services = async () => {
  const carServiceItemCollection = dbConnect(
    collectionObj.carServiceCollection
  );
  const data = await carServiceItemCollection.find({}).toArray();
  return (
    <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto">
      {data.map((item) => (
        <div key={item._id} className="col-span-4 p-5 border border-gray-300 rounded-lg">
          <div className="h-52">
            <Image
              src={item.img}
              width={314}
              height={208}
              className="h-full w-full rounded-lg"
            />
          </div>
          <div className="mt-5 flex justify-between items-center">
            <div>
              <p className="text-2xl font-bold text-[#444444]">{item.title}</p>
              <p className="text-xl font-semibold text-[#FF3811]">
                price : ${item.price}
              </p>
            </div>
            <Link href={`/services/${item._id}`}>
              <FaArrowRight className="text-[#FF3811]" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;

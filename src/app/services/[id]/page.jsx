import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`https://nextjs-car-doctor-project.vercel.app/api/service/${id}`);
  const data = await res.json();
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
      <div className="grid grid-cols-12 items-center">
        <div className="col-span-9 mt-6">
          <Image
            src={data.img}
            width={300}
            height={300}
            className="w-full h-80 object-cover"
            alt="image"
          />
          <p className="text-3xl font-bold">{data.title}</p>
          <p>{data.description}</p>
        </div>
        <div className="col-span-3 p-4">
          <Link href={`/checkout/${data._id}`} className="w-full btn bg-[#FF3811] text-white">
            Checkout
          </Link>
          <p className="text-2xl font-bold text-center">
            Price : ${data.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

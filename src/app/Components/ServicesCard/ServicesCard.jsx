import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
const ServicesCard = ({ item }) => {
  return (
    <div className="col-span-4 p-5 border border-gray-300 rounded-lg">
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
        <button>
          <FaArrowRight className="text-[#FF3811]" />
        </button>
      </div>
    </div>
  );
};

export default ServicesCard;

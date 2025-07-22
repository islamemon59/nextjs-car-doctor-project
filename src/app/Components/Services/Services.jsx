import React from "react";
import ServicesCard from "../ServicesCard/ServicesCard";
import dbConnect from "@/lib/dbConnect";

const Services = async () => {
  const carServiceItemCollection = dbConnect("carItems")
  const data = await carServiceItemCollection.find({}).toArray()
  return (
    <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto">
      {data.map((item) => (
        <ServicesCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default Services;

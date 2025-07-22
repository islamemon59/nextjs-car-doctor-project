import React from "react";
import ServicesCard from "../ServicesCard/ServicesCard";

const Services = async () => {
  const res = await fetch("http://localhost:3000/services.json");
  const data = await res.json();
  return (
    <div className="grid grid-cols-12 gap-6">
      {data.map((item) => (
        <ServicesCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default Services;

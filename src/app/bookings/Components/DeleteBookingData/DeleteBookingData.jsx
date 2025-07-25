"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const DeleteBookingData = ({ id }) => {
    const router = useRouter()
  const handleDelete = async (id) => {
    console.log(id);
    const res = await fetch(`https://nextjs-car-doctor-project.vercel.app/api/service/${id}`, {
        method: "DELETE"
    })
    const data = await res.json()
    console.log(data);
    router.refresh()
  };
  return (
    <div>
      <button
        onClick={() => handleDelete(id)}
        className="btn btn-sm btn-outline btn-error"
      >
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default DeleteBookingData;

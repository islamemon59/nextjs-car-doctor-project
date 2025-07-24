import Image from "next/image";
import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const MyBookingsTable = ({ bookings }) => {
  return (
    <div className="overflow-x-auto max-w-6xl mx-auto mt-10">
      <table className="table table-zebra w-full">
        <thead className="bg-base-200 text-base">
          <tr>
            <th>Service Image</th>
            <th>Service Name</th>
            <th>Service Date</th>
            <th>Service Price (৳)</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td>
                <Image
                  src={booking.service_img}
                  alt={booking.service_Name}
                  width={80}
                  height={60}
                  className="rounded-md object-cover"
                />
              </td>
              <td>{booking.service_Name}</td>
              <td>{booking.date}</td>
              <td>${booking.service_Price}</td>
              <td className="flex gap-2 justify-center">
                <button className="btn btn-sm btn-outline btn-primary">
                  <FaEdit />
                </button>
                <button className="btn btn-sm btn-outline btn-error">
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookingsTable;

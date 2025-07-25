import UpdateBookingForm from "@/Components/UpdateBookingForm/UpdateBookingForm";
import { headers } from "next/headers";
import React from "react";

const UpdateForm = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    `https://nextjs-car-doctor-project.vercel.app/api/bookings/${id}`,
    {
      headers: new Headers(await headers()),
    }
  );
  const bookingData = await res.json();
  console.log(bookingData);
  return (
    <div>
      <UpdateBookingForm bookingData={bookingData} />
    </div>
  );
};

export default UpdateForm;

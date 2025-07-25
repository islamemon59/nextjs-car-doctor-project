"use client";

import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const UpdateBookingForm = ({ bookingData }) => {
  const router = useRouter()
  const { data: session } = useSession();
  console.log(session);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const phone = form.phone.value;
    const date = form.date.value;
    const address = form.address.value;

    const updateData = {
      phone,
      date,
      address,
    };


    const res = await fetch(
      `http://localhost:3000/api/bookings/${bookingData?._id}`,
      {
        method: "PATCH",
        body: JSON.stringify(updateData),
      }
    );

    const responseData = await res.json();
    router.push("/bookings")
    console.log(responseData);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Top Banner */}
      <div className="relative rounded-xl overflow-hidden mb-10">
        <Image
          src="https://i.ibb.co/5MvmD2g/88.jpg"
          alt="Checkout Banner"
          width={1200}
          height={300}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white">Check Out</h2>
        </div>
        <div className="absolute bottom-0 right-0 bg-[#FF3811] text-white px-4 py-1 font-medium rounded-tl-lg">
          Home / Checkout
        </div>
      </div>

      {/* Checkout Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-8 md:p-10 rounded-lg shadow-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="label font-semibold">Your Name</label>
            <input
              defaultValue={session?.user?.name}
              readOnly
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label font-semibold">Your Phone</label>
            <input
              defaultValue={bookingData.phone}
              type="tel"
              name="phone"
              placeholder="Your Phone"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label font-semibold">Your Email</label>
            <input
              defaultValue={session?.user?.email}
              readOnly
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label font-semibold">Order Date</label>
            <input
              defaultValue={bookingData.date}
              type="date"
              name="date"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label font-semibold">Amount</label>
            <input
              defaultValue={bookingData?.service_Price}
              readOnly
              type="number"
              name="amount"
              placeholder="Amount (BDT)"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mb-6">
            <label className="label font-semibold">Present Address</label>
            <input
              defaultValue={bookingData.address}
              type="text"
              name="address"
              placeholder="Your Present Address"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn w-full bg-[#FF3811] text-white font-semibold text-lg hover:bg-[#e6350e]"
        >
          Order Confirm
        </button>
      </form>
    </div>
  );
};

export default UpdateBookingForm;

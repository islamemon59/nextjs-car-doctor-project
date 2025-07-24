"use client";
import MyBookingsTable from "@/Components/MyBookingsTable/MyBookingsTable";
import React, { useEffect, useState } from "react";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookingData = async () => {
      const res = await fetch("http://localhost:3000/api/service");
      const data = await res.json();
      setBookings(data);
    };
    fetchBookingData();
  }, []);

  console.log(bookings);

  return (
    <div>
      <MyBookingsTable bookings={bookings} />
    </div>
  );
};

export default MyBookings;

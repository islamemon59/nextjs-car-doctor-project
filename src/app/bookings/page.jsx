import MyBookingsTable from "@/Components/MyBookingsTable/MyBookingsTable";
import { headers } from "next/headers";

    const fetchBookingData = async () => {
      const res = await fetch("http://localhost:3000/api/service", {
        headers: await headers()
      });
      const data = await res.json();
      return data
    };

const MyBookings = async () => {

const bookings = await fetchBookingData()
console.log(bookings);


  return (
    <div>
      <MyBookingsTable bookings={bookings} />
    </div>
  );
};

export default MyBookings;

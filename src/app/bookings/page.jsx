import MyBookingsTable from "@/Components/MyBookingsTable/MyBookingsTable";
import { headers } from "next/headers";

    const fetchBookingData = async () => {
      const res = await fetch("https://nextjs-car-doctor-project.vercel.app/api/service", {
        headers: new Headers(await headers())
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

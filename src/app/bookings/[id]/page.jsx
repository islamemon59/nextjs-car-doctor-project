import UpdateBookingForm from '@/Components/UpdateBookingForm/UpdateBookingForm';
import { headers } from 'next/headers';
import React from 'react';

const UpdateForm = async ({params}) => {
    const {id} = await params;
    const res = await fetch(`http://localhost:3000/api/bookings/${id}`, {
        headers: await headers()
    })
    const bookingData = await res.json();
    console.log(bookingData);
    return (
        <div>
            <UpdateBookingForm bookingData={bookingData} />
        </div>
    );
};

export default UpdateForm;
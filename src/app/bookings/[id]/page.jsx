import UpdateBookingForm from '@/Components/UpdateBookingForm/UpdateBookingForm';
import React from 'react';

const UpdateForm = async ({params}) => {
    const {id} = await params;
    const res = await fetch(`http://localhost:3000/api/bookings/${id}`)
    const bookingData = await res.json();
    return (
        <div>
            <UpdateBookingForm bookingData={bookingData} />
        </div>
    );
};

export default UpdateForm;
import CheckoutForm from '@/Components/CheckoutForm/CheckoutForm';
import React from 'react';

const Checkout = async ({params}) => {
    const {id} = await params;
  const res = await fetch(`http://localhost:3000/api/service/${id}`);
  const data = await res.json();
  console.log(data);
    return (
        <div>
            <p>{JSON.stringify(data)}</p>
            <CheckoutForm userData={data}/>
        </div>
    );
};

export default Checkout;
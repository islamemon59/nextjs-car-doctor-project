import React from 'react';
import Image from "next/image";
const ServicesCard = ({item}) => {
    return (
            <div className='col-span-4'>
                <Image src={item.img} width={314} height={208} className='h-full' />
            </div>
    );
};

export default ServicesCard;
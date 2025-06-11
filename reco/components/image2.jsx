import React from 'react'
import Image from 'next/image';

const Product_card2 = ({ image, altText }) => {
    return (
        <div className='mb-4 '>
            <div className='p-2 rounded-lg '>
                <Image
                    src={image}
                    width={180}
                    height={170}
                    alt={altText}
                    className='common-image rounded-lg object-cover'
                />
            </div>
        </div>
    )
}

export default Product_card2;

import React from 'react';
import Image from 'next/image';

const ProductCard = ({ productImage, productName, price, ratingImage, altText }) => {
    return (
        <div className="flex flex-col items-center gap-3 relative">
            <div className="absolute top-2 right-2 flex flex-col gap-2 z-10">
                <div className=" bg-gray-50 rounded p-1 text-center">
                    <button><span className="text-sm cursor-pointer hover:text-red-500 text-black">♡</span></button>
                </div>
                <div className="bg-gray-50 rounded p-2 shadow-md">
                    <button><span className="text-sm cursor-pointer hover:text-blue-500 text-black">👁</span></button>
                </div>
            </div>
            <div className='bg-[#F5F5F5] p-2'>
                <div className="flex flex-col items-center px-4 py-3">
                    <Image
                        src={productImage}
                        width={130}
                        height={140}
                        alt={altText}
                        className='common-image rounded-lg mb-3'
                    />

                </div>
            </div>
            <p className="text-lg text-black">{productName}</p>
            <p className="text-sm text-orange-800">{price}/- Rs</p>
            <Image
                src={ratingImage}
                width={140}
                height={20}
                alt={`${productName} Rating`}
                className='common-image rounded-lg mb-3'
            />
        </div>
    );
};

export default ProductCard;
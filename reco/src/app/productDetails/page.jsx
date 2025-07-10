'use client'
import React from 'react'
import '../globals.css'
import ProductCard from '../../../components/images'
import Product_card2 from '../../../components/image2';
import Image from 'next/image';
import { useState } from 'react';

const Product = () => {
    const [count, setCount] = useState(1);
    const c1 = (val) => (val < 10 ? "0" + val : val);
    const increase = () => {
        setCount((prev) => prev + 1);
    }
    const decrease = () => {
        setCount((prev) => prev > 1 ? prev - 1 : prev)
    }
    const products2 = [
        {
            image: "/metal1.svg",
            altText: "metals Scrap"
        },
        {
            image: "/metal2.svg",
            altText: "metals Scrap"
        },
        {
            image: "/metal3.svg",
            altText: "metals Scrap"
        },
        {
            image: "/metal4.svg",
            altText: "metals Scrap"
        }
    ]

    const products = [
        {
            productImage: "/ironScrap.svg",
            productName: "Iron Scrap",
            price: "25",
            ratingImage: "/rating.svg",
            altText: "Iron Scrap"
        },
        {
            productImage: "/plasticScrap.svg",
            productName: "Plastic Scrap",
            price: "10",
            ratingImage: "/rating2.svg",
            altText: "Plastic Scrap"
        },
        {
            productImage: "/cardBoard.svg",
            productName: "Card Board Scrap",
            price: "15",
            ratingImage: "/rating2.svg",
            altText: "Card Board Scrap"
        },
        {
            productImage: "/glassScrap.svg",
            productName: "Glass Scrap",
            price: "10",
            ratingImage: "/rating.svg",
            altText: "Glass Scrap"
        }
    ];

    return (
        <>
            <div className='flex bg-white p-4 min-h-screen justify-center items-center '>
                <div className='flex-1 bg-gray-300 gap-6 rounded-3xl min-h-6/12 m-3 items-start px-5 py-6 p-5 '>
                    <div className='flex gap-3'>
                        <div className='flex flex-col items-start gap-0 py-4'>
                            {products2.map((product2, index1) => (
                                <Product_card2
                                    key={index1}
                                    image={product2.image}
                                    altText={product2.altText}
                                />
                            ))}
                        </div>
                        <div className='flex-1 flex gap-3'>
                            <div className='flex-1 m-2'>
                                <div className='p-4 rounded-md mb-6'>
                                    <Image
                                        src='/metal5.svg'
                                        width={500}
                                        height={700}
                                        alt='Metal Scrap'
                                        className='common-image rounded-lg '
                                    />
                                </div>
                            </div>
                            <div className='w-80 p-5 mx-4 flex-1'>
                                <h4 className='text-2xl font-bold text-black mb-2 py-2'>Metal Scraps</h4>
                                <div className='flex items-center mb-4 justify-between'>
                                    <div className='flex items-center'>
                                        <span className='text-yellow-400'>★★★★★</span>
                                        <span className='text-gray-500 ml-2'>(160 Reviews)</span>
                                    </div>
                                </div>
                                <p className='items-center text-1xl font-bold text-black  '>Rs 192.00</p>
                                <p className='text-gray-600 mb-6 leading-relaxed'>
                                    sdkvsdlkvnsliskd bsd lssentls nlskf klsd nsldn slkd
                                    fdksnkld vsd lvmskld nsdl nklsdk nvlksd nl slkd nvlksdn
                                    lksvl lskl slnl sdnlkss vd
                                </p>

                                {/* increment and decrement button*/}
                                <div className='flex items-center gap-4'>
                                    <div className="flex items-center bg-white rounded-md border border-gray-200 w-fit">
                                        <button
                                            onClick={decrease}
                                            className=" cursor-pointer w-12 h-12 border-r border-gray-200 text-black hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-xl font-bold"
                                            disabled={count <= 1}
                                        >
                                            −
                                        </button>
                                        <span className="w-16 h-12 flex items-center justify-center font-bold text-black text-lg bg-white">
                                            {c1(count)}
                                        </span>
                                        <button
                                            onClick={increase}
                                            className=" cursor-pointer w-12 h-12 border-l border-gray-200 bg-red-500 text-white hover:bg-red-600 flex items-center justify-center text-xl font-bold"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button className=' bg-red-400  hover:bg-red-500 cursor-pointer text-white text-bold justify-center items-center py-3 px-2 my-2 p-2 text-sm '>Buy now</button>
                                    <button className=' bg-gray-300 text-2xl hover:bg-gray-500 cursor-pointer text-white text-bold justify-center items-center  '>♡</button>
                                </div>
                                <div>
                                    <Image
                                        src='/delivery.svg'
                                        width={399}
                                        height={180}
                                        alt='Delivery'
                                        className='py-3 px-2 mt-2  '
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* this is product prices list */}
            <div className='bg-white gap-4 p-4 min-h-screen'>
                <p className='text-[#013C5A] text-lg font-medium mb-2'>This Month</p>

                <div className='flex justify-between items-center flex-wrap gap-4'>
                    <h3 className='text-3xl font-bold gradient-text'>
                        Best Value Exchange
                    </h3>
                    <div className='flex-shrink-0'>
                        <button className='text-sm font-medium text-white bg-[#013C5A] px-6 py-2 rounded-full hover:bg-[#015a7a] transition-colors'>
                            View All
                        </button>
                    </div>
                </div>

                {/* product Frame */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-4 mt-5 m-5">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            productImage={product.productImage}
                            productName={product.productName}
                            price={product.price}
                            ratingImage={product.ratingImage}
                            altText={product.altText}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Product;
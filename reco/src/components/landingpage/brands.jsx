import Image from 'next/image'
import React from 'react'

const Brands = () => {
    return (
        <div className="my-12 mx-2 md:mx-8 lg:mx-12">
            <h1 className='fontcolorgradient text-3xl font-bold text-center mb-6'>
                Collaborated Brands
            </h1>
            <div className='bg-[#e6e6e6] rounded-3xl p-6 md:p-8'>
                <div className='flex flex-wrap md:flex-nowrap justify-center items-center gap-4 md:gap-6'>
                    <div className='bg-white rounded-full p-4 md:p-1 flex items-center justify-center w-full md:w-1/5'>
                        <Image
                            src="/landingpage/brand1.svg"
                            alt='Tata Motors'
                            width={150}
                            height={60}
                            className="h-20 w-auto object-contain"
                        />
                    </div>
                    <div className='bg-white rounded-full p-4 md:p-1 flex items-center justify-center w-full md:w-1/5'>
                        <Image
                            src="/landingpage/brand2.svg"
                            alt='Bisleri'
                            width={150}
                            height={60}
                            className=" h-20 w-auto object-contain"
                        />
                    </div>
                    <div className='bg-white rounded-full p-4 md:p-1 flex items-center justify-center w-full md:w-1/5'>
                        <Image
                            src="/landingpage/brand3.svg"
                            alt='Decathlon'
                            width={150}
                            height={60}
                            className="h-20 w-auto object-contain"
                        />
                    </div>
                    <div className='bg-white rounded-full p-4 md:p-1 flex items-center justify-center w-full md:w-1/5'>
                        <Image
                            src="/landingpage/brand4.svg"
                            alt='Kinley'
                            width={150}
                            height={60}
                            className="h-20 w-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brands

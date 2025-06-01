import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ReviveHelps = () => {
    return (
        <div className="py-8 px-6 md:px-12 lg:px-16 bg-[#e3e3e1] rounded-3xl mx-2 md:mx-8 lg:mx-12 my-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-11 lg:mb-6 fontcolorgradient text-center">
                Revive Helps
            </h1>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                <div className='text-black max-w-xl lg:max-w-3xl'>
                    <p className='text-xl md:text-2xl mb-14'>
                        Revive helps you recycle your waste while offering the best exchange rates. We're committed to turning your scrap into value through reliable, high-quality recycling services.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                        <Link href="/download" className='w-2/3 sm:w-auto'>
                            <button className="greenbutton w-full sm:w-auto">
                                View Service
                            </button>
                        </Link>
                        <Link href="/login" className='w-2/3 sm:w-auto'>
                            <button className="bluebutton w-full sm:w-auto">
                                Exchange Scrap
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="hidden w-full md:w-auto mt-6 lg:mt-0 lg:flex justify-center">
                    <Image
                        src="/landingpage/trash.svg"
                        alt='Revive Helps Illustration'
                        width={550}
                        height={550}
                        className="rounded-full"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

export default ReviveHelps

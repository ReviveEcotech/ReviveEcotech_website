import React from 'react'
import Link from 'next/link'

const Prices_header = () => {
  return (
    <section className="bg-[var(--price_header_bg)] w-full sm:w-3/4 md:w-2/3 lg:w-1/2 rounded-2xl p-3 sm:p-4 md:p-5 flex flex-col gap-2 sm:gap-3 md:gap-4 mx-4">
      <h4 className="text-[var(--price_header_heading)] text-sm sm:text-base md:text-lg font-semibold pl-2">
        This month
      </h4>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <h3 className="text-transparent bg-gradient-to-r from-[#013C5A] to-[#79923a] bg-clip-text font-bold text-xl sm:text-2xl md:text-3xl text-left pl-2">
          Best Value Exchange
        </h3>
        <Link href="#">
          <button className="bg-[var(--price_header_heading)] text-white text-sm sm:text-base px-3 sm:px-4 py-1 rounded-lg mr-0 sm:mr-2 ml-2 sm:ml-0 mt-1 sm:mt-0">
            View all
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Prices_header
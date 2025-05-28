import React from 'react'
import Link from 'next/link'

const Prices_header = () => {
  return (
    <section className="bg-[var(--price_header_bg)] w-1/2 rounded-2xl p-5 flex flex-col gap-4">
      <h4 className="text-[var(--price_header_heading)] text-[1rem] font-semibold pl-2">
        This month
      </h4>
      <div className="flex items-center justify-between">
        <h3 className="text-transparent bg-gradient-to-r from-[#013C5A] to-[#79923a] bg-clip-text font-bold text-3xl text-left pl-2">
          Best Value Exchange
        </h3>
        <Link href="#">
          <button className="bg-[var(--price_header_heading)] text-white px-4 py-1 rounded-lg mr-2">
            View all
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Prices_header
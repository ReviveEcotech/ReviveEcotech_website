import React from 'react'
import Image from 'next/image'
import scrap from "../../../../public/prices/scrap.svg"

const Prices_ml_Section = () => {
  return (
    <section className="bg-[black] w-full sm:w-4/5 md:w-3/4 lg:w-1/2 rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 mx-4">
      <div className="flex flex-col sm:flex-row items-center sm:items-center lg:items-start">
        <div className="p-2 sm:p-3 md:p-4">
          <Image
            src={scrap}
            alt="modern scrap being excavated"
            width={400}
            height={250}
            className="rounded-lg w-full sm:w-auto max-w-[150px] md:max-w-[300px] lg:max-w-[400px]"
          />
        </div>
        <div className="flex flex-col flex-1 pl-0 sm:pl-4 md:pl-6 mt-4 sm:mt-0 text-center sm:text-left max-w-full sm:max-w-[60%] md:max-w-[65%] lg:max-w-[70%]">
          <h3 className="text-transparent bg-gradient-to-r from-[#013C5A] to-[#79923a] bg-clip-text font-bold mb-2 md:mb-3 text-xl sm:text-2xl md:text-3xl">
            Never Miss Offers
          </h3>
          <h5 className="text-white mb-1 md:mb-2 text-base sm:text-lg">Bulk Metal Scrap</h5>
          <h6 className="text-white mb-1 md:mb-2 text-sm sm:text-base">10 rs/- kg</h6>
          <p className="text-white text-sm sm:text-base">
            Use code: <span className="bg-[#04AAFF] p-1 sm:p-2 rounded-lg inline-block mt-2 sm:mt-0">Bulk_metal</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Prices_ml_Section
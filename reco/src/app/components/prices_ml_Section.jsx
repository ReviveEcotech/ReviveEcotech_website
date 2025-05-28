import React from 'react'
import Image from 'next/image'
import scrap from "../../../public/prices/scrap.svg"

const Prices_ml_Section = () => {
  return (
    <section className="bg-[black] w-1/2 rounded-2xl p-5">
      <div className="flex items-start">
        <div className="p-2">
          <Image
            src={scrap}
            alt="modern scrap being excavated"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col flex-1 pl-6">
          <h3 className="text-transparent bg-gradient-to-r from-[#013C5A] to-[#79923a] bg-clip-text font-bold mb-2">
            Never Miss Offers
          </h3>
          <h5 className="text-white mb-1">Bulk Metal Scrap</h5>
          <h6 className="text-white mb-1">10 rs/- kg</h6>
          <p className="text-white">
            Use code: <span className="bg-[#04AAFF] p-2 rounded-lg">Bulk_metal</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Prices_ml_Section
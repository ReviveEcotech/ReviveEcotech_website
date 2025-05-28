import React from 'react'
import Prices_header from '../components/prices/prices_header'
import Prices_ml_Section from '../components/prices/prices_ml_Section'

const Prices = () => {
  return (
    <main className="bg-[#023d5b] min-h-screen w-full flex flex-col items-center justify-center py-8 gap-8">
      <h1 className="text-transparent bg-gradient-to-r from-[#013C5A] to-[#79923a] bg-clip-text text-3xl font-bold p-6 text-center">
        Sell Your Recyclable Waste Easily
      </h1>
      <Prices_header />
      <Prices_ml_Section />
    </main>
  )
}

export default Prices
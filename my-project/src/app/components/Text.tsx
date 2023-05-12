import React from 'react'

export default function Text() {
  return (
    <>
    <div className='align-text-bottom absolute inset-0 flex flex-col items-center justify-center text-left'>
      <h1 className='text-4xl sm:text-6xl md:text-8xl lg:text-9xl'>
        Mike <br></br>Delifino
      </h1>
      <h2 className='mr-20 py-4 text-sm sm:text-lg md:text-xl lg:text-2xl'>
        Professional Photographer Of LA
      </h2>
      <div className='py-4'>
      <div className='mr-80  border-2 border-black bg-white  '>
      <button className=' sm:text-base md:text:lg lg:text-xl py-2 px-2 border-black bg-white'>
        Book Now
      </button>
      </div>
      </div>
    </div>
    </>
  )
}

import Link from 'next/link'
import React from 'react'

const HeroBanner = () => {
  return (
    <div className='px-24 py-10 bg-gray-400 rounded relative leading-4 w-full' style={{height:"500px"}}>
      <div>
        <p>
          SMALL TEXT
        </p>
        <h3 className='font-medium leading-tight text-7xl mt-0 mb-6'>
          MID TEXT
        </h3>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="" alt='headphones' className=' absolute top-0 right-52' style={{width:"450px",height:"450px"}}/>
        <Link href='/product/ID'>
          <button className='bg-black text-white mt-10 text-base px-3 py-4 cursor-pointer z-50 rounded-2xl'>
            BUTTON TEXT
          </button>
        </Link>
        <div className='absolute right-24 bottom-11 w-80 flex flex-col'>
          <h5 className=" font-semibold leading-tight text-xl mt-0 mb-3 self-end ">
            Description
          </h5>
          <p className=' font-light text-end'>
            DESC
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
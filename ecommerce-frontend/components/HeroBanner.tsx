/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client'

export type BannerData = {
  _id: string,
  buttonText: string,
  desc: string,
  midText: string,
  smallText: string,
  image: {
    asset: {
      _ref: string,
      _type: string,
    }
  }
  largeText1: string,
  largeText2: string,
  discount: string,
  saleTime: string


}

export type HeroBannerProps = {
  bannerData: BannerData
}

const HeroBanner = ({bannerData}:HeroBannerProps) => {
  return (
    <div className='px-24 py-10 bg-gray-400 rounded relative leading-4 w-full' style={{height:"500px"}}>
      <div>
        <p>
          {bannerData.smallText}
        </p>
        <h3 className='font-medium leading-tight text-7xl mt-0 mb-6'>
          {bannerData.midText}
        </h3>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={urlFor(bannerData.image).url()} alt='headphones' className=' absolute top-0 right-1/4' style={{width:"450px",height:"450px"}}/>
        <Link href='/product/ID'>
          <button className='bg-black text-white mt-10 text-base px-3 py-4 cursor-pointer z-50 rounded-2xl'>
            {bannerData.buttonText}
          </button>
        </Link>
        <div className='absolute right-24 bottom-11 w-80 flex flex-col'>
          <h5 className=" font-semibold leading-tight text-xl mt-0 mb-3 self-end ">
            {bannerData.largeText1}
          </h5>
          <p className=' font-light text-end'>
            {bannerData.largeText2}
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
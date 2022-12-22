import React from 'react'
import {Product, FooterBanner, HeroBanner, Footer} from '../components'
import {client} from '../lib/client'



const Home = ({products,bannerData}:any) => {
  return (
    <>
      <HeroBanner bannerData={bannerData.length && bannerData[0]}/>
      {console.log(bannerData)}
      {/* {console.log(products)} */}
      

      <div className='text-center my-4'>
        <h2 className='font-bold leading-tight text-5xl mt-0 mb-1'>
          Best sellers
        </h2>
        <p className='text-sm text-gray-600'>
          Variations
        </p>
      </div>

      <div className='container px-5 py-2 mx-auto lg:pt-12 lg:px-32'>
        <div className='flex flex-wrap -m-1 md:-m-2'>
          {
            ['product1', 'product2', 'product3'].map((product) => (
              <div key={product} className='flex flex-wrap w-1/3'>
                <h3 className='font-medium leading-tight text-3xl mt-0 mb-2'>
                  {product}
                </h3>
              </div>
            ))
          }
        </div>
      </div>

      <FooterBanner/>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "product"]`
  const products = await client.fetch(query)

  const bannerQuery = `*[_type == "banner"]`
  const banners = await client.fetch(bannerQuery)

  return {
    props: {
      products,
      bannerData: banners
    }
}
}

export default Home
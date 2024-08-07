import Image from 'next/image'
import React from 'react'
import Card1 from "@/components/assets/photos/card1.png"
import Card2 from "@/components/assets/photos/card2.png"
import Card3 from "@/components/assets/photos/card3.png"
import Card4 from "@/components/assets/photos/card4.png"

const TrustedCardSection = () => {
  return (
    <div className='mt-10'>

          <div>


              <div className=' p-6 lg:px-14  '>
                <h2 className='text-center text-DarkGray sm:text-5xl text-3xl font-bold md:leading-[1.20] leading-none'>
                  Trusted by thousands <br /> of top DTC 
                  <span 
                  className='text-green font-covered_by_grace font-medium'>brands.
                  </span>
                </h2>
                <div className=' justify-between items-center md:mt-20 mt-10 gap-x-5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2'>
                  <Image src={Card1} alt='Trusted Iamges' className='w-60 mt-10  lg:mt-0 hover:scale-110 duration-500' />
                  <Image src={Card2} alt='Trusted Iamges' className='w-60 mt-10  lg:mt-0 hover:scale-110 duration-500' />
                  <Image src={Card3} alt='Trusted Iamges' className='w-60 mt-10  lg:mt-0 hover:scale-110 duration-500' />
                  <Image src={Card2} alt='Trusted Iamges' className='w-60 mt-10  lg:mt-0 hover:scale-110 duration-500' />
                </div>
              </div>


          </div>

    </div>
  )
}

export default TrustedCardSection
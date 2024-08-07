import Image from 'next/image'
import BrandCard1 from "@/components/assets/photos/BrandCard1.png"
import BrandCard2 from "@/components/assets/photos/BrandCard2.png"
import BrandCard3 from "@/components/assets/photos/BrandCard3.png"
import BrandCard4 from "@/components/assets/photos/BrandCard4.png"
import BrandCard5 from "@/components/assets/photos/BrandCard5.png"
import BrandCard6 from "@/components/assets/photos/BrandCard6.png"
import BrandCard7 from "@/components/assets/photos/BrandCard7.jpg"
import BrandCard8 from "@/components/assets/photos/BrandCard8.jpg"
import BrandCardsComponent from '../shared/BrandCardsComponent'

const BrandNeedsSection = () => {
  return (
    <div className='mt-20 mb-20'>

        <div className=' p-6 lg:px-14'>

                <div className='flex justify-center '>
                    <h2  className=" text-DarkGray sm:text-5xl text-3xl 
                        font-bold  leading-none max-w-3xl text-center">
                        Everything your brand needs to <br />
                        <span  className="text-green font-covered_by_grace font-medium px-2">
                        make your brand unforgettable</span>
                    </h2>
                </div>

                 <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-x-5 '>

                        <BrandCardsComponent 
                           className='bg-[#E0F8F2] '
                           BrandImage={{src:BrandCard1,alt:BrandCard1,className: ""}}
                            heading1='Plug-and-play with' 
                            heading2='your stack'
                            paragraph='Native integrations provide seamless segmentation, automation & tracking. No clunky spreadsheets.'
                        />
                        <BrandCardsComponent 
                        className='bg-[#E0F8F2] '
                           BrandImage={{src:BrandCard2,alt:BrandCard2,}}
                            heading1='Run campaigns' 
                            heading2='on autopilot'
                            paragraph='Ink profits while you sleep: Just set it and forget it.'
                        />
                        <BrandCardsComponent 
                        className='bg-[#EEECFF] '
                           BrandImage={{src:BrandCard3,alt:BrandCard3,}}
                            heading1='Real-time ROI dashboard' 
                            heading2=''
                            paragraph='Track performance of every postcard by customer or discount code. Your CFO will love it.'
                        />
                        <BrandCardsComponent 
                        className='bg-[#D9F2F7] '
                           BrandImage={{src:BrandCard4,alt:BrandCard4,}}
                            heading1='Deliver WOW with *real*' 
                            heading2='handwritten cards'
                            paragraph='Our proprietary robots use real pens and ink for an unforgettable VIP touch.'
                        />
             
                      <BrandCardsComponent 
                        className='bg-[#FAEDED] '
                           BrandImage={{src:BrandCard5,alt:BrandCard5,}}
                            heading1='Predictable pricing' 
                            heading2=''
                            paragraph='Unlike CPCs, postage rates dont change based on competition or who youre targeting.'
                        />
                        <BrandCardsComponent 
                        className='bg-[#D9F2F7] '
                           BrandImage={{src:BrandCard6,alt:BrandCard6,}}
                            heading1='Complimentary' 
                            heading2='concierge service'
                            paragraph='DTC is in our DNA. Our pros will build your strategy and custom designs using battle-tested best practices.'
                        />
                        <BrandCardsComponent 
                        className='bg-[##EEECFF] '
                           BrandImage={{src:BrandCard7,alt:BrandCard7,}}
                            heading1='Website Design Consulting' 
                            heading2='Presentation'
                            paragraph='n the dynamic sector of website design, consulting is pivotal. With our vividly illustrated and user-friendly template for Google Slides and PowerPoint,'
                        />
                        <BrandCardsComponent 
                        className='bg-[#D9F2F7] '
                           BrandImage={{src:BrandCard8,alt:BrandCard8,}}
                            heading1='Business bar graph chart' 
                            heading2='concierge service'
                            paragraph='DTC is in our DNA. Our pros will build your strategy and custom designs using battle-tested best practices.'
                        />

                </div>   

        </div>

    </div>
  )
}

export default BrandNeedsSection
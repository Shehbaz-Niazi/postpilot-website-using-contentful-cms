import PostCard1 from "@/components/assets/photos/PostcardPic1.png"
import PostCard2 from "@/components/assets/photos/PostcardPic2.png"
import PostCard3 from "@/components/assets/photos/PostcardPic3.png"
import PostCard4 from "@/components/assets/photos/PostcardPic4.webp"
import Image from "next/image"

const LatestTrendsSection = () => {
  return (
    <div className='mt-5 '>

    <div className=" p-6 lg:px-14 w-full">

            <div className='flex justify-center '>
                <h2 className="max-w-xl lg:text-5xl  pt-10 text-4xl  font-bold">
                    Latest trends & 
            <span className="text-green font-covered_by_grace font-medium px-2">
                    insights</span></h2>
            </div>

            <div className="mt-20">
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 justify-between">
                    <div>
                        <Image src={PostCard1} alt="PostCard1" className="w-96 md:mt-0 mt-5"/>
                        <h4 className="md:text-2xl text-xl font-bold max-w-sm mt-5">
                            3 Low-Cost Campaigns <br /> You Must Run to Win BFCM</h4>
                    </div>
                    <div>
                        <Image src={PostCard2} alt="PostCard2" className="w-96 md:mt-0 mt-5"/>
                        <h4 className="md:text-2xl text-xl font-bold max-w-sm mt-5">
                        Postcard Marketing: The Definitive Guide to High ROI [2022]</h4>
                    </div>
                    <div>
                        <Image src={PostCard3} alt="PostCard3" className="w-96 md:mt-0 mt-5"/>
                        <h4 className="md:text-2xl text-xl font-bold max-w-sm mt-5">
                        The Ultimate Guide to Thank You Notes for Ecommerce</h4>
                    </div>
                 
                </div>
            </div>

    </div>

    </div>
  )
}

export default LatestTrendsSection
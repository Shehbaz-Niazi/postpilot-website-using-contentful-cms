import Image from "next/image"
import ButtonComponent from "../shared/Button"
import StarSvg from "@/components/assets/photos/starsvg.png"
import HandCard from "@/components/assets/photos/HandCard.png"


const TryPostPilotRiskFreeSection = () => {
  return (
    <div className="bg-orange mt-14">

        <div className="px-6   lg:px-14 flex md:flex-row flex-col justify-center items-center">

            <div className="">
                <h2 className="max-w-xl lg:text-7xl md:text-5xl pt-10 text-4xl  font-bold  text-white">
                    Try PostPilot Risk-Free</h2>
                <p className="mt-5 text-lg  text-white">
                    No contracts. No commitments. Guaranteed results.*</p>
                
            <div className="flex md:items-center  gap-x-10 md:flex-row flex-col   ">
                <div className="mt-10">
                    <ButtonComponent title="Get Started" className="bg-white text-black border-2 md:px-14 md:py-4  border-black font-Inter"/>
                </div>
                <div className="mt-8">
                           <div className="flex ">
                             {
                                Array.from({length:5}).map((item,index)=>{
                                  return(
                                    <Image key={index} src={StarSvg} alt="Star SVG" className="w-6 h-6"/>
                                  )
                                })
                              }
                          </div>
                              <span className="text-sm text-white ">
                                5.0 Shopify Rating
                              </span>
                              
                           </div>
            <div>
                    
                </div>
                </div>
                <p className="mt-10 text-white text-sm ">
                    * for qualified brands with over $1m annual Shopify revenue.</p>
            </div>


            <div>
                <Image src={HandCard} alt="HandCard" className="w-[580px] md:mt-0 mt-10"/>
            </div>

        </div>

    </div>
  )
}

export default TryPostPilotRiskFreeSection
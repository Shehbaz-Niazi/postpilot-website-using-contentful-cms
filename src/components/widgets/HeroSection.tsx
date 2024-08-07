import Image from "next/image"
import ButtonComponent from "../shared/Button"
import starSvg from "@/components/assets/photos/starsvg.png"
import HeroCardImage from "@/components/assets/photos/HeroCardImage.png"

const HeroSection = () => {
  const numberOfStars:number = 5;
  return (
    <div className="bg-sectionBg">

        <div className="flex sm:flex-row flex-col  justify-between items-center">

                 {/* Left Side */}
                    <div className=" max-w-5xl items-center justify-between p-6 lg:px-14  ">
                        <h1 className="max-w-3xl lg:text-7xl md:text-5xl  text-4xl  font-bold leading-[1.10] text-DarkGray">
                          Meet your <br /> <span className="font-covered_by_grace text-green font-medium">favorite</span> new (old) marketing channel.
                        </h1>
                        <p className="mt-6 max-w-md text-textLightGray">
                          Remarkable results. Easier than email. Postcard marketing reinvented for modern ecommerce.
                        </p>


                       <div className="flex gap-x-10 mt-10 md:flex-row flex-col">
                          <div>
                            <ButtonComponent title="TRY IT RISK-FREE" className="bg-orange text-white px-12 py-3"/>
                          </div>

                          <div>
                           <div className="flex md:mt-0 mt-8">
                             {
                                Array.from({length:numberOfStars}).map((item,index)=>{
                                  return(
                                    <Image key={index} src={starSvg} alt="Star SVG" className="w-6 h-6"/>
                                  )
                                })
                              }
                          </div>
                              <span className="text-sm">
                                5.0 Shopify Rating
                              </span>
                              
                           </div>
                       </div>




                    </div>
                 {/* Left Side */}






                 {/* Right Side */}
                      <div>

                          <div className="">
                              <Image src={HeroCardImage} alt="Hero Card Image"
                              className="lg:max-w-md md:max-w-sm max-w-xs mt-5"
                              />
                          </div>
                          <div>
                          </div>

                      </div>
                 {/* Right Side */}

        </div>

    </div>
  )
}

export default HeroSection
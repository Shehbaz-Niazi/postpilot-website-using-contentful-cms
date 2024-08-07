import emailRatingPic from "@/components/assets/photos/emailRatingPic.png"
import Image from "next/image"

const DirectMailSection = () => {
  return (
    <div className='md:mt-20 mt-10 bg-[#F3FAFA]'>

            <div className="p-6 lg:px-14">

            <h2 className='text-center sm:text-5xl text-3xl text-DarkGray font-bold md:leading-[1.20] leading-none'>
            Why use direct mail? <br /> It
                  <span 
                  className='text-green px-2 font-covered_by_grace font-medium'>works
                  </span>
                   like crazy.
                </h2>

                <div className="grid sm:grid-cols-3 grid-cols-1  mt-20 justify-evenly   items-center gap-x-5">
                   <div className="" >
                        <h2 className="text-5xl  font-bold flex flex-col items-center">
                            28X
                        </h2>
                        <p className="text-center text-xs">
                            Higher response rate than email <br /> & digital
                        </p>
                   </div>
                   <div className="flex flex-col justify-center items-center sm:mt-0 mt-10">
                        <Image src={emailRatingPic} alt="Image Rating Email" className="w-52"/>
                        <p className="text-center text-xs mt-1">
                        Your messages get read
                       </p>
                   </div>
                   <div className="sm:mt-0 mt-10" >
                        <h2 className="text-5xl  font-bold flex flex-col items-center">
                            17 Days
                        </h2>
                        <p  className="text-center text-xs mt-1">
                            Lifespan of a postcard vs. <br /> seconds for email or SMS
                        </p>
                   </div>
                </div>

            </div>

    </div>
  )
}

export default DirectMailSection



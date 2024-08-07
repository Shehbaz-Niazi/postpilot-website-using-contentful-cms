import EcoLabel from "@/components/assets/photos/EcoLabel.png"
import inboxImage from "@/components/assets/photos/inboxImage.png"
import Logo from "@/components/assets/photos/logo.png"
import Image from "next/image"
import ButtonComponent from "../shared/Button"

const Footer = () => {
  return (
    <div className="mt-20 mb-4">

        <div className="px-6   lg:px-14 ">

            <div className="grid md:grid-cols-4 sm:grid-cols-2 space-x-5">
                <div>
                    <Image src={EcoLabel} alt="EcoLabel" className="w-24"/>
                    <p className="text-xs max-w-60 mt-8">
                        Our paper is sourced from FSC-certified mills. We plant enough trees to more 
                        than double our paper usage.</p>
                </div>
                <div className="mt-10">
                    <h2 className="text-sm font-semibold">COMPANY</h2>
                    <div className="mt-5">
                        <ul className="space-y-3">
                            <li className="text-sm font-medium">About Us</li>
                            <li className="text-sm font-medium">Partner Programe</li>
                            <li className="text-sm font-medium">Career</li>
                            <li className="text-sm font-medium">Contact Us</li>
                            <li className="text-sm font-medium">Privacy Policy</li>
                        </ul>
                    </div>
                   
                </div>
                <div>
                    <div className="mt-10">
                        <ul className="space-y-3">
                            <li  className="text-sm font-medium">Pricing</li>
                            <li  className="text-sm font-medium">Reviews</li>
                            <li  className="text-sm font-medium">Direct Mail Academy</li>
                            <li  className="text-sm font-medium">Success stories</li>
                            <li  className="text-sm font-medium">Terms & conditions</li>
                        </ul>
                    </div>
                   
                </div>
                <div className="mt-10">
                    <h2 className="text-sm font-semibold">CONTACT</h2>
                    <div className="mt-5 flex gap-x-3 items-center">
                    <Image src={inboxImage} alt="inboxImage" className="w-6"/>
                       <span className="text-sm font-medium">abrarkan71000@gmail.com</span>
                    </div>
                    <p className="mt-8 text-sm font-medium">
                    Developed by Shehbaz Niazi ❤️, Frontend Developer from Pakistan.</p>
                   
                </div>
                
                
            </div>


            <div className=" border-t-2 border-t-sectionBg mt-10">

                   <div className="flex md:flex-row flex-col items-center justify-between ">
                        <div className="">
                        <Image src={Logo} alt="Logo" className="w-32 pt-10"/>
                        <p className="text-sm text-RedishColor mt-2">© 2022 PostPilot, Inc. All rights reserved.</p>
                        </div>
                        <div className="space-x-4  md:mt-0 mt-10 ">
                        <ButtonComponent title="Login" className="px-6 py-2 bg-white border-2 border-black text-black"/>
                        <ButtonComponent title="Sign Up"  className="px-10 py-2 text-white bg-orange border-2  md:mt-0 mt-3"/> 
                        </div>
                 </div>

            </div>
           

        </div>

    </div>
  )
}

export default Footer
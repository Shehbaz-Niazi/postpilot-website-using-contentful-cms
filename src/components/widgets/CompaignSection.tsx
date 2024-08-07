import obviCompaignCard from "@/components/assets/photos/obviCompaignCard.png";
import obvi from "@/components/assets/photos/obvi.png";
import BulletProof from "@/components/assets/photos/BulletProof.png";
import Boom from "@/components/assets/photos/Boom.png";
import OrbitBaby from "@/components/assets/photos/OrbitBaby.png";
import Image from "next/image";
import ButtonComponent from "../shared/Button";
const CompaignSection = () => {
  return (
    <div className="mt-10 ">
      <div className="flex md:flex-row flex-col-reverse  p-6 lg:px-14 w-full lg:gap-x-16 md:gap-x-5">
        <div className="flex md:mt-0 mt-16">
          <Image
            src={obviCompaignCard}
            alt="obviCompaignCard"
            className="w-[500px] md:block hidden"
          />
        </div>

        <div>
          <h2
            className=" text-DarkGray md:text-3xl lg:text-5xl text-3xl 
                font-bold  leading-none max-w-xl "
          >
            How
            <span className="text-green font-covered_by_grace font-medium px-2">
              Obvi
            </span>{" "}
            Drives <br /> Profits with Hands-Off Postcard Campaigns
          </h2>
          <p className="text-md text-RedishColor mt-10 max-w-md">
            The 🚀 supplements brand wanted to offset high ad costs and reach
            dormant customers. They scored 1000%+ ROIs.
          </p>
          <div className="flex md:flex-row flex-col md:gap-y-0 gap-y-5 mt-14 justify-between max-w-lg gap-x-5">
            <div>
              <h4 className="md:text-3xl text-xl font-bold text-DarkGray ">
                1468%
              </h4>
              <p>ROI</p>
            </div>
            <div>
              <h4 className="md:text-3xl text-xl font-bold text-DarkGray ">
                8.59%%
              </h4>
              <p>Conversion Rate</p>
            </div>
            <div>
              <h4 className="md:text-3xl text-xl font-bold text-DarkGray ">
                $73,457%
              </h4>
              <p>Sales Generated</p>
            </div>
          </div>
          <ButtonComponent
            title="Read Case study"
            className="mt-10 px-10 py-3  text-black bg-white border-2 border-black "
          />

          <div className="flex md:flex-row flex-col justify-between mt-10 items-center md:gap-y-0 gap-y-5">
            <div className="border-b-2 border-b-green pb-4">
              <Image src={obvi} alt="obvi" className="w-14" />
            </div>
            <div>
              <Image src={BulletProof} alt="BulletProof" className="w-32" />
            </div>
            <div>
              <Image src={Boom} alt="Boom" className="w-24" />
            </div>
            <div>
              <Image src={OrbitBaby} alt="OrbitBaby" className="w-32" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaignSection;

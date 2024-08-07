import Image from "next/image";
import BrandCard1 from "@/components/assets/photos/BrandCard1.png";
import { BrandCardImage, BrandCards } from "./Types";

const BrandCardsComponent: React.FC<BrandCards> = ({
  heading1,
  heading2,
  paragraph,
  BrandImage,
  className
}) => {

  let defaultColor: string = `max-w-[300px] h-[400px] hover:scale-110 duration-500  bg-[#FDF3EA] pb-10  p-8 mt-10  rounded-xl flex flex-col items-center justify-center`

  return (
    <div>
      <div
        className={`${defaultColor} ${className}`}
      >
        <Image
          src={BrandImage.src}
          alt={BrandImage.alt}
          className={`w-60 h-[150px]  ${BrandImage.className || ""}`}
        />
        <h4 className="text-xl font-bold text-center mt-6">
          {`${heading1}`} <br /> {`${heading2}`}
          <br />
        </h4>
        <p className="text-xs text-center mt-3">{paragraph}</p>
      </div>
    </div>
  );
};

export default BrandCardsComponent;

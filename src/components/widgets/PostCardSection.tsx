import Image from "next/image";
import CommaImage from "@/components/assets/photos/commaPic.png";
import obviImg from "@/components/assets/photos/obvi.png";
import PostCardComponent from "../shared/PostCardComponent";
import Card2Img from "@/components/assets/photos/card2Img.png";
import Card3Img from "@/components/assets/photos/Card3Img.png";
import ButtonComponent from "../shared/Button";

const PostCardSection = () => {
  return (
    <div className="mt-10  w-full  bg-[#FDF3EA]">
      <div className="p-6 lg:px-14 w-full">
        <div className="  flex items-center justify-center">
          <h2
            className="text-center text-DarkGray sm:text-5xl text-3xl 
                        font-bold md:leading-[1.20] leading-none max-w-2xl"
          >
            PostPilot makes it a
            <span className="text-green font-covered_by_grace font-medium px-2">
              cinch
            </span>
            to send personalized, profit-generating postcards.
          </h2>
        </div>

        <div className="mt-20">
          <PostCardComponent
            headngH2="acquisition & retention"
            italicTitile="Powerful"
            paragraph="Send one-off or triggered campaigns to customers & prospects. Target email leads with MailMatch™."
            commaImage={{ src: CommaImage, alt: CommaImage }}
            boxPragraph="Its like Klaviyo for direct mail. The results are absolutely insane."
            obviImg={{ src: obviImg, alt: obviImg }}
            imageAuthor="Ash Melwani, CMO"
          />
        </div>

        <div className="mt-20 flex justify-end">
          <PostCardComponent
            headngH2="against iOS updates, jacked-up CPCs & spam folders"
            italicTitile="Fight back"
            paragraph="Deliver your message to all of your customers — for less than the cost of a click."
            commaImage={{ src: CommaImage, alt: CommaImage }}
            boxPragraph="PostPilot is our new weapon against sinking email engagement and rising PPC costs. The results and ROI have been outstanding. Its now one of our core marketing channels to increase acquisition & LTV."
            obviImg={{ src: Card2Img, alt: Card2Img }}
            imageAuthor="Leah Keith, GM"
          />
        </div>

        <div className="mt-20">
          <PostCardComponent
            headngH2="Done for"
            italicTitile2="you"
            paragraph="From design & strategy to stamp-licking, our ecom experts help you every step of the way."
            commaImage={{ src: CommaImage, alt: CommaImage }}
            boxPragraph="The team is so knowledgeable and beyond helpful. I’m blown away by their communication, detail, and attentiveness and always feel like they have our best interest in mind. Definitely worth a try."
            obviImg={{ src: Card3Img, alt: Card3Img}}
            imageAuthor="Holly Davies, Marketing Director"
          />
        </div>

    <div className="mt-10">
      <ButtonComponent title="Try it RISK-free" className="px-10 py-3 "/>
    </div>

      </div>
    </div>
  );
};

export default PostCardSection;

//

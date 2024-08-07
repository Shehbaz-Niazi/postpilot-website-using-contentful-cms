import Image from "next/image";

import React from "react";
import { PostCardProps } from "./Types";

const PostCardComponent: React.FC<PostCardProps> = ({
  obviImg,
  commaImage,
  boxPragraph,
  headngH2,
  italicTitile,
  italicTitile2,
  paragraph,
  imageAuthor
}) => {
  return (
    <div>
      <div className="">
        <h2
          className=" text-DarkGray sm:text-5xl text-3xl 
                        font-bold md:leading-[] leading-none max-w-lg"
        >
          <span className="text-green font-covered_by_grace font-medium px-2">
            {italicTitile}
          </span>
          {headngH2}

          <span className="text-green font-covered_by_grace font-medium ">
            {italicTitile2}
          </span>
        </h2>

        <p className="mt-6 max-w-md ">{paragraph}</p>

        <div className="max-w-xl border-2 border-RedishColor mt-10 relative rounded-2xl p-8 ">
          <Image
            src={commaImage.src}
            alt={commaImage.alt}
            className={`w-12 absolute -top-4 ${commaImage.className}`}
          />
          <p className=" italic ">{boxPragraph}</p>
          <div className="flex justify-between items-center mt-6">
            <p className="text-xs text-RedishColor">{imageAuthor}</p>
            <Image
              src={obviImg.src}
              alt={obviImg.alt}
              className={`w-14 ${obviImg.className}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCardComponent;

// className="w-12 absolute -top-4"
//

"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { DragCardProps } from "../shared/Types";
import ButtonComponent from "../shared/Button";
import Image from "next/image";
import MenImage from "@/components/assets/photos/men.jpg";
import MenImage2 from "@/components/assets/photos/men2.jpg";
import MenImage3 from "@/components/assets/photos/men2.jpg";
import WomenImage from "@/components/assets/photos/women.jpg";
import WomenImage2 from "@/components/assets/photos/women2.jpg";
import WomenImage3 from "@/components/assets/photos/women3.jpg";

export const DragCards = () => {
  return (
    <section className="relative mt-20 grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950 p-8 bg-[#c6fcfc]">
      <h2 className="relative z-0 text-[5vw] font-black text-green md:text-[120px] text-center ">
        <span className="text-green md:text-[180px] text-5xl font-covered_by_grace font-medium pr-5">
          Our
        </span>
        User Reviews 🔥
      </h2>

      <div className="mt-10 flex justify-center">
        <ButtonComponent title="Try it RISK-free" className="px-12 py-3 text-white bg-orange"/>
      </div>

      <Cards />
    </section>
  );
};

const reviews = [
  {
    src: MenImage,
    alt: "John Doe",
    name: "John Doe",
    message:
      "This website is fantastic! The user interface is very intuitive and easy to navigate. I found what I was looking for quickly and efficiently.",
    stars: 1,
    rotate: "6deg",
    top: "20%",
    left: "25%",
    className: "w-48 md:w-56",
  },
  {
    src: MenImage2,
    alt: "Jane Smith",
    name: "Jane Smith",
    message:
      "Great experience! The support team was very helpful and resolved my issue in no time. Highly recommend this service.",
    stars: 5,
    rotate: "12deg",
    top: "45%",
    left: "60%",
    className: "w-48 md:w-48",
  },
  {
    src: MenImage3,
    alt: "Alex Johnson",
    name: "Alex Johnson",
    message:
      "Good service but there's room for improvement. Some sections of the site are a bit slow to load.",
    stars: 4,
    rotate: "-6deg",
    top: "20%",
    left: "40%",
    className: "w-48 md:w-80",
  },
  {
    src: WomenImage,
    alt: "Emily Davis",
    name: "Emily Davis",
    message:
      "I had a decent experience, but I think the design could be more modern. Still, it gets the job done.",
    stars: 3,
    rotate: "8deg",
    top: "50%",
    left: "40%",
    className: "w-48 md:w-72",
  },
  {
    src: WomenImage2,
    alt: "Michael Brown",
    name: "Michael Brown",
    message:
      "Not satisfied with the service. The site crashed several times while I was using it. Needs improvement.",
    stars: 2,
    rotate: "18deg",
    top: "20%",
    left: "65%",
    className: "w-48 md:w-64",
  },
  {
    src: WomenImage3,
    alt: "Sarah Wilson",
    name: "Sarah Wilson",
    message:
      "Exceptional! The best online experience I've had in a long time. Everything works flawlessly.",
    stars: 5,
    rotate: "-3deg",
    top: "35%",
    left: "55%",
    className: "w-48 md:w-48",
  },
];

const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      {reviews.map((review, index) => (
        <Card
          key={index}
          containerRef={containerRef}
          src={review.src}
          alt={review.alt}
          name={review.name}
          message={review.message}
          stars={review.stars}
          rotate={review.rotate}
          top={review.top}
          left={review.left}
          className={review.className}
        />
      ))}
    </div>
  );
};

const Card: React.FC<DragCardProps> = ({
  containerRef,
  src,
  alt,
  name,
  message,
  stars,
  top,
  left,
  rotate,
  className,
}) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.div
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute bg-white p-4 rounded-lg shadow-lg",
        className
      )}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    >
      <Image
        src={src}
        alt={alt}
        className="w-16 h-16 rounded-full mx-auto mb-4"
      />
      <h3 className="text-lg font-bold text-center mb-2">{name}</h3>
      <p className="text-sm text-center mb-2">{message}</p>
      <div className="flex justify-center">
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            className={i < stars ? "text-yellow-500" : "text-gray-300"}
          >
            ⭐
          </span>
        ))}
      </div>
    </motion.div>
  );
};

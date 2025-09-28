"use client";
import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import Image from "next/image";

const brans = [
  { image: "/logo-main.svg" },
  { image: "/MA-LOGO.svg" },
  { image: "/root-care.png" },
  { image: "/aj-dental.svg" },
  { image: "/logo-main.svg" },
  { image: "/MA-LOGO.svg" },
  { image: "/root-care.png" },
  { image: "/aj-dental.svg" },
];

const BrandCarousel = () => {
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 4000,
      animationTimingFunc: "linear",
      perView: 6,
      breakpoints: {
        1024: {
          perView: 5
        },
        640: {
          perView: 2,
          gap: 36
        }
      }
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-[1700px] overflow-hidden mx-auto">
        <div className="glide-09 relative w-full">
          <div data-glide-el="track" className="overflow-hidden">
            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-1">
              {brans.map((item, index) => (
                <li key={index} className="flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt="Image"
                    width={130}
                    height={120}
                    className=" max-w-full h-auto"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;

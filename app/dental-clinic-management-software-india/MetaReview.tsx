"use client";
import React from "react";
import { Image } from "@nextui-org/image";
import Link from "next/link";

const ratingStar = [
  { image: "/Dentobees-Reviews-Rating.svg" },
  { image: "/Dentobees-Reviews-Rating.svg" },
  { image: "/Dentobees-Reviews-Rating.svg" },
  { image: "/Dentobees-Reviews-Rating.svg" },
  { image: "/Dentobees-Reviews-Rating.svg" }
];

const MetaReview = () => {
  return (
    <div className="relative overflow-hidden z-0 bg-[#1C876A]">
      <div className="absolute -z-10 Dentobees-Reviews-Background"></div>
      <div className="Common-padding py-6 flex gap-6 items-center">
        <div className="p-3 md:p-5 lg:p-6 flex flex-col items-center bg-[#FFFFFF] rounded-[14px]">
          <p className="font-extrabold text-[30px] lg:text-[42px] leading-[36.72px] lg:leading-[48.72px] tracking-[-0.04em] bg-gradient-to-r from-[#66B48D] via-[#08B038] to-[#332F2F] bg-clip-text text-transparent whitespace-nowrap animate-gradient">
            5.0
          </p>
          <p className="font-normal Normal-text text-[#6A6565] whitespace-nowrap">
            out of 5
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 sm:items-center">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2.5 items-center">
              {ratingStar.map((item, index) => (
                <div key={index} className="shrink-0">
                  <Image src={item.image} alt="Rating" width={24} />
                </div>
              ))}
            </div>
            <p className="font-normal Normal-text text-[#FFFFFF]">
              Based on 100+ global reviews
            </p>
          </div>
          <div>
            <Link
              href="/dental-clinic-management-software-india/enquiry"
              className="w-fit py-2 px-4 Meta-green-button"
            >
              <div className="shrink-0">
                <Image
                  src="/Meta-Dentobees-Playbutton-Image.svg"
                  alt="Watch Demo Icon"
                  width={44}
                  height={28}
                />
              </div>
              <p className="text-left">
                <span className="font-medium">Click to</span>{" "}
                <span className="font-bold underline">Watch Demo</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaReview;

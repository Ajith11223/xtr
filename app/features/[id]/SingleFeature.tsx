"use client";
import React from "react";
import Image from "next/image";

const SingleFeature = () => {
  return (
    <div className="relative overflow-hidden z-0 bg-white">
      <div className="absolute Dentobees-Pages-Background -z-10"></div>
      <div className="Common-padding pt-[110px] md:pt-[130px] xl:pt-[150px] pb-[90px] md:pb-[110px]">
      
      <div className="flex flex-col gap-8  items-center">
        <h2 className="font-bold Sub-heading text-[#3E3A3A]">
          All-in-One Clinic Management
        </h2>
        <div className="">
          <Image
            src="/Dentobees-Features.avif"
            alt="Image"
            width={618}
            height={486}
            className="w-full"
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default SingleFeature;

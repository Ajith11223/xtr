"use client";
import React from "react";
import { Image } from "@nextui-org/image";

const MetaSmartDentalAssisit = () => {
  return (
    <div className="relative overflow-hidden z-0 mx-3 my-10 rounded-[17px]">
      <div className="absolute Meta-Dentobees-Hero-Background opacity-40 -z-10"></div>
      <div className="absolute top-3 right-5">
        <Image
          src="/Meta-Dentobees-Butterfly.svg"
          alt="Icon"
          width={28}
          height={28}
          className="w-[28px] md:w-[34px]"
        />
      </div>
      <div className="flex justify-center items-center py-[70px]">
        <h4 className="font-bold text-[28px] lg:text-[40px] leading-[35.68px] lg:leading-[55.68px] tracking-[-0.04em] text-center w-[283px] md:w-[400px] bg-gradient-to-r from-[#332F2F] via-[#08B038] to-[#332F2F] bg-clip-text text-transparent animate-gradient">
          Automate with Smart Dental Assistant!
        </h4>
      </div>
    </div>
  );
};

export default MetaSmartDentalAssisit;

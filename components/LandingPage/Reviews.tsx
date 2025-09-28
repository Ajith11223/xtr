'use client'
import React, { useState } from "react";
import { Image } from "@nextui-org/image";
import EnquiryModal from "../Common/EnquiryModal";

const Reviews = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative overflow-hidden z-0 bg-[#1C876A]">
        <div className="absolute -z-10 Dentobees-Reviews-Background"></div>
        <div className="Common-padding py-6 flex flex-col items-center">
          <div className="w-full max-w-[1700px] grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-7 items-center">
            <div className="flex gap-6 items-center">
              <div className="p-3 md:p-5 lg:p-6 flex flex-col items-center bg-[#FFFFFF] rounded-[14px]">
                <p className="font-extrabold text-[30px] lg:text-[42px] leading-[36.72px] lg:leading-[48.72px] tracking-[-0.04em] bg-gradient-to-r from-[#66B48D] via-[#08B038] to-[#332F2F] bg-clip-text text-transparent whitespace-nowrap animate-gradient">
                  5.0
                </p>
                <p className="font-normal text-[16px] lg:text-[18px] leading-[18.88px] lg:leading-[20.88px] tracking-[-0.04em] text-[#6A6565] whitespace-nowrap">
                  out of 5
                </p>
              </div>
              <div className="flex flex-col xl:flex-row gap-3 md:gap-5 xl:gap-16 2xl:gap-24 xl:items-center">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2.5 items-center">
                    <Image
                      src="/Dentobees-Reviews-Rating.svg"
                      alt="Rating"
                      width={24}
                    />
                    <Image
                      src="/Dentobees-Reviews-Rating.svg"
                      alt="Rating"
                      width={24}
                    />
                    <Image
                      src="/Dentobees-Reviews-Rating.svg"
                      alt="Rating"
                      width={24}
                    />
                    <Image
                      src="/Dentobees-Reviews-Rating.svg"
                      alt="Rating"
                      width={24}
                    />
                    <Image
                      src="/Dentobees-Reviews-Rating.svg"
                      alt="Rating"
                      width={24}
                    />
                  </div>
                  <p className="font-normal text-[16px] lg:text-[18px] leading-[18.88px] lg:leading-[20.88px] tracking-[-0.04em] text-[#FFFFFF]">
                    Based on 100+ global reviews
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => setIsOpen(true)}
                    className="w-fit py-2 px-6 Green-button whitespace-nowrap"
                  >
                    Book A Free Demo
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-5 items-center md:w-full justify-between md:justify-end">
              <Image
                src="/Dentobees-Brand-CloudERP.svg"
                alt="CloudERP"
                width={137.17}
                className="w-[100px] xl:w-[137.17px]"
              />
              <Image
                src="/Dentobees-Brand-Trustpilot.svg"
                alt="Trustpilot"
                width={137.17}
                className="w-[100px] xl:w-[137.17px]"
              />
              <Image
                src="/Dentobees-Brand-Capterra.svg"
                alt="Capterra"
                width={137.17}
                className="w-[100px] xl:w-[137.17px]"
              />
            </div>
          </div>
        </div>
      </div>

      <EnquiryModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Reviews;

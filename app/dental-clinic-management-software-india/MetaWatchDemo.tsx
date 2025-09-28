"use client";
import React from "react";
import { Image } from "@nextui-org/image";
import WhyChooseUsCarousel from "@/components/LandingPage/WhyChooseUsCarousel";
import Link from "next/link";

const MetaWatchDemo = () => {
  return (
    <div className="relative overflow-hidden z-0">
      <div>
        <div className="absolute top-[100px] h-[500px] w-full -z-10 bg-gradient-to-b from-[#000000] to-[#12A87F] rounded-[30px]"></div>
      </div>
      <div className="bg-transparent Common-padding flex flex-col gap-[18px] items-center pb-10">
        <div className="bg-transparent">
          <Image
            src="/Dentobees-Hero-Dashboard.svg"
            alt="Image"
            width={343.63}
            className="w-[343.63px] "
          />
        </div>
        <div className="relative bg-transparent">
          <Image
            src="/Meta-Dentobees-Demo-Image.svg"
            alt="Image"
            width={305.13}
            className="w-full"
          />
          <Image
            src="/Meta-Dentobees-Transaction-Image.svg"
            alt="Image"
            width={71.89}
            className="w-full absolute bottom-[100px] left-[250px]"
          />
          <Image
            src="/Meta-Dentobees-Molar-Image.svg"
            alt="Image"
            width={93.02}
            className="w-full absolute bottom-[110px] -left-[20px]"
          />
          <Image
            src="/Meta-Dentobees-Appointment-Image.svg"
            alt="Image"
            width={53.19}
            className="w-full absolute bottom-[135px] left-[260px]"
          />
        </div>
        <div className="h-[280px] bg-[#F5F1F1] mx-5">
          <WhyChooseUsCarousel />
        </div>
        <div className="flex justify-center w-full">
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
            <p>
              <span className="font-medium">Click to</span>{" "}
              <span className="font-bold underline">Watch Demo</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MetaWatchDemo;

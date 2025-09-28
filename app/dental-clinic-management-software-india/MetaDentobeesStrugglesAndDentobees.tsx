"use client";
import React from "react";
import { Image } from "@nextui-org/image";
import Link from "next/link";

const dentobeesMetaFeatures = [
  {
    textOne: "Manual appointment follow-ups.",
    textTwo: "Auto-scheduled recalls with daily list."
  },
  { textOne: "Patients forget visits.", textTwo: "WhatsApp + SMS reminders." },
  {
    textOne: "Staff chases payments.",
    textTwo: "Auto-notify with payment links."
  },
  {
    textOne: "Clunky software built for all clinics.",
    textTwo: "Laser-focused software for dentists."
  },
  {
    textOne: "Tiring front-desk chaos.",
    textTwo: "Smooth QR/mobile check-ins."
  }
];

const MetaDentobeesStrugglesAndDentobees = () => {
  return (
    <div className="Common-padding py-6 flex flex-col gap-[15px] items-center">
      <div className="w-full flex flex-col gap-[15px]">
        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-[28px] lg:text-[40px] leading-[35.68px] lg:leading-[55.68px] tracking-[-0.04em] w-[300px] md:w-full bg-gradient-to-r from-[#332F2F] via-[#08B038] to-[#332F2F] bg-clip-text text-transparent animate-gradient">
            Built from Real Dental Daily Struggles..
          </h4>
          <p className="w-full font-medium Large-text text-[#000000] text-left">
            We didn't build Dentobees in a lab. We built it inside a running
            dental practice — to solve the same problems you face every day.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-5">
            <div className="flex gap-1 items-center">
              <span className="text-yellow-500 text-xl">⚠️</span>
              <p className="font-bold Large-text text-[#000000]">Struggles</p>
            </div>
            <div className="flex gap-1 items-center">
              <Image
                src="/Meta-Dentobees-Butterfly.svg"
                alt="Dentobees Icon"
                width={28}
                height={28}
                className="w-[28px] md:w-[34px]"
              />
              <p className="font-bold Large-text text-[#000000]">Dentobees</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {dentobeesMetaFeatures.map((item, index) => (
              <p key={index} className="grid grid-cols-2 gap-5">
                <span className="font-medium Medium-text text-[#8C8C8C]">
                  {item.textOne}
                </span>
                <span className="font-medium Medium-text text-[#000000]">
                  {item.textTwo}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Link
          href="/dental-clinic-management-software-india/enquiry"
          className="py-2 px-4 Meta-green-button w-full md:w-[380px]"
        >
          <div className="shrink-0">
            <Image
              src="/Meta-Dentobees-Playbutton-Image.svg"
              alt="Watch Demo Icon"
              width={44}
              height={28}
            />
          </div>
          <p className="font-medium text-left">
            Click to{" "}
            <span className="font-bold underline">
              How It Solves Real Clinic Problems
            </span>{" "}
            & Book For A Demo!
          </p>
        </Link>
      </div>
    </div>
  );
};

export default MetaDentobeesStrugglesAndDentobees;

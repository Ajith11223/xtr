"use client";
import React from "react";
import { Image } from "@nextui-org/image";
import Link from "next/link";

const MetaDentobeesFrontDesk = () => {
  return (
    <div className="mt-[129px] md:mt-[150px] bg-[#D9EFDF]">
      <div className="Common-padding py-6 flex flex-col gap-[30px] items-center">
        <div className="w-full flex flex-col justify-center items-center gap-[15px]">
          <div className="">
            <Image
              src="/Meta-Dentobees-FrontDesk-Image.svg"
              alt="Front Desk Image"
              width={954.37}
              className="w-[954.37px] -mt-[130px] md:-mt-[150px]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-[28px] lg:text-[40px] leading-[35.68px] lg:leading-[55.68px] tracking-[-0.04em] w-full bg-gradient-to-r from-[#332F2F] via-[#08B038] to-[#332F2F] bg-clip-text text-transparent animate-gradient">
              Front Desk Finally Feels Calm.
            </h4>
            <p className="w-full font-medium Large-text text-[#000000] text-left">
              Dentobees reduces wait time with QR check-ins, token automation,
              and quick patient lookups — giving your front desk staff breathing
              room.
            </p>
          </div>
          <div>
            <Image
              src="/Meta-Dentobees-FrontDeskFeatures-Image.svg"
              alt="Front Desk Image"
              width={354.37}
              className="w-[354.37px]"
            />
          </div>
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
            <p className="font-bold underline">Smartify My Dental Clinic</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MetaDentobeesFrontDesk;

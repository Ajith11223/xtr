"use client";
import React from "react";
import { Image } from "@nextui-org/image";
import Link from "next/link";

const MetaPatientsClarityAndOurAutomation = () => {
  return (
    <div className="Common-padding py-6 flex flex-col gap-[27px] items-center">
      <div className="flex flex-col gap-2">
        <h5 className="font-bold text-[28px] lg:text-[40px] leading-[35.68px] lg:leading-[55.68px] tracking-[-0.04em] w-[300px] md:w-full bg-gradient-to-r from-[#332F2F] via-[#08B038] to-[#332F2F] bg-clip-text text-transparent animate-gradient">
          Patients Love the Clarity. You'll Love the Automation!
        </h5>
        <p className="font-medium Large-text text-black">
          From appointment confirmation to post-treatment summaries — patients
          stay informed, impressed, and ready to return.
        </p>
      </div>
      <div className="flex flex-row justify-center gap-[6px]">
        <Image
          src="/Meta-Dentobees-AmanwithInvoice-Image.svg"
          alt="Icon"
          width={144}
          height={144}
          className="w-[144px]"
        />
        <div className="flex flex-col gap-2">
          <Image
            src="/Meta-Dentobees-Teeth-Image.svg"
            alt="Icon"
            width={190}
            height={49}
            className="w-[190.95px]"
          />
          <Image
            src="/Meta-Dentobees-Calender.svg"
            alt="Icon"
            width={190}
            height={87}
            className="w-[190px]"
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
              width={22}
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
  );
};

export default MetaPatientsClarityAndOurAutomation;

"use client";
import React from "react";
import { Image } from "@nextui-org/image";

const MetaMissedFollowups = () => {
  return (
    <div className="Common-padding pb-[92px] flex flex-col gap-[15px]">
      <div>
        <Image
          src="/Meta-Dentobees-NoMoreMissedPatients-Image.svg"
          alt="Image"
          width={954.37}
          className="w-full md:w-[600px] lg:w-[700px] xl:w-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-bold text-[28px] lg:text-[40px] leading-[35.68px] lg:leading-[55.68px] tracking-[-0.04em] w-[300px] md:w-full bg-gradient-to-r from-[#332F2F] via-[#08B038] to-[#332F2F] bg-clip-text text-transparent animate-gradient">
          No More Missed Follow-Ups or Lost Patients.
        </p>
        <p className="font-medium Large-text text-black">
          With Dentobees, your clinic auto-schedules return visits, sends
          reminders, and even builds your staff's daily recall list — so you
          never lose a patient in the gap.
        </p>
      </div>
    </div>
  );
};

export default MetaMissedFollowups;

"use client";
import React from "react";
import { Image } from "@nextui-org/image";
import Link from "next/link";

const betterFeatures = [
  { text: "An auto-generated list of follow-ups every day" },
  { text: "A full schedule with alerts for upcoming treatment cycles" },
  { text: "WhatsApp-ready messages — no typing needed" },
  { text: "Real-time insights into appointments, revenue, and check-ins" }
];

const MetaKeyFeatures = () => {
  return (
    <div className="Common-padding pb-10 flex flex-col gap-[25px] items-center">
      <div className="w-full flex flex-col gap-[15px]">
        <div>
          <Image
            src="/Meta-Dentobees-KeyFeatures-Image.svg"
            alt="Image"
            width={954.37}
            className="w-full md:w-[600px] lg:w-[700px] xl:w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-bold text-[28px] lg:text-[40px] leading-[35.68px] lg:leading-[55.68px] tracking-[-0.04em] w-[300px] md:w-full bg-gradient-to-r from-[#332F2F] via-[#08B038] to-[#332F2F] bg-clip-text text-transparent animate-gradient">
            Your Team Deserve Better System!
          </h5>
          <p className="font-medium Large-text text-black">
            If your staff is juggling calls, chasing payments, and tracking
            follow-ups on Excel — it's time for a system that actually
            understands your workflow.
          </p>
          <div className="flex flex-col gap-3">
            {betterFeatures.map((item, index) => (
              <div key={index} className="flex flex-row gap-3 items-start">
                <div className="shrink-0">
                  <Image
                    src="/Dentobees-Li-Before.svg"
                    alt="Icon"
                    width={28}
                    height={28}
                    className="w-[28px] h-[28px]"
                  />
                </div>
                <p className="font-medium Large-text text-black">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Link
          href="/dental-clinic-management-software-india/enquiry"
          className="py-2 px-4 Meta-green-button w-full md:max-w-[400px]"
        >
          <div className="shrink-0">
            <Image
              src="/Meta-Dentobees-Playbutton-Image.svg"
              alt="Watch Demo Icon"
              width={44}
              height={28}
            />
          </div>
          <p className="font-bold underline text-left">
            I Need the Ultimate Dental Clinic System My Team Deserves.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default MetaKeyFeatures;

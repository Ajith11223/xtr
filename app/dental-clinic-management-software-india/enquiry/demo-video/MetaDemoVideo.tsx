"use client";
import React from "react";
import Image from "next/image";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import { RadioGroup, Radio } from "@heroui/react";

const videoFeatures = [
  { text: "An auto-generated list of follow-ups every day" },
  { text: "A full schedule with alerts for upcoming treatment cycles" },
  { text: "WhatsApp-ready messages — no typing needed" },
  { text: "Real-time insights into appointments, revenue, and check-ins" }
];

const MetaDemoVideo = () => {
  const youtubeUrl = "https://www.youtube.com/watch?v=h1245W4A0kI";
  const videoId = youtubeUrl.split("v=")[1];
  return (
    <div className="pt-[100px] md:pt-[120px] xl:pt-[140px] pb-[92px] bg-[#F1F0FF]">
      <div className="Common-padding flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row">
            <Link
              href="/dental-clinic-management-software-india"
              className="flex gap-1.5 items-center font-bold text-[22px] leading-[26px] text-[#1D5A49] hover:text-B1 Hover-effect cursor-pointer"
            >
              <span className="text-[24px]">
                <IoArrowBack />
              </span>
              <span>Back</span>
            </Link>
            {/* <div className="flex justify-center w-full">
              <RadioGroup
                label=""
                orientation="horizontal"
              >
                <Radio value="buenos-aires">English</Radio>
                <Radio value="sydney">Malayalam</Radio>
              </RadioGroup>
            </div> */}
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-full rounded-[16px]">
              <iframe
                width="329"
                height="214"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[240px] rounded-[16px]"
              ></iframe>
            </div>
            <h4 className="font-bold text-[28px] lg:text-[40px] leading-[35.68px] lg:leading-[55.68px] tracking-[-0.04em] w-[300px] md:w-full bg-gradient-to-r from-[#332F2F] via-[#08B038] to-[#332F2F] bg-clip-text text-transparent animate-gradient">
              Dentobees Demo Video
            </h4>
            <div className="flex flex-col gap-2">
              {videoFeatures.map((item, index) => (
                <div key={index} className="flex gap-2.5 items-start">
                  <div className="shrink-0">
                    <Image
                      src="/Dentobees-Li-Before.svg"
                      alt="Icon"
                      width={28}
                      height={28}
                      className="w-[28px] h-[28px]"
                    />
                  </div>
                  <p className="font-medium Normal-text text-black">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Link
          href="https://app.dentobees.com/"
          target="_blank"
          className="font-bold Small-heading text-[#019B71] underline hover:text-B1 Hover-effect cursor-pointer"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default MetaDemoVideo;

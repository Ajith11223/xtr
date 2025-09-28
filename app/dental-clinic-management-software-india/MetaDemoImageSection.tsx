"use client";
import React from "react";
import { Image } from "@nextui-org/image";
import Link from "next/link";

const MetaDemoImageSection = () => {
  return (
    <div className="Common-padding py-6 bg-[#D9EFDF]">
      <div className="flex flex-col gap-[31px] items-center -mt-[90px]">
        <div className="flex flex-col gap-[9px] items-center">
          <Image
            src="/Meta-Dentobees-PatientsList-Image.svg"
            alt="Image"
            width={325}
            height={179}
            className="w-full"
          />
          <div className="flex flex-row gap-2 justify-center">
            <Image
              src="/Meta-Dentobees-PatientsList-Image-Two.svg"
              alt="Image"
              width={280}
              height={99}
              className="w-full "
            />
            <Image
              src="/Meta-Dentobees-PatientsList-Three.svg"
              alt="Image"
              width={137}
              height={99}
              className="w-full"
            />
          </div>
        </div>
        <div>
          <Link href="/dental-clinic-management-software-india/enquiry"
            className="py-2 px-4 Meta-green-button"
          >
            <div className="shrink-0">
              <Image
                src="/Meta-Dentobees-Playbutton-Image.svg"
                alt="Watch Demo Icon"
                width={44}
                height={28}
              />
            </div>
            <p className="font-bold underline">Watch Demo</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MetaDemoImageSection;

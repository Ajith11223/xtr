"use client";
import React from "react";
import MetaLandingPage from "./MetaLandingPage";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="relative">
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[765px]">
          <MetaLandingPage />
        </div>
      </div>

      <div className="absolute Demo-Button z-50">
        <Link
          href="/dental-clinic-management-software-india/enquiry"
          className="py-2 px-4 Meta-green-button"
        >
          <div className="shrink-0">
            <Image
              src="/Meta-Dentobees-Playbutton-Image.svg"
              alt="Watch Demo Icon"
              width={28}
              height={28}
            />
          </div>
          <p className="font-bold underline">Watch Demo</p>
        </Link>
      </div>
    </div>
  );
};

export default Page;

"use client";
import Link from "next/link";
import React, { useState } from "react";

const MetaHero = () => {
  return (
    <>
      <div className="relative overflow-hidden z-0">
        <div className="absolute Dentobees-Hero-Background -z-10"></div>
        <div className="w-full Common-padding pt-[120px] md:pt-[130px] xl:pt-[140px] pb-[92px] flex flex-col gap-[38px] items-center">
          <div className="flex flex-col gap-3 md:gap-4 xl:gap-6 items-center bg-gradient-to-r from-[#332F2F] via-[#08B038] to-[#332F2F] bg-clip-text text-transparent text-center animate-gradient">
            <p className="flex flex-col font-medium Large-text">
              <span>
                Systemise{" "}
                <span className="font-bold text-[28px] lg:text-[40px] leading-[35.68px] lg:leading-[55.68px] tracking-[-0.04em]">
                  10x Smoother
                </span>
              </span>
              <span>with Dentobees ERP,</span>
            </p>
            <h4 className="px-3 sm:px-0 font-bold text-[44px] md:text-[46px] xl:text-[68px] leading-[52.88px] md:leading-[54px] xl:leading-[78.88px] tracking-[-0.04em]">
              Solely Built for Dental Clinics,
            </h4>
            <p className="font-bold text-[28px] lg:text-[40px] leading-[35.68px] lg:leading-[55.68px] tracking-[-0.04em]">
              Not for Any Clinic!
            </p>
          </div>

          <Link
            href="/dental-clinic-management-software-india/enquiry"
            className="w-fit Green-gradient-button"
          >
            <p className="py-2.5 px-6 Green-gradient-button-text">
              Book For A Demo
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MetaHero;

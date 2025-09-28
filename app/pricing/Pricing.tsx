"use client";
import React from "react";
import { Image } from "@nextui-org/image";
import PricingPlanDetails from "@/components/LandingPage/PricingPlanDetails";
import PricingFaq from "./PricingFaq";
import PageEnquiryFooter from "@/components/Common/PageEnquiryFooter";
import BrandCarousel from "@/components/LandingPage/BrandCarousel";

const pricingTerms = [
  {heading:"Prices are exclusive of applicable taxes.", term:""},
  {heading:"WhatsApp Notifications:", term:"First 100 messages are free. After that, ₹1 per conversation will be charged. Customers must top up their wallet in advance."},
  {heading:"Onsite Installation:", term:"A one-time setup fee will be applicable for onsite installation and configuration."},
  {heading:"Enterprise Plan:", term:"Includes support for up to 3 branches. For each additional branch, ₹5,000/month will be charged."},
  {heading:"Mobile App:", term:"Dedicated mobile app for doctors will be provided free of cost for the first 100 customers, with an expected release by August this year."},
];

const Pricing = () => {
  return (
    <div>
      <div className="relative overflow-hidden z-0 bg-white">
        <div className="absolute Dentobees-Pages-Background -z-10"></div>
        <div className="pt-[110px] md:pt-[130px] xl:pt-[150px]">
          <h3 className="Common-padding Page-Heading text-center">
            Pricing Made For Growth
          </h3>
          <div className="pt-8 md:pt-10 xl:pt-[60px] relative overflow-hidden">
            <div className="absolute Dentobees-PricingPlan-Background"></div>
            <div className="Common-padding py-8 md:py-10 xl:py-[60px] bg-[#041B15]">
              <div className="flex flex-col gap-10 md:gap-16 xl:gap-[80px] items-center">
                <div className="w-full max-w-[1700px]">
                  <PricingPlanDetails />
                </div>
                <div className="w-full max-w-[1700px] relative overflow-hidden z-0 rounded-[16px] bg-white">
                  <div className="absolute Dentobees-Founders-Background opacity-30 -z-10"></div>
                  <div className="p-3 md:p-5 xl:p-6 flex flex-col gap-5 md:gap-[30px] items-center">
                    <h5 className="font-bold Large-heading text-[#3E3A3A]">Pricing Terms</h5>
                    <div className="w-full flex flex-col gap-3">
                      {pricingTerms.map((item, index) => (
                        <div key={index} className="flex gap-3 items-start text-[#3E3A3A]">
                          <div className="shrink-0">
                            <Image src="/Meta-Dentobees-Butterfly.svg" alt="Image" width={30} className=" w-[30px] h-auto" />
                          </div>
                          <p className="font-normal Normal-text"><span className="font-bold">{item.heading}</span> {item.term}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <PricingFaq />
          </div>
          <div>
            <BrandCarousel />
          </div>
          <div>
            <PageEnquiryFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

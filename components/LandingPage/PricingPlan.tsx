'use client'
import React from "react";
import { Image } from "@nextui-org/image";
import PricingPlanDetails from "./PricingPlanDetails";

const freePlan = [
  { plans: "Patient Treatment Plans" },
  { plans: "Appointment Booking" },
  { plans: "Invoice & Billing" },
  { plans: "Expense Tracking " },
  { plans: "Single-branch Reporting" }
];

const businessPlan = [
  { plans: "Multi-user Access" },
  { plans: "Customizable Templates" },
  { plans: "Automated Reminders" },
  { plans: "Multi-branch Dashboards" },
  { plans: "Bulk Invoice Generation" }
];

const proPlan = [
  { plans: "Enhanced Analytics" },
  { plans: "Custom Domain" },
  { plans: "Third-party Integrations" },
  { plans: "WhatsApp Integration" },
  { plans: "24/7 Priority Support" }
];

const PricingPlan = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute Dentobees-PricingPlan-Background"></div>
      <div className="">
        <div className="bg-[#041B15] pt-10 md:pt-12 lg:pt-[60px] xl:pt-[80px] pb-[100px] Common-padding">
          <div className="flex flex-col gap-10 xl:gap-[50px] items-center">
            <div className="flex flex-col gap-4 md:gap-5 xl:gap-6 w-full items-center z-0">
              <h2 className="w-full font-bold text-[36px] md:text-[44px] xl:text-[48px] leading-[46.68px] md:leading-[50.68px] xl:leading-[55.68px] tracking-[-0.04em] text-[#FFFFFF] text-center">
                Pricing Made For Growth
              </h2>
              <p className="px-5 sm:px-0 font-normal Normal-text text-[#FFFFFF] text-center">
                Flexible Plans for Every Stage of Your Business.
              </p>
            </div>
            <div className="w-full max-w-[1700px]">
              <PricingPlanDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;

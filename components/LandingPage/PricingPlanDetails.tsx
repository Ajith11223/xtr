"use client";
import React from "react";
import { Image } from "@nextui-org/image";
import Link from "next/link";

const freePlan = [
  { plans: "Patient Treatment Plans" },
  { plans: "Appointment Booking" },
  { plans: "Invoice & Billing" },
  { plans: "Single-branch Reporting " },
  { plans: "Monthly 50 Appointments Free" },
  { plans: "No commitment, try for free" }
];

const businessPlan = [
  { plans: "All Starter features" },
  { plans: "Smart Dashboard" },
  { plans: "WhatsApp Reminders" },
  { plans: "Mini-accounts" },
  { plans: "Vendors payment Dashboard" },
  { plans: "Pharmacy and Inventory " }
];

const proPlan = [
  { plans: "All Growth features" },
  { plans: "Multiple Branches " },
  { plans: "Multi Currency" },
  { plans: "Doctor-wise Reports " },
  { plans: "Priority Support" },
  { plans: "Advanced Analytics" }
];

const PricingPlanDetails = () => {
  return (
    <div className="flex overflow-hidden overflow-x-scroll Hide-ScrollBar xl:grid xl:grid-cols-3 gap-4 md:gap-5">
      <div>
        <div className="w-[296px] sm:w-[350px] xl:w-full p-3 md:p-5 xl:p-6 bg-gradient-to-b from-[#434343DB] to-[#00000000] backdrop-blur-[120.04px] rounded-[11.71px]">
          <div className="flex flex-col gap-4 md:gap-5 xl:gap-6">
            <div className="flex flex-col gap-[14px] md:gap-4">
              <Image
                src="/Dentobees-PricingPlan-Free.svg"
                alt="Icon"
                width={48}
                height={48}
                className="w-[40px] xl:w-[48px]"
              />
              <div className="flex flex-col gap-[14px]">
                <h5 className="font-medium text-[28px] xl:text-[36px] leading-[34.1px] xl:leading-[44.1px] tracking-[-0.01em] text-[#FFFFFF]">
                  Starter
                </h5>
                <p className="font-light text-[18px] xl:text-[20px] leading-[24px] xl:leading-[28px] text-[#FFFFFF] pr-[1%] xl:pr-[10%]">
                  Solo dentists or first-time users{" "}
                  <br className="hidden md:block" />( 7 days trial, All features )
                </p>
              </div>
              <div className="flex gap-2.5 md:gap-3 items-center">
                <p className="font-medium text-[36px] xl:text-[46px] leading-[36.96px] xl:leading-[52.96px] tracking-[-0.01em] text-[#FFFFFF]">
                  Free
                </p>
              </div>
            </div>
            <div className="w-full border-t-[1px] border-[#E7EBFF]"></div>
            <div className="flex flex-col gap-7 md:gap-8 xl:gap-10">
              <div className="flex flex-col gap-2.5 md:gap-3">
                {freePlan.map((item, index) => (
                  <div key={index} className="flex gap-3 items-center">
                    <div className="shrink-0">
                      <Image
                        src="/Dentobees-Li-Before.svg"
                        alt="Icon"
                        width={24}
                        height={24}
                        className="w-[20px] md:w-[24px]"
                      />
                    </div>
                    <p className="font-normal text-[18px] xl:text-[20px] leading-[26px] xl:leading-[30px] text-[#FFFFFF]">
                      {item.plans}
                    </p>
                  </div>
                ))}
              </div>
              <Link href="https://app.dentobees.com/" target="_blank" className="w-full py-2.5 Pricing-button text-center">Get Started</Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative overflow-hidden z-0 bg-white rounded-[11.71px]">
          <div className="absolute -z-10 Dentobees-PricingPlan-Business-Background"></div>
          <div className="w-[296px] sm:w-[350px] xl:w-full p-3 md:p-5 xl:p-6 border-[1px] border-[#E7EBFF] rounded-[11.71px]">
            <div className="flex flex-col gap-[18px] md:gap-[22px] xl:gap-[26px]">
              <div className="flex flex-col gap-[13px] md:gap-[15px]">
                <Image
                  src="/Dentobees-PricingPlan-Business.svg"
                  alt="Icon"
                  width={48}
                  height={48}
                  className="w-[40px] xl:w-[48px]"
                />
                <div className="flex flex-col gap-[14px]">
                  <div className="flex gap-[14px] items-center">
                    <h5 className="font-medium text-[28px] xl:text-[36px] leading-[34.1px] xl:leading-[44.1px] tracking-[-0.01em] text-[#1B223C]">
                      Growth
                    </h5>
                    <p className="w-fit py-[5px] px-2.5 border-[1px] border-[#FFFFFF] font-light text-[14px] xl:text-[16px] leading-[18.22px] xl:leading-[20.88px] text-[#FFFFFF] bg-[rgba(255,255,255,0.08)] rounded-[8px]">
                      Best offer
                    </p>
                  </div>
                  <p className="font-light text-[18px] xl:text-[20px] leading-[24px] xl:leading-[28px] text-[#3C3C3C] pr-[5%] xl:pr-[10%]">
                    Growing clinics with up to 5 doctors and a single branch.
                  </p>
                </div>
                <div className="flex gap-2.5 md:gap-3 items-center">
                  <p className="font-medium text-[22px] xl:text-[28px] leading-[28.81px] xl:leading-[36.81px] tracking-[-0.01em] text-[#63687B] line-through">
                    ₹25000
                  </p>
                  <p className="font-medium text-[36px] xl:text-[46px] leading-[36.96px] xl:leading-[52.96px] tracking-[-0.01em] text-[#1B223C]">
                    ₹12,500
                  </p>
                  <p className="font-light text-[18px] xl:text-[20px] leading-[22.78px] xl:leading-[26.78px] tracking-[-0.01em] text-[#3C3C3C]">
                    per year
                  </p>
                </div>
              </div>
              <div className="w-full border-t-[1px] border-[#E7EBFF]"></div>
              <div className="flex flex-col gap-7 md:gap-8 xl:gap-10">
                <div className="mt-2.5 flex flex-col gap-3 md:gap-[14px]">
                  {businessPlan.map((item, index) => (
                    <div key={index} className="flex gap-3 items-center">
                      <div className="shrink-0">
                        <Image
                          src="/Dentobees-Li-Before-Dark.svg"
                          alt="Icon"
                          width={24}
                          height={24}
                          className="w-[20px] md:w-[24px]"
                        />
                      </div>
                      <p className="font-normal text-[18px] xl:text-[20px] leading-[26px] xl:leading-[30px] text-[#1B223C]">
                        {item.plans}
                      </p>
                    </div>
                  ))}
                </div>
                <Link href="https://app.dentobees.com/" target="_blank" className="mt-2 w-full py-2.5 border-[1px] border-[#00D299] Green-button text-center">Get Started</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[296px] sm:w-[350px] xl:w-full p-3 md:p-5 xl:p-6 bg-gradient-to-b from-[#434343DB] to-[#00000000] backdrop-blur-[120.04px] rounded-[11.71px]">
          <div className="flex flex-col gap-4 md:gap-5 xl:gap-6">
            <div className="flex flex-col gap-[14px] md:gap-4">
              <Image
                src="/Dentobees-PricingPlan-Free.svg"
                alt="Icon"
                width={48}
                height={48}
                className="w-[40px] xl:w-[48px]"
              />
              <div className="flex flex-col gap-[14px]">
                <h5 className="font-medium text-[28px] xl:text-[36px] leading-[34.1px] xl:leading-[44.1px] tracking-[-0.01em] text-[#FFFFFF]">
                  Enterprise
                </h5>
                <p className="font-light text-[18px] xl:text-[20px] leading-[24px] xl:leading-[28px] text-[#FFFFFF] pr-[5%] xl:pr-[10%]">
                  Suitable for multichain clinics with more than 10 employees
                </p>
              </div>
              <div className="flex gap-2.5 md:gap-3 items-center">
                <p className="font-medium text-[22px] xl:text-[28px] leading-[28.81px] xl:leading-[36.81px] tracking-[-0.01em] text-[#D4D0D0] line-through">
                  ₹35000
                </p>
                <p className="font-medium text-[36px] xl:text-[46px] leading-[36.96px] xl:leading-[52.96px] tracking-[-0.01em] text-[#FFFFFF]">
                  ₹25,000
                </p>
                <p className="font-light text-[18px] xl:text-[20px] leading-[22.78px] xl:leading-[26.78px] tracking-[-0.01em] text-[#FFFFFF]">
                  per year
                </p>
              </div>
            </div>
            <div className="w-full border-t-[1px] border-[#E7EBFF]"></div>
            <div className="flex flex-col gap-7 md:gap-8 xl:gap-10">
              <div className="flex flex-col gap-2.5 md:gap-3">
                {proPlan.map((item, index) => (
                  <div key={index} className="flex gap-3 items-center">
                    <div className="shrink-0">
                      <Image
                        src="/Dentobees-Li-Before.svg"
                        alt="Icon"
                        width={24}
                        height={24}
                        className="w-[20px] md:w-[24px]"
                      />
                    </div>
                    <p className="font-normal text-[18px] xl:text-[20px] leading-[26px] xl:leading-[30px] text-[#FFFFFF]">
                      {item.plans}
                    </p>
                  </div>
                ))}
              </div>
              <Link href="https://app.dentobees.com/" target="_blank" className="w-full py-2.5 Pricing-button text-center">Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlanDetails;

"use client";
import React from "react";
import { Image } from "@nextui-org/image";

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
  { plans: "Pharmacy and Inventory" }
];

const proPlan = [
  { plans: "All Growth features" },
  { plans: "Multiple Branches " },
  { plans: "Multi Currency" },
  { plans: "Doctor-wise Reports " },
  { plans: "Priority Support" },
  { plans: "Advanced Analytics" }
];

const PricingPlan = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute Dentobees-PricingPlan-Background"></div>
      <div className="">
        <div className="bg-[#041B15] pt-10 md:pt-12 lg:pt-[60px] xl:pt-[80px] pb-[100px] px-5">
          <div className="flex flex-col gap-10 xl:gap-[50px]">
            <div className="flex flex-col gap-4 md:gap-5 xl:gap-6 w-full items-center z-0">
              <h2 className="w-[350px] sm:w-full font-bold text-[36px] md:text-[44px] xl:text-[48px] leading-[46.68px] md:leading-[50.68px] xl:leading-[55.68px] tracking-[-0.04em] text-[#FFFFFF] text-center">
                Pricing Made For Growth
              </h2>
              <p className="w-[350px] sm:w-full font-normal text-[16px] md:text-[18px] tracking-[-0.04em] text-[#FFFFFF] text-center">
                Flexible Plans for Every Stage of Your Business.
              </p>
            </div>
            <div className="flex overflow-hidden overflow-x-scroll Hide-ScrollBar gap-4 md:gap-5">
              <div>
                <div className="w-[350px] p-3 md:p-5 xl:p-6 bg-gradient-to-b from-[#434343DB] to-[#00000000] backdrop-blur-[120.04px] rounded-[11.71px]">
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
                          Forever Free
                        </h5>
                        <p className="font-light text-[18px] xl:text-[20px] leading-[24px] xl:leading-[28px] text-[#FFFFFF]">
                          Solo dentists or first-time users ( 7 days trial , All
                          features )
                        </p>
                      </div>
                      <div className="flex gap-2.5 md:gap-3 items-center">
                        <p className="font-medium text-[36px] md:text-[40px] xl:text-[46px] leading-[42.96px] md:leading-[54.96px] xl:leading-[66.96px] tracking-[-0.01em] text-[#FFFFFF]">
                          Starter
                        </p>
                      </div>
                    </div>
                    <div className="w-full border-t-[1px] border-[#E7EBFF]"></div>
                    <div className="flex flex-col gap-7 md:gap-8 xl:gap-10">
                      <div className="flex flex-col gap-2.5 md:gap-3">
                        {freePlan.map((item, index) => (
                          <div key={index} className="flex gap-3 items-center">
                            <div>
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
                      <button className="w-full py-2.5 border-[1px] border-[#00D299] font-normal text-[16px] xl:text-[18px] leading-[22px] xl:leading-[27px] text-[#FFFFFF] rounded-[40px] hover:bg-[#00D299] text-center transform transition-all duration-300">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative overflow-hidden z-0 bg-white rounded-[11.71px]">
                  <div className="absolute -z-10 Dentobees-PricingPlan-Business-Background"></div>
                  <div className="w-[350px] p-3 md:p-5 xl:p-6 border-[1px] border-[#E7EBFF] rounded-[11.71px]">
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
                            Growing clinics with up to 5 doctors and a single
                            branch.
                          </p>
                        </div>
                        <div className="flex gap-2.5 md:gap-3 items-center">
                          <p className="font-medium text-[22px] xl:text-[28px] leading-[28.81px] xl:leading-[36.81px] tracking-[-0.01em] text-[#63687B] line-through">
                            ₹25000
                          </p>
                          <p className="font-medium text-[36px] md:text-[40px] xl:text-[46px] leading-[36.96px] md:leading-[48.96px] xl:leading-[52.96px] tracking-[-0.01em] text-[#1B223C]">
                            ₹12500
                          </p>
                          <p className="font-light text-[18px] xl:text-[20px] leading-[22.78px] xl:leading-[26.78px] tracking-[-0.01em] text-[#3C3C3C]">
                            / Year
                          </p>
                        </div>
                      </div>
                      <div className="w-full border-t-[1px] border-[#E7EBFF]"></div>
                      <div className="flex flex-col gap-7 md:gap-8 xl:gap-10">
                        <div className="mt-2.5 flex flex-col gap-3 md:gap-[14px]">
                          {businessPlan.map((item, index) => (
                            <div
                              key={index}
                              className="flex gap-3 items-center"
                            >
                              <div>
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
                        <button className="mt-2 w-full py-2.5 border-[1px] border-[#00D299] font-normal text-[16px] xl:text-[18px] leading-[22px] xl:leading-[27px] text-[#FFFFFF] rounded-[40px] bg-[#00D299] hover:bg-[#1C876A] text-center transform transition-all duration-300">
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-[350px] p-3 md:p-5 xl:p-6 bg-gradient-to-b from-[#434343DB] to-[#00000000] backdrop-blur-[120.04px] rounded-[11.71px]">
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
                          Suitable for multichail clinics with more than 10
                          emplyees
                        </p>
                      </div>
                      <div className="flex gap-2.5 md:gap-3 items-center">
                        <p className="font-medium text-[22px] xl:text-[28px] leading-[28.81px] xl:leading-[36.81px] tracking-[-0.01em] text-[#D4D0D0] line-through">
                          ₹35000
                        </p>
                        <p className="font-medium text-[36px] md:text-[40px] xl:text-[46px] leading-[42.96px] md:leading-[54.96px] xl:leading-[66.96px] tracking-[-0.01em] text-[#FFFFFF]">
                          ₹25000
                        </p>
                        <p className="font-light text-[18px] xl:text-[20px] leading-[22.78px] xl:leading-[26.78px] tracking-[-0.01em] text-[#FFFFFF]">
                          / Year
                        </p>
                      </div>
                    </div>
                    <div className="w-full border-t-[1px] border-[#E7EBFF]"></div>
                    <div className="flex flex-col gap-7 md:gap-8 xl:gap-10">
                      <div className="flex flex-col gap-2.5 md:gap-3">
                        {proPlan.map((item, index) => (
                          <div key={index} className="flex gap-3 items-center">
                            <div>
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
                      <button className="w-full py-2.5 border-[1px] border-[#00D299] font-normal text-[16px] xl:text-[18px] leading-[22px] xl:leading-[27px] text-[#FFFFFF] rounded-[40px] hover:bg-[#00D299] text-center transform transition-all duration-300">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;

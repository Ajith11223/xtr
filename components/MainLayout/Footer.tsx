"use client";
import React from "react";
import { Image } from "@nextui-org/image";
import Link from "next/link";
import { SlPhone } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { RiBloggerLine } from "react-icons/ri";


const Footer = () => {
  const product = [
    { href: "/", name: "Home" },
    { href: "/about-us", name: "About us" },
    { href: "/features", name: "Features" },
    { href: "/contact-us", name: "Contact" },
  ];

  const resources = [
    { href: "/privacy-policy", name: "Privacy Policy" },
    { href: "/terms-and-conditions", name: "Terms & Conditions" },
  ];

  const followUs = [
    {
      href: "https://www.instagram.com/xtorqltd?igsh=MWJ5aDZsaWN0bnR4Mg%3D%3D&utm_source=qr",
      icon: <FaInstagram />,
      name: "Instagram"
    },
    {
      href: "#",
      icon: <FaFacebookF />,
      name: "Facebook"
    },
    {
      href: "#",
      icon: <FaLinkedinIn />,
      name: "Linkedin"
    },
    {
      href: "#",
      icon: <FaXTwitter />,
      name: "Twitter"
    },
    {
      href: "#",
      icon: <FaPinterestP />,
      name: "Pinterest"
    },
    {
      href: "#",
      icon: <RiBloggerLine />,
      name: "Blogspot"
    }
  ];

  return (
    <div>
      <div className="relative border">
        {/* <div className="w-full Common-padding absolute -top-[50px] flex justify-center">
          <div className="w-full max-w-[1700px] ">
            <div className="relative overflow-hidden bg-[#041B15] rounded-[11.71px]">
              <div className="absolute Dentobees-Footer-Background"></div>
              <div className="relative overflow-hidden py-5 sm:py-7 md:py-8 lg:py-16 px-3 sm:px-0 sm:pl-5 lg:pl-8 xl:pl-10 z-0">
                <div className="flex flex-col lg:flex-row lg:items-center gap-[30px] lg:gap-[34px]">
                  <h3 className="w-[230px] sm:w-[260px] md:w-[280px] lg:w-[310px] xl:w-[360px] font-bold text-[36px] sm:text-[40px] md:text-[44px] lg:text-[48px] xl:text-[54px] leading-[48.64px] sm:leading-[52.64px] md:leading-[55.64px] lg:leading-[58.64px] xl:leading-[62.64px] tracking-[-0.04em] text-[#FFFFFF]">
                    Download our Mobile APP
                  </h3>
                  <div className="flex gap-2.5 sm:gap-3 items-center">
                    <div className="cursor-pointer">
                      <Image
                        src="/Dentobees-Footer-PlayStore.svg"
                        alt="PlayStore"
                        width={165.57}
                        height={49.06}
                      />
                    </div>
                    <div className="cursor-pointer">
                      <Image
                        src="/Dentobees-Footer-AppStore.svg"
                        alt="AppStore"
                        width={147.17}
                        height={49.06}
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-20 sm:-bottom-16 -right-[90px] sm:right-0 opacity-60 sm:opacity-100 -z-10">
                  <Image
                    src="/Dentobees-Footer-PhoneImage.svg"
                    alt="Image"
                    width={344}
                    height={333}
                    className="w-[344px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="w-full Common-padding pt-[120px] sm:pt-[160px] md:pt-[1800px] lg:pt-[180px] pb-[20px] flex flex-col items-center text-black ">
          <div className="w-full max-w-[1700px] flex flex-col gap-7 sm:gap-8 md:gap-10">
            <div className="grid grid-cols-1 lg:grid-cols-9 gap-10 lg:gap-5 items-center">
              <div className="lg:col-span-3">
                <div className="flex flex-col md:flex-row lg:flex-col gap-5 md:gap-12 lg:gap-7 items-start md:items-center lg:items-start">
                <div
                        className={`mb-5 transition-all duration-500
                           w-[160px] h-[50px]
                        } `}
                      >
                            <Image
                            src="/xtrnew.jpeg"
                            alt="xtr"
                            className="object-contain"
                            
                          />
                      </div>
                  <div className="flex flex-col gap-3">
                    <h1 className="max-w-[320px] font-semibold Medium-text text-black pr-[5%] sm:pr-0">
                    {/* Xtorq – Trusted Used Cars */}
                    </h1>
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 md:gap-11 lg:gap-3 xl:gap-11 sm:items-center lg:items-start xl:items-center">
                        <Link href="tel:+919995960143">
                          <p className="flex gap-1.5 items-center font-semibold Medium-text text-black hover:text-[#00D299] transform transition-all duration-300">
                            <SlPhone className="text-[16px] shrink-0" />
                            07432733222
                          </p>
                          <p className="flex gap-1.5 items-center font-semibold Medium-text text-black hover:text-[#00D299] transform transition-all duration-300">
                          <SlPhone className="text-[16px] shrink-0" />
                            {""} 07432796222
                          </p>
                        </Link>
                        <Link href="mailto:support@dentobees.com" target="_blank">
                          <p className="flex gap-1.5 items-center font-semibold Medium-text text-black hover:text-[#00D299] transform transition-all duration-300">
                            <HiOutlineMail className="text-[16px] shrink-0" />
                            info.xtorq@gmail.com
                          </p>
                        </Link>
                      </div>
                      <p className="max-w-[400px] flex gap-1.5 items-start font-semibold Medium-text text-black">
                        <SlLocationPin className="mt-[2px] text-[16px] shrink-0" />
                        158 HAMILTON AVENUE
                        IG6 1AA                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-5">
                <div className="flex w-full justify-start lg:justify-end">
                  <div className="flex flex-col gap-4 sm:gap-5">
                    <h5 className="font-bold Normal-text text-[#B3422E]">
                      RESOURCES
                    </h5>
                    <div className="flex flex-col gap-4">
                      {product.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="w-fit font-bold Medium-text text-black hover:text-[#00D299] transform transition-all duration-300"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-start sm:justify-center lg:justify-end">
                  <div className="flex flex-col gap-4 sm:gap-5">
                    <h5 className="font-bold Normal-text text-[#B3422E]">
                      LEGAL
                    </h5>
                    <div className="flex flex-col gap-4">
                      {resources.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="w-fit font-bold Medium-text text-black hover:text-[#00D299] transform transition-all duration-300"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-start sm:justify-end">
                  <div className="flex flex-col gap-4 sm:gap-5">
                    <h5 className="font-bold Normal-text text-[#B3422E]">
                      SOCIAL
                    </h5>
                    <div className="flex flex-col gap-4">
                      {followUs?.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          target="_blank"
                          className="flex gap-3 items-center font-bold Medium-text text-black hover:text-[#00D299] transform transition-all duration-300"
                        >
                          <div className="text-[#FFFFFF]">{item?.icon}</div>
                          <p className="">{item?.name}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-10 2xl:gap-5 items-start sm:items-center">
              <div className="sm:col-span-2 md:col-span-3">
                <h3 className="w-full md:w-[350px] lg:w-full font-bold text-[24px] md:text-[28px] lg:text-[34px] leading-[29.44px] md:leading-[33.44px] lg:leading-[39.44px] tracking-[-0.04em] text-[#3E3A3A]">
                  Get the latest updates from DentoBees
                </h3>
              </div>
              <div className="2xl:col-span-1 hidden 2xl:block"></div>
              <div className="sm:col-span-2 bg-[#3E3A3A] rounded-[12px]">
                <div className="py-2 px-[16px] flex w-full items-center justify-between">
                  <p className="font-bold Medium-text text-[#A8A4A4]">
                    Click to
                  </p>
                  <Link href="/pricing" className="py-1.5 px-6 Pricing-button">
                    Subscribe
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

"use client";
import React from "react";
import Image from "next/image";

const visions = [
  {
    heading: "Innovation",
    description:
      "We bring real-world dental experience into intelligent software design. Every feature is crafted to solve common clinic management problems—automating tasks, streamlining workflows, and enabling dentists to focus on care, not complexity."
  },
  {
    heading: "Trust",
    description:
      "Dentobees was built by dental professionals, for dental professionals. Our solutions are tested, proven, and designed with transparency and reliability at their core—earning the trust of clinics through consistent performance and dependable support."
  },
  {
    heading: "Intelligence",
    description:
      "We use data and smart automation to empower decision-making. From intelligent scheduling to performance analytics, Dentobees provides clinics with the insights and tools they need to grow efficiently and deliver superior care."
  }
];

const founders = [
  {
    image: "/dentobees-founder-harshad-kt.avif",
    name: "Harshad KT",
    position: "Founder & CEO"
  },
  { image: "/Dentobees-co-founder-dr-shadiya-mk.avif", name: "Dr. Shadiya MK", position: "Co-Founder & COO" }
];

const AboutUs = () => {
  return (
    <div>
      <div className="relative overflow-hidden z-0 bg-white">
        <div className="absolute Dentobees-Pages-Background -z-10"></div>
        <div className="pt-[110px] md:pt-[130px] xl:pt-[150px] pb-[90px] md:pb-[110px] flex flex-col gap-10 md:gap-16 xl:gap-[80px]">
          <div className="Common-padding flex flex-col items-center">
            <div className="w-full max-w-[1700px] flex flex-col gap-10 md:gap-16 xl:gap-[80px]">
              <div className="flex flex-col sm:flex-row gap-5 md:gap-[30px] sm:items-center sm:justify-between">
                <div className="flex flex-col gap-5 lg:gap-[30px]">
                  <h3 className="w-full sm:w-[300px] md:w-[340px] lg:w-[380px] xl:w-[500px] Page-Heading text-left">
                    Building The Future Of Dental Clinics
                  </h3>
                  <p className="w-full sm:w-[300px] md:w-[340px] lg:w-[380px] xl:w-[500px] font-bold Small-heading text-[#3E3A3A] pr-[5%] sm:pr-[0%]">
                    At Dentobees Innovations LLP, we envision a future where dental clinics run seamlessly with smart, intuitive technology that reduces manual effort and enhances patient care—driven by innovation, intelligence, and trust.
                  </p>
                </div>
                <div className="rounded-[16px]">
                  <Image src="/Dentobees-Building-The-Future-Of-Dental-Clinics.avif" alt="Image" width={628} height={524} className="w-full md:w-[500px] xl:w-[628px] rounded-[16px]" />
                </div>
              </div>
              <div className="py-8 md:py-10 xl:py-[60px] px-3 sm:px-5 md:px-[30px] lg:px-[50px] xl:px-[60px] flex flex-col gap-7 lg:gap-[40px] items-center bg-gradient-to-b from-[#000000] to-[#362E2E] backdrop-blur-[18%] rounded-[16px]">
                <h3 className="font-bold Sub-heading text-white">Our Vision</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 lg:gap-7 xl:gap-[60px] w-full">
                  {visions.map((item, index) => (
                    <div key={index} className="flex flex-row md:flex-col gap-[14px] items-start sm:items-center">
                      <div className="shrink-0">
                        <Image src="/Dentobees-Icon.svg" alt="Image" width={72} height={72} className="w-[50px] lg:w-[72px]" />
                      </div>
                      <div className="flex flex-col gap-3 md:gap-[18px] items-start md:items-center text-white">
                        <p className="font-bold Small-heading">{item.heading}</p>
                        <p className="font-normal Normal-text text-left md:text-center">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-[30px] items-center justify-between">
                <div className="hidden md:flex rounded-[16px]">
                  <Image src="/Dentobees-AboutUs-OurMission.svg" alt="Image" width={605} height={485} className="md:w-[400px] lg:w-[500px] xl:w-[605px] rounded-[16px]" />
                </div>
                <div className="md:w-[400px] lg:w-[450px] xl:w-[500px] flex flex-col gap-5 xl:gap-[36px]">
                  <div className="flex flex-col gap-5 items-center md:items-start">
                    <h5 className="font-bold Sub-heading text-[#3E3A3A]">Our Mission</h5>
                    <div className="md:hidden rounded-[16px]">
                      <Image src="/Dentobees-AboutUs-OurMission.svg" alt="Dentobees Mission" width={605} height={485} className="w-[400px] rounded-[16px]" />
                    </div>
                  </div>
                  <p className="flex flex-col gap-5 font-normal Normal-text text-[#383636] text-justify">
                    <span>Our mission is to transform dental clinic operations with intelligent, cloud-based solutions that automate routine tasks, optimize patient engagement, and provide deep operational insights.</span>
                    <span>We are committed to making clinic management simpler, smarter, and more human-centric helping dental professionals focus on what truly matters: exceptional patient outcomes and sustainable clinic growth.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden z-0">
            <div className="absolute Dentobees-Founders-Background -z-10"></div>
            <div className="Common-padding py-7 xl:py-[60px] flex flex-col items-center">
              <div className="w-full max-w-[1700px] flex flex-col xl:flex-row gap-5 md:gap-[30px] items-center justify-between">
                <div className="xl:w-[480px] flex flex-col gap-[14px] items-center xl:items-start">
                  <h3 className="font-bold Sub-heading text-[#3E3A3A]">Meet The Founders</h3>
                  <p className="flex flex-col gap-2 font-normal Normal-text text-[#6A6565] text-justify">
                    <span>Founded in 2020, Dentobees Innovations LLP is the brainchild of Mr. Harshad KT, a tech entrepreneur with a deep understanding of healthcare systems, and Dr. Shadiya MK, a seasoned Dentist & Chief Dental Surgeon. With over 6+ years of experience in clinical practice and healthcare operations, they recognized the challenges dental professionals face daily—and set out to solve them.</span>
                    <span>By running their own dental clinic, the founders had the perfect environment for real-time prototyping, testing, and refinement. Every feature in Dentobees has been validated through practical use in a live clinic, ensuring relevance, usability, and measurable value.</span>
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-5 lg:gap-10 xl:gap-[60px] items-start">
                  {founders.map((item, index) => (
                    <div key={index} className="max-w-[315px] flex flex-col gap-[18px]">
                      <div className="rounded-[16px]">
                        <Image src={item.image} alt="Founders" width={315} height={323} className="w-[315px] rounded-[16px]" />
                      </div>
                      <p className="flex flex-col gap-2.5 font-bold">
                        <span className="Small-heading text-black capitalize">{item.name}</span>
                        <span className="Small-text text-[#FFFEFE]">{item.position}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="Common-padding py-7 xl:py-[60px] flex flex-col gap-5 lg:gap-[25px] items-center bg-gradient-to-b from-[#000000] to-[#12A87F]">
            <h3 className="font-bold Sub-heading text-[#FEFEFE]">Our Team</h3>
            <div>
              <Image src="/Dentobees-AboutUs-Team.svg" alt="Dentobees Team" width={1250} height={485} className="w-[1250px] rounded-[16px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

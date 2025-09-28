"use client";
import React from "react";
import { Image } from "@nextui-org/image";

const metaTestimonials = [
  {
    description:
      "Switching to Dentobees was one of the best decisions for our clinic. Earlier, we were manually following up with patients, and it was honestly exhausting. Now, everything’s automated — reminders, recalls, even billing feels smoother. It’s like having an extra team member who never forgets anything. Highly recommend it to any dental clinic wanting to work smarter!",
    image: "/Meta-Dentobees-dr-Image-One.svg",
    name: "Dr. Anjali Menon BDS",
    clinicName: "Smile Bright Dental Care"
  },
  {
    description:
      "Dentobees just gets it. Every small issue we faced — missed recalls, patient reminders, managing the front desk — it’s like they already knew. Now my team is less stressed, patients are more regular, and I can finally focus on treatment without worrying about the system behind it.",
    image: "/Meta-Dentobees-dr-Image-Two.svg",
    name: "Dr. Rahul Nair MDS",
    clinicName: "City Dental Studio"
  }
];

const MetaTestimonials = () => {
  return (
    <div className="">
      <div className="Common-padding pt-6 pb-10 flex flex-col gap-[25px]">
        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-[28px] lg:text-[40px] leading-[35.68px] lg:leading-[55.68px] tracking-[-0.04em] w-[300px] md:w-full bg-gradient-to-r from-[#332F2F] via-[#08B038] to-[#332F2F] bg-clip-text text-transparent animate-gradient">
            Our Clients can't say enough about us!
          </h4>
          <p className="w-full font-medium Large-text text-[#6A6565] text-left">
            See how Dentobees transforms dental clinics! Hear from satisfied
            clients who streamlined operations easily.
          </p>
          <div className="flex justify-center items-center">
            <Image
              src="/Meta-Dentobees-Testimonials-Image.svg"
              alt="Rating"
              width={274}
              height={360}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {metaTestimonials.map((item, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div className="flex gap-2.5 items-center">
                <Image
                  src="/Dentobees-Reviews-Rating.svg"
                  alt="Rating Star"
                  width={24}
                  height={24}
                />
                <Image
                  src="/Dentobees-Reviews-Rating.svg"
                  alt="Rating Star"
                  width={24}
                  height={24}
                />
                <Image
                  src="/Dentobees-Reviews-Rating.svg"
                  alt="Rating Star"
                  width={24}
                  height={24}
                />
                <Image
                  src="/Dentobees-Reviews-Rating.svg"
                  alt="Rating Star"
                  width={24}
                  height={24}
                />
                <Image
                  src="/Dentobees-Reviews-Rating.svg"
                  alt="Rating Star"
                  width={24}
                  height={24}
                />
              </div>
              <p className="font-normal Normal-text text-[#3C3C3C]">
                “ {item.description} ”
              </p>
              <div className="flex flex-row gap-3 items-center">
                <div className="shrink-0">
                  <Image
                    src={item.image}
                    alt="Doctor Image"
                    width={44}
                    height={44}
                    className="w-[44px] h-[44px] rounded-full"
                  />
                </div>
                <p className="flex flex-col gap-1 items-start">
                  <span className="font-bold Normal-text text-B1">
                    {item.name}
                  </span>
                  <span className="font-normal Small-text text-[#3C3C3C]">
                    {item.clinicName}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetaTestimonials;

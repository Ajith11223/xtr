"use client";
import React, { useEffect, useState } from "react";
import { Image } from "@nextui-org/image";
import { Card } from "@heroui/react";

const testimonials = [
  {
    image: "/best-dental-doctor-malappuram-kerala-dentobees-software.png",
    alt:"Best Dental Clinic Software Kerala",
    review:
      "Earlier, we were doing everything manually – billing, appointments, patient records... It was very time-consuming. After using Dentobees, everything is in one place. Now I can easily check past treatments, give digital prescriptions, and send reminders on WhatsApp. It’s very easy to use. Definitely the best dental clinic management software I’ve tried! ",
    name: "Shadiya MK",
    position: "BDS, Malappuram"
  },
  {
    image: "/orthodontist-kerala-dr-jamal-ma.png",
    alt:"Dental Doctors Software India",
    review:
      "I’m not very tech-savvy, but Dentobees is very user-friendly. Even my receptionist learned it quickly. I can now manage appointments, track payments, and send treatment plans directly from the software. The patient record system is very clear. Highly recommended for small and mid-size clinics!",
    name: "Jamal MA",
    position: "Orthodontist, Calicut"
  },
  {
    image: "/orthodentist-doctors-calicut-kozhikode-deepak.png",
    alt:"Best Dental Clinic Software Kerala",
    review:
      "Dentobees helped me go completely paperless. Everything from x-rays, case sheets, payments, and follow-ups is organized digitally. It saves me so much time. Also, the WhatsApp integration is a game-changer – my patients love getting appointment reminders. One of the smartest dental ERP systems available!",
    name: "Deepak Nair",
    position: "Orthodontist, Calicut"
  },
  {
    image: "/dental-surgeon-dr-muhammed-ali.png",
    alt:"Dental Doctors Software India",
    review:
      "After switching to Dentobees, I can see a big change in clinic operations. No more confusion in schedules or billing. I can check reports, daily earnings, and staff performance easily. It really helps in managing a dental practice in a more professional way. Must-have clinic software for all dentists.",
    name: "Muhammad Ali",
    position: "Dental Surgeon, Calicut"
  },
  {
    image: "/pediatric-dentist-kerala-veena-max-dental-clinic-malappuram.png",
    alt:"Best Pediatric Dentist Kerala",
    review:
      "Managing kids’ dental cases needs good follow-up and reminders. Dentobees does that perfectly. It’s easy to use, affordable, and saves me a lot of time every day. I can now focus more on patient care. Best decision to use this dental practice software for my clinic!",
    name: "Veena M",
    position: "Pediatric Dentist, Malappuram"
  }
];

const TestimonialsCarousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="h-[400px] md:h-[430px] lg:h-[450px] xl:h-[500px] overflow-hidden relative flex justify-end">
      <div className="relative h-full w-full max-w-[420px] flex justify-center md:justify-start items-center">
        {testimonials.map((item, index) => {
          let position =
            (index - currentIndex + testimonials.length) % testimonials.length;

          let cardStyle = {};
          if (position === 0) {
            cardStyle = {
              transform: "translateY(0) scale(1)",
              opacity: 1,
              zIndex: 2
            };
          } else if (position === 1) {
            cardStyle = {
              transform: "translateY(100%) scale(0.9)",
              opacity: 0.6,
              zIndex: 1
            };
          } else if (position === testimonials.length - 1) {
            cardStyle = {
              transform: "translateY(-100%) scale(0.9)",
              opacity: 0.6,
              zIndex: 1
            };
          } else {
            cardStyle = {
              transform: "translateY(0) scale(0)",
              opacity: 0,
              zIndex: 0
            };
          }

          return (
            <div
              key={index}
              className="absolute w-full transition-all duration-1000 ease-in-out"
              style={cardStyle}
            >
              <Card
                isFooterBlurred
                className="border-none bg-[#F7F6FB] rounded-[16px] shadow-none"
              >
                <div className="p-3 md:p-4 lg:p-5 rounded-[16px]">
                  <div className="flex flex-col gap-5 md:gap-6">
                    <p className="font-semibold text-[12.24px] lg:text-[14.24px] leading-[16.45px] lg:leading-[19.45px] tracking-[-0.02em] text-[#1A1B1D] pr-[5%]">
                      {item.review}
                    </p>
                    <div className="flex gap-5 items-center">
                      <div className="rounded-[50%]">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          width={52.29}
                          height={52.29}
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-[20px] lg:text-[24px] leading-[24px] lg:leading-[28px] text-[#000000]">
                          Dr. {item.name}
                        </p>
                        <p className="font-semibold text-[12.24px] lg:text-[14.24px] leading-[16.45px] lg:leading-[19.45px] text-[#B9B9B9]">
                          {item.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialsCarousal;

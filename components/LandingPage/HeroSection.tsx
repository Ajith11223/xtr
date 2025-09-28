"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Image } from "@nextui-org/image";
import EnquiryModal from "../Common/EnquiryModal";
import { Button, Input } from "@heroui/react";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const subTextVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } },
  };

  const smoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <div className="relative overflow-hidden">
        <div className="absolute" />
        <div className="Common-padding">
          <div className="pt-[120px] md:pt-[130px] xl:pt-[140px] flex flex-col gap-[30px] md:gap-10 xl:gap-[50px] w-full justify-center items-center">
            <div className="flex flex-col gap-5 md:gap-6 items-center z-0">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={headingVariants}
              >
                <h2 className="w-full sm:w-[495px] md:w-[550px] lg:w-[620px] xl:w-[770px] px-3 sm:px-0 Page-Heading text-center">
                  Find Your Dream Car
                </h2>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={subTextVariants}
              >
                <div className="flex flex-col  gap-5 md:gap-6">
                  <p className="w-[280px] sm:w-full font-medium Large-text text-[#6A6565] text-center">
                    Quality Pre-Owned Vehicles. No Hassle. No Pressure.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center w-full justify-center">
                    <Input
                      isDisabled
                      className="max-w-xl"
                      label="Search your car"
                      type="email"
                      variant="bordered"
                    />
                    <Button color="default" size="lg">
                      Search
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
            >
              <div>
                <Image
                  src="/xtr2.jpeg"
                  alt="Image"
                  width={994.7}
                  className="w-full h-full md:w-[600px] lg:w-[700px] xl:w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <EnquiryModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default HeroSection;

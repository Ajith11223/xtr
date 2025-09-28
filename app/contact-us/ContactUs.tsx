"use client";
import React from "react";
import Link from "next/link";
import PageEnquiryFooter from "@/components/Common/PageEnquiryFooter";

const ContactUs = () => {
  return (
    <div className="relative overflow-hidden z-0 bg-white">
      <div className="absolute Dentobees-Pages-Background -z-10"></div>
      <div className="pt-[110px] md:pt-[130px] xl:pt-[150px] flex flex-col gap-10 md:gap-16 xl:gap-[80px]">
        <div className="Common-padding flex flex-col items-center">
          <div className="w-full max-w-[1700px] flex flex-col gap-7 md:gap-10 lg:gap-[50px] xl:gap-[60px]">
            <div className="w-full flex flex-col md:flex-row gap-5 md:gap-[30px] items-center md:justify-between">
              <h3 className="max-w-[340px] md:max-w-[310px] lg:max-w-[390px] xl:max-w-[500px] Page-Heading text-center md:text-left">
                We are here to grow your clinic
              </h3>
              <p className="max-w-[380px] md:max-w-[350px] lg:max-w-[400px] font-bold Medium-heading text-[#3E3A3A] text-center md:text-left">
                Have a question? We’re here for you - reach out anytime via
                call, WhatsApp, or email.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-11">
              <div className="p-3 md:p-5 lg:p-6 flex flex-col gap-5 xl:gap-[30px] border-[1px] lg:border-none bg-[#FFFFFFB2] backdrop-blur-[19%] rounded-[16px]">
                <h5 className="font-bold Medium-heading text-[#3E3A3A]">
                  Looking for support?
                </h5>
                <p className="font-normal Normal-text text-[#3E3A3A]">
                  Our dedicated team is just a call or email away. Reach us at{" "}
                  <span className="font-semibold">+91 8086014345</span> or drop
                  us a message—we're happy to help!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xl:gap-[30px]">
                  <Link
                    href="https://wa.me/918086014345?text=I%20would%20like%20to%20know%20more%20about%20Dentobees"
                    target="_blank"
                    className="ContactUs-button"
                  >
                    Message Support Team
                  </Link>
                  <Link href="tel:+918086014345" className="ContactUs-button">
                    Call Support Team
                  </Link>
                </div>
              </div>
              <div className="p-3 md:p-5 lg:p-6 flex flex-col gap-5 xl:gap-[30px] border-[1px] lg:border-none bg-[#FFFFFFB2] backdrop-blur-[19%] rounded-[16px]">
                <h5 className="font-bold Medium-heading text-[#3E3A3A]">
                  Say hello!
                </h5>
                <p className="font-normal Normal-text text-[#3E3A3A]">
                  Want to connect, collaborate, or know more about Dentobees?
                  We’d love to hear from you!
                </p>
                <p className="font-bold Normal-text text-[#3E3A3A]">
                  Support@dentobees.com
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 lg:gap-10 xl:gap-[70px] items-center justify-between">
              <div className="flex flex-col gap-2 md:gap-5 lg:gap-6">
                <h5 className="font-bold Large-heading text-[#3E3A3A]">
                  Find us here
                </h5>
                <p className="flex flex-col gap-3 Normal-text text-[#3E3A3A]">
                  <span className="font-bold">Dentobees Innovations LLP</span>
                  <span className="w-full sm:w-[250px] md:w-[300px] lg:w-[530px] font-normal">
                    Door No.2328, 3rd Floor, Phase 2, Hilite Business Park,
                    Hilite City, Kozhikode - 673014, Kerala, India
                  </span>
                </p>
              </div>
              <div className="w-full md:w-[400px] xl:w-[600px] h-[250px] xl:h-[300px] rounded-[16px]">
                <iframe
                  title="Google map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.1845225250972!2d75.83155997452292!3d11.247832550322702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65bbe50ea0b7d%3A0xc4e01eaa6234847e!2sHiLITE%20Business%20Park%2C%20Poovangal%2C%20Pantheeramkavu%2C%20Kerala%20673014!5e0!3m2!1sen!2sin!4v1746008157651!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  className="rounded-[16px]"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div>
          <PageEnquiryFooter />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

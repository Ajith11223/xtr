'use client'
import React, { useState } from "react";
import Image from "next/image";
import EnquiryModal from "./EnquiryModal";

const PageEnquiryFooter = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="relative overflow-hidden z-0">
                <div className="absolute Dentobees-Founders-Background -z-10"></div>
                <div className="Common-padding flex flex-col items-center">
                    <div className='pt-8 md:pt-10 xl:pt-[60px] flex flex-col-reverse xl:flex-row gap-5 md:gap-7 xl:gap-20 items-center xl:items-start'>
                        <div>
                            <Image src="/Dentobees-Pricing-Tab.svg" alt="Pricing Tab" width={479} height={356} className="w-[370px] xl:w-[479px]" />
                        </div>
                        <div className="flex flex-col gap-6 xl:pt-3 items-center xl:items-start">
                            <div className="max-w-[300px] md:max-w-[480px] flex flex-col gap-3">
                                <h5 className="font-bold Sub-heading text-[#3E3A3A] text-center xl:text-start">Experience Dentobees in Action</h5>
                                <p className="font-normal Normal-text text-[#6A6565] text-center xl:text-start">
                                    Discover how Dentoobees can simplify your clinic operations. Book a personalized demo with our experts today!
                                </p>
                            </div>
                            <button onClick={() => setIsOpen(true)} className="w-fit Green-gradient-button">
                                <p className="py-2.5 px-6 Green-gradient-button-text">Book A Free Demo</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <EnquiryModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )
}

export default PageEnquiryFooter
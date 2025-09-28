'use client'
import React, { useState } from "react";
import { Image } from "@nextui-org/image";
import WhyChooseUsCarousel from "./WhyChooseUsCarousel";
import EnquiryModal from "../Common/EnquiryModal";

const keySentences = [
    { text: "⁠Efficient Patient care" },
    { text: "⁠Detailed financial reports" },
    { text: "Dental Lab and Pharmacy Management" },
    { text: "⁠Expense and Income Management" },
    { text: "Mobile Apps for doctors and patients" },
];

const WhyChooseUs = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='relative overflow-hidden rounded-t-[30px] sm:rounded-t-[45px] lg:rounded-t-[55px] xl:rounded-t-[70px]'>
                <div className="absolute opacity-50 Dentobees-WhyChooseUs-Background-Gradient" />
                <div className="absolute -mt-10 -md:mt-16 -xl:mt-20 Dentobees-WhyChooseUs-TopBackground" />
                <div className="absolute mt-10 md:mt-16 xl:mt-20 Dentobees-WhyChooseUs-BottomBackground" />
                <div className='bg-gradient-to-b from-[#000000] to-[#12A87F] Common-padding pb-[250px] md:pb-[270px] lg:pb-[300px] xl:pb-[320px] 2xl:pb-[350px]'>
                    <div className='pt-[100px] sm:pt-[120px] lg:pt-[150px] xl:pt-[180px] flex flex-col items-center'>
                        <div className='w-full max-w-[1700px] flex flex-col gap-10 md:gap-[50px] xl:gap-[60px]'>
                            <div className='flex flex-col sm:flex-row gap-7 sm:justify-between items-center'>
                                <div className='flex flex-col gap-[14px] items-center'>
                                    <Image src="/Dentobees-Grow-Your-Patient-Base.svg" alt="Image" width={72} height={69.61} />
                                    <p className='w-[157px] lg:w-[215px] WhyChooseUs-feature bg-gradient-to-r from-[#66B48D] via-[#08B038] to-[#332F2F] bg-clip-text text-transparent text-center z-10 animate-gradient'>
                                        Grow your patient base
                                    </p>
                                </div>
                                <div className='flex flex-col gap-[14px] items-center'>
                                    <Image src="/Dentobees-Improve-Operations.svg" alt="Image" width={87} height={64.04} />
                                    <p className='w-[152px] lg:w-[200px] WhyChooseUs-feature bg-gradient-to-r from-[#66B48D] via-[#08B038] to-[#332F2F] bg-clip-text text-transparent text-center z-10 animate-gradient'>
                                        Improve Operations
                                    </p>
                                </div>
                                <div className='flex flex-col gap-[14px] items-center'>
                                    <Image src="/Dentobees-Collect-And-Track-Better.svg" alt="Image" width={79} height={63.98} />
                                    <p className='w-[158px] lg:w-[210px] WhyChooseUs-feature bg-gradient-to-r from-[#66B48D] via-[#08B038] to-[#332F2F] bg-clip-text text-transparent text-center z-10 animate-gradient'>
                                        Collect & Track Better
                                    </p>
                                </div>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-5 gap-7 bg-gradient-to-r from-[#FFFFFFBA] to-[#F5F1F1BA] backdrop-blur-[18%] rounded-[16px] z-10'>
                                <div className='md:col-span-2 flex flex-col items-center md:items-start gap-6 md:gap-8 md:h-full md:justify-between'>
                                    <div className='md:pl-5 lg:pl-8 xl:pl-[50px] pt-5 lg:pt-8 xl:pt-[40px] flex flex-col items-center md:items-start gap-5 md:gap-6'>
                                        <h4 className='font-bold text-[28px] lg:text-[40px] leading-[35.68px] lg:leading-[55.68px] tracking-[-0.04em] text-[#3E3A3A]'>
                                            Why Chose Us
                                        </h4>
                                        <p className='w-full md:max-w-[280px] lg:max-w-[310px] px-7 sm:px-20 md:px-0 font-normal Normal-text text-[#3E3A3A] text-justify md:text-start'>
                                            Simplify dental practice with easy onboarding, multi-dental clinic management, and automated scheduling tools.
                                        </p>
                                        <div>
                                            <button onClick={() => setIsOpen(true)} className='w-fit Green-gradient-button'>
                                                <p className='py-2.5 px-6 Green-gradient-button-text'>
                                                    Book A Free Demo
                                                </p>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='md:ml-3 lg:ml-5 xl:ml-0 xl:pl-10'>
                                        <Image src="/Dentobees-WhyChooseUs-Doctor.svg" alt="Dental Hospital Software Kerala" width={225.78} className='md:hidden' />
                                        <Image src="/Dentobees-WhyChooseUs-Doctor.svg" alt="Dental Hospital Software Kerala" width={255.78} className='hidden md:block' />
                                    </div>
                                </div>
                                <div className="md:col-span-3 h-[350px] md:h-[650px] lg:h-[660px]">
                                    <WhyChooseUsCarousel />
                                </div>
                            </div>
                            <div className='-mt-3 flex flex-col md:flex-row gap-5 md:gap-7 md:items-start w-full md:justify-between z-10'>
                                <p className='max-w-[385px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[480px] font-bold text-[30px] lg:text-[48px] leading-[36px] lg:leading-[55.68px] tracking-[-0.04em] text-[#F5FDFB]'>
                                    Standardize Your Clinic Operations with Dentobees
                                </p>
                                <div className='flex flex-col gap-3 md:gap-5'>
                                    {keySentences?.map((item, i) => (
                                        <div key={i} className='flex gap-2 items-center w-full md:max-w-[400px] xl:max-w-[500px] lg:mr-7 xl:mr-20'>
                                            <div>
                                                <Image src="/Dentobees-Li-Before.svg" alt="Icon" width={28} height={28} className='w-[28px] h-[28px]' />
                                            </div>
                                            <p className='w-full font-normal Small-heading text-[#FFFFFF] pr-[5%] md:pr-[0%]'>
                                                {item.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <EnquiryModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>

    )
}

export default WhyChooseUs
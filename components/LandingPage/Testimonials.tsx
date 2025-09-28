'use client'
import React from "react"
import TestimonialsCarousal from "./TestimonialsCarousal";

const Testimonials = () => {
    return (
        <div className="relative overflow-hidden z-0">
            <div className="absolute -z-10 Dentobees-Testimonials-Background"></div>
            <div className="Common-padding w-full flex flex-col items-center">
                <div className='w-full max-w-[1700px] pt-9 md:py-0'>
                    <div className='grid grid-cols-1 md:grid-cols-11 lg:grid-cols-2 xl:grid-cols-7 gap-8 md:gap-7 items-center'>
                        <div className="md:col-span-5 lg:col-span-1 xl:col-span-4 ">
                            <div className='flex flex-col gap-5 md:gap-[25px] w-full sm:items-center md:items-start justify-start sm:justify-center md:justify-start'>
                                <h2 className='max-w-[430px] sm:max-w-[365px] md:max-w-full xl:max-w-[505px] pr-[10%] sm:pr-0 font-bold text-[40px] lg:text-[48px] xl:text-[54px] leading-[46.64px] md:leading-[50.64px] lg:leading-[54.64px] xl:leading-[62.64px] tracking-[-0.04em] text-[#3E3A3A] sm:text-center md:text-start'>
                                    Our Clients can’t say enough about us
                                </h2>
                                <p className='sm:w-[410px] md:w-full xl:w-[480px] pr-[5%] sm:pr-0 font-normal Normal-text text-[#6A6565]'>
                                    See how Dentobees transforms dental clinics! Hear from satisfied clients who streamlined operations easily.
                                </p>
                            </div>
                        </div>
                        <div className='md:col-span-6 lg:col-span-1 xl:col-span-3'>
                            <div>
                                <TestimonialsCarousal />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
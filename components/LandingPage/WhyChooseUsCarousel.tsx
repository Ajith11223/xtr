'use client'
import React from "react"
import { Image } from "@nextui-org/image";

const data = [
    {
        imageOne: "/Dentobees-Multi-Clinic-Branch-Management.avif",
        headingOne: "Multi-Clinic Branch Management",
        descriptionOne: "Manage multiple clinic branches seamlessly with centralised operations.",
        imageTwo: "/Dentobees-Efficient-Appointment-And-Booking-System.avif",
        headingTwo: "Efficient Appointment and Booking System",
        descriptionTwo: "Optimized scheduling through an automated appointment booking system.",
    },
    {
        imageOne: "/Dentobees-Dental-Charts-And-Treatment-Management.avif",
        headingOne: "Dental Charts and Treatment Management",
        descriptionOne: "Dental chart markings for accurate diagnosis and well-structured treatment plans.",
        imageTwo: "/Dentobees-Patient-Profiles-And-Treatment-Plans.avif",
        headingTwo: "Patient Profiles and Treatment Plans",
        descriptionTwo: "Effective patient management with treatment plans, and detailed health records.",
    },
    {
        imageOne: "/Dentobees-Billing-Invoicing-And-Payment-Collection.avif",
        headingOne: "Billing, Invoicing, and Payment Collection",
        descriptionOne: "Create and share invoices for treatments, lab, and pharmacy with full/partial payments.",
        imageTwo: "/Dentobees-WhatsApp-Integrated-Patient-Engagement.avif",
        headingTwo: "WhatsApp Integrated Patient Engagement",
        descriptionTwo: "Notify patients of appointments, tokens, invoices, and treatment plans via WhatsApp.",
    },
    {
        imageOne: "/Dentobees-Doctor-Practice-Dashboard.avif",
        headingOne: "Doctor’s Practice Dashboard",
        descriptionOne: "Doctors can manage appointments, practices, revenue, attendance, and salaries through the dashboard.",
        imageTwo: "/Dentobees-Cloud-Based-Technology-With-Secure-Backups.avif",
        headingTwo: "Cloud-Based Technology with Secure Backups",
        descriptionTwo: "Run the software on the cloud with secure backups, eliminating server and restore concerns.",
    },
];

const WhyChooseUsCarousel = () => {
    return (
        <div className="h-full overflow-hidden">
            <div className="continuous-scroll">
                {[...data, ...data].map((item, index) => (
                    <div key={index} className="content-item">
                        <div>
                            <div className="grid grid-cols-1 lg:hidden">
                                <div className="grid grid-cols-1 pl-2.5 pr-2.5 md:pl-0 md:pr-0">
                                    <div className="md:border-l-[1px] border-b-[1px] border-B2">
                                        <Image src={item.imageOne} alt="Image" width={405} />
                                    </div>
                                    <div className="md:border-l-[1px] border-b-[1px] border-B2 p-3 md:p-5 flex flex-col gap-[14px]">
                                        <h5 className="font-bold text-[20px] leading-[23.84px] tracking-[-0.04em] text-[#3E3A3A] max-w-[280px]">
                                            {item.headingOne}
                                        </h5>
                                        <p className="font-normal text-[16px] leading-[18.88px] tracking-[-0.04em] text-[#383636] max-w-[320px]">
                                            {item.descriptionOne}
                                        </p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 pl-2.5 pr-2.5 md:pl-0 md:pr-0">
                                    <div className="md:border-l-[1px] border-b-[1px] border-B2">
                                        <Image src={item.imageTwo} alt="Image" width={405} />
                                    </div>
                                    <div className="md:border-l-[1px] border-b-[1px] border-B2 p-3 md:p-5 flex flex-col gap-[14px]">
                                        <h5 className="font-bold text-[20px] leading-[23.84px] tracking-[-0.04em] text-[#3E3A3A] max-w-[280px]">
                                            {item.headingTwo}
                                        </h5>
                                        <p className="font-normal text-[16px] leading-[18.88px] tracking-[-0.04em] text-[#383636] max-w-[320px]">
                                            {item.descriptionTwo}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:grid grid-cols-1 w-full">
                                <div className="flex flex-col">
                                    <div className="grid grid-cols-2">
                                        <div className="border-l-[1px] border-b-[1px] border-B2">
                                            <Image src={item.imageOne} alt="Image" width={405} />
                                        </div>
                                        <div className="border-l-[1px] border-b-[1px] border-B2">
                                            <Image src={item.imageTwo} alt="Image" width={405} />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="border-l-[1px] border-b-[1px] border-B2 p-5 xl:p-[30px] flex flex-col gap-[14px]">
                                            <h5 className="font-bold text-[24px] leading-[27.84px] tracking-[-0.04em] text-[#3E3A3A] max-w-[280px]">
                                                {item.headingOne}
                                            </h5>
                                            <p className="font-normal text-[18px] leading-[20.88px] tracking-[-0.04em] text-[#383636] max-w-[320px]">
                                                {item.descriptionOne}
                                            </p>
                                        </div>
                                        <div className="border-l-[1px] border-b-[1px] border-B2 p-5 xl:p-[30px] flex flex-col gap-[14px]">
                                            <h5 className="font-bold text-[24px] leading-[27.84px] tracking-[-0.04em] text-[#3E3A3A] max-w-[280px]">
                                                {item.headingTwo}
                                            </h5>
                                            <p className="font-normal text-[18px] leading-[20.88px] tracking-[-0.04em] text-[#383636] max-w-[320px]">
                                                {item.descriptionTwo}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyChooseUsCarousel
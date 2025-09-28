"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageEnquiryFooter from "@/components/Common/PageEnquiryFooter";

const Features = () => {
  return (
    <div className="relative overflow-hidden z-0 bg-white">
      <div className="absolute Dentobees-Pages-Background -z-10"></div>
      <div className="flex flex-col gap-10 md:gap-16 xl:gap-[80px]">
        <div className="Common-padding pt-[110px] md:pt-[130px] xl:pt-[150px] flex flex-col items-center gap-7 md:gap-12 lg:gap-16 xl:gap-[80px]">
          <h3 className="w-full flex flex-col Page-Heading text-center">
            <span>What Makes Us Different?</span>
            <span className="Sub-heading">See Our Features in Action</span>
          </h3>
          <div className="w-full max-w-[1700px] flex flex-col gap-9 lg:gap-14 xl:gap-[80px]">
            <div className="w-full flex flex-col lg:flex-row gap-[30px] items-center justify-between">
              <div className="lg:w-[500px] xl:w-[600px] flex flex-col gap-5 xl:gap-[36px] items-center lg:items-start">
                <h5 className="font-bold Sub-heading text-[#3E3A3A] text-center lg:text-left">All-in-One Clinic Management</h5>
                <div className="lg:hidden rounded-[16px]">
                  <Image src="/Dentobees-Features.avif" alt="Image" width={618} height={486} className="w-[400px] rounded-[16px]" />
                </div>
                <p className="flex flex-col gap-4 font-normal Feature-text text-[#6A6565] text-justify">
                  <span>Dentobees is built for modern dental professionals who want to simplify operations, grow efficiently, and deliver consistent care across locations. Whether you're running a solo clinic or managing a chain, Dentobees gives you full control with a centralized, cloud-based system that’s fast, secure, and accessible from anywhere. You can add new clinic branches in minutes, monitor real-time performance, and standardize operations using prebuilt, customizable templates designed specifically for dental practices.</span>
                  <span>From multi-currency support and daily financial audits to automated workflows and a free SEO-optimized website landing page, Dentobees ensures your clinic runs like a well-oiled machine. Backed by enterprise-level data securityand seamless scalability, this all-in-one solution is the foundation for growing your practice with confidence—no tech expertise needed.</span>
                </p>
                <div className="flex w-full justify-start">
                  <Link href="/features/about-feature" className="w-fit Green-gradient-button">
                    <p className="py-2.5 px-6 White-gradient-button-text">See More</p>
                  </Link>
                </div>
              </div>
              <div className="hidden lg:flex rounded-[16px]">
                <Image src="/Dentobees-Features.avif" alt="Image" width={618} height={486} className="lg:w-[500px] xl:w-[618px] rounded-[16px]" />
              </div>
            </div>

            <div className="w-full flex flex-col lg:flex-row gap-[30px] items-center justify-between">
              <div className="hidden lg:flex rounded-[16px]">
                <Image src="/Dentobees-Features-Appointment.avif" alt="Image" width={618} height={486} className="lg:w-[500px] xl:w-[618px] rounded-[16px]" />
              </div>
              <div className="lg:w-[500px] xl:w-[600px] flex flex-col gap-5 xl:gap-[36px] items-center lg:items-start">
                <h5 className="font-bold Sub-heading text-[#3E3A3A] text-center lg:text-left">Advanced Patient Experience & Engagement</h5>
                <div className="lg:hidden rounded-[16px]">
                  <Image src="/Dentobees-Features-Appointment.avif" alt="Image" width={618} height={486} className="w-[400px] rounded-[16px]" />
                </div>
                <p className="flex flex-col gap-4 font-normal Feature-text text-[#6A6565] text-justify">
                  <span>Dentobees puts your patients at the center of care with a seamless, tech-enabled experience that builds trust and loyalty. From the very first visit, you can create detailed patient profiles, plan treatments with interactive dental charts, and personalize care using treatment-based or plan-based consultation flows. Patients can easily book appointments, view their history, and stay updated through a secure self-service portal—all from their phone.</span>
                  <span>What sets Dentobees apart is its powerful WhatsApp integration, enabling instant reminders, follow-ups, and two-way engagement directly with patients. Combine that with smart recall systems, automated notifications, and transparent communication, and your practice becomes more than a service—it becomes a trusted partner in your patients’ oral health journey.</span>
                </p>
                <div className="flex w-full justify-start">
                  <Link href="/features/about-feature" className="w-fit Green-gradient-button">
                    <p className="py-2.5 px-6 White-gradient-button-text">See More</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col lg:flex-row gap-[30px] items-center justify-between">
              <div className="lg:w-[500px] xl:w-[600px] flex flex-col gap-5 xl:gap-[36px] items-center lg:items-start">
                <h5 className="font-bold Sub-heading text-[#3E3A3A] text-center  lg:text-left">Smart Staff & Role Management</h5>
                <div className="lg:hidden rounded-[16px]">
                  <Image src="/Dentobees-Features-Team-Management.avif" alt="Image" width={618} height={486} className="w-[400px] rounded-[16px]" />
                </div>
                <p className="flex flex-col gap-4 font-normal Feature-text text-[#6A6565] text-justify">
                  <span>Dentobees simplifies how you manage your team—so you can focus on patient care, not admin tasks. From tracking staff attendance, managing salaries and deductions, to assigning role-based permissions, everything is organized under one intelligent dashboard. With real-time performance tracking and built-in KPIs, you can evaluate staff productivity and streamline operations across the board.</span>
                  <span>Empower your team with dedicated mobile apps for doctors and staff, ensuring they stay connected and updated on schedules, tasks, and patient flow. Send automated alerts and reminders via SMS, email, or WhatsApp to eliminate miscommunication. Whether you're managing a solo assistant or a multi-role team across branches, Dentobees gives you total visibility and control with ease.</span>
                </p>
                <div className="flex w-full justify-start">
                  <Link href="/features/about-feature" className="w-fit Green-gradient-button">
                    <p className="py-2.5 px-6 White-gradient-button-text">See More</p>
                  </Link>
                </div>
              </div>
              <div className="hidden lg:flex rounded-[16px]">
                <Image src="/Dentobees-Features-Team-Management.avif" alt="Image" width={618} height={486} className="lg:w-[500px] xl:w-[618px] rounded-[16px]" />
              </div>
            </div>

            <div className="w-full flex flex-col lg:flex-row gap-[30px] items-center justify-between">
              <div className="hidden lg:flex rounded-[16px]">
                <Image src="/Dentobees-Dental-Erp-Invoices.avif" alt="Image" width={618} height={486} className="lg:w-[500px] xl:w-[618px] rounded-[16px]" />
              </div>
              <div className="lg:w-[500px] xl:w-[600px] flex flex-col gap-5 xl:gap-[36px] items-center lg:items-start">
                <h5 className="font-bold Sub-heading text-[#3E3A3A] text-center lg:text-left">Billing, Payments & Insights</h5>
                <div className="lg:hidden rounded-[16px]">
                  <Image src="/Dentobees-Dental-Erp-Invoices.avif" alt="Image" width={618} height={486} className="w-[400px] rounded-[16px]" />
                </div>
                <p className="flex flex-col gap-4 font-normal Feature-text text-[#6A6565] text-justify">
                  <span>Take full control of your clinic’s finances with Dentobees’ smart and automated billing system. Generate professional invoices, manage payment collections, and track expenses and income effortlessly—all in one place. With automated billing workflows and support for multiple payment methods, your clinic stays organized, compliant, and always cash-flow ready.</span>
                  <span>Go beyond basic accounting with real-time performance reports, multi-branch analytics, and actionable insights into revenue trends, treatment profitability, and staff contributions. Integrated modules for pharmacy and dental lab management ensure every financial aspect of your practice is covered. With Dentobees, you don’t just track numbers—you make data-driven decisions that grow your practice.</span>
                </p>
                <div className="flex w-full justify-start">
                  <Link href="/features/about-feature" className="w-fit Green-gradient-button">
                    <p className="py-2.5 px-6 White-gradient-button-text">See More</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col lg:flex-row gap-[30px] items-center justify-between">
              <div className="lg:w-[500px] xl:w-[600px] flex flex-col gap-5 xl:gap-[36px] items-center lg:items-start">
                <h5 className="font-bold Sub-heading text-[#3E3A3A] text-center lg:text-left">Premium Features & Integrations</h5>
                <div className="lg:hidden rounded-[16px]">
                  <Image src="/Dentobees-Customer-Support.avif" alt="Image" width={618} height={486} className="w-[400px] rounded-[16px]" />
                </div>
                <p className="flex flex-col gap-4 font-normal Feature-text text-[#6A6565] text-justify">
                  <span>Unlock the full potential of your dental practice with Dentobees Premium. Designed for scaling clinics and multi-location operations, our premium suite includes advanced analytics for revenue, retention, and staff performance—giving you deep insights to drive strategic growth. Create custom workflows, streamline approval processes, and integrate seamlessly with your existing systems through powerful API access.</span>
                  <span>Enjoy the benefits of 24/7 priority support, a dedicated account manager, and enhanced WhatsApp Business APItools for high-volume engagement. Plus, manage your inventory across multiple branches, including pharmacy and lab stock, with complete visibility and control. With Dentobees Premium, you gain the tools, flexibility, and support needed to lead in modern dental care.</span>
                </p>
                <div className="flex w-full justify-start">
                  <Link href="/features/about-feature" className="w-fit Green-gradient-button">
                    <p className="py-2.5 px-6 White-gradient-button-text">See More</p>
                  </Link>
                </div>
              </div>
              <div className="hidden lg:flex rounded-[16px]">
                <Image src="/Dentobees-Customer-Support.avif" alt="Image" width={618} height={486} className="lg:w-[500px] xl:w-[618px] rounded-[16px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <PageEnquiryFooter />
        </div>
      </div>
    </div>
  );
};

export default Features;

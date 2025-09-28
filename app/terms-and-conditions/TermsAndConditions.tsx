"use client";
import React from "react";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { SlLocationPin, SlPhone } from "react-icons/sl";

const TermsAndConditions = () => {
  return (
    <div>
      <div className="relative overflow-hidden z-0 bg-white">
        <div className="absolute Dentobees-Pages-Background -z-10 opacity-35"></div>
        <div className="Common-padding pt-[110px] md:pt-[130px] xl:pt-[150px] pb-[90px] md:pb-[110px] flex flex-col items-center">
          <div className="w-full max-w-[1700px] flex flex-col gap-8 md:gap-10 text-[#3E3A3A]">
            <h3 className="font-bold Sub-heading text-center">Terms and Conditions</h3>
            <div className="flex flex-col gap-5 md:gap-8 font-normal Normal-text">
              <div className="flex flex-col gap-3">
                <p className="font-bold Terms-text">Introduction</p>
                <p>Welcome to Dentobees.com . By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions . Please read them carefully before using our services. If you do not agree with these Terms, you may not access or use the platform.</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-bold Terms-text">Overview of Services</p>
                <p>Dentobees.com provides a Software-as-a-Service (SaaS) platform designed for dental professionals and clinics to manage their operations, including appointments, billing, staff, patient engagement, and more. It also includes tools for online/offline event promotion and management under the EventHunt.app initiative.</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-bold Terms-text">Eligibility</p>
                <p>You must be at least 18 years old to use our services. By using our platform, you represent and warrant that you have the right, authority, and capacity to enter into these Terms and abide by them.</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-bold Terms-text">Account Registration</p>
                <div className="flex flex-col gap-2">
                  <p>To access certain features, you must create an account. You agree to:</p>
                  <p className="ml-5 md:ml-8 xl:ml-10 flex flex-col gap-2">
                    <span>Provide accurate, current, and complete information.</span>
                    <span>Maintain the security of your login credentials.</span>
                    <span>Notify us immediately of any unauthorized use.</span>
                    <span>We reserve the right to suspend or terminate accounts that violate our Terms or misuse the platform.</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-bold Terms-text">Subscription Plans and Payments</p>
                <div className="flex flex-col gap-2">
                  <p>We offer multiple subscription plans (Free, Basic, and Premium). By subscribing:</p>
                  <p className="ml-5 md:ml-8 xl:ml-10 flex flex-col gap-2">
                    <span>You authorize us to charge applicable fees on a recurring basis.</span>
                    <span>All payments are non-refundable unless required by law.</span>
                    <span>You may cancel your subscription at any time, but access to premium features will end after the billing cycle.</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-bold Terms-text">User Responsibilities</p>
                <p className="flex flex-col gap-2">
                  <span>Use the platform for any unlawful purpose.</span>
                  <span>Upload or transmit harmful or malicious content.</span>
                  <span>Attempt unauthorized access to systems or data.</span>
                  <span>Share account access with unauthorized users.</span>
                  <span>You are responsible for maintaining the confidentiality of your data and credentials.</span>
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-bold Terms-text">Intellectual Property</p>
                <p>All content, logos, designs, and technology on Dentobees.com are owned by us or our licensors. You may not copy, distribute, or reverse-engineer any part of the platform without prior written consent.</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-bold Terms-text">Data Privacy and Security</p>
                <p>Your data privacy is important to us. We use secure cloud-based infrastructure with daily backups and data encryption. For more information, please refer to our <Link href="/privacy-policy" className="hover:text-B1 Hover-effect">(Privacy Policy)</Link>.</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-bold Terms-text">Third-Party Integrations</p>
                <p>Our platform may integrate with third-party services like WhatsApp. By using these features, you agree to the respective third-party terms. We are not responsible for any issues arising from such integrations.</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-bold Terms-text">Limitation of Liability</p>
                <div className="flex flex-col gap-2">
                  <p>To the fullest extent permitted by law, Dentobees.com shall not be liable for:</p>
                  <p className="ml-5 md:ml-8 xl:ml-10 flex flex-col gap-2">
                    <span>Any indirect, incidental, or consequential damages.</span>
                    <span>Loss of data or profits due to service interruptions.</span>
                    <span>Third-party actions or content uploaded by users.</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-bold Terms-text">Termination</p>
                <div className="flex flex-col gap-2">
                  <p>We may suspend or terminate your access to the platform at our discretion, especially in case of:</p>
                  <p className="ml-5 md:ml-8 xl:ml-10 flex flex-col gap-2">
                    <span>Breach of these Terms</span>
                    <span>Illegal activity</span>
                    <span>Non-payment of fees</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-bold Terms-text">Changes to Terms</p>
                <p>We may modify these Terms at any time. Updated terms will be posted with a revised effective date. Continued use of the platform constitutes acceptance of the changes.</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-bold Terms-text">Contact Us</p>
                <div className="flex flex-col gap-2">
                  <p>If you have any questions or concerns about this Privacy Policy or our practices, please contact us at:</p>
                  <div className="ml-5 md:ml-8 xl:ml-10 flex flex-col gap-2">
                    <Link href="tel:+919995960143" className="flex gap-3 items-center hover:text-B1 Hover-effect">
                      <span><SlPhone className="shrink-0" /></span> +91 8086014345
                    </Link>
                    <Link href="" target="_blank" className="flex gap-3 items-center hover:text-B1 Hover-effect">
                      <span><HiOutlineMail className="shrink-0" /></span> support@dentobees.com
                    </Link>
                    <p className="flex gap-3 items-center">
                      <span><SlLocationPin className="shrink-0" /></span> Door No.2328, 3rd Floor, Phase 2, Hilite Business Park, Hilite City, Kozhikode - 673014, Kerala, India  
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;

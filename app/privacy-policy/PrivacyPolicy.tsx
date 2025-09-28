"use client";
import React from "react";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { SlLocationPin, SlPhone } from "react-icons/sl";

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="relative overflow-hidden z-0 bg-white">
        <div className="absolute Dentobees-Pages-Background -z-10 opacity-35"></div>
        <div className="Common-padding pt-[110px] md:pt-[130px] xl:pt-[150px] pb-[90px] md:pb-[110px] flex flex-col items-center">
          <div className="w-full max-w-[1700px] flex flex-col gap-8 md:gap-10 text-[#3E3A3A]">
            <h3 className="font-bold Sub-heading text-center">Privacy Policy for Dentobees</h3>
            <div className="flex flex-col gap-5 md:gap-8 font-normal Normal-text">
              <div className="flex flex-col gap-3">
                <p className="font-bold Terms-text">Introduction</p>
                <p>Welcome to Dentobees . We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website at <Link href="https://www.dentobees.com/" target="_blank" className="font-bold hover:text-B1 Hover-effect">dentobees.com</Link> and use our services. By using the Website and services, you agree to the terms outlined in this Privacy Policy.</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-bold Terms-text">Information We Collect</p>
                <p className="flex flex-col gap-2">
                  <span>We collect various types of information to provide and improve our services, including:</span>
                  <span><span className="font-bold">Personal Information:</span> This includes data such as your name, email address, phone number, and other identifiable information you provide when creating an account or using our services.</span>
                  <span><span className="font-bold">Usage Data:</span> We may collect information on how the Website is accessed and used, including your IP address, browser type, browser version, pages of our Website that you visit, time and date of your visit, time spent on those pages, unique device identifiers, and other diagnostic data.</span>
                  <span><span className="font-bold">Cookies and Tracking Technologies:</span> We use cookies and similar tracking technologies to track activity on our Website and store certain information. Cookies help us improve the Website’s functionality and offer a better user experience. You can set your browser to refuse all cookies or to alert you when a cookie is being sent.</span>
                  <span><span className="font-bold">Payment Information:</span> When you make payments or purchases, we may collect payment-related information such as billing address, credit card details, and payment history. However, all payment transactions are processed securely via third-party payment processors.</span>
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-bold Terms-text">How We Use Your Information</p>
                <div className="flex flex-col gap-2">
                  <p>We use the information we collect for various purposes, including:</p>
                  <p className="ml-5 md:ml-10 xl:ml-16 flex flex-col gap-2">
                    <span>To provide, maintain, and improve our services.</span>
                    <span>To personalize your experience and respond to your customer service requests.</span>
                    <span>To process transactions and manage payments.</span>
                    <span>To send updates, newsletters, or promotional offers (with your consent).</span>
                    <span>To monitor the usage of our Website and analyze trends for improvement.</span>
                    <span>To comply with legal obligations and prevent fraud or unauthorized activities.</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-bold Terms-text">Data Sharing and Disclosure</p>
                <p className="flex flex-col gap-2">
                  <span>We do not sell, rent, or trade your personal information to third parties. However, we may share your information in the following circumstances:</span>
                  <span><span className="font-bold">Service Providers:</span> We may engage third-party vendors and service providers to assist with the operation of our Website and services, such as payment processors and cloud storage providers. These service providers have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.</span>
                  <span><span className="font-bold">Legal Requirements:</span> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</span>
                  <span><span className="font-bold">Business Transfers:</span> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change and outline your options.</span>
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-bold Terms-text">Data Security</p>
                <p>We use reasonable physical, technical, and administrative measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-bold Terms-text">Your Rights and Choices</p>
                <p className="flex flex-col gap-2">
                  <span><span className="font-bold">Access and Update Your Information:</span> You may access and update your personal information by logging into your account or contacting us directly.</span>
                  <span><span className="font-bold">Opt-Out of Marketing Communications:</span> You can opt-out of receiving promotional emails by following the unsubscribe link in the email or contacting us directly.</span>
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-bold Terms-text">Links to Other Websites</p>
                <p>Our Website may contain links to external websites that are not operated by us. We are not responsible for the content or privacy practices of third-party sites. We recommend you review the privacy policies of those sites.</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-bold Terms-text">Changes to This Privacy Policy</p>
                <p>We may update this Privacy Policy from time to time to reflect changes in our practices, legal obligations, or business activities. We will notify you of any significant changes by posting the new Privacy Policy on this page and updating the “Effective Date” at the top.</p>
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

export default PrivacyPolicy;

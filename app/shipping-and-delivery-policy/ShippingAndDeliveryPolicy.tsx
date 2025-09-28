import React from "react";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { SlLocationPin, SlPhone } from "react-icons/sl";

function ShippingAndDeliveryPolicy() {
  return (
    <div>
      <div className="relative overflow-hidden z-0 bg-white">
        <div className="absolute Dentobees-Pages-Background -z-10 opacity-35"></div>
        <div className="Common-padding pt-[110px] md:pt-[130px] xl:pt-[150px] pb-[90px] md:pb-[110px] flex flex-col items-center">
          <div className="w-full max-w-[1700px] flex flex-col gap-8 md:gap-10 text-[#3E3A3A]">
            <h3 className="font-bold Sub-heading text-center">
              Shipping And Delivery Policy
            </h3>
            <div className="flex flex-col gap-5 md:gap-8 font-normal Normal-text">
              <div className="flex flex-col gap-3">
                <p>
                  Last Updated: 30-08-2025{" "}
                </p>
                <p>
                  At Dentobees, we provide cloud-based dental clinic management
                  software. As our product is a digital service, it does not
                  involve the shipment of physical goods.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold Terms-text">1. Service Delivery </p>
              <span></span>
              <div className="flex flex-col gap-2">
                <p className="ml-5 md:ml-8 xl:ml-10 flex flex-col gap-2">
                  <span>
                    ●<span className="ml-2"></span> All services are delivered
                    digitally via our secure online platform app.dentobees.com.{" "}
                  </span>
                  <span></span>
                  <span>
                    ●<span className="ml-2"></span> Upon successful subscription
                    and payment, customers gain immediate access to the
                    Dentobees application using their registered email and
                    password.{" "}
                  </span>
                  <span></span>
                  <span>
                    ●<span className="ml-2"></span> No physical products or
                    shipping services are applicable.{" "}
                  </span>
                  <span></span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold Terms-text">2. Account Access </p>
              <span></span>
              <div className="flex flex-col gap-2">
                <p className="ml-5 md:ml-8 xl:ml-10 flex flex-col gap-2">
                  <span>
                    ●<span className="ml-2"></span> Customers can create a free
                    account at any time.
                  </span>
                  <span></span>
                  <span>
                    ●<span className="ml-2"></span> New users are eligible for a
                    14-day free trial of premium features.
                  </span>
                  <span></span>
                  <span>
                    ●<span className="ml-2"></span> After the trial period,
                    accounts automatically shift to the free plan with limited
                    access.
                  </span>
                  <span></span>
                  <span>
                    ●<span className="ml-2"></span> Once payment is made, the
                    account is upgraded to a premium subscription, unlocking all
                    features.
                  </span>
                  <span></span>
                  <span>
                    ●<span className="ml-2"></span> Customers can upgrade or
                    downgrade plans at any time based on their requirements.
                  </span>
                  <span></span>
                  <span>
                    ●<span className="ml-2"></span> Access to the chosen plan is
                    activated immediately upon payment confirmation.
                  </span>
                  <span></span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold Terms-text">3. Delivery Timelines </p>
              <span></span>
              <div className="flex flex-col gap-2">
                <p className="ml-5 md:ml-8 xl:ml-10 flex flex-col gap-2">
                  <span>
                    ●<span className="ml-2"></span> Access to the platform is
                    generally available instantly upon payment confirmation.
                  </span>
                  <span></span>
                  <span>
                    ●<span className="ml-2"></span> In rare cases of technical
                    delays, access may take up to 24 hours, and our support team
                    will assist you immediately.
                  </span>
                  <span></span>
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-bold Terms-text">4. Support & Assistance </p>
                <div className="flex flex-col gap-2">
                  <p>
                    For any issues regarding account access or service delivery,
                    you can contact our 24x7 support team:{" "}
                  </p>
                  <p className="ml-5 md:ml-8 xl:ml-10 flex flex-col gap-2">
                    <span className="flex flex-row gap-1">
                      Email :{" "}
                      <Link
                        href=""
                        target="_blank"
                        className="flex gap-3 items-center hover:text-B1 Hover-effect"
                      >
                        <span>
                          <HiOutlineMail className="shrink-0" />
                        </span>{" "}
                        support@dentobees.com
                      </Link>
                    </span>
                    <span className="flex flex-row gap-1">
                      {" "}
                      Customer Support:{" "}
                      <Link
                        href="tel:+919995960143"
                        className="flex gap-3 items-center hover:text-B1 Hover-effect"
                      >
                        <span>
                          <SlPhone className="shrink-0" />
                        </span>{" "}
                        +91 8086014345
                      </Link>{" "}
                    </span>
                  </p>
                </div>
                 <div className="flex flex-col gap-3">
                <p className="font-bold Terms-text">5.	Changes to This Policy  </p>
                <p>Dentobees reserves the right to update this Shipping & Delivery Policy at any time. Any changes will be effective immediately upon posting on our website.  </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingAndDeliveryPolicy;

'use client'
import React from "react";
import HeroSection from "./HeroSection";
import WhyChooseUs from "./WhyChooseUs";
import Learning from "./Learning";
import BlogSection from "./BlogSection";
import Testimonials from "./Testimonials";
import Reviews from "./Reviews";
import PricingPlan from "./PricingPlan";
import BrandCarousel from "./BrandCarousel";

const LandingPage = () => {
    return (
        <div>
            <div className="bg-white">
                <div>
                    <HeroSection />
                </div>
                {/* <div className="-mt-[70px] sm:-mt-[90px] lg:-mt-[110px] xl:-mt-[150px]">
                    <WhyChooseUs />
                </div>
                <div className="Common-padding bg-[#FFFFFF]">
                    <div className="-mt-[200px]">
                        <Learning />
                    </div>
                </div>
                <div className="Common-padding bg-[#FFFFFF]">
                    <BlogSection />
                </div>
                <div>
                    <Testimonials />
                </div>
                <div>
                    <BrandCarousel/>
                </div>
                <div>
                    <Reviews />
                </div>
                <div>
                    <PricingPlan />
                </div> */}
            </div>
        </div>
    )
}

export default LandingPage

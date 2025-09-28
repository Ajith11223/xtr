'use client'
import React from 'react'
import { Accordion, AccordionItem } from "@heroui/react";

const faqs = [
  {
    question: "Does the system generate reports on finances and operations?",
    answer: "Yes, it provides real-time reports on clinic performance, patient trends, revenue, and financial forecasts, helping clinics make informed decisions."
  },
  {
    question: "Does a Dental ERP securely store patient record?",
    answer: "Yes, Dental ERP systems securely store patient records, including medical history, prescriptions, and treatment plans, ensuring quick access and HIPAA compliance."
  },
  {
    question: "How does workflow automation help the staff?",
    answer: "It digitizes patient records, prescriptions, and consent forms, reducing paperwork. It also automates follow-up reminders and improves communication between dentists, hygienists, and support staff."
  },
  {
    question: "Can unauthorized users access patient data?",
    answer: "No, role-based access control ensures that only authorized personnel can view or modify sensitive patient information."
  },
  {
    question: " Do you offer a free trial?",
    answer:
      "Yes! You can sign up for a free trial and explore Dentobees with no obligations."
  },
  {
    question: "Can I upgrade or downgrade my plan anytime?",
    answer: "Yes, plans can be upgraded or downgraded at any time from your account dashboard."
  },
  {
    question: "Do you offer onboarding or training?",
    answer: "Yes, we offer onboarding support, tutorials, and live training sessions for clinics during the initial setup phase."
  },
  {
    question: "Can I access Dentobees on mobile devices?",
    answer: "Absolutely. Dentobees offers mobile apps for both doctors and staff, enabling easy access to schedules, patient details, and more on the go."
  }
];

const PricingFaq = () => {
    return (
        <div className='py-8 md:py-10 xl:py-[60px] relative overflow-hidden z-0'>
            <div className="absolute Dentobees-Faq-Background -z-10 mt-40 xl:mt-20"></div>
            <div className="Common-padding flex flex-col gap-5 md:gap-[30px] items-center">
                <h5 className="font-bold Sub-heading text-[#3E3A3A]">FAQ</h5>
                <div className="w-full max-w-[1700px]">
                <div>
                  <Accordion
                    variant="splitted"
                    className="flex flex-col gap-[14px]"
                  >
                    {faqs.map((item, index) => (
                      <AccordionItem
                        key={index}
                        aria-label="Accordion 1"
                        title={
                          <span className="font-bold Normal-text text-black">
                            {item.question}
                          </span>
                        }
                        className="px-3 md:px-5 lg:px-6 border-[1px] border-B1 shadow-none rounded-[8px]"
                      >
                        <p className="pb-2 font-normal Normal-text text-[#3C3C43D9] md:pr-[10%]">
                          {item.answer}
                        </p>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
        </div>
    )
}

export default PricingFaq
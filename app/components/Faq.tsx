'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const faqData: FAQItem[] = [
    {
      question: "How often should you get a full body checkup?",
      answer: "Generally, once a year is recommended for adults over 30 to monitor key health parameters, while younger individuals without symptoms might get it every 2-3 years or as advised by a physician."
    },
    {
      question: "How to get a free sample collection for a full body checkup?",
      answer: "You can book your package online via our platform. If the package includes free home sample collection, our certified phlebotomist will visit your preferred address at the selected time slot."
    },
    {
      question: "How long will it take to get a test report for a full body checkup?",
      answer: "Most routine blood test reports are generated and uploaded within 12 to 24 hours of sample collection. You will receive an automated notification via SMS and email."
    },
    {
      question: "What is the full body checkup cost?",
      answer: "The cost depends on the specific diagnostic panel and number of tests included. Check our listing page for ongoing seasonal discounts and exact pricing packages."
    },
    {
      question: "Can specific conditions or medications affect full-body checkup results?",
      answer: "Yes, certain prescription drugs, hormonal pills, or existing conditions can temporarily alter blood counts or enzyme levels. Please inform your technician prior to the collection process."
    },
    {
      question: "What information does a full body checkup provide about overall health?",
      answer: "It thoroughly screens your vital organ functionalities including liver (LFT), kidneys (KFT), lipid profile, blood sugar levels, thyroid balance, and overall blood counts."
    },
    {
      question: "Do you have to fast before a full body checkup?",
      answer: "Yes, a standard 8 to 12-hour overnight fasting is strictly mandatory for accurate blood glucose and lipid/cholesterol testing metrics."
    },
    {
      question: "Does a full body checkup include a urine test?",
      answer: "Yes, complete urine analysis (Routine & Microscopic) is systematically included in almost all standard screening packages to check for metabolic or kidney irregularities."
    },
    {
      question: "What other tests might be recommended based on full body checkup results?",
      answer: "Depending on your screening reports, doctors might advise detailed secondary diagnostics like an ECG, Ultrasound (USG), Vitamin D3/B12 tracking, or specific cardiac marker evaluation."
    },
    {
      question: "Can children get a full body checkup?",
      answer: "Pediatric checkups are specialized. Standard adult packages are not intended for children. Please check our dedicated pediatric health screening section or consult a pediatrician."
    },
    {
      question: "What is the Importance of Annual Health Check?",
      answer: "It helps in early detection of hidden, asymptomatic chronic conditions like hypertension, diabetes, or fatty liver disease, making treatment highly effective and preventive."
    }
  ];

  // Ekhane null mane prothome shob gulo close thakbe. Index no track kore open/close handle kora hobe.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-10">
      <div className="container-custom">
        
        {/* Figma Header Style Title */}
        <h2 className='dark text-[20px] md:text-[25px] font-medium py-8'>
          Frequently asked questions
        </h2>

        {/* Accordion List Wrapper Container */}
        <div className="space-y-0 divide-y divide-gray-200/80">
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-4 first:pt-0 last:pb-0 transition-all">
                
                {/* Accordion Trigger Header Button */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex justify-between items-center text-left py-2 text-sm sm:text-[15px] font-medium text-gray-700 hover:text-gray-900 transition-colors select-none group cursor-pointer"
                >
                  <span className="leading-snug pr-4">{faq.question}</span>
                  <span className={`text-xl font-light shrink-0 transition-transform duration-200 dark text-[18px]`}>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Animated Dropdown Answer Panel Section */}
                <div
                  className={`grid transition-all duration-300 ease-in-out overflow-hidden text-xs sm:text-sm text-gray-500 leading-relaxed ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-2.5" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden ">
                    {faq.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
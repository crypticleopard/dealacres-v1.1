'use client'
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const EmiFaq = () => {
  const faqData = [
    {
      question: "What is an EMI?",
      answer:
        "Gurgaon is often considered a good place to live due to its modern infrastructure, job opportunities, and proximity to Delhi. However, the experience may vary depending on individual preferences and needs.",
    },
    {
      question: "What is a Home-Loan EMI?",
      answer:
        "Yes, Gurgaon is home to several well-equipped hospitals and healthcare facilities, including Medanta - The Medicity, Fortis Memorial Research Institute, and Artemis Hospital, among others.",
    },
    {
      question: "What is a Pre-EMI?",
      answer:
        "Gurgaon offers a variety of attractions, including Cyber Hub, Kingdom of Dreams, Damdama Lake, and Ambience Mall, where residents and visitors can enjoy entertainment, dining, and shopping.",
    },
    {
      question: "Should I opt for EMI?",
      answer:
        "Gurgaon is generally considered safe for families. It has a relatively low crime rate compared to some other Indian cities. However, it's always advisable to take necessary precautions and stay informed about the local safety situation.",
    },
    {
      question: "How is Home Loan EMI calcuated?",
      answer:
        "The cost of living in Gurgaon can vary widely depending on your lifestyle and housing choices. It is generally considered to be higher than many other Indian cities, especially in terms of housing and dining out.",
    },
    {
      question: "How is the public transportation system in Gurgaon?",
      answer:
        "Gurgaon has a developing public transportation system, including a metro network, public buses, and auto-rickshaws. The availability and convenience of public transport may depend on your location within the city.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="sm:py-8 md:py-2">
      <h1 className="text-2xl sm:text-3xl font-semibold">
      Frequently asked questions about EMI Calculator
      </h1>
      <div className="md:mt-4 sm:mt-10 sm:px-4 py-2 sm:py-4 border-1 border-gray-300 rounded-lg">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-3 sm:mb-4 border-b-1 border-gray-300">
            <>
            <div
              className="flex justify-between items-center cursor-pointer p-2"
              onClick={() => toggleAccordion(index)}
            >

              <div className="text-base sm:text-lg font-medium">
                 {faq.question}
              </div>
      
              <div className="text-gray-500">
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </div>

            </div>
            <hr/>
            </>
            {openIndex === index && (
              <div className="mt-2 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmiFaq;

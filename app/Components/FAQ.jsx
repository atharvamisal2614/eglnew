"use client";
import React, { useState } from "react";
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqData = [
    {
      question: "What types of products does Eagle Global Exim Houses specialize in?",
      answer:
        "We specialize in exporting Traditional Basmati Rice, Premium Parboiled Rice, Processed Food, Dehydrated Vegetables & Spices. Our portfolio is diverse to meet global demands.",
    },
    {
      question: "Which countries do you export to?",
      answer:
        "We export to multiple regions in Middle East, ensuring compliance with each region's standards.",
    },
    {
      question: "What is your quality control process?",
      answer:
        "We have a rigorous quality assurance system that includes sourcing from verified suppliers, thorough inspections, and adherence to international quality standards.",
    },
    {
      question: "How can I place an order or inquire about pricing?",
      answer:
        "You can reach out through our official website or contact our sales team directly. We’ll provide detailed pricing and product information based on your requirements.",
    },
    {
      question: "What documentation is provided for exports?",
      answer:
        "We provide all necessary documentation, including invoices, packing lists, certificates of origin, and any required compliance certificates for the destination country.",
    },
  ];
  return (
    <div className="w-full py-12 bg-red-50">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-4xl mb-2 text-customRed font-serif tracking-wide">
          Frequently Asked Questions
        </h1>
        <h2 className="text-md md:text-lg font-medium text-gray-800 font-serif tracking-widest">
          Answers to your import-export inquiries
        </h2>
      </div>
      <div className="mx-auto w-11/12 md:w-8/12">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-red-200">
            <button
              className="w-full text-left flex justify-between items-center py-4 text-lg font-medium text-customGray focus:outline-none hover:text-customRed"
              onClick={() => toggleQuestion(index)}
            >
              {faq.question}
              <span className="text-2xl text-customRed font-bold">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <p className="pl-4 pb-4 text-customGray">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FAQ;

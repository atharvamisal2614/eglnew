"use client";

import React from "react";
import FAQ from "../Components/FAQ";
export default function About() {
  return (
    <div>

<div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-12 bg-red-50">
        <div className="flex-shrink-0 w-96 h-96 flex justify-center">
          <img
            src="/eagle-global-founder.jpg"
            alt="Founder"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4 text-customGray">
            Meet Our Visionary Leader
          </h2>
          <h3 className="text-lg font-semibold mb-2 text-gray-600">
            Maharudra Swami - Founder
          </h3>

          <p className="text-sm md:text-base text-justify leading-relaxed text-gray-700">
          Mr. <span className="font-bold">Maharudra Swami </span>is the visionary founder of the Swamy Group, which was established in 1995. With decades of entrepreneurial expertise and an unwavering commitment to excellence, he laid the foundation for a diversified business empire. Eagle Global Exim House, a sincere concern of the Swamy Group, reflects his passion for driving global trade while upholding the highest standards of integrity and quality. Under his leadership, the Swamy Group has carved a niche in industries ranging from exports to manufacturing, building trust and credibility in domestic and international markets.
          </p>
        </div>
      </div>

   
      <div className="relative h-screen ">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
          style={{
            backgroundImage: "url('/images/import-export-7.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-white text-center">
            <h1 className="text-2xl md:text-3xl font-serif mb-10 italic text-white tracking-wide">
              About Eagle Global Exim Houses
            </h1>
            <p className="text-sm md:text-lg  leading-relaxed tracking-wide text-justify mt-4">
              At Eagle Global Exim House, excellence is our standard. We are dedicated to providing high-quality products that meet international standards, ensuring our clients receive only the best. Our rigorous quality control processes, from sourcing to packaging, guarantee the integrity and quality of our goods. We maintain state-of-the-art facilities to handle and prepare our exports, ensuring they retain their original quality and appeal.
            </p>

            <p className="text-sm md:text-lg  leading-relaxed tracking-wide text-justify mt-4">
              Sustainability is a core value at Eagle Global Exim House. We are committed to promoting environmentally friendly practices throughout our supply chain. By collaborating with local producers, we support sustainable farming methods and responsible resource use, ensuring our operations contribute positively to the environment. Our efforts to minimize our carbon footprint reflect our dedication to preserving natural resources for future generations.
            </p>
            <p className="text-sm md:text-lg  leading-relaxed tracking-wide text-justify mt-4">
              With a robust network of global distribution partners, Eagle Global Exim House serves a diverse range of markets across Europe, the Middle East, Asia, and the Americas. Our ability to understand and adapt to the unique requirements of each region enables us to deliver tailored solutions with exceptional efficiency and reliability. We are committed to fostering strong relationships with our clients by consistently meeting their needs and exceeding their expectations.
            </p>
          </div>
        </div>
      </div>
   <FAQ />

    </div>
  );
}

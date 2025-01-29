"use client"
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const imageSections = {
  basmati: [
    "/images/basmati/1121-basmati.webp",
    "/images/basmati/Aged-Basmati-Rice.webp",
    "/images/basmati/kashmir-basmati.webp",
    "/images/basmati/mogra-basmati.webp",
    "/images/basmati/organic-basmati.webp",
    "/images/basmati/pusa-basmati-1.webp",
    "/images/basmati/pusa-basmati-1121.webp",
    "/images/basmati/sankalp-basmati.webp",
    "/images/basmati/Superfine-Basmati-Rice.webp",
    "/images/traditional-basmati.webp",
  ],
  Parboiled: [
    "/images/premium-parboiled.webp",
    "/images/paraboiledrice/enriched-parboiled.webp",
    "/images/paraboiledrice/golden-parboiled.webp",
    "/images/paraboiledrice/long-grain-parboiled.webp",
    "/images/paraboiledrice/quick-cook-parboiled.webp",
  ],
  processedFood: [
    "/images/mango-pulp-slices.webp",
    "/images/processedfood/canned-vegetables.webp",
    "/images/processedfood/chutneys-pickles.webp",
    "/images/processedfood/fruit-bars-candies.webp",
    "/images/processedfood/fruit-jams-syrups.webp",
    "/images/processedfood/fruit-pulp-slices.webp",
    "/images/processedfood/tomato-ketchup-sauces.webp",
  ],
  dehydratedvegetables: [
    "/images/dehydratedvegetables/dehydrated-garlic.webp",
    "/images/dehydratedvegetables/dehydrated-mixed-vegetables.webp",
    "/images/dehydratedvegetables/dehydrated-spinach.webp",
    "/images/dehydratedvegetables/dehydrated-tomatoes.webp",
    "/images/dehydrated-onions.webp",
  ],
  spices: [
    "/images/turmeric-powder.webp",
    "/images/spices/black-pepper.webp",
    "/images/spices/cardamom.webp",
    "/images/spices/cinnamon-sticks.webp",
    "/images/spices/cloves.webp",
    "/images/spices/fenugreek-seeds.webp",
    "/images/spices/garam-masala.webp",
    "/images/spices/red-chili-powder.webp",
    "/images/spices/coriander-powder.webp",
    "/images/spices/cumin-seeds.webp",
  ],
};

const tabLabels = {
  basmati: "Basmati",
  Parboiled: "Parboiled",
  processedFood: "Processed Food",
  dehydratedvegetables: "Dehydrated Vegetables",
  spices: "Spices",
};

export default function TabsWithImages() {
  const [activeTab, setActiveTab] = useState("basmati");

  return (
    <div className="container mx-auto p-16">
   
      <div className="text-center mb-6">
        <h6 className="italic text-2xl md:text-3xl text-customGray relative inline-block">
          Our Authentic Food
         
        </h6>
      </div>

      <div className="grid grid-cols-2 gap-4 justify-items-center md:flex justify-center sm:space-x-8">
        {Object.keys(imageSections).map((section) => (
          <button
            key={section}
            onClick={() => setActiveTab(section)}
            className={`py-3 px-6 mt-8 text-xl font-semibold rounded-full transition-all duration-700 ease-in-out ${
              activeTab === section ? "text-customRed" : "text-gray-700"
            }`}
          >
            {tabLabels[section]}
          </button>
        ))}
      </div>

      <div className="sm:hidden mt-10">
        <Swiper spaceBetween={10} slidesPerView={1.2}>
          {imageSections[activeTab]?.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="transform transition-transform duration-700 ease-in-out"
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden sm:grid mt-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-10 ">
        {imageSections[activeTab]?.map((image, index) => (
          <div key={index}  className="relative">
          <div data-aos="zoom-in-up">
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              className="transform scale-95 transition-transform duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-100"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

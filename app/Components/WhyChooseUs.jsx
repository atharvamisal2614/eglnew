"use client";
import { FaUserGraduate, FaClipboardCheck, FaHeadset, FaGlobe } from 'react-icons/fa';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';

const WhyChooseUs = () => {


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center">
      <div className="relative w-full h-full">
        <Image
          src="/images/import-export-1.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="z-10"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 text-center">
        <h6 className="italic text-2xl md:text-3xl text-customGray relative inline-block">
          Why Choose Us...
 
        </h6>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <div data-aos="zoom-in-up" className="flex justify-center">
            <div className="flex flex-col items-center justify-center p-5 border bg-red-50 shadow-2xl text-customRed rounded-lg hover:bg-customRed hover:text-white transition-all duration-300 ease-in-out">
              <FaUserGraduate size={40} />
              <span className="mt-2 text-xl font-semibold">Expertise</span>
              <p className="mt-5 text-lg text-center">
                With over a decade of experience, we have a deep understanding of the market and the nuances of the export industry.
              </p>
            </div>
          </div>
          <div data-aos="zoom-in-up" className="flex justify-center">
            <div className="flex flex-col items-center justify-center p-5 border bg-red-50 shadow-2xl text-customRed rounded-lg hover:bg-customRed hover:text-white transition-all duration-300 ease-in-out">
              <FaClipboardCheck size={40} />
              <span className="mt-2 text-xl font-semibold">Quality Assurance</span>
              <p className="mt-5 text-lg text-center">
                Our products are subjected to rigorous quality checks to ensure that they meet international standards. We provide bestest quality for our clients.
              </p>
            </div>
          </div>
          <div data-aos="zoom-in-up" className="flex justify-center">
            <div className="flex flex-col items-center justify-center p-5 border bg-red-50 shadow-2xl text-customRed rounded-lg hover:bg-customRed hover:text-white transition-all duration-300 ease-in-out">
              <FaHeadset size={40} />
              <span className="mt-2 text-xl font-semibold">Customer-Centric Approach</span>
              <p className="mt-5 text-lg text-center">
                We believe in building long-term relationships with our clients by offering personalized services and timely delivery.
              </p>
            </div>
          </div>
          <div data-aos="zoom-in-up" className="flex justify-center">
            <div className="flex flex-col items-center justify-center p-5 border bg-red-50 shadow-2xl text-customRed rounded-lg hover:bg-customRed hover:text-white transition-all duration-300 ease-in-out">
              <FaGlobe size={40} />
              <span className="mt-2 text-xl font-semibold">Global Reach</span>
              <p className="mt-5 text-lg text-center">
                Our strategic location in Nashik, combined with our extensive network, enables us to efficiently cater to clients worldwide.
              </p>
            </div>
          </div>
        </div>
        <h6 className="text-customGray text-2xl md:text-3xl italic mb-6 mt-24 relative inline-block">
          Our Traditional Food
       
        </h6>
        <Slider {...settings} className="carousel-container mx-auto flex items-center mt-16">
          <div data-aos="zoom-in-up">
            <div className="carousel-item">
              <Link href={'/basmati'}>
                <div className="relative flex flex-col items-center">
                  <Image
                    width={1000}
                    height={1000}
                    src="/images/traditional-basmati.webp"
                    alt="Traditional Basmati Rice"
                    className="w-full md:w-96 h-auto rounded-lg"
                  />
                  <p className="text-customGray mt-3 text-xl font-serif font-semibold text-center">Traditional Basmati Rice</p>
                  <p className="text-customRed mt-1 text-lg font-semibold text-center hover:cursor-pointer">Learn More</p>
                </div>
              </Link>
            </div>
          </div>

          <div data-aos="zoom-in-up">
            <div className="carousel-item">
              <Link href={'/parboiled'}>
                <div className="relative flex flex-col items-center">
                  <Image
                    width={1000}
                    height={1000}
                    src="/images/premium-parboiled.webp"
                    alt="Premium Parboiled Rice"
                    className="w-full md:w-96 h-auto rounded-lg"
                  />
                  <p className="text-customGray mt-3 text-xl font-serif font-semibold text-center">Premium Parboiled Rice</p>
                  <p className="text-customRed mt-1 text-lg font-semibold text-center hover:cursor-pointer">Learn More</p>
                </div>
              </Link>
            </div>
          </div>

          <div data-aos="zoom-in-up">
            <div className="carousel-item">
              <Link href={'/processedfood'}>
                <div className="relative flex flex-col items-center">
                  <Image
                    width={1000}
                    height={1000}
                    src="/images/mango-pulp-slices.webp"
                    alt="Processed Food"
                    className="w-full md:w-96 h-auto rounded-lg"
                  />
                  <p className="text-customGray mt-3 text-xl font-serif font-semibold text-center">Processed Food</p>
                  <p className="text-customRed mt-1 text-lg font-semibold text-center hover:cursor-pointer">Learn More</p>
                </div>
              </Link>
            </div>
          </div>
          <div data-aos="zoom-in-up">
            <div className="carousel-item">
              <Link href={'/dehydratedvegetables'}>
                <div className="relative flex flex-col items-center">
                  <Image
                    width={1000}
                    height={1000}
                    src="/images/dehydrated-onions.webp"
                    alt="Dehydrated Vegetables"
                    className="w-full md:w-96 h-auto rounded-lg"
                  />
                  <p className="text-customGray mt-3 text-xl font-serif font-semibold text-center">Dehydrated Vegetables</p>
                  <p className="text-customRed mt-1 text-lg font-semibold text-center hover:cursor-pointer">Learn More</p>
                </div>
              </Link>
            </div>
          </div>
          <div data-aos="zoom-in-up">
            <div className="carousel-item">
              <Link href={'/spices'}>
                <div className="relative flex flex-col items-center">
                  <Image
                    width={1000}
                    height={1000}
                    src="/images/turmeric-powder.webp"
                    alt="Spices"
                    className="w-full md:w-96 h-auto rounded-lg"
                  />
                  <p className="text-customGray mt-3 text-xl font-serif font-semibold text-center">Spices</p>
                  <p className="text-customRed mt-1 text-lg font-semibold text-center hover:cursor-pointer">Learn More</p>
                </div>
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default WhyChooseUs;

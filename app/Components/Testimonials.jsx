"use client";
import { HiUser } from 'react-icons/hi';
import { FaStar } from 'react-icons/fa';
import Slider from 'react-slick';

function TestimonialSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,  // Display 2 testimonials per screen
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,  // Display 1 testimonial on smaller screens
        },
      },
    ],
  };

  return (
    <section className="text-gray-700 italic body-font py-24">
      <div className="container px-5 mx-auto text-center">
        <h6 className="italic  text-2xl md:text-3xl text-customGray relative inline-block">
          Testimonials
          
        </h6>
        <Slider {...settings}>
          {/* Testimonial Card */}
          <div className="p-4 mt-5">

            <div className="h-full bg-white border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 flex flex-col items-center">
                {/* User Icon */}
                <HiUser className="w-16 h-16 mb-4 text-customRed bg-red-50 rounded-full p-2" />
                <h2 className="tracking-widest text-sm title-font font-medium italic text-gray-700 mb-1">CEO, Global Grain Imports</h2>
                <h1 className="text-lg font-medium text-black mb-4">Vinoth Parkash</h1>
                <p className="leading-relaxed text-center mb-4">
                  "We've been sourcing rice from Eagle Global Exim House for over a decade, and the
                  consistency in quality has been remarkable. Their dedication to sustainable
                  farming and customer satisfaction sets them apart in the industry.
                  We could not ask for a better partner."
                </p>
                <div className="flex items-center mb-3">
                  {/* 5 Stars */}
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                {/* Name and Designation */}
              </div>
            </div>
          </div>


          {/* Testimonial Card */}
          <div className="p-4 mt-5">

            <div className="h-full bg-white border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 flex flex-col items-center">
                {/* User Icon */}
                <HiUser className="w-16 h-16 mb-4 text-customRed bg-red-50 rounded-full p-2" />
                <h2 className="tracking-widest text-sm title-font font-medium text-gray-700 italic mb-1">Head of Procurement, Fine Foods Ltd.</h2>
                <h1 className="text-lg font-medium text-gray-900 mb-4">Rajesh Kumar</h1>
                <p className="leading-relaxed text-center mb-4">
                  The premium Basmati rice we receive from Eagle Global Exim House has become a staple
                  in our product lineup. Our customers love the quality, and we appreciate the
                  timely deliveries and personalized service. It&apos;s always a pleasure working
                  with such a professional team.
                </p>
                <div className="flex items-center mb-3">
                  {/* 5 Stars */}
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                {/* Name and Designation */}
              </div>
            </div>
          </div>


          {/* Testimonial Card */}
          <div className="p-4 mt-5">

            <div className="h-full bg-white border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 flex flex-col items-center">
                {/* User Icon */}
                <HiUser className="w-16 h-16 mb-4 text-customRed bg-red-50 rounded-full p-2" />
                <h2 className="tracking-widest text-sm title-font font-medium text-gray-700 italic mb-1">Purchasing Manager, Asia-Pacific Foods</h2>
                <h1 className="text-lg font-medium text-gray-900 mb-4">Praveen Thaney</h1>
                <p className="leading-relaxed text-center mb-4">
                  "We were impressed with Eagle Global Exim House commitment to quality and their
                  thorough understanding of international market requirements. Their rice
                  varieties have consistently met our high standards, and their customer
                  service is exceptional. We look forward to a long and fruitful partnership."
                </p>
                <div className="flex items-center mb-3">
                  {/* 5 Stars */}
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default TestimonialSection;

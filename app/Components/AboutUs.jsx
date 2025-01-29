import { useState, useEffect } from 'react';
import Image from 'next/image';

const About = () => {
  const images = [
    "/images/traditional-basmati.webp",
    "/images/mango-pulp-slices.webp",
    "/images/turmeric-powder.webp",
    "/images/dehydrated-onions.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="container mx-auto mt-12 py-12">
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full h-[95%] overflow-hidden">
            {/* Carousel Images with Smooth Fade */}
            {images.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-[95%]"
                />
              </div>
            ))}
            {/* Carousel Dots */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 py-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-customRed' : 'bg-gray-400'}`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-start md:py-8 px-6">
          <h2 className="text-[18px] md:text-xl text-customRed font-bold mb-4 italic">Welcome to Eagle Global Exim House - Premium Exporters</h2>
          <h2 className="text-2xl md:text-3xl text-customGray font-bold mb-4">Unveiling Our Commitment to Excellence</h2>
          <p className="mb-4 text-customGray text-justify">
            At Eagle Global Exim House, we uphold excellence as a guiding principle.
            Our focus is on delivering premium-quality products that align with
            international standards, ensuring our clients consistently receive
            superior goods. From procurement to packaging, our stringent quality
            control measures safeguard the integrity and excellence of our offerings.
            Equipped with advanced facilities, we ensure that our exports are meticulously
            handled and maintain their original quality and appeal.
          </p>
          <p className="mb-4 text-customGray text-justify">
            Sustainability is deeply ingrained in our ethos at Eagle Global Exim House.
            We are dedicated to implementing eco-friendly practices throughout our supply
            chain. By partnering with local producers, we actively support sustainable
            agricultural methods and responsible resource management. Our commitment to
            reducing our environmental impact highlights our focus on preserving natural
            resources for generations to come.
          </p>
          <p className="mb-4 text-customGray text-justify">
            With an extensive network of global distribution partners, Eagle Global
            Exim House caters to diverse markets spanning Europe, the Middle East,
            Asia, and the Americas. Our deep understanding of regional needs allows
            us to provide customized solutions with remarkable efficiency and reliability.
            By consistently exceeding expectations, we strive to build lasting and
            meaningful relationships with our clients
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

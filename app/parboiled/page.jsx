"use client";
import Image from "next/image";
import Link from "next/link";

const ParboiledRice = () => {
  const products = [
    {
      title: "Premium Parboiled Rice",
      description:
        "Our Premium Parboiled Rice offers exceptional nutrition while delighting the senses with delightful flavor. Carefully processed by partially boiling in its husk to retain essential vitamins and minerals, its firm, separate grains make it suitable for a range of dishes from savory pilafs to hearty stews - experience both nutrition and flavor in each bite with our Premium Parboiled Rice!",
      image: "/images/premium-parboiled.webp",
    },
    {
      title: "Enriched Parboiled Rice",
      description:
        "Our Enriched Parboiled Rice is an ideal nutritional and delicious choice, packed full of essential nutrients while still managing to retain its delicious taste. With firm and non-sticky grains cooking up firmer and non-stickier than standard white or brown varieties, Enriched Parboiled Rice adds health benefits while providing satisfying flavor in every serving! Experience its added health benefits along with satisfying flavor in every serving from Enriched Parboiled Rice!",
      image: "/images/paraboiledrice/enriched-parboiled.webp",
    },
    {
      title: "Long Grain Parboiled Rice",
      description:
        "Our Enriched Parboiled Rice is economical yet satisfying, packed with essential nutrients while remaining flavorful and non-sticky. It is cooked up firm and perfect for use in casseroles or stir-fries. Enjoy all its healthful benefits in every bite with every serving of our Enriched Parboiled Rice!",
      image: "/images/paraboiledrice/long-grain-parboiled.webp",
    },
    {
      title: "Golden Parboiled Rice",
      description:
        "Our Golden Parboiled Rice boasts a vibrant golden hue achieved through our exclusive steaming process that seals in both nutrients and flavor, creating irresistibly delicious grains! Perfect as both side dishes or the main attraction in any meal. Each bite offers the ideal balance of taste and health benefits!",
      image: "/images/paraboiledrice/golden-parboiled.webp",
    },
    {
      title: "Quick-Cook Parboiled Rice",
      description:
        "Looking for an easy and nutritious dinner solution? Consider our Quick-Cook Parboiled Rice. This flavorful option remains crispy while maintaining texture and taste, providing a healthy meal in minutes! Perfect for busy weeknights or spontaneous meal planning situations alike - its combination of convenience and quality in every bite makes it the ideal solution!",
      image: "/images/paraboiledrice/quick-cook-parboiled.webp",
    },

  ];

  return (
    <div className="container mx-auto px-20 py-5">
      {products.map((product, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row items-center gap-8 mb-12 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
        >
          <div className="lg:w-1/2">
            <div data-aos="zoom-in-up">
              <Image
                src={product.image}
                alt={product.title}
                width={550}
                height={550}
                className="rounded-2xl mt-10"
              />
            </div>
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-customRed">{product.title}</h2>
            <p className="mb-4 text-lg text-justify text-customGray">{product.description}</p>
            <Link
              href="https://wa.me/917498552108"
              className="inline-block bg-transparent text-customRed py-2 px-4 rounded-full border-2 border-customRed hover:text-white hover:bg-customRed transition duration-500 ease-in-out"
            >
              Get A Quote
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParboiledRice;

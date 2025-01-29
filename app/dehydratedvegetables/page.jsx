"use client";
import Image from "next/image";
import Link from "next/link";

const DehydratedVegetables = () => {
  const products = [
    {
      title: "Dehydrated Onions",
      description:
        "Add flavorful onion flavor to your meals without the time-consuming task of peeling and chopping with our Dehydrated Onions! Gently dried to maintain their natural taste and aroma, these onions make perfect additions to soups, stews, sauces, and many other dishes. With no refrigeration or long shelf life, our Dehydrated Onions make an essential pantry item that offers a fresh taste of onions anytime without the hassle of peeling and chopping! Enjoy adding authentic onion flavor right now.",
      image: "/images/dehydrated-onions.webp",
    },
    {
      title: "Dehydrated Garlic",
      description:
        "Give your meals an added flavor with our Dehydrated Garlic! Sourced from premium cloves and carefully dried to retain its natural aroma, our Dehydrated Garlic brings authentic garlic flavor straight from clove to dish - ideal for seasoning meats, vegetables, or sauces, it offers intense taste while remaining convenient - enjoy bold garlic flavor without peeling and chopping hassle!",
      image: "/images/dehydratedvegetables/dehydrated-garlic.webp",
    },
    {
      title: "Dehydrated Mixed Vegetables",
      description:
        "Our Dehydrated Mixed Vegetables are carefully chosen and dried, making this blend ideal for soups, stews, casseroles, and various other dishes. With their long shelf life and easy rehydration process, our Dehydrated Mixed Vegetables provide a convenient and healthy way to add flavor and nutrition to your meals year-round - enjoy all the goodness of fresh veggies any time with minimal effort!",
      image: "/images/dehydratedvegetables/dehydrated-mixed-vegetables.webp",
    },
    {
      title: "Dehydrated Spinach",
      description:
        "Add nutritional power to your meals with our Dehydrated Spinach! Packed with essential vitamins and minerals, our Dehydrated Spinach has been carefully dried to retain all its goodness while still looking vibrant green. Perfect for adding to soups, smoothies, casseroles, or any dish where its health benefits can be maximized, this Dehydrated Spinach offers an effortless way to bring fresh Spinach right into any season with just a pinch! Enjoy its goodness without worry or hassle.",
      image: "/images/dehydratedvegetables/dehydrated-spinach.webp",
    },
    {
      title: "Dehydrated Tomatoes",
      description:
        "Experience the vibrant taste of tomatoes all year long with our Dehydrated Tomatoes! Sun-dried to preserve their natural sweetness and rich flavor, these sun-dried Dehydrated Tomatoes make an excellent addition to salads, pasta dishes, pizzas, and more. Rehydrate them for juicy texture or use them as they are for intensely concentrated tomato flavor in recipes - our Dehydrated Tomatoes add the essence of fresh tomatoes straight to your dishes quickly and with ease.",
      image: "/images/dehydratedvegetables/dehydrated-tomatoes.webp",
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

export default DehydratedVegetables;

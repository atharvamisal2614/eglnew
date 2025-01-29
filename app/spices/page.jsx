"use client";
import Image from "next/image";
import Link from "next/link";

const Spices = () => {
  const products = [
    {
      title: "Turmeric Powder",
      description:
        "Experience the vibrant hue and taste of our Turmeric Powder! Prized for its anti-inflammatory properties and unique taste, this golden spice has long been used in Indian cooking, making this golden condiment essential to any spice collection. Whether preparing curries, soups or smoothies our Turmeric Powder adds warmth as well as health benefits into every bite you take.",
      image: "/images/turmeric-powder.webp",
    },
    {
      title: "Coriander Powder",
      description:
        "Our Coriander Powder is carefully hand ground to preserve their aromatic, citrusy flavors for enhanced global cuisines and is the key component in many curries, soups and marinades - adding fresh notes with slight sweet notes that create new dimension to curries, soups and marinades alike! Achieve great dishes every time with its vibrant, natural and vibrant taste of Coriander Powder; perfect for elevating all of your favorite meals.",
      image: "/images/spices/coriander-powder.webp",
    },
    {
      title: "Cumin Seeds",
      description:
        "Enhance your cooking with the warm, nutty flavors of our premium Cumin Seeds. Well known for their distinct aroma and slightly bitter taste, cumin seeds have long been used as an integral component in international cuisines ranging from curries, stews, roast veggies to spice blends - our Cumin Seeds have been carefully selected to guarantee maximum freshness bringing an authentic experience into every dish!",
      image: "/images/spices/cumin-seeds.webp",
    },
    {
      title: "Red Chili Powder",
      description:
        "Elevate the flavors in all your dishes with our Red Chili Powder! Crafted from only premium dried red chilies, our Red Chili Powder adds fiery heat and vibrant red color to all of your recipes with ease - curries, sauces, marinades - no matter which you favor! An essential component to elevate any culinary endeavor that delivers both heat and depth of flavor simultaneously",
      image: "/images/spices/red-chili-powder.webp",
    },
    {
      title: "Garam Masala",
      description:
        "We pride ourselves on crafting fragrant blends of premium spices to produce aromatic seasoning, using cumin, coriander, cardamom cloves cinnamon and other exotic aromas as ingredients in traditional Indian spice mixtures like Garam Masala. Enjoy it over curries stews or roast meat dishes to bring out rich layers of flavors for authentic aroma depth in all your culinary endeavors.",
      image: "/images/spices/garam-masala.webp",
    },
    {
      title: "Fenugreek Seeds",
      description:
        "Discover the distinctive, slightly bitter flavor of our Fenugreek Seeds and experience their versatility! Popular among Indian and Middle Eastern cuisine, Fenugreek Seeds add a distinctive note to curries, pickles and spice blends, not forgetting health benefits including supporting digestion and helping control blood sugar. A versatile addition to your pantry that helps enhance both taste and nutrition in meals; our Fenugreek Seeds will enhance every one!",
      image: "/images/spices/fenugreek-seeds.webp",
    },
    {
      title: "Black Pepper",
      description:
        "Our Black Pepper comes from only the highest-grade peppercorns and boasts a sharp yet pungent taste that elevates any dish. Be it freshly ground over salads, added to marinades or used in spice rubs - Black Pepper adds both depth and robust flavor that enhances both savory and sweet recipes alike! Its versatility in any kitchen makes this classic spice essential.",
      image: "/images/spices/black-pepper.webp",
    },
    {
      title: "Cardamom",
      description:
        "Experience our exotic sweet-spicy flavor of Cardamom! Its warm floral notes bring depth and complexity to recipes of both Indian curries and Scandinavian pastries alike - it has quickly become one of our most-prized spices worldwide! Add this special spice into your cooking for an exotic yet fragrant twist in all your culinary creations.",
      image: "/images/spices/cardamom.webp",
    },
    {
      title: "Cloves",
      description:
        "Our Cloves offer both rich flavor and aroma to any dish they grace, adding warm sweetness, a slightly peppery bite, or both to soups, stews, baked goods or beverages such as teas and mulled beverages. Renowned for their medicinal properties as well, cloves not only enhance meals' flavors but can provide health advantages - making our Cloves an essential addition to your kitchen arsenal!",
      image: "/images/spices/cloves.webp",
    },
    {
      title: "Cinnamon Sticks",
      description:
        "Discover the delicate woody aroma of Cinnamon Sticks by immersing yourself in their sweet yet woody aroma! These sticks, harvested from only the highest-grade cinnamon trees, add warmth, sweetness, and comforting notes to both sweet and savory recipes - whether baking, beverages or fragrantly seasoning stews and curries with our versatile spice. Suitable for baking beverages stews and curries alike - Cinnamon Sticks add comforting touch that enhance flavor profiles in every recipe, and must-have addition to every kitchen!",
      image: "/images/spices/cinnamon-sticks.webp",
    },

  ];

  return (
    <div className="container mx-auto px-20 py-5 ">
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

export default Spices;

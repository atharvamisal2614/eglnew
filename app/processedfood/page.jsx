"use client";
import Image from "next/image";
import Link from "next/link";

const ProcessedFood = () => {
  const products = [
    {
      title: "Mango Pulp & Slices",
      description:
        "Get the irresistible tropical flavour from Mango Pulp & Slices, made from the juiciest fruit available and the ripest. We offer you the newest, most delicious mango products that are available. Mango pulp is ideal for giving a luscious fruity flavour to desserts and smoothies or as a refreshing base for refreshing drinks. Mango slices are preserved to preserve their natural taste and texture, which makes them a great ingredient in desserts and salads as a quick and delicious snack. Thanks to our Mango Pulp and Slices, you can enjoy the exotic tropical flavour of mangoes year-round, regardless of the time of year.",
      image: "/images/mango-pulp-slices.webp",
    },
    {
      title: "Fruit Pulp & Slices",
      description:
        "Dive into the fresh flavour of Our Fruit Pulp & Slices assortment, which is carefully preserved at its best ripeness to provide the freshest flavour. Get a blast of fruity flavour in every bite. Give a fresh twist to your favourite dishes.nExperience the freshness of the finest fruit with each serving!",
      image: "/images/processedfood/fruit-pulp-slices.webp",
    },
    {
      title: "Fruit Jams & Syrups",
      description:
        "Get immersed in the true flavour of fruit with Our Fruit Jams & Syrups. Our jams keep their rich, natural flavours and are perfect for spreading on bread, paired alongside cheeses, and filling up your favourite desserts. Our syrups have a wonderful fruity taste, and they are ideal for drizzling over cakes, pancakes, and ice cream or mixing them into drinks.",
      image: "/images/processedfood/fruit-jams-syrups.webp",
    },
    {
      title: "Fruit Bars, Candies & Tutti Frutti",
      description:
        "Enjoy our delicious fruit Bars, Candies & Tutti Frutti Made from pure, healthy fruit. These snacks are loaded with a vibrant flavour and vital nutrients, which makes them tasty and nutritious for anyone of any age. When you're on the move or want a delicious and lively twist to your baking or desserts, we have the Fruit Bars, Candies & Tutti Frutti, which are the perfect option. Take pleasure in the delicious natural sweetness and delicious taste of each bite!",
      image: "/images/processedfood/fruit-bars-candies.webp",
    },
    {
      title: "Chutneys & Pickles",
      description:
        "Give a bold, spicy spice to your meals using the Chutneys & Pickles. Made from recipes based on traditional recipes, our chutneys and pickles blend spicy, sweet and tangy flavours that are perfect for a variety of meals. Produced from the finest fresh fruit and vegetables and preserved with aromatic oils and spices, it provides flavour and heat. When adding flavour to your main meal or eating as a side dish, the Chutneys & Pickles will make your meals more enjoyable with their vibrant flavour.",
      image: "/images/processedfood/chutneys-pickles.webp",
    },
    {
      title: "Canned Vegetables in Brine",
      description:
        "Enjoy the benefits of convenience and nutrition from our Canned vegetables preserved in Brine. In a light brine, the veggies retain their original flavour and texture. They also contain vital nutrients. They are perfect for quick stir-fries, fresh salads, or even accompaniment. The canned vegetables help you to prepare your meals quickly without sacrificing taste. Take advantage of your vegetables' freshness and high quality, prepared to add flavour to your food within minutes.",
      image: "/images/processedfood/canned-vegetables.webp",
    },
    {
      title: "Tomato Ketchup & Sauces",
      description:
        "Discover the convenience and nutrition advantages of the Canned Vegetables within Brine. The veggies retain their flavour, texture and nutrients in a light brine. They are perfect for quick stir-fries, fresh salads, or appetisers. Our canned vegetables allow you to prepare your meals quickly without sacrificing taste. Get the freshness and flavour of fresh vegetables grown at home, ready to add flavour to your food in no time.",
      image: "/images/processedfood/tomato-ketchup-sauces.webp",
    },
    {
      title: "Chinese Sauces & Vinegar",
      description:
        "Add authentic Chinese flavour to your cooking using Our Chinese Sauces & Vinegar. From the delicious depth of soy sauce to the tangy acidity of rice vinegar, our range of sauces and vinegar will enhance your Asian-inspired meals with an authentic taste. Ideal for marinades, stir-fries, and dipping sauces and vinegar, these are essential to make delicious, balanced dishes that take your taste buds into the heart of Chinese food. Improve your cooking with the authentic flavour and richness of our specially created condiments, vinegar, and sauces.",
      image: "/images/processedfood/chinese-sauces-vinegar.webp",
    },

  ];

  return (
    <div className="container mx-auto  px-20 py-5">
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

export default ProcessedFood;

"use client";
import Image from "next/image";
import Link from "next/link";

const BasmatiRiceProducts = () => {
  const products = [
    {
      title: "Traditional Basmati Rice",
      description:
        "Discover the heritage and splendour of Indian culture with our Traditional Basmati Rice, grown on fertile plains of India and celebrated for its aromatic scent and delectably creamy flavour. Perfect for biryanis, pilafs, and gourmet dishes such as biryani or pilau, its authentic yet extraordinary culinary experience provides an unforgettable dining experience - making our Traditional Basmati a key component in elevating every bite with superior taste and texture!",
      image: "/images/traditional-basmati.webp",
    },
    {
      title: "Organic Basmati Rice",
      description:
        "Discover purity and wellness with Organic Basmati Rice! Carefully grown using eco-friendly farming practices, our Organic Basmati is free from pesticides or chemicals for an authentic, delicious flavour! Perfect for health-conscious individuals without compromising on taste! With its characteristic aroma and deep flavours, it makes an exceptional selection.",
      image: "/images/basmati/organic-basmati.webp",
    },
    {
      title: "Aged Basmati Rice",
      description:
        "Discover our unmatched flavour of Aged Basmati Rice! Enjoy its exquisite aroma and richer taste when aged for over one year; this variety boasts a deeper aroma and deeper flavours than regular varieties due to the ageing process, lengthening grains while amplifying fragrance - making this variety both refined and unforgettable! Elevate culinary creations using Aged Basmati Rice while elevating their appeal and enjoyment!",
      image: "/images/basmati/Aged-Basmati-Rice.webp",
    },
    {
      title: "Superfine Basmati Rice",
      description:
        "Our Superfine Basmati Rice offers an extraordinary dining experience for connoisseurs of fine cuisine. Its delicate aroma and slim grains pair beautifully with gourmet dishes for an exquisite dining experience. Light yet fluffy in texture, its delicate fragrance enhances any meal, turning every bite into an extraordinary celebration of flavour!",
      image: "/images/basmati/Superfine-Basmati-Rice.webp",
    },
    {
      title: "1121 Basmati Rice",
      description:
        "Our 1121 Basmati Rice is celebrated for its extra-long grains and aromatic appeal, making it the go-to choice among rice connoisseurs worldwide. Even after being cooked, its grains remain light, fluffy, and separate - providing ideal textures in biryanis, pilafs, and other refined dishes. Experience its unmatched quality while elevating each meal to new levels of culinary perfection with 1121 Basmati's exquisite taste and superior quality!",
      image: "/images/basmati/1121-basmati.webp",
    },
    {
      title: "Pusa Basmati 1",
      description:
        "Pusa Basmati Rice 1 is an award-winning variety renowned for its exceptional cooking quality and fragrant aroma, boasting long, slender grains that expand beautifully when prepared, perfect for traditional and modern recipes. Ideal for festive occasions and quick everyday meals, Pusa Basmati 1 adds elegance and sophistication to every dining experience.",
      image: "/images/basmati/pusa-basmati-1.webp",
    },
    {
      title: "Pusa Basmati 1121",
      description:
        "Pusa Basmati 1121 boasts the longest Basmati grains ever seen on Earth and is widely revered for their exceptional length and delicate taste. When cooked, each grain elongates while remaining separate - an ideal combination for creating visually captivating yet flavorful biryanis and pulao! For culinary artists looking for both aesthetic appeal and exquisite flavour enhancement, this variety can only help elevate their creations!",
      image: "/images/basmati/pusa-basmati-1121.webp",
    },
    {
      title: "Kashmir Basmati",
      description:
        "Our Kashmir Basmati Rice comes directly from the lush valleys of Kashmir, famed for producing some of the finest basmati varieties on Earth. This fragrant variety stands out with long grains that offer exquisite textures - ideal for dishes like Kashmiri Pulao. Kashmir Basmati provides an unforgettable dining experience!",
      image: "/images/basmati/kashmir-basmati.webp",
    },
    {
      title: "Mogra Basmati",
      description:
        "Mogra Basmati Rice is an exquisite premium variety renowned for its shorter grains that boast aromatic flavours and fluffy textures, providing rich tastes with every bite. Great for everyday cooking, such as simple steamed dishes and more complex ones, such as pilafs. Plus, its delightful fragrance adds a traditional charm that elevates every bite!",
      image: "/images/basmati/mogra-basmati.webp",
    },
    {
      title: "Sankalp Basmati",
      description:
        "Sankalp Basmati Rice has long been recognized for its long grains and fragrant aroma. This versatile variety makes an exceptional accompaniment for special events and everyday meals. Boasting delicate flavours that elevate any dish served up from Sankalp Basmati's exceptional texture - Sankalp Basmati makes an indispensable part of your kitchen arsenal!",
      image: "/images/basmati/sankalp-basmati.webp",
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

export default BasmatiRiceProducts;

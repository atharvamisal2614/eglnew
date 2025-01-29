"use client";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="relative text-white py-14 px-8">
      <div className="absolute inset-0 items-center just">
        <Image
          src="/images/import-export-3.jpg"
          alt="Footer Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0 "
        />
        <div className="absolute inset-0 bg-black bg-opacity-80 z-0"></div>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center md:text-left relative z-10 space-y-12 lg:space-y-0 lg:space-x-80">
        {/* Left Section */}
        <div className="flex flex-col space-y-4 lg:max-w-xs lg:items-start">
          <h3 className="font-semibold text-lg uppercase">Explore</h3>
          <ul className="space-y-6">
            <li className="border-b border-gray-500 pb-1">
              <Link href="/" className="text-gray-100 hover:text-gray-400">Home</Link>
            </li>
            <li className="border-b border-gray-500 pb-1">
              <Link href="/about" className="text-gray-100 hover:text-gray-400">About Us</Link>
            </li>
            <li className="border-b border-gray-500 pb-1">
              <Link href="/contact" className="text-gray-100 hover:text-gray-400">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Center Section */}
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/images/eagle-logo-og.jpg"
            alt="Logo"
            height={100}
            width={130}
          // className="w-full"
          />
          <div className="text-gray-300 text-sm leading-relaxed text-center max-w-xs">
            <p>Join us at Eagle Global for an unforgettable getaway.</p>
            <p>Office No.104, First floor, Global Plaza, Kharadi, Pune.</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col space-y-4 lg:max-w-xs lg:items-end md:text-right">
          <h3 className="font-semibold text-lg uppercase">Contact Us</h3>
          <ul className="space-y-6">
            <li className="border-b border-gray-500 pb-1">
              <Link href="tel:+917498552108" className="text-gray-100 hover:text-gray-400">
                +91 74985 52108
              </Link>
            </li>
            <li className="border-b border-gray-500 pb-1">
            <Link href={'mailto:info@eagleglobaleximhouse.com'} >info@eagleglobaleximhouse.com</Link>
            </li>
            <li className="border-b border-gray-500 pb-1">
            <Link href={'mailto:enquiry@eagleglobaleximhouse.com'}>enquiry@eagleglobaleximhouse.com</Link>
</li>
            <li className="border-b border-gray-500 pb-1">
              <Link
                href="https://maps.app.goo.gl/oFaxE6M3Uo1LAtC76"
                className="text-gray-100 hover:text-gray-400"
              >
                Get Directions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-600 pt-6 text-center mt-12">
        <p className="text-gray-300 text-sm">
          © {new Date().getFullYear()} Eagle Global Exim House, All Rights Reserved.
        </p>
      </div>


    </footer>
  );
};

export default Footer;

"use client";
import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="text-customGray body-font relative">
      {/* Map Section */}
      <div className="w-full bg-gray-300 h-64 sm:h-96 relative">
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.455998654908!2d73.94958215!3d18.553469649999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3c4ea36a8f7%3A0xf585434dc33ce581!2sGLOBAL%20BUSINESS%20HUB%2C%20EON%20Free%20Zone%2C%20Kharadi%2C%20Pune%2C%20Maharashtra%20411014!5e0!3m2!1sen!2sin!4v1736156639963!5m2!1sen!2sin"
        ></iframe>
      </div>

      {/* Contact Details Section */}
      <div className="container mx-auto px-5 py-12">
        <div className="bg-white flex flex-col w-full p-10 rounded-lg shadow-md">
          <h2 className="text-customRed text-2xl font-bold mb-4">Contact Details</h2>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Address</h3>
              <p className="text-gray-700">Office No.104, First floor, Global Plaza, Kharadi, Pune.</p>
            </div>

            <div className="flex-1 sm:pl-6">
              <h3 className="text-lg font-semibold">Phone</h3>
              <Link href={'tel:+917498552108'} className="text-gray-700">+91 74985 52108</Link>
            </div>

            <div className="flex-1 sm:pl-6">
              <h3 className="text-lg font-semibold">Emails</h3>
              <Link href="mailto:info@eagleglobaleximhouse.com" className="text-red-500">
                info@eagleglobaleximhouse.com
              </Link>
              <br />
              <Link href="mailto:enquiry@eagleglobaleximhouse.com" className="text-red-500">
                enquiry@eagleglobaleximhouse.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

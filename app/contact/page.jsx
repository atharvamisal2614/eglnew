// "use client";
// import React from "react";
// import Link from "next/link";

// const Contact = () => {
//   return (
//     <section className="text-customGray body-font relative">
//       {/* Map Section */}
//       <div className="w-full bg-gray-300 h-64 sm:h-96 relative">
//         <iframe
//           width="100%"
//           height="100%"
//           className="absolute inset-0"
//           title="map"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.455998654908!2d73.94958215!3d18.553469649999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3c4ea36a8f7%3A0xf585434dc33ce581!2sGLOBAL%20BUSINESS%20HUB%2C%20EON%20Free%20Zone%2C%20Kharadi%2C%20Pune%2C%20Maharashtra%20411014!5e0!3m2!1sen!2sin!4v1736156639963!5m2!1sen!2sin"
//         ></iframe>
//       </div>

//       {/* Contact Details Section */}
//       <div className="container mx-auto px-5 py-12">
//         <div className="bg-white flex flex-col w-full p-10 rounded-lg shadow-md">
//           <h2 className="text-customRed text-2xl font-bold mb-4">Contact Details</h2>

//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
//             <div className="flex-1">
//               <h3 className="text-lg font-semibold">Address</h3>
//               <p className="text-gray-700">Office No.104, First floor, Global Plaza, Kharadi, Pune.</p>
//             </div>

//             <div className="flex-1 sm:pl-6">
//               <h3 className="text-lg font-semibold">Phone</h3>
//               <Link href={'tel:+917498552108'} className="text-gray-700">+91 74985 52108</Link>
//             </div>

//             <div className="flex-1 sm:pl-6">
//               <h3 className="text-lg font-semibold">Emails</h3>
//               <Link href="mailto:info@eagleglobaleximhouse.com" className="text-red-500">
//                 info@eagleglobaleximhouse.com
//               </Link>
//               <br />
//               <Link href="mailto:enquiry@eagleglobaleximhouse.com" className="text-red-500">
//                 enquiry@eagleglobaleximhouse.com
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;







"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can add form submission logic here
  };

  return (
    <section className="text-customGray body-font relative">
      {/* Contact Us Heading */}
      <div className="text-center py-10">
        <h2 className="text-4xl font-bold text-customRed">Contact Us</h2>
        <p className="text-gray-700 mt-2">
          Have questions? Get in touch with us. We'd love to hear from you!
        </p>
      </div>

      {/* Map & Form Section */}
      <div className="container mx-auto px-5 pb-12">
        <div className="bg-white flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden">
          {/* Left Side - Google Map */}
          <div className="w-full md:w-1/2 h-96 md:h-[600px] relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.455998654908!2d73.94958215!3d18.553469649999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3c4ea36a8f7%3A0xf585434dc33ce581!2sGLOBAL%20BUSINESS%20HUB%2C%20EON%20Free%20Zone%2C%20Kharadi%2C%20Pune%2C%20Maharashtra%20411014!5e0!3m2!1sen!2sin!4v1736156639963!5m2!1sen!2sin"
            ></iframe>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full md:w-1/2 p-8">
            <h3 className="text-2xl font-semibold text-customRed mb-4">Get In Touch</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                  required
                />
              </div>

              <div>
                <label className="text-gray-700 font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                  required
                />
              </div>

              <div>
                <label className="text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                  required
                />
              </div>

              <div>
                <label className="text-gray-700 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="4"
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-customRed text-white font-bold py-2 rounded-md hover:bg-red-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Contact Details */}
      {/* <div className="container mx-auto px-5 py-8">
        <div className="bg-white flex flex-col w-full p-10 rounded-lg shadow-md">
          <h2 className="text-customRed text-2xl font-bold mb-4">Contact Details</h2>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Address</h3>
              <p className="text-gray-700">
                Office No.104, First Floor, Global Plaza, Kharadi, Pune.
              </p>
            </div>

            <div className="flex-1 sm:pl-6">
              <h3 className="text-lg font-semibold">Phone</h3>
              <Link href="tel:+917498552108" className="text-gray-700">
                +91 74985 52108
              </Link>
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
      </div> */}
    </section>
  );
};

export default Contact;

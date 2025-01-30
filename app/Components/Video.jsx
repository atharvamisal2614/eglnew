// "use client";
// const Video = () => {
//   const sectionStyle = {
//     backgroundAttachment: "fixed",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     height: "80vh",
//   };
//   return (
//     <div style={sectionStyle} className="relative mb-12 mt-16">
//      <div className="text-center mb-6 mt-16">
//         <h6 className="italic text-2xl md:text-3xl text-customGray relative inline-block">
//           Our Process Looks Like
//         </h6>
//       </div>
//       <div className="max-w-7xl mx-auto px-6">
//         <video
//           src="/machine-video.mp4"
//           autoPlay
//           loop
//           muted
//           className="w-full h-[75vh] object-cover"
//         ></video>
//       </div>
//     </div>
//   );
// };
// export default Video;






"use client";

const Video = () => {
  return (
    <div className="relative mb-12 mt-16">
      <div className="text-center mb-6 mt-16">
        <h6 className="italic text-2xl md:text-3xl text-customGray relative inline-block">
          Our Process Looks Like
        </h6>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center mt-3">
        <p className="text-lg text-gray-700 text-justify">
        Our process is designed to ensure the highest level of efficiency and quality, 
        providing a clear and transparent pathway from start to finish. We prioritize 
        understanding our client&apos;s unique needs and goals, which allows us to craft
        tailored solutions that meet their expectations. Through each step of the journey, 
        our team remains committed to delivering excellence and ensuring that every detail
        is executed with precision.
        
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-5">
        <video
          src="/machine-video.mp4"
          autoPlay
          loop
          muted
          className="w-full h-[75vh] object-cover"
        ></video>
      </div>
    </div>
  );
};

export default Video;

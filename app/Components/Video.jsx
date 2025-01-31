"use client";

const Video = () => {
  return (
    <div className="relative mb-12">
      <div className="text-center mb-6 mt-16">
        <h6 className="italic text-2xl md:text-3xl text-customGray relative inline-block">
          Our Process Looks Like
        </h6>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center mt-3">
        <p className="text-lg text-gray-700 text-justify">
        Our process is designed to deliver efficiency and quality through a clear,
        transparent approach from start to finish. We focus on understanding each client&apos;s 
        unique needs and goals, allowing us to create tailored solutions that align with their 
        expectations. With a commitment to excellence, our team ensures every step is executed 
        with precision and care. By prioritizing attention to detail and customized service, 
        we consistently provide results that exceed expectations. This client-centered approach
        fosters trust, builds strong relationships, and ensures a seamless, high-quality experience throughout journey.
        
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

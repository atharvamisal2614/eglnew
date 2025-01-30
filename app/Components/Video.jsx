"use client";
const Video = () => {
  const sectionStyle = {
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "80vh",
  };
  return (
    <div style={sectionStyle} className="relative mb-12 mt-16">
     <div className="text-center mb-6 mt-16">
        <h6 className="italic text-2xl md:text-3xl text-customGray relative inline-block">
          Our Process Looks Like
        </h6>
      </div>
      <div className="max-w-7xl mx-auto px-6">
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

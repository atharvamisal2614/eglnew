"use client";
const Slider = () => {
    return (
      <div className="relative w-full h-[60vh] md:h-[75vh] max-w-full overflow-hidden">
        {/* Background Video */}
        <video
          src="spices-home-video.mp4" // Replace with the path to your video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        ></video>
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-15 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-3xl md:text-5xl mb-4 font-greatVibes">Welcome to</h1>
          <h2 className="text-2xl md:text-4xl  mb-8 italic font-serif">Eagle Global Exim House</h2>
  
          <button
            className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg text-lg md:text-xl"
            onClick={() => window.open('https://wa.me/917498552108', '_blank')} // Replace 'your-whatsapp-number' with the actual number
          >
            <span className="mr-2">Connect Us</span>
            <img
              src="/images/whatsappimage.png" // Replace with the path to your WhatsApp icon
              alt="WhatsApp"
              className="w-6 h-6"
            />
          </button>
        </div>
  
      </div>
    );
  };
  
  export default Slider;
  
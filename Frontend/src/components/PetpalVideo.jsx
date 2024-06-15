import React from 'react';

const PetpalVideo = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-screen-lg flex flex-col md:flex-row">
        {/* Video Container */}
        <div className="w-full md:w-3/5 relative mb-4 md:mb-0">
          <div className="relative" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/u2DRNXuxNMA?rel=0&modestbranding=1&autoplay=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* Text Container */}
        <div className="w-full md:w-2/5 flex justify-center items-center">
          <div className="text-center">
            <p className="text-2xl md:text-4xl font-bold mb-4">ThePetNest Explained in 30 seconds</p>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg text-xl">
              Book a Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetpalVideo;

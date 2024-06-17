import React from 'react';

const Adopt1 = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Your Pet Adoption Journey With ThePetPals
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <img
              src="https://picjj.com/images/2024/06/17/W7uLjY.png"
              alt="Dog"
              className="w-full h-auto md:max-w-md rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Search Pets</h2>
              <p className="text-gray-700 leading-relaxed">
                Find and adopt a dog or cat that's right for you. Start your search by entering your city above.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4  ">Connect</h2>
              <p className="text-gray-700 leading-relaxed">
                Once you find a pet, click "show number" to get contact info. Contact them to learn more about how to meet and adopt.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Adopt with Love</h2>
              <p className="text-gray-700 leading-relaxed">
                The adoption process will guide you to prepare your home for your new furry family member.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Free Vet Consultation</h2>
              <p className="text-gray-700 leading-relaxed">
                Reach out to us for a free vet consultation once you complete the adoption journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adopt1;

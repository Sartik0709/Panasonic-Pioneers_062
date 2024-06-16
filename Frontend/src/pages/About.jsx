import React from 'react';

import { FaCheckCircle } from 'react-icons/fa'

const About = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <header className="text-center border-b-2 border-orange-500 py-8">
        <h1 className="text-4xl font-bold text-orange-500 mb-2">About PetPals</h1>
        <p className="text-xl">
          Founded in 2019, <a href="/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">PetPals</a> is India's premier network of 5-star pet care service providers.
        </p>
      </header>
      <section className="mt-8 flex flex-wrap gap-8 justify-center">
        <div className="flex-1 min-w-[300px]">
          <h2 className="text-3xl font-bold text-orange-500 mb-4">Who We Are</h2>
          <p className="mb-4 text-lg leading-relaxed">
            Whether you need in-home pet grooming, pet boarding, pet training, dog walking, pet insurance, pet relocation, or vet on call, PetPals connects pet parents with pet care heroes who’ll treat their pets like family.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            We understand your pet is family. You can trust us to keep your pet happy, healthy, and sweet as ever.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            PetPals is committed to making pet care safe, easy, and affordable so that everyone can experience the unconditional love of a pet. Whatever you and your furry babies are into, we’re into it too. And we’ve got your back. Anytime. Anywhere.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            PetPals donates a portion of every service to pet NGOs & rescue shelters through this program. We also provide meals to shelter dogs in India.
          </p>
        </div>
        <div className="flex-1 flex flex-wrap gap-4 justify-center">
          <img src="https://svgsilh.com/svg/1517090.svg" alt="Happy pet" className="w-2/3 rounded-lg transition-transform transform hover:scale-105" />
        </div>
      </section>
      <section className="mt-16 text-center">
  <h2 className="text-3xl font-bold text-orange-500 mb-4">5-Star Petcare Heroes in your neighborhood</h2>
  <ul className="list-none p-0 flex flex-wrap justify-center gap-4">
    <li className="flex items-center bg-white text-orange-500 border-2 border-orange-500 rounded-lg p-4 mb-2 w-full max-w-md text-lg transition-transform transform hover:scale-105">
      <FaCheckCircle className="mr-2" /> Background or identity checks
    </li>
    <li className="flex items-center bg-white text-orange-500 border-2 border-orange-500 rounded-lg p-4 mb-2 w-full max-w-md text-lg transition-transform transform hover:scale-105">
      <FaCheckCircle className="mr-2" /> Reservation protection
    </li>
    <li className="flex items-center bg-white text-orange-500 border-2 border-orange-500 rounded-lg p-4 mb-2 w-full max-w-md text-lg transition-transform transform hover:scale-105">
      <FaCheckCircle className="mr-2" /> Ongoing service education
    </li>
    <li className="flex items-center bg-white text-orange-500 border-2 border-orange-500 rounded-lg p-4 mb-2 w-full max-w-md text-lg transition-transform transform hover:scale-105">
      <FaCheckCircle className="mr-2" /> Trust and safety experts
    </li>
    <li className="flex items-center bg-white text-orange-500 border-2 border-orange-500 rounded-lg p-4 mb-2 w-full max-w-md text-lg transition-transform transform hover:scale-105">
      <FaCheckCircle className="mr-2" /> PetPals Guarantee
    </li>
    <li className="flex items-center bg-white text-orange-500 border-2 border-orange-500 rounded-lg p-4 mb-2 w-full max-w-md text-lg transition-transform transform hover:scale-105">
      <FaCheckCircle className="mr-2" /> 24/7 support
    </li>
    <li className="flex items-center bg-white text-orange-500 border-2 border-orange-500 rounded-lg p-4 mb-2 w-full max-w-md text-lg transition-transform transform hover:scale-105">
      <FaCheckCircle className="mr-2" /> Verified reviews
    </li>
  </ul>
</section>
    </div>
  );
}

export default About;

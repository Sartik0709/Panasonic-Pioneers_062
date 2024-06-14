

const Home2Right = () => {
  return (
    <div className="bg-blue-400 w-2/4">
        <div className="flex items-center mb-4">
          <img src="https://dm6g3jbka53hp.cloudfront.net/static-images/homepage__services-section__shield-icon.svg" alt="checkmark" className="w-6 h-6 mr-2" />
          <p className="">98.7% of reviews are 5 star</p>
        </div>
        <ul className="list-disc pl-4">
          <li className="text-gray-600">All service providers at ThePetNest undergo a basic background check.</li>
          <li className="text-gray-600">All service providers offer a comprehensive profile including personal details.</li>
          <li className="text-gray-600">All service providers are vetted and approved by our team of pet care specialists.</li>
        </ul>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Book a Pet Care Service</button>
        <p className="text-gray-600">All services booked on Thepetnest are backed by the ThePetNest guarantee, 24/7 support, and our reservation protection.</p>
      </div>
  )
}

export default Home2Right

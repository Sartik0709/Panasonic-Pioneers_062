import { useNavigate } from "react-router";

const Home2Right = () => {
  const navigate=useNavigate();

  const hanelbutton=()=>{
  navigate('/services')
  }
  return (
    <>
      <div className="w-full md:w-3/5 mt-6 border border-gray-300 rounded-2xl mx-auto">
        <div className="flex flex-col md:flex-row items-center mb-4 bg-slate-200 rounded-t-2xl p-4 md:p-0">
          <img
            src="https://dm6g3jbka53hp.cloudfront.net/static-images/homepage__services-section__shield-icon.svg"
            alt="checkmark"
            className="w-16 h-16 md:w-20 md:h-20 mr-0 md:mr-2 mb-2 md:mb-0"
          />
          <p className="text-2xl md:text-4xl text-center md:text-left">98.7% of reviews are 5 star</p>
        </div>
        <div className="list-disc pl-4 text-lg md:text-2xl">
          <p className="text-gray-600 flex gap-x-4 md:gap-x-6 items-center mb-4">
            <img
              src="https://dm6g3jbka53hp.cloudfront.net/static-images/homepage__services-section__large-tick-icon.svg"
              className="w-6 h-6 md:w-8 md:h-8"
            />
            <span>All service providers at ThePetNest undergo a basic background check.</span>
          </p>
          <p className="text-gray-600 flex gap-x-4 md:gap-x-6 items-center mb-4">
            <img
              src="https://dm6g3jbka53hp.cloudfront.net/static-images/homepage__services-section__large-tick-icon.svg"
              className="w-6 h-6 md:w-8 md:h-8"
            />
            <span>All service providers offer a comprehensive profile including personal details.</span>
          </p>
          <p className="text-gray-600 flex gap-x-4 md:gap-x-6 items-center mb-4">
            <img
              src="https://dm6g3jbka53hp.cloudfront.net/static-images/homepage__services-section__large-tick-icon.svg"
              className="w-6 h-6 md:w-8 md:h-8"
            />
            <span>All service providers are vetted and approved by our team of pet care specialists.</span>
          </p>
        </div>
        <div className="flex justify-center">
          <button  onClick={hanelbutton} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded text-2xl md:text-3xl w-4/5 mb-8">
            Book a Pet Care Service
          </button>
        </div>
      </div>
    </>
  );
};

export default Home2Right;

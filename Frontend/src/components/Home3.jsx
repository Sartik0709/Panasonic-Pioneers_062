
const DogTraining = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 flex justify-center">Dog Training - Why it is so important?</h2>
      <p className="mt-2 text-lg text-gray-600 flex justify-center">Dog Training is an investment that pays off by making life with your dog easier and more enjoyable.</p>
      <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <img className="h-64 object-cover" src="https://picjj.com/images/2024/06/17/W7uUz2.jpg" alt="Dog on a beach" />
          <div className="p-6 bg-white">
            <h3 className="text-lg font-medium text-gray-900">Management Techniques</h3>
            <p className="mt-2 text-base text-gray-600">We give you the tools to set your family to be successful.</p>
          </div>
        </div>
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <img className="h-64 object-cover" src="https://picjj.com/images/2024/06/17/W7u3MI.jpg" alt="Girl holding a puppy" />
          <div className="p-6 bg-white">
            <h3 className="text-lg font-medium text-gray-900">Strengthen Bond</h3>
            <p className="mt-2 text-base text-gray-600">We help you bridge the gap between you and your dog.</p>
          </div>
        </div>
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <img className="h-64 object-cover" src="https://picjj.com/images/2024/06/17/W7u5p1.jpg" alt="Puppy pawing at a hand" />
          <div className="p-6 bg-white">
            <h3 className="text-lg font-medium text-gray-900">Socialization</h3>
            <p className="mt-2 text-base text-gray-600">Training increases your dogs confidence to explore the surroundings.</p>
          </div>
        </div>
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <img className="h-64 object-cover" src="https://picjj.com/images/2024/06/17/W7uHBR.jpg" alt="Pug looking at the camera" />
          <div className="p-6 bg-white">
            <h3 className="text-lg font-medium text-gray-900">Mental Stimulation</h3>
            <p className="mt-2 text-base text-gray-600">Engaging your dogs mind is as important as physical exercise.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogTraining;

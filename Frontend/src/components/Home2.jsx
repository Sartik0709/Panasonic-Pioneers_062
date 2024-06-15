import Home2Right from "./Home2Right";
import Home2left from "./Home2left";

const Home2 = () => {
  return (
    <>
      <h1 className="text-3xl md:text-5xl font-extrabold font-sans flex justify-center text-center md:text-left mt-4">
        Services for Every Pet at PetPals
      </h1>
      <div className="flex flex-col md:flex-row justify-around items-center md:items-stretch ml-auto mr-auto w-full md:w-4/5 mt-6 space-y-6 md:space-y-0 md:space-x-6">
        <Home2left />
        <Home2Right />
      </div>
    </>
  );
}

export default Home2;

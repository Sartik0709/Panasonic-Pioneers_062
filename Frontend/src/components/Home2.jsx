import Home2Right from "./Home2Right"
import Home2left from "./Home2left"

const Home2 = () => {
  return (
  <>
  <h1 className="text-5xl font-extrabold font-sans flex justify-center">Services for Every Pet at PetPals</h1>
  <div className=" flex justify-around ml-auto mr-auto w-4/5 bg-red-400">
    <Home2left />
    <Home2Right />
  </div>
  </>   
  )
}

export default Home2

import { useNavigate } from "react-router";

const Rehome = () => {
    const navigate = useNavigate();
    const handleReHome = () => {
        navigate('/RehomePet');
    }
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                PetPals is as Easy as 1-2-3!
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="image-item flex flex-col items-center">
                    <h1 className="text-3xl font-bold mb-4"><span className="text-orange-400">1.</span> Add Your Pet</h1>
                    <img 
                        src="https://petmeetly.com/wp-content/uploads/2022/02/3-1.png.webp" 
                        alt="Image 1" 
                        className="rounded-lg w-full h-auto object-cover" 
                    />
                </div>
                <div className="image-item flex flex-col items-center">
                    <h1 className="text-3xl font-bold mb-4"><span className="text-orange-400">2. </span>Select a Match</h1>
                    <img 
                        src="https://petmeetly.com/wp-content/uploads/2022/02/adopt-cat-3.png.webp" 
                        alt="Image 2" 
                        className="rounded-lg  w-full h-auto object-cover" 
                    />
                </div>
                <div className="image-item flex flex-col items-center">
                    <h1 className="text-3xl font-bold mb-4"><span className="text-orange-400">3. </span> Communicate</h1>
                    
                    <img 
                        src="https://th.bing.com/th/id/OIP.I4OUpnP_sxMEovFST0QHxAHaNJ?w=608&h=1080&rs=1&pid=ImgDetMain" 
                        alt="Image 3" 
                        className="rounded-lg  w-full h-auto object-cover" 
                    />
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <button className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300"
                onClick={handleReHome}>
                  Rehome 
                </button>
            </div>
        </div>
    );
}

export default Rehome;

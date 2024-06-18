import { useState } from "react";
import Adminpet from "../components/Adminpet";
import AdminService from "../components/AdminService";
import PetsList from "../components/PetLists";

export const AdminPage = () => {
  const [content, setContent] = useState(<Adminpet />);

  const handleButtonClick = (content) => {
    setContent(content);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen mt-10">
      <div className="w-full lg:w-1/4 bg-gray-200 p-6 shadow-md flex flex-col gap-y-4">
        <button
          className={`w-full p-3 rounded text-white ${content.type === Adminpet ? 'bg-blue-700' : 'bg-blue-500'} hover:bg-blue-700 transition`}
          onClick={() => handleButtonClick(<Adminpet />)}
        >
          USERS
        </button>
        <button
          className={`w-full p-3 rounded text-white ${content.type === AdminService ? 'bg-blue-700' : 'bg-blue-500'} hover:bg-blue-700 transition`}
          onClick={() => handleButtonClick(<AdminService />)}
        >
          SERVICE PROVIDER
        </button>
        <button
          className={`w-full p-3 rounded text-white ${content === 'PETS' ? 'bg-blue-700' : 'bg-blue-500'} hover:bg-blue-700 transition`}
          onClick={() => handleButtonClick(<PetsList />)}
        >
          PETS
        </button>
        <button
          className={`w-full p-3 rounded text-white ${content === 'DONATION' ? 'bg-blue-700' : 'bg-blue-500'} hover:bg-blue-700 transition`}
          onClick={() => handleButtonClick('DONATION')}
        >
          DONATION
        </button>
       
      </div>
      <div className="flex-grow p-6 bg-white shadow-md overflow-auto">
        <div className="h-full flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold mb-4">
            {typeof content === 'string' ? content : ''}
          </h2>
          <div className="w-full h-full">
            {typeof content !== 'string' && content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

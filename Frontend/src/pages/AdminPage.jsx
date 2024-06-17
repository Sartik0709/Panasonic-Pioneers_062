import { useState } from "react";
// import PetpalVideo from "../components/PetpalVideo";
import Adminpet from "../components/Adminpet";
import AdminService from "../components/AdminService";

export const AdminPage = ()=>{
   const [content, setContent] = useState('DASHBORD');
const handleButtonClick = (content) => {
  setContent(content);
};

return (
   <>
  <div className="flex h-screen mt-8">
  <div className="w-1/4 bg-gray-100 p-5 shadow-lg flex flex-col gap-y-6">
      <button
        className="w-full mb-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={() => handleButtonClick(<Adminpet />)}
      >
        USERS
      </button>
      <button
        className="w-full mb-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={() => handleButtonClick(<AdminService />)}
      >
        SERVICE PROVIDER
      </button>
      <button
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={() => handleButtonClick("This is Donation")}
      >
        DONATION
      </button>
      <button
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={() => handleButtonClick("This is PETSSS")}
      >
        PETS
      </button>
    </div>
    <div className="flex-grow p-5 bg-white">
      <div>
        <h2 className="text-2xl font-bold mb-4">{content}</h2>
        {content === 'Content for Button 1' && (
          <p>This is the detailed content for Button 1. You can add more structured information here.</p>
        )}
        {content === 'Content for Button 2' && (
          <p>This is the detailed content for Button 2. You can add different structured information here.</p>
        )}
        {content === 'Content for Button 3' && (
          <p>This is the detailed content for Button 3. You can add even more structured information here.</p>
        )}
         {content === 'Content for Button Donation' && (
          <p>This is the detailed content for DONAtION . You can add even more structured information here.</p>
        )}
      </div>
    </div>
  </div>
    </>
   )
}




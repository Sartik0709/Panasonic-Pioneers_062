import   { useState, useEffect } from 'react';
import axios from 'axios';

const PetsList = () => {
  const [pets, setPets] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit] = useState(6);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('https://panasonic-pioneers-062.onrender.com/pets/all', {
          params: {
            page: page,
            limit: limit
          }
        });
        setPets(response.data.pets);
        setTotal(response.data.total);
      } catch (error) {
        console.error('Error fetching pets data:', error);
      }
    };

    fetchPets();
  }, [page, limit]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="container mx-auto p-4">
      <h4 className="text-2xl font-bold mb-4 bg-red-300">Total Pets: {total}</h4>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Breed</th>
              <th className="border border-gray-300 px-4 py-2">Owner City</th>
              <th className="border border-gray-300 px-4 py-2">Owner Name</th>
            </tr>
          </thead>
          <tbody>
            {pets.map((pet) => (
              <tr key={pet._id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 flex justify-center">{pet.name}</td>
                <td className="border border-gray-300 px-4 py-2 ">{pet.breed}</td>
                <td className="border border-gray-300 px-4 py-2 ">{pet.ownerCity}</td>
                <td className="border border-gray-300 px-4 py-2 flex justify-center">{pet.ownerName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        <nav className="inline-block">
          <ul className="flex">
            {Array.from({ length: Math.ceil(total / limit) }, (_, index) => (
              <li key={index} className="mx-1">
                <button
                  className={`px-4 py-2 border border-gray-300 rounded ${
                    page === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                  } hover:bg-blue-600 hover:text-white focus:outline-none`}
                  onClick={() => handlePageChange(null, index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PetsList;

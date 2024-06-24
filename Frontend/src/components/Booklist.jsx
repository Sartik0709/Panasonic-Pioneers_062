import   { useState, useEffect } from 'react';
import axios from 'axios';

const Booking = () => {
  const [booking, setPets] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit] = useState(6);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('https://panasonic-pioneers-062.onrender.com/booking', {
          params: {
            page: page,
            limit: limit
          }
        });
        console.log("bookign",response.data.bookings);
        console.log(response.data.bookings.length);
        setPets(response.data.bookings);
        setTotal(response.data.bookings.length);
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
      <div className="text-3xl font-bold rounded-2xl items-center mb-4 bg-blue-500 text-white w-1/2 mx-auto p-4 flex justify-center shadow-lg">Total Bookings: {total}</div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">ServiceId</th>
              <th className="border border-gray-300 px-4 py-2">UserId</th>
              <th className="border border-gray-300 px-4 py-2">Booking Date</th>
              <th className="border border-gray-300 px-4 py-2">paymentMethod</th>
            </tr>
          </thead>
          <tbody>
            {booking.map((booking) => (
              <tr key={booking._id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 flex justify-center">{booking.serviceId}</td>
                <td className="border border-gray-300 px-4 py-2 ">{booking.userId}</td>
                <td className="border border-gray-300 px-4 py-2 ">{booking.bookedDateTime}</td>
                <td className="border border-gray-300 px-4 py-2 flex justify-center">{booking.paymentMethod}</td>
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

export default Booking;

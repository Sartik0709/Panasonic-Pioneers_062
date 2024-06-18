import axios from "axios";
import { useEffect, useState } from "react";
import ProviderForm from "./ProviderForm";
import { useNavigate } from "react-router";

export default function AdminService() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10; // Fixed number of rows per page
  const [totalPages, setTotalPages] = useState(0);
  const [totalObjects, setTotalObjects] = useState(0);
  const navigation= useNavigate();

  // To open the service adding page
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://panasonic-pioneers-062.onrender.com/service/all");
      const providerData = response.data.provider;
      setData(providerData);
      setTotalObjects(providerData.length);
      setTotalPages(Math.ceil(providerData.length / rowsPerPage));
    };

    fetchData();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const displayedData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);



  return (
    <div className="container mx-auto mt-4">
      <div className="flex gap-x-6">
        <div className="rounded-2xl items-center mb-4 bg-blue-500 text-white w-1/2 mx-auto p-4 flex justify-center shadow-lg">
          <h2 className="text-3xl font-bold">SERVICE PROVIDER'S: {totalObjects}</h2>
        </div>

        <div
          className="rounded-2xl items-center mb-4 bg-blue-500 text-white w-1/2 mx-auto p-4 flex justify-center shadow-lg"
          onClick={() => setShowForm(true)}
        >
          <h2 className="text-3xl font-bold">ADD NEW SERVICE</h2>
        </div>
      </div>

      {showForm ? (
        <ProviderForm />
      ) : (
        <div className="overflow-y-auto max-h-[70vh]">
          <table className="table-auto w-full border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Service</th>
                <th className="border px-4 py-2">Price per Hour</th>
                <th className="border px-4 py-2">Rating</th>
                <th className="border px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {displayedData.map((provider) => (
                <tr key={provider._id}>
                  <td className="border px-4 py-2">{provider.name}</td>
                  <td className="border px-4 py-2">{provider.services}</td>
                  <td className="border px-4 py-2">${provider.price_hour}</td>
                  <td className="border px-4 py-2">{provider.rating}</td>
                  <td className="border px-4 py-2">
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                      // onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination part */}
      <div className="pagination flex justify-center mt-4">
        {currentPage > 1 && (
          <button
            className="mx-1 px-3 py-1 border border-gray-300 rounded hover:bg-gray-200"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
        )}
        {[...Array(totalPages)].map((_, pageIndex) => (
          <button
            key={pageIndex}
            className={`mx-1 px-3 py-1 border border-gray-300 rounded ${
              currentPage === pageIndex + 1 ? "bg-blue-500 text-white" : "hover:bg-gray-200"
            }`}
            onClick={() => handlePageChange(pageIndex + 1)}
          >
            {pageIndex + 1}
          </button>
        ))}
        {currentPage < totalPages && (
          <button
            className="mx-1 px-3 py-1 border border-gray-300 rounded hover:bg-gray-200"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

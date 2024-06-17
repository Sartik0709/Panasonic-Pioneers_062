import axios from "axios";
import { useEffect, useState } from "react";

export default function Adminpet() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10; // Fixed number of rows per page
  const [totalPages, setTotalPages] = useState(0);
  const [totalObjects, setTotalObjects] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://panasonic-pioneers-062.onrender.com/user/all");
      setData(response.data);
      setTotalObjects(response.data.length);
      setTotalPages(Math.ceil(response.data.length / rowsPerPage));
    };

    fetchData();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this user?");
    if (confirmed) {
      try {
        await axios.delete(`https://panasonic-pioneers-062.onrender.com/user/${id}`);
        // Remove the deleted user from the data state
        setData(data.filter(user => user._id !== id));
        setTotalObjects(totalObjects - 1);
        setTotalPages(Math.ceil((totalObjects - 1) / rowsPerPage));
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  const displayedData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div className="container mx-auto mt-4">
      <div className="rounded-2xl items-center mb-4 bg-blue-500 text-white w-1/2 mx-auto p-4 flex justify-center shadow-lg">
        <h2 className="text-3xl font-bold">TOTAL USERS: {totalObjects}</h2>
      </div>
      <div className="overflow-y-auto max-h-[70vh] rounded-lg shadow-md">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2 text-left">Username</th>
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2 text-left">Role</th>
              <th className="border px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map((user) => (
              <tr key={user._id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{user.userName}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.role}</td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 transition"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination flex justify-center mt-4">
        {currentPage > 1 && (
          <button
            className="mx-1 px-3 py-1 border border-gray-300 rounded hover:bg-gray-200 transition"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
        )}
        {[...Array(totalPages)].map((_, pageIndex) => (
          <button
            key={pageIndex}
            className={`mx-1 px-3 py-1 border border-gray-300 rounded ${currentPage === pageIndex + 1 ? "bg-blue-500 text-white" : "hover:bg-gray-200"} transition`}
            onClick={() => handlePageChange(pageIndex + 1)}
          >
            {pageIndex + 1}
          </button>
        ))}
        {currentPage < totalPages && (
          <button
            className="mx-1 px-3 py-1 border border-gray-300 rounded hover:bg-gray-200 transition"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

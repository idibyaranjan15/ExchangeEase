import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [filter, setFilter] = useState("");
  const [list, setList] = useState([]); // Holds the full list of users
  const [debouncedsearch, setDebouncedsearch] = useState(""); // Debounced value of the filter input

  // Fetch data from the API
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8006/api/user/bulk?filter=${debouncedsearch}` // Pass debounced search value to the API
      );
      setList(response.data); // Update the full list of users
      console.log();
    } catch (error) {
      console.log("Error in fetching the data:", error.message);
    }
  };

  // Filter the list based on the user's input (client-side filtering)
  const filteredValue = list.filter(
    (user) =>
      user.firstname.toLowerCase().includes(filter.toLowerCase()) ||
      user.lastname.toLowerCase().includes(filter.toLowerCase())
  );

  // Update the debounced search term after a delay
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedsearch(filter); // Update debounced search term
    }, 400);
    return () => {
      clearTimeout(handler); // Clear timeout on cleanup
    };
  }, [filter]);

  // Fetch data when debounced search term changes
  useEffect(() => {
    if (debouncedsearch) {
      handleSearch();
    }
  }, [debouncedsearch]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="text-xl font-bold text-indigo-600">Paytm-App</div>
        <div className="flex items-center space-x-4">
          <div className="text-lg">Hello</div>
          <div className="rounded-full w-10 h-10 flex items-center justify-center bg-slate-400 text-black font-semibold">
            U
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Search Input */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            value={filter}
            className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
            placeholder="Search here..."
            onChange={(e) => setFilter(e.target.value)} // Update filter state on input change
          />
        </div>
      </div>

      {/* Display List */}
      <div>
        {filteredValue.length > 0 ? ( // Show filtered list if results exist
          <div>
            {filteredValue.map((item) => (
              <div key={item.username} className="p-2 border-b">
                {item.firstname} {item.lastname}
              </div>
            ))}
          </div>
        ) : (
          <div>No results found</div> // Fallback message when no data is available
        )}
      </div>
    </div>
  );
};

export default Dashboard;

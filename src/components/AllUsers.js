import React, { useState, useEffect } from 'react';

const AllUsers = () => {
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', phone: '', appid: ` ${localStorage.getItem("appid")}` });
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://mern-project1-sxvr.onrender.com/users');
        const data = await response.json();
        if (response.ok) {
          setUsers(data.data || []);
        } else {
          setError(data.message || 'Failed to load users');
        }
      } catch (error) {
        setError('An error occurred while fetching users');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewUser({ name: '', phone: '', appid: '' });
    setMessage('');
  };

  const saveUser = async () => {
    try {
      const response = await fetch('https://mern-project1-sxvr.onrender.com/adduser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setMessage('User created successfully!');
        closeModal();
        setUsers((prevUsers) => [...prevUsers, data.data]);
      } else {
        setIsSuccess(false);
        setMessage(data.errorMessage || 'Failed to create user');
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage('An error occurred. Please try again.');
    }
  };

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const nextPage = () => {
    if (currentPage < Math.ceil(users.length / usersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Users</h1>

      <div className="flex flex-wrap gap-4 mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add User
        </button>
        <input
          type="text"
          placeholder="Enter Keyword"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-4 py-2"
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Search
        </button>
      </div>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        {isLoading ? (
          <p>Loading users...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <table className="min-w-full bg-white rounded-lg">
            <thead className="bg-gray-200 text-gray-600">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">#</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">User Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">User Mobile</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Points</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Registration Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Betting</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Active</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Edit</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.length > 0 ? (
                currentUsers.map((user, index) => (
                  <tr key={user?._id || index} className="hover:bg-gray-100">
                    <td className="px-6 py-4 border-b">{indexOfFirstUser + index + 1}</td>
                    <td className="px-6 py-4 border-b">{user?.name || 'N/A'}</td>
                    <td className="px-6 py-4 border-b">{user?.phone || 'N/A'}</td>
                    <td className="px-6 py-4 border-b">{user?.points || 0}</td>
                    <td className="px-6 py-4 border-b">
                      {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                    </td>
                    <td className="px-6 py-4 border-b">{user?.betting ? 'Yes' : 'No'}</td>
                    <td className="px-6 py-4 border-b">{user?.active ? 'Active' : 'InActive'}</td>
                    <td className="px-6 py-4 border-b">
                      <button className="text-blue-500 hover:underline on">Edit</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center py-4">No users found.</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination buttons */}
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`py-2 px-4 rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600 cursor-pointer'}`}
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {Math.ceil(users.length / usersPerPage)}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage >= Math.ceil(users.length / usersPerPage)}
          className={`py-2 px-4 rounded ${currentPage >= Math.ceil(users.length / usersPerPage) ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600 cursor-pointer'}`}
        >
          Next
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-xl font-bold mb-4">Add New User</h2>
            {message && <p className={`mb-4 ${isSuccess ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
            <label className="block font-semibold mb-1">Enter Name</label>
            <input
              type="text"
              name="name"
              value={newUser.name}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2 mb-4"
            />
            <label className="block font-semibold mb-1">Enter Mobile Number</label>
            <input
              type="text"
              name="phone"
              value={newUser.phone}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2 mb-4"
            />
            {/* <label className="block font-semibold mb-1" hidden>Enter App ID</label> */}
            {/* <input
              type="text"
              name="appid"
              value={ newUser.appid}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2 mb-4"
           hidden /> */}
            <div className="flex justify-between">
              <button onClick={closeModal} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">Cancel</button>
              <button onClick={saveUser} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllUsers;



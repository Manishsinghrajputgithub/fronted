import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DepositTransaction = () => {
  const [selectedGames, setSelectedGames] = useState([]);

  const [depositData, setDepositData] = useState([]);
  const [search, setSearch] = useState('');
  const [newGame, setNewGame] = useState({
    gameclubname: '',
    opentime: '',
    closetime: '',
    status: '',
  });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentGameId, setCurrentGameId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGameId, setSelectedGameId] = useState(null);
  const [gameOptions, setGameOptions] = useState([]);

  // Fetch game list from API
  useEffect(() => {
    const fetchGameList = async () => {
      try {
        const response = await fetch('https://mern-project1-sxvr.onrender.com/gamelist');
        const result = await response.json();
        if (result.status === 'SUCCESS') {
          setDepositData(result.data);
          if (result.data && result.data.gamelistids) {
            setSelectedGames(result.data.gamelistids);
          }
          //console.log(result.data.gamelistids);
        } else {
          console.error('Failed to fetch game list');
        }
      } catch (error) {
        console.error('Error fetching game list:', error);
      }
    };

    fetchGameList();
  }, []);

  const handleSelectChange = (e) => {
    
    const options = e.target.options;
    const selectedValues = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    setSelectedGames(selectedValues);
    console.log(selectedGames)
  };

  const handleGamesSubmit = async () => {
    try {
      const response = await axios.post(`https://mern-project1-sxvr.onrender.com/saveGameSelection/${selectedGameId}`, {
        gamelistids: selectedGames,
      });
      console.log(response.data.message);
    } catch (error) {
      console.error('Error saving game selection:', error);
    }
  };
  // Save new or edited game
  const handleSaveGame = async () => {
    try {
      const url = isEditing
        ? `https://mern-project1-sxvr.onrender.com/editGame/${currentGameId}`
        : 'https://mern-project1-sxvr.onrender.com/addgame';
      const method = isEditing ? 'PATCH' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGame),
      });
      const result = await response.json();
      if (result.status === 'SUCCESS') {
        alert(isEditing ? 'Game updated successfully!' : 'Game added successfully!');
        setDepositData((prevData) =>
          isEditing
            ? prevData.map((game) => (game._id === currentGameId ? newGame : game))
            : [...prevData, newGame]
        );
        setIsFormVisible(false);
        setIsEditing(false);
        setCurrentGameId(null);
        setNewGame({ gameclubname: '', opentime: '', closetime: '', status: '' });
      } else {
        alert(result.errorMessage || 'Failed to save game');
      }
    } catch (error) {
      console.error('Error saving game:', error);
      alert('An error occurred while saving the game');
    }
  };

  // Handle edit of game
  const handleEditGame = (game) => {
    setNewGame(game);
    setIsFormVisible(true);
    setIsEditing(true);
    setCurrentGameId(game._id);
  };

  // Handle status update
  const handleStatus = async (id) => {
    if (window.confirm('Are you sure you want to update this status?')) {
      try {
        const response = await fetch(`https://mern-project1-sxvr.onrender.com/statusupdate/${id}`, {
          method: 'PATCH',
        });
        const result = await response.json();
        if (result.status === 'SUCCESS') {
          alert('Status updated successfully');
          window.location.reload();
        } else {
          alert('Failed to update status');
        }
      } catch (error) {
        console.error('Error updating status:', error);
        alert('An error occurred while updating the status');
      }
    }
  };

  // Handle delete game
  const handleDeleteGame = async (id) => {
    if (window.confirm('Are you sure you want to delete this game?')) {
      try {
        const response = await fetch(`https://mern-project1-sxvr.onrender.com/deletegame/${id}`, {
          method: 'DELETE',
        });
        const result = await response.json();
        if (result.status === 'SUCCESS') {
          alert('Game deleted successfully!');
          setDepositData(depositData.filter((game) => game._id !== id));
        } else {
          alert('Failed to delete game');
        }
      } catch (error) {
        console.error('Error deleting game:', error);
        alert('An error occurred while deleting the game');
      }
    }
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedGameId(null);
  };

  // Handle games for selection in modal
 // Handle games for selection in modal
 const handleGames = async (id) => {
  setSelectedGameId(id);
  setIsModalOpen(true);

  // Fetch game options
  try {
    const response = await fetch('https://mern-project1-sxvr.onrender.com/gameentities');
    const result = await response.json();
    console.log('Fetched game options:', result);

    if (result.status === 'SUCCESS' && Array.isArray(result.data)) {
      // Filter games by uid if needed, otherwise display all
      setGameOptions(result.data);  // This stores all the game options in state
    } else {
      console.error('Failed to fetch game options or incorrect data structure');
    }
  } catch (error) {
    console.error('Error fetching game options:', error);
  }
};



  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">Games</h2>

      <div className="flex items-center justify-between mb-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            setIsFormVisible(!isFormVisible);
            setIsEditing(false);
            setNewGame({ gameclubname: '', opentime: '', closetime: '', status: '' });
          }}
        >
          {isFormVisible ? 'Close Form' : 'Add Game'}
        </button>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1"
        />
      </div>

      {isFormVisible && (
        <div className="mb-4 p-4 bg-white shadow rounded">
          <h3 className="text-lg font-semibold mb-2">{isEditing ? 'Edit Game' : 'Add New Game'}</h3>
          <label className="block mb-1">Enter Game Name</label>
          <input
            type="text"
            placeholder="Enter Game Name"
            value={newGame.gameclubname}
            onChange={(e) => setNewGame({ ...newGame, gameclubname: e.target.value })}
            className="border border-gray-300 rounded px-3 py-1 mb-2 w-full"
          />

          <label className="block mb-1">Open Time</label>
          <input
            type="time"
            value={newGame.opentime}
            onChange={(e) => setNewGame({ ...newGame, opentime: e.target.value })}
            className="border border-gray-300 rounded px-3 py-1 mb-2 w-full"
          />

          <label className="block mb-1">Close Time</label>
          <input
            type="time"
            value={newGame.closetime}
            onChange={(e) => setNewGame({ ...newGame, closetime: e.target.value })}
            className="border border-gray-300 rounded px-3 py-1 mb-2 w-full"
          />

          <label className="block mb-1">Status</label>
          <input
            type="text"
            placeholder="Status"
            value={newGame.status}
            onChange={(e) => setNewGame({ ...newGame, status: e.target.value })}
            className="border border-gray-300 rounded px-3 py-1 mb-2 w-full"
          />

          <button
            onClick={handleSaveGame}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            {isEditing ? 'Update Game' : 'Save changes'}
          </button>
        </div>
      )}

      <div className="bg-white shadow rounded-md overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3 border-b">#</th>
              <th className="p-3 border-b">Game Club Name</th>
              <th className="p-3 border-b">Open Time</th>
              <th className="p-3 border-b">Close Time</th>
              <th className="p-3 border-b">Game List</th>
              <th className="p-3 border-b">Status</th>
              <th className="p-3 border-b">Edit</th>
              <th className="p-3 border-b">Delete</th>
            </tr>
          </thead>
          <tbody>
            {depositData
              .filter((item) =>
                item.gameclubname.toLowerCase().includes(search.toLowerCase())
              )
              .map((game, index) => (
                <tr key={game._id} className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <td className="p-3 border-b">{index + 1}</td>
                  <td className="p-3 border-b">{game.gameclubname}</td>
                  <td className="p-3 border-b">{game.opentime}</td>
                  <td className="p-3 border-b">{game.closetime}</td>
                  <td className="p-3 border-b">
                    <button
                      onClick={() => handleGames(game._id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Game List
                    </button>
                  </td>
                  <td className="p-3 border-b">
                    <button
                      onClick={() => handleStatus(game._id)}
                      className={`px-4 py-2 rounded ${
                        game.status === 'true' ? 'bg-green-500' : 'bg-red-500'
                      }`}
                    >
                     {game.status==="true"?"active":"inActive"}
                    </button>
                  </td>
                  <td className="p-3 border-b">
                    <button
                      onClick={() => handleEditGame(game)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                  </td>
                  <td className="p-3 border-b">
                    <button
                      onClick={() => handleDeleteGame(game._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Modal for games */}
     {/* Modal for games */}
{isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded shadow-md max-w-md w-full">
      <h3 className="text-xl font-semibold mb-4">Select Game</h3>
      
      {/* Add a fallback message if there are no game options */}
      {gameOptions.length === 0 ? (
  <p>No games available. Please check again later.</p>
) : (
  <div>
      <select
        multiple
        className="border border-gray-300 p-2 w-full"
        onChange={handleSelectChange}
        value={selectedGames} 
      >
        <option value="">Select a Game</option>
        {gameOptions.map((game) => (
          <option key={game.uid} value={game.uid}>
            {game.gamename}
          </option>
        ))}
      </select>
      <button onClick={handleGamesSubmit} className="bg-green-500 p-2 text-white mt-2">
        Submit
      </button>
    </div>
)}


      <button
        onClick={closeModal}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
      >
        Close
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default DepositTransaction;

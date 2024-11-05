import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaChartLine, FaGamepad, FaFileAlt, FaAngleDown, FaClipboardList, FaCog } from 'react-icons/fa';

const Sidebar = ({ isSidebarOpen }) => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  // const Sidebar = ({ onToggleSidebar }) => { // Add `onToggleSidebar` prop here
  //   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  //   // Original toggle function is now passed from Header
  //   return (
  //     <div className="flex">
  //       {/* Remove this button code from Sidebar */}
  //       {/* Pass the `onToggleSidebar` prop instead */}
  //     </div>
  //   );
  // };
  
  
  return (
    <div className="flex">
     

      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white h-screen p-4 overflow-y-scroll shadow-lg f transition-all sticky  z-10  duration-300 ${isSidebarOpen ? 'w-64' : 'w-0'
          } overflow-hidden` }
      >
        {isSidebarOpen && (
          <>
            {/* Logo/Brand area */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Admin Panel</h2>
              <span className="text-sm text-gray-400">v1.0</span>
            </div>

            <ul className="space-y-4">
              {/* Dashboard */}
              <li>
                <Link
                  to="/dashboard"
                  className="flex items-center px-3 py-2 hover:bg-gray-700 rounded-md transition-colors"
                >
                  <FaHome className="mr-3" />
                  Dashboard
                </Link>
              </li>

              {/* All Users */}
              <li>
                <Link
                  to="/all-users"
                  className="flex items-center px-3 py-2 hover:bg-gray-700 rounded-md transition-colors"
                >
                  <FaUser className="mr-3" />
                  All Users
                </Link>
              </li>

              {/* System Reports */}
              <li>
                <button
                  onClick={() => toggleMenu('systemReports')}
                  className="flex items-center justify-between w-full text-left px-3 py-2 hover:bg-gray-700 rounded-md transition-colors"
                >
                  <div className="flex items-center">
                    <FaChartLine className="mr-3" />
                    System Reports
                  </div>
                  <FaAngleDown className={`transform ${openMenus.systemReports ? 'rotate-180' : ''}`} />
                </button>
                {openMenus.systemReports && (
                  <ul className="ml-8 mt-2 space-y-2 text-sm text-gray-300">
                    <li><Link to="/system-reports/market-win" className="hover:text-white">Market Win/Bid</Link></li>
                    <li><Link to="/system-reports/deposit-transaction" className="hover:text-white">Deposit Transaction</Link></li>
                    <li><Link to="/system-reports/withdraw-transaction" className="hover:text-white">Withdraw Transaction</Link></li>
                  </ul>
                )}
              </li>

              {/* Game Result */}
              <li>
                <Link
                  to="/game-management/result"
                  className="flex items-center px-3 py-2 hover:bg-gray-700 rounded-md transition-colors"
                >
                  <FaGamepad className="mr-3" />
                  Game Result
                </Link>
              </li>

              {/* Withdraw List */}
              <li>
                <Link
                  to="/withdraw-list"
                  className="flex items-center px-3 py-2 hover:bg-gray-700 rounded-md transition-colors"
                >
                  <FaFileAlt className="mr-3" />
                  Withdraw List
                </Link>
              </li>

              {/* Game Management */}
              <li>
                <button
                  onClick={() => toggleMenu('gameManagement')}
                  className="flex items-center justify-between w-full text-left px-3 py-2 hover:bg-gray-700 rounded-md transition-colors"
                >
                  <div className="flex items-center">
                    <FaGamepad className="mr-3" />
                    Game Management
                  </div>
                  <FaAngleDown className={`transform ${openMenus.gameManagement ? 'rotate-180' : ''}`} />
                </button>
                {openMenus.gameManagement && (
                  <ul className="ml-8 mt-2 space-y-2 text-sm text-gray-300">
                    <li><Link to="/game-management/provider" className="hover:text-white">Game Provider</Link></li>
                    <li><Link to="/game-management/rates" className="hover:text-white">Game Rates</Link></li>
                    <li><Link to="/game-management/result" className="hover:text-white">Game Result</Link></li>
                    <li><Link to="/game-management/result-history" className="hover:text-white">Result History</Link></li>
                  </ul>
                )}
              </li>
              {/* Bookie Corner */}
              <li>
                <button
                  onClick={() => toggleMenu('bookieCorner')}
                  className="flex items-center justify-between w-full text-left px-3 py-2 hover:bg-gray-700 rounded-md transition-colors"
                >
                  <div className="flex items-center">
                    <FaClipboardList className="mr-3" />
                    Bookie Corner
                  </div>
                  <FaAngleDown className={`transform ${openMenus.bookieCorner ? 'rotate-180' : ''}`} />
                </button>
                {openMenus.bookieCorner && (
                  <ul className="ml-8 mt-2 space-y-2 text-sm text-gray-300">
                    <li><Link to="/bookie/oc-cutting-combined" className="hover:text-white">OC Cutting Combined</Link></li>
                    <li><Link to="/bookie/oc-cutting-group" className="hover:text-white">OC Cutting Group</Link></li>
                    <li><Link to="/bookie/cutting-group" className="hover:text-white">Cutting Group</Link></li>
                    <li><Link to="/bookie/total-bid" className="hover:text-white">Total Bid</Link></li>
                  </ul>
                )}
              </li>
              {/* Report Management */}
              <li>
                <button
                  onClick={() => toggleMenu('reportManagement')}
                  className="flex items-center justify-between w-full text-left px-3 py-2 hover:bg-gray-700 rounded-md transition-colors"
                >
                  <div className="flex items-center">
                    <FaChartLine className="mr-3" />
                    Report Management
                  </div>
                  <FaAngleDown className={`transform ${openMenus.reportManagement ? 'rotate-180' : ''}`} />
                </button>
                {openMenus.reportManagement && (
                  <ul className="ml-8 mt-2 space-y-2 text-sm text-gray-300">
                    <li><Link to="/reports/winner-prediction" className="hover:text-white">Winner Prediction</Link></li>
                    <li><Link to="/reports/profit-loss" className="hover:text-white">Profit/Loss</Link></li>
                    <li><Link to="/reports/winning-detail" className="hover:text-white">Winning Detail</Link></li>
                    <li><Link to="/reports/bet-filter" className="hover:text-white">Bet Filter</Link></li>
                    <li><Link to="/reports/customer-sell-report" className="hover:text-white">Customer Sell Report</Link></li>
                    <li><Link to="/reports/bid-history" className="hover:text-white">Bid History</Link></li>
                    <li><Link to="/withdraw-list" className="hover:text-white">Withdraw Report</Link></li>
                  </ul>
                )}
              </li>
              {/* Wallet Management */}
              <li>
                <button
                  onClick={() => toggleMenu('walletManagement')}
                  className="flex items-center justify-between w-full text-left px-3 py-2 hover:bg-gray-700 rounded-md transition-colors"
                >
                  <div className="flex items-center">
                    <FaClipboardList className="mr-3" />
                    Wallet Management
                  </div>
                  <FaAngleDown className={`transform ${openMenus.walletManagement ? 'rotate-180' : ''}`} />
                </button>
                {openMenus.walletManagement && (
                  <ul className="ml-8 mt-2 space-y-2 text-sm text-gray-300">
                    <li><Link to="/wallet/view" className="hover:text-white">View Wallet</Link></li>
                    <li><Link to="/wallet/edit" className="hover:text-white">Edit Wallet</Link></li>
                    <li><Link to="/wallet/fund-report" className="hover:text-white">Fund Report</Link></li>
                    <li><Link to="/wallet/deposit-request" className="hover:text-white">Deposit Request</Link></li>
                    <li><Link to="/wallet/upi-verification" className="hover:text-white">UPI Verification</Link></li>
                    <li><Link to="/wallet/auto-add-points" className="hover:text-white">Auto Add Points</Link></li>
                    <li><Link to="/withdraw-list" className="hover:text-white">Withdraw Point Request</Link></li>
                    <li><Link to="/wallet/bank-details-change" className="hover:text-white">Bank Details Change Request</Link></li>
                    <li><Link to="/wallet/add-point" className="hover:text-white">Add Point (User Wallet)</Link></li>
                    <li><Link to="/wallet/bid-revert" className="hover:text-white">Bid Revert</Link></li>
                  </ul>
                )}
              </li>
              {/* Notice Management */}
              <li>
                <button
                  onClick={() => toggleMenu('noticeManagement')}
                  className="flex items-center justify-between w-full text-left px-3 py-2 hover:bg-gray-700 rounded-md transition-colors"
                >
                  <div className="flex items-center">
                    <FaClipboardList className="mr-3" />
                    Notice Management
                  </div>
                  <FaAngleDown className={`transform ${openMenus.noticeManagement ? 'rotate-180' : ''}`} />
                </button>
                {openMenus.noticeManagement && (
                  <ul className="ml-8 mt-2 space-y-2 text-sm text-gray-300">
                    <li><Link to="/notice/bell-notification" className="hover:text-white">Bell Notification</Link></li>
                    <li><Link to="/notice/manage" className="hover:text-white">Notice Management</Link></li>
                    <li><Link to="/notice/send" className="hover:text-white">Send Notification</Link></li>
                  </ul>
                )}
              </li>
              {/* Game & Numbers */}
              <li>
                <button
                  onClick={() => toggleMenu('gameNumbers')}
                  className="flex items-center justify-between w-full text-left px-3 py-2 hover:bg-gray-700 rounded-md transition-colors"
                >
                  <div className="flex items-center">
                    <FaGamepad className="mr-3" />
                    Game & Numbers
                  </div>
                  <FaAngleDown className={`transform ${openMenus.gameNumbers ? 'rotate-180' : ''}`} />
                </button>
                {openMenus.gameNumbers && (
                  <ul className="ml-8 mt-2 space-y-2 text-sm text-gray-300">
                    <li><Link to="/game-numbers/single-digit" className="hover:text-white">Single Digit</Link></li>
                    <li><Link to="/game-numbers/jodi-digit" className="hover:text-white">Jodi Digit</Link></li>
                    <li><Link to="/game-numbers/single-pana" className="hover:text-white">Single Pana</Link></li>
                    <li><Link to="/game-numbers/double-pana" className="hover:text-white">Double Pana</Link></li>
                    <li><Link to="/game-numbers/triple-pana" className="hover:text-white">Triple Pana</Link></li>
                    <li><Link to="/game-numbers/half-sangam" className="hover:text-white">Half Sangam</Link></li>
                    <li><Link to="/game-numbers/full-sangam" className="hover:text-white">Full Sangam</Link></li>
                  </ul>
                )}
              </li>




              {/* Settings */}
              <li>
                <Link
                  to="/settings"
                  className="flex items-center px-3 py-2 hover:bg-gray-700 rounded-md transition-colors"
                >
                  <FaCog className="mr-3" />
                  Settings
                </Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

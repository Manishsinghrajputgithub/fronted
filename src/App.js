// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AllUsers from './components/AllUsers';
import WithdrawList from './components/WithdrawList';
import Login from './components/Login';

// Import GameManagement subcomponents only
import GameProvider from './components/GameManagement/GameProvider';
import GameRates from './components/GameManagement/GameRates';
import GameResult from './components/GameManagement/GameResult';
import ResultHistory from './components/GameManagement/ResultHistory';

// Import SystemReports subcomponents only
import MarketWinBid from './components/SystemReports/MarketWinBid';
import DepositTransaction from './components/SystemReports/DepositTransaction';
import WithdrawTransaction from './components/SystemReports/WithdrawTransaction';

// Import Bookie Corner subcomponents only
import OcCuttingCombined from './components/BookieCorner/OcCuttingCombined';
import OcCuttingGroup from './components/BookieCorner/OcCuttingGroup';
import CuttingGroup from './components/BookieCorner/CuttingGroup';
import TotalBid from './components/BookieCorner/TotalBid';
import TotalWinner from './components/BookieCorner/TotalWinner';
// nn

import WinnerPrediction from './components/reports/WinnerPrediction';
import ProfitLoss from './components/reports/ProfitLoss';
import WinningDetail from './components/reports/WinningDetail';
import BetFilter from './components/reports/BetFilter';
import CustomerSellReport from './components/reports/CustomerSellReport';
import BidHistory from './components/reports/BidHistory';
import WithdrawReport from './components/reports/WithdrawReport';

import ViewWallet from './components/wallet/ViewWallet';
import EditWallet from './components/wallet/EditWallet';
import FundReport from './components/wallet/FundReport';
import DepositRequest from './components/wallet/DepositRequest';
import UpiVerification from './components/wallet/UpiVerification';
import AutoAddPoints from './components/wallet/AutoAddPoints';
import WithdrawPointRequest from './components/wallet/WithdrawPointRequest';
import BankDetailsChange from './components/wallet/BankDetailsChange';
import AddPoint from './components/wallet/AddPoint';
import BidRevert from './components/wallet/BidRevert';


import BellNotification from './components/notice/BellNotification';
import NoticeManagement from './components/notice/NoticeManagement';
import SendNotification from './components/notice/SendNotification';

import SingleDigit from './components/game-numbers/SingleDigit';
import JodiDigit from './components/game-numbers/JodiDigit';
import SinglePana from './components/game-numbers/SinglePana';
import DoublePana from './components/game-numbers/DoublePana';
import TriplePana from './components/game-numbers/TriplePana';
import HalfSangam from './components/game-numbers/HalfSangam';
import FullSangam from './components/game-numbers/FullSangam';




function App() {
  // Initialize the state with localStorage value
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <Router>
      {isLoggedIn ? (
        <div className="flex h-screen">
          <Sidebar isSidebarOpen={isSidebarOpen} />
          <div className=" flex-1 overflow-y-auto">
            {/* Pass handleLogout as a prop to Header */}
            <Header onLogout={handleLogout} onToggleSidebar={toggleSidebar} />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/all-users" element={<AllUsers />} />
              <Route path="/withdraw-list" element={<WithdrawList />} />


              
              {/* Game Management Routes */}
              <Route path="/game-management/provider" element={<GameProvider />} />
              <Route path="/game-management/rates" element={<GameRates />} />
              <Route path="/game-management/result" element={<GameResult />} />
              <Route path="/game-management/result-history" element={<ResultHistory />} />

              {/* System Reports Routes */}
              <Route path="/system-reports/market-win" element={<MarketWinBid />} />
              <Route path="/system-reports/deposit-transaction" element={<DepositTransaction />} />
              <Route path="/system-reports/withdraw-transaction" element={<WithdrawTransaction />} />

              {/* Bookie Corner Routes */}
              <Route path="/bookie/oc-cutting-combined" element={<OcCuttingCombined />} />
              <Route path="/bookie/oc-cutting-group" element={<OcCuttingGroup />} />
              <Route path="/bookie/cutting-group" element={<CuttingGroup />} />
              <Route path="/bookie/total-bid" element={<TotalBid />} />
              <Route path="/bookie/total-winner" element={<TotalWinner />} />

              <Route path="/reports/winner-prediction" element={<WinnerPrediction />} />
        <Route path="/reports/profit-loss" element={<ProfitLoss />} />
        <Route path="/reports/winning-detail" element={<WinningDetail />} />
        <Route path="/reports/bet-filter" element={<BetFilter />} />
        <Route path="/reports/customer-sell-report" element={<CustomerSellReport />} />
        <Route path="/reports/bid-history" element={<BidHistory />} />
        <Route path="/reports/withdraw-report" element={<WithdrawReport />} />

        <Route path="/wallet/view" element={<ViewWallet />} />
        <Route path="/wallet/edit" element={<EditWallet />} />
        <Route path="/wallet/fund-report" element={<FundReport />} />
        <Route path="/wallet/deposit-request" element={<DepositRequest />} />
        <Route path="/wallet/upi-verification" element={<UpiVerification />} />
        <Route path="/wallet/auto-add-points" element={<AutoAddPoints />} />
        <Route path="/wallet/withdraw-point-request" element={<WithdrawPointRequest />} />
        <Route path="/wallet/bank-details-change" element={<BankDetailsChange />} />
        <Route path="/wallet/add-point" element={<AddPoint />} />
        <Route path="/wallet/bid-revert" element={<BidRevert />} />

        <Route path="/notice/bell-notification" element={<BellNotification />} />
<Route path="/notice/manage" element={<NoticeManagement />} />
<Route path="/notice/send" element={<SendNotification />} />

<Route path="/game-numbers/single-digit" element={<SingleDigit />} />
<Route path="/game-numbers/jodi-digit" element={<JodiDigit />} />
<Route path="/game-numbers/single-pana" element={<SinglePana />} />
<Route path="/game-numbers/double-pana" element={<DoublePana />} />
<Route path="/game-numbers/triple-pana" element={<TriplePana />} />
<Route path="/game-numbers/half-sangam" element={<HalfSangam />} />
<Route path="/game-numbers/full-sangam" element={<FullSangam />} />

        




              {/* Fallback Route */}
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;

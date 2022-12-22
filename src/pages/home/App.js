//import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav-bar/nav-bar'
import Dashboard from './components/dashboard/dashboard'
// import BasicExample from './components/basic-nav/basic-example';
import { BiListUl } from "react-icons/bi";
import React from "react";
import HistoryPanel from './components/history-panel/history-panel';
// import BottomNavBar from './components/bottom-nav-bar/bottom-nav-bar';

function App() {
  return (
    <div className="App">
      <div className='Container'>
  
      <Dashboard/>
      <HistoryPanel/>
      <NavBar/>
      {/* <Dashboard/> */}
      </div>
      {/* <BottomNavBar/> */}

    </div>
  );
}

export default App;

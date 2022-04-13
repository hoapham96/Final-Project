import React from "react";

import NavBar from "./components/NavBar";

import './App.css';
import CardDeck from "./components/CardDeck";
import Profile from "./components/Profile";

function App() {
  return (
    <div id="container">
      <NavBar />
      <CardDeck />
      <Profile />
    </div>
   
  );
}

export default App;

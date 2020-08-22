import React from 'react';
import './App.css';
import Header from "./Header";
import Respository from './Repository';
import GitAds from './GitAds';
import ExploreRepo from './ExploreRepo'


function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="app__main">
        <div className="app__left">
          <Respository></Respository>
        </div>
        <div className="app__detail">
          <div></div>
          <div className="app__detailright">
            <GitAds></GitAds>
            <ExploreRepo></ExploreRepo>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

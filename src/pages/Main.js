import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';

import './Main.css';
import searchIcon from '../images/search.png';
function Main() {
    var w = window.innerWidth; //화면 크기 저장
    var h = window.innerHeight;
  return (
      <div>
          <div id='mainHeader'>
              <div id="mainHeaderin">
                  <Link to="/" id="mainReturn">HOME</Link>
                  <button>
                    <img src={searchIcon} width={10}/>
                  </button>
                  <Link to="/Page1">Page1</Link>
                  <Link to="/Page2">Page2</Link>
              </div>
          </div>
          <div id="mainBody">
              <div id="mainBodyin">
                  <Routes>
                      <Route path="/" element={<div>
                          main
                      </div>} />
                      <Route path="/Page1" element={<Page1 />} />
                      <Route path="/Page2" element={<Page2 />} />
                  </Routes>
              </div>
          </div>
      </div>
  );
}

export default Main;

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';


function Main() {
  return (
    <div >
        <nav>
            <Link to="/">home</Link>
            <Link to="/Page1">Page1</Link>
            <Link to="/Page2">Page2</Link>

        </nav>
        <Routes>
            <Route path="/" element={<input></input>}/>
            <Route path="/Page1" element={<Page1/>}/>
            <Route path="/Page2" element={<Page2/>}/>

        </Routes>

    </div>
  );
}

export default Main;

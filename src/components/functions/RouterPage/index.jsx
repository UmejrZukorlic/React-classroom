import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import About from './About/index.jsx';
import Cointact from './Contact/index.jsx';
import Home from "./Home/index.jsx"
import Team from './Team/index.jsx';

function RouterPage() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/contact' element={<Cointact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<p>404</p>}/>
      </Routes>
    </div>
  )
}

export default RouterPage
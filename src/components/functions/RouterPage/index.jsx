import React from 'react';
import {
    Routes,
    Route,
    Outlet,
} from "react-router-dom";
import About from './About/index.jsx';
import Cointact from './Contact/index.jsx';
import Home from "./Home/index.jsx"
import Product from './Product/index.jsx';
import Settings from './Settings/index.jsx';
import Team from './Team/index.jsx';
import User from './User/index.jsx';
import Users from './Users/index.jsx';

function RouterPage() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Cointact/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/product/:productId'element={<Product/>}/>
        <Route path='settings' element={<Settings/>}>
          <Route index element={<p>nesto</p>}/>
          <Route path='general' element={<p>general</p>}></Route>
          <Route path='user' element={<p>users</p>}></Route>
          <Route path='messages' element={<p>messages</p>}></Route>
        </Route>
        <Route path='*' element={<p>404</p>}/>
      </Routes>
    </div>
  )
}

export default RouterPage
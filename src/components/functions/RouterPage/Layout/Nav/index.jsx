import React from 'react';
import { Link } from 'react-router-dom';
import style from "./nav.module.css"

function Nav() {
  return (
    <div className={style.nav}>
        <Link className={style.navitem} to="/">Home</Link>
        <Link className={style.navitem} to="/team">Team</Link>
        <Link className={style.navitem} to="/contact">Contact</Link>
        <Link className={style.navitem} to="/about">About</Link>
    </div>
    
  )
}

export default Nav
import React from 'react'
import { Link } from 'react-router-dom';
import style from "./footer.module.css"


function Footer() {
  return (
    <div className={style.footer}>
        <Link className={style.footeritem} to="/">Home</Link>
        <Link className={style.footeritem} to="/team">Team</Link>
        <Link className={style.footeritem} to="/contact">Contact</Link>
        <Link className={style.footeritem} to="/about">About</Link>
        <p>:)</p>
    </div>
  )
}

export default Footer
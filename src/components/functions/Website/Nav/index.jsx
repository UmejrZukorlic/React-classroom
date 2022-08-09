import React from 'react'
import style from "./style.module.css"

function Nav(props) {
    
  return (
    <div className={style.nav}>
        <div className='nav_start'>
            <h1>Tailblocks</h1>
        </div>
        <div className='nav_center'>
            <ul>
                <li>First Link</li>
                <li>Second Link</li>
                <li>Third Link</li>
                <li>Fourth Link</li>
            </ul>
        </div>
        <div className='nav_end'>
            <button>Button</button>
        </div>
    </div>
  )
}

export default Nav
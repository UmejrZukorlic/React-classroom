import React from 'react'
import style from './style.module.css'
function Hero(props) {
  return (
    <div className={style.hero_section}>
        <div className={style.hero_left}>
            <h1>Before they sold out
                readymade gluten</h1>
            <p>Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot 
                chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div>
                <button>Button</button>
                <button>Button</button>
            </div>
        </div>
        <div>
            <img src="https://dummyimage.com/720x600" alt="slika" className={style.img} />
        </div>
    </div>
  )
}

export default Hero
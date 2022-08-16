import React from 'react'
import Layout from '../Layout'
import style from "./style.css"
function Home() {
  return (
    <>
        <Layout>
            <div className="homeSection">
                <div className='homeLeft'>
                    <h1>Before they sold out
                    readymade gluten</h1>
                    <p>Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                    <div className='buttons'><button>nottuB</button><button>Button</button></div>
                </div>
                <div className='homeRight'>
                    <img src="https://images.pexels.com/photos/7327624/pexels-photo-7327624.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                </div>
            </div>
        </Layout>
    </>
  )
}

export default Home
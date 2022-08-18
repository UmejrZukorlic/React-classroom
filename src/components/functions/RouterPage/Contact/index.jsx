import React from 'react'
import Layout from '../Layout'
import style from './style.css'

function Cointact() {
  return (
    <>
    <Layout>
        <div className='contactSection'>
            <div className='contactHeader'>
                <h1>Contact Us</h1>
                <p>Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
            </div>
            <div className='Inputs'>
                <div className='nameAndEmail'>
                    <div>
                        <label htmlFor="">Name</label>
                        <input type="text" />

                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="text" />

                    </div>

                </div>
                <div className='message'>
                    <label htmlFor="">Message</label>
                    <input type="text" />
                </div>
                <button>Button</button>
            </div>
        </div>
    </Layout>
    </>
  )
}

export default Cointact
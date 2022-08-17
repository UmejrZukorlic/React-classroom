import React from 'react'
import Layout from '../Layout'
import style from './style.css'


function About() {
    
  const infoArray = [{
    icon:"http://cdn.onlinewebfonts.com/svg/img_535520.png",
    name:"Web Desing",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum repellendus quam cum."

  },
  {
    icon:"data:image/png;base64,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",
    name:"Graphic Desing",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum repellendus quam cum."

  },
  {
    icon:"https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    name:"Web Development",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum repellendus quam cum."

  }


]


  return (
    <>
    <Layout>
        <div className='aboutSection'>
          <div className='aboutHeader'>
              <h1>OUR SERVICE</h1>
          </div>
          <div className='services'>
            {infoArray.map((el)=>{
              return <div className='serviceSection'>
                  <div className='iconSection'>
                    <img src={el.icon} alt={el.icon} />
                  </div>
                  <div className='descriptionSection'>
                    <h2>{el.name}</h2>
                    <p>{el.description}</p>
                  </div>
              </div>
            })}

          </div>
        </div>
    </Layout>
    </>
  )
}

export default About
import React from 'react'
// import Footer from './Footer/index.jsx'
import Hero from './Hero/index.jsx'
import Layout from './Layout/index.jsx'
// import Nav from './Nav/index.jsx'

function Website(props) {
    console.log(window.location);
  return <div>
    <Layout>
        <Hero />
    </Layout>
    
    
  </div>
  
}

export default Website
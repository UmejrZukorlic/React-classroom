import React from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../Layout'

function About() {
    const navigation = useNavigate()

    const redirectHome= () => {
        navigation("/")
    }


  return (
    <>
    <Layout>
        <div>About</div>
        <button onClick={redirectHome}>Send me home</button>
    </Layout>
    </>
  )
}

export default About
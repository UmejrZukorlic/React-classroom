import React from 'react'
import { useState, useEffect } from 'react'
import Layout from '../Layout'
import style from './style.css'

function Team() {

  const [user,setUser]=useState([])
  const getUsers = () => {
    fetch("https://randomuser.me/api/?results=6")
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        console.log(data.results[0]);
        setUser(data.results)

        // Access your data here
      });
  }
  useEffect(() => {
    getUsers()
  }, [])
  

  return (
    <>
        <Layout>
            <div className='teamSection'>
              <div className='teamDescription'>
                <h1>This is our team</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsam non delectus rem nobis quibusdam.</p>
              </div>
              <div className='teamProfile'>
                {user.map((item)=>{
                  return <div className='worker'>
                    <img src={item.picture.large} alt="slika"/>
                    <div className='workerAbout'>
                      <h2>{`${item.name.first} ${item.name.last}`}</h2>
                      <p>{`${item.location.city}, ${item.location.country}`}</p>
                      <p>{item.email}</p>
                    </div>
                  </div>
                })}


              </div>

            </div>
        </Layout>
    </>
  )
}

export default Team
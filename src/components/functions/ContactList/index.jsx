import React, { useState,useEffect } from 'react'

function ContactList(props) {
    const [contacts , setContacts]=useState([])
    useEffect(()=>{fetch("https://randomuser.me/api/?results=5")
    .then(respone => respone.json())
    .then(data=>setContacts(data.results))},[]) 
        return <div>
            {contacts.map((el,i)=>{

                return <div>
                    <img src={el.picture.medium} alt={el.gender} />
                    <h1>{`Name: ${el.name.first} ${el.name.last}`}</h1>
                    <p>{el.email}</p>
                </div>
            })}
        </div>
   
}

export default ContactList
import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import api from "../../../api/api";
import QuoteCard from './QuoteCard';


function GetQuotes() {

    const [quotes,setQuotes]= useState([])

    const fetchQuotes = async () => {
        try {
          const result = await api.get(`/quotes`);
          const data = result.data;
          setQuotes(data.result)
        } catch (error) {
          console.log(error);
        }
    };

    useEffect(()=>{
        fetchQuotes()
    },[])

    return <div>
        {quotes.map((el,i)=>{return <QuoteCard author={el.author} content={el.content} key={i}/>})}
    </div>
}

export default GetQuotes
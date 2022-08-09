import React from 'react'
import {formatDistanceStrict} from "date-fns"

function Countdown(props) {
    const {toDate, fromDate} =props
    const currentDate = new Date()
    
    const difference = formatDistanceStrict(
        currentDate
        ,new Date(2022,6,3)) 
    console.log(difference);
    
  return (
    <div>{currentDate.toDateString()}</div>
  )
}

export default Countdown
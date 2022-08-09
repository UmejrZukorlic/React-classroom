import React, { Fragment } from 'react'

function Fragments() {
    const array = [1,2,3,4]
  return (
    <div style={{display:"flex", gap:"10px"}}>{array.map((el, index)=>{
        return <Fragment key={index}>
            <p>Broj{el}</p>
            <p>{el}Broj</p>
        </Fragment>
    })}
    </div>
  )
}

export default Fragments
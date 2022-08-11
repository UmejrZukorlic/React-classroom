import React, { useRef } from 'react'

function Ref() {
    const myRef = useRef()

    console.log(myRef, myRef.current)
  return (
    <div>
        <input ref={myRef} type="text"  />
        <button onClick={()=>{
            myRef.current.focus()
            console.log(myRef, myRef.current)
            }}>focus input</button>
    </div>
  )
}

export default Ref
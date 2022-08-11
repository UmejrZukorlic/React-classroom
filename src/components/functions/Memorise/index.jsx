import React, { useCallback, useEffect, useMemo, useState } from 'react'

function Memorise(props) {

    const [text, setText]=useState(1);

    const arrayObj = [{id:1},{id:2},{id:3}]

    // const myCallback = useCallback((e) => {
    //     setText(e.target.value)
    //     console.log(e.target.value)
    // },[setText])

    const filteredArray = useMemo(()=>{
        arrayObj.filter((item)=>{ return item.id.includes(text) })
    },[text]) 
    

  return (
    <div>
        {/* <MyInput onChange={myCallback}/>
        <MyInput onChange={myCallback}/>
        <MyInput onChange={myCallback}/> */}
        <input type="number"
        value={text}
        onChange={(e)=> setText(e.target.value)} />

        {filteredArray.map(item =>{
            return <p key={item.id}>{item.id}</p>
        })}

    </div>
  )
}

const MyInput = (props) => {
    return <div>
        <label htmlFor="">My input</label>
        <input type="text" onChange={props.onChange}/>
    </div>
}

export default Memorise
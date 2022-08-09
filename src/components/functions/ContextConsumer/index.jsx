import React, { useContext } from 'react'
import { MyContext } from '../SimpleContext'

function ContextConsumer(props) {
//     const state = useContext(MyContext)
//     console.log(state);
//   return (
//     <div>
//         <button onClick={()=>{state.setText(props.name)}}>Click</button>
//         {props.children}
//         <p>{state.text}</p>
//     </div>
//   )
    const cntr = useContext(MyContext);
    return <div>
        <h1>{cntr.counter}</h1>
        <button onClick={()=>{cntr.setCounter(cntr.counter+1)}}>+1</button>
        {props.children}
    </div>
}

export default ContextConsumer
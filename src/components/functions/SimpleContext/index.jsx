import React, { useState } from 'react'

export const MyContext = React.createContext()


function SimpleContext(props) {
    
//     const [text,setText]=useState("This is seen by all components")

//   return <MyContext.Provider value={{text,setText}}>
//         {props.children}
//     </MyContext.Provider>
    const [counter,setCounter]=useState(0)

    return <MyContext.Provider value={{counter,setCounter}}>
        {props.children}
    </MyContext.Provider>
}

export default SimpleContext
import React, {useState} from "react";
const StateTutorial = (props) => {
    const [counter, setCounter] = useState(0)
    const increase = () => {
        setCounter(counter +1)
    }
    return <div>
        <h1>{counter}</h1>
         <button onClick={increase}>Increase</button>
         </div>
}
export default StateTutorial;
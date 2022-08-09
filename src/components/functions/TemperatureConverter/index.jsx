import React,{useState} from 'react'

function TemperatureConverter(props) {

    const [value,setValue]=useState(0);

    function toCelsius(fahrenheit) {
        return ((fahrenheit - 32)*5)/9
    }

    function toFahrenheit(celsius) {
        return (celsius*9)/5+32
    }
  return (
    <div>
        <TemperatureInput type="Celsius" value={value} setValue={setValue}/>
        {/* <button onClick={()=>{
            const fahrenheitValue= toFahrenheit(value)
            setValue(fahrenheitValue)
        }}>Convert to Fahrenheit</button> */}
        <br />
        <br />
        <TemperatureInput type="Fahrenheit" value={toFahrenheit(value)} setValue={(number)=>{setValue(toCelsius(number))}}/>
        {/* <button onClick={()=>{
            const celsiusValue= toCelsius(value)
            setValue(celsiusValue)
        }}>Convert to Celsius</button> */}
    </div>
  )
}
function TemperatureInput(props) {
    
    const {type="Celsius", value, setValue}=props

    return <div>
        <label>{type}</label>
        <input type="number" value={value} onChange={(e)=>setValue(e.target.value)}/>
    </div>
}

export default TemperatureConverter;
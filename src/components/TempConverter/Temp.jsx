import { useState } from 'react'
import './Temp.css'

function Temp() {
  const [celsius, setCelsius] = useState();
  const [fahrenheit, setFahrenheit] = useState();

  function toFahrenheit(){
    let f = ((celsius*9/5)+32).toFixed(2);
    setFahrenheit(f);
  }

  function toCelsius(){
    let c = ((fahrenheit-32)*5/9).toFixed(2);
    setCelsius(c);
  }

  return (
    <div id='mydiv'>
      <h1 id='title'>Temperature Converter</h1>
    <div id='names'>
      <h1>Celsius</h1>
      <h1>Fahrenheit</h1>
    </div>

    <div id='input'>
      <input type="text" value={celsius} onChange={(e)=> setCelsius(e.target.value)}/>
      <button onClick={toFahrenheit}>{`=>`}</button>
      <button onClick={toCelsius}>{`<=`}</button>
      <input type="text" value={fahrenheit} onChange={(e)=> setFahrenheit(e.target.value)}/>
    </div>
    </div>
  )
}

export default Temp

import React, { useState } from 'react';
import { Addition, Subtraction, Multiply, Divide, Percentage } from "./Arithmetic"
function Calculator() {

  const [state1, setState1] = useState("")
  const [state2, setState2] = useState("")
  const [state3, setState3] = useState("")

  const Reset = () => {
    setState1("");
    setState2("")
    setState3("")
  }
  return (<>
    <div className="calculator">
      <div className="container ">
        <h1>Simple calculator using Js</h1>


      </div>
      <hr />
      <div className="container">
        <div >
          <label htmlFor="value1">Enter value 1:<input type="text"  id="value1" name="value1"  value={state1} onChange={(event)=>setState1(event.target.value)}/></label>
          
        </div>
        <label htmlFor="value2">Enter value 2:<input type="text" id="value2" value={state2} onChange={(event)=>setState2(event.target.value)}/></label>
        <br/>
        <label htmlFor="result"> Your Result is:<input type="text" id="result" value={state3} onChange={(event)=>setState3(event.target.value)} /></label>
        <br/>


        <button type="button" className="btn btn-success mx-1"  onClick={Addition}>+</button>
    <button type="button"  className="btn btn-success mx-1" onClick={Subtraction}>-</button>
    <button type="button"  className="btn btn-success mx-1" onClick={Multiply}>*</button>
    <button type="button"  className="btn btn-success mx-1" onClick={Divide}>/</button>
    <button type="button"  className="btn btn-success mx-1" onClick={Percentage}>%</button>
    <button type="button"  className="btn btn-success mx-1" onClick={Reset}>Reset</button>
        


      </div>
      <hr/>
    </div>

  </>
  )
}

export default Calculator;

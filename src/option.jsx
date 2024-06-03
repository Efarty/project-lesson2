import React,{useRef,useState} from 'react'

export default function Option() {
    let amount=useRef();
    let option=useRef();
    const[myTotal,setTotal]=useState();

const calculation = () =>{

   const Total= option.current.value*amount.current.value;
    setTotal(Total.toFixed(2));   
}
  return (
    <div className="col-lg-6 P-3 shadow mt-3 mx-auto"> 
      <h2>enter the coin you wante</h2>
      <select onChange={calculation} ref={option} className="form-select">
        <option value="3.3">USD</option>
        <option value="3.9">EURO </option>
        <option value="0.11">BATH</option>
      </select>
      <h2>enter amount you wante</h2>
      <input  onInput={calculation} ref={amount} type="number" defaultValue="100" />
      <h4>you will get {myTotal} NIS</h4>
    </div>
  )
}

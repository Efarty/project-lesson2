import React from 'react'
import "./toFirst.css"

export default function ToFirst(props) {
  return (
    <div className='AA'>
        <h1>Hi I ame EFRAT AND I AM A GENIUS</h1>
      <h1>get the message :{props.txt}</h1>
      <button onClick={()=>{
        props.AAA()
      }}> clik on me </button>
    </div>
  )
}

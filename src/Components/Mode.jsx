
import React, { useState } from 'react'

const Mode = (props) => {

    const [mode, setmode] = useState("")
    const Daymode=()=>{
      setmode("Day")
    }

    const Nightmode=()=>{
        setmode("Night")
    }
    console.log(props)
  return (
    <div style={{backgroundColor:mode === "Day" ? "yellow"  : mode ==="Night" ? "black":"white"  , height:"100vh"}}>
      <h1 style={{color: mode === "Day" ? "blue" : mode ==="Night" ? "white":"black" }}>{props.text}</h1>
        <button onClick={()=>{
           Daymode()
        }}>Day</button> <br />
         <button onClick={()=>{
           Nightmode()
        }}>Night</button>
    </div>
    
  )
}

export default Mode
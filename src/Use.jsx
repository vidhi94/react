import React, { useState } from 'react'
import About from './About'

const Use = (props) => {

  const [count,setcount] = useState(0)

  const [clr,setcolor] = useState("black")

  const increment=()=>{
    if (count < 10) {
      setcount(count+1)
    }
    else{
      setcount("finish")
    } 
  }

  const Decrement=()=>{
    setcount(count-1)
  }

  const color=(a)=>{
    setcolor(a)
  }

  return (
    <div>
        <h1 style={{color:clr}}>{count}</h1>
        {/* <About  x={count}></About> */}
        <button onClick={()=>{
           increment()
        }}>increment</button> <br/>
        <button onClick={()=>{
           Decrement()
        }}>Decrement</button> <br/>
        <button onClick={()=>{
          color("green")
        }}>green</button>
        <button onClick={()=>{
          color("pink")
        }}>pink</button>
        <button onClick={()=>{
          color("blue")
        }}>blue</button>
        <button onClick={()=>{
          color("red")
        }}>red</button>
        <h1>{props.n}</h1>
        
       
    </div>
    
  )
}

export default Use
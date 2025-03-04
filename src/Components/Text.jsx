import React, { useEffect, useState } from 'react'

const Text = () => {
    const [data, setdata] = useState([])

    useEffect(()=>{

        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setdata(json))
    },[])

  return (
    <>
   
    { data.map((el,i)=>{
        return <div>
            <img src={el.image}></img>
        </div>
     })
    }

</>
  )
}

export default Text
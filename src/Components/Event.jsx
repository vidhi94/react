import React, { useEffect, useState } from 'react'

const Event = () => {

  const[name,setname]=useState("")
  const[email,setemail]=useState("")
  const[password,setpassword]=useState("")
  const[phoneno,setphoneno]=useState("")
  const[alldata,setalldata]=useState([])


  const savedata=()=>{
    let obj = {
        name,
        email,
        password,
        phoneno,
    }

    setalldata([...alldata,obj])

    setname("")
    setemail("")
    setpassword("")
    setphoneno("")
  }

  useEffect(()=>(
    console.log(alldata,"data")
  ),[alldata])

 


  return (
    <div>

    <input type="text" placeholder='enter name' value={name} onChange={(e) => setname(e.target.value)} /> <br />
    <input type="text" placeholder='enter email' value={email} onChange={(e) => setemail(e.target.value)} /> <br />
    <input type="password" placeholder='enter password' value={password} onChange={(e) => setpassword(e.target.value)} /> <br />
    <input type="number" placeholder='enter phone no' value={phoneno} onChange={(e) => setphoneno(e.target.value)} /> <br />
    <button onClick={()=>savedata()}>submit</button>

    {
        alldata.map((el,i)=>{
            return <div>
                 {el.name}
                </div>
        })
    }


    </div>
  )
}

export default Event
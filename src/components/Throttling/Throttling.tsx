"use client"
import React,{useEffect, useState} from 'react'

const Throttling = () => {
    const [val,setVal]=useState("")
    const [query, setQuery] = useState("");
    // useEffect(()=>{
    //     const timer=setInterval(() => {
    //         setQuery(val);
    //         console.log("Searching In Throttling ",val)
    //     }, 500);

    //     return ()=>clearInterval(timer)
    // },[val])
  return (
    <div>
        <p className='text-black'> Throttling Value : {val}</p>
        <label className="label">Enter Your Name : </label>
        <input className='inputField' placeholder='ABCD' type='text' value={val} onChange={(e)=> setVal(e.target.value)} />
    </div>
  )
}

export default Throttling
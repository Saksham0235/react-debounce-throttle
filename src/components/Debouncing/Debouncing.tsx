"use client"
import React,{useEffect, useState} from 'react'

const Debouncing = () => {
    const [val,setVal]=useState("")
    useEffect(()=>{
        const timer=setTimeout(() => {
           fetch(`https://jsonplaceholder.typicode.com/users?name=${val}`)
            console.log("Searching In Debouncing ",val)
        }, 500);

        return ()=>clearTimeout(timer)
    },[val])
  return (
    <div>
        <p className='text-black'> Debouncing Value : {val}</p>
        <label className="label">Enter Your Name : </label>
        <input className='inputField' placeholder='ABCD' type='text' value={val} onChange={(e)=> setVal(e.target.value)} />
    </div>
  )
}

export default Debouncing
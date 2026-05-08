"use client"

import React, { useEffect, useState } from 'react'

const RateLimiter = () => {
    const [count,setCount]=useState(0);
    const [disabled,setDisabled]=useState(false)
    const [timer,settimer]=useState(0);

    const handleClick=()=>{
        if(disabled)return;
        setCount(prev=>prev+1)
        setDisabled(true)
        settimer(5)
    }

    useEffect(()=>{
        let interval;

        interval=setInterval(()=>{
            settimer(prev=>prev-1)
        },1000)

        if(timer==0){
            setDisabled(false)
        }
        
        return()=>{
            clearInterval(interval)
        }
    },[disabled])

  return (
   <>
   <h1>{count}</h1>

   <button onClick={handleClick} disabled={disabled} className='border p-2 rounded cursor-pointer'>{disabled?`Please wait for ${timer}`:"Click me "}</button>
   
   </>
  )
}

export default RateLimiter

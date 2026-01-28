"use client";
import React, { useCallback, useState } from "react";
import Child from "./Child";


export default function Parent() {
  const [count, setCount] = useState(0);

const handleClick=useCallback(()=>{
    console.log("Child button clicked");
},[])

  return (
    <>
    {`Parent count: ${count}`}
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Child onClick={handleClick} />
    </>
  );
}

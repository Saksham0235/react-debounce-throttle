"use client"
import React, { useState } from "react";

function slowFunction(num:number) {
  console.log("Heavy calculation running...");
  for (let i = 0; i < 1e9; i++) {}
  return num * 2;
}

export default function MemoParent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const double = slowFunction(count);

  return (
    <>
      <h2>Double: {double}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      {count}
      <label>Enter Number :</label>
      <input placeholder="Enter Number" type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </>
  );
}

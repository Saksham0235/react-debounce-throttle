"use client"
import React, { useState } from 'react'
import { Data } from './utils'

const AutoComplete = () => {
  const [input,setInput]=useState("")
  const [isOpen,setIsOpen]=useState(false)
  const renderedData=input.trim()==""?[]:Data.filter((item)=>{
    return item.toLowerCase().includes(input.toLowerCase())
  })
  const handleSelect=(item:string)=>{
    setInput(item);
    setIsOpen(false);
  }
  return (
    <div className="border-2 border-gray-300 p-4 rounded-md">
      <h1>Search Fruits Name </h1>
      <input className='border-2 border-black' value={input} onChange={(e)=>{setInput(e.target.value); setIsOpen(true)}} />
      {isOpen && input.trim() !== "" && (
  <ul className="border mt-2">
    {renderedData.length > 0 ? (
      renderedData.map((item, ind) => (
        <li
          key={ind}
          onClick={() => handleSelect(item)}
          className="cursor-pointer list-none hover:bg-gray-200 p-2"
        >
          {item}
        </li>
      ))
    ) : (
      <li className="p-2 text-gray-500">No results found</li>
    )}
  </ul>
)}
    </div>
  )
}

export default AutoComplete
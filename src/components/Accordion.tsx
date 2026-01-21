'use client'
import React, { useState } from 'react'
import styles from './Accordion.module.scss'

const Accordion = () => {
    const [index,setIndex]=useState(null)
    const handleClick=(i:any)=>{
        setIndex(i===index?null:i)
    }
    const data=[
        {title:'Item 1',content:'Content 1'},
        {title:'Item 2',content:'Content 2'},
        {title:'Item 3',content:'Content 3'},
    ]
  return (
 <>
 <div className={styles.container}>
    {
        data.map((item,i)=>{
            return(
                <div key={i}>
                    <label onClick={()=>handleClick(i)} className={styles.heading}>
                        {item.title}
                    </label>
                    {index===i && <p className={styles.content}>{item.content}</p>}
                </div>
            )
        })
    }
 </div>
 </>
  )
}

export default Accordion
"use client"
import React, { useEffect, useRef, useState } from 'react'
type Photo = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  };

const InfiniteScroll = () => {
    const [data,setData]=useState<Photo[]>([]);
    const [page,setPage]=useState(1);
    const [loading,setLoading]=useState(false);
    const [hasMore, setHasMore] = useState(true);

    const ref=useRef(null);
// Now using Intersection Observer if i hitted the bottom or not of the page then only we will fetch the newdata
    const LIMIT=20

useEffect(()=>{
    const getData=async()=>{
        if(loading || !hasMore) return;
        try{
            setLoading(true);
            const response=await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${LIMIT}`);
            const data=await response.json();
            setData((prev)=>[...prev,...data])
    
            if(data.length < LIMIT){
                setHasMore(false)
            }
        }
        catch(e){
            console.log("Error in Fetching data",e)
        }
        finally{
            setLoading(false)
        }
    }

    getData()
},[page])

useEffect(()=>{
    const observer=new IntersectionObserver((entries)=>{
        if(entries[0].isIntersecting && hasMore && !loading){
            setPage((prev)=>prev+1)
        }
    })

    if(ref.current)observer.observe(ref.current);


    return ()=>observer.disconnect();
},[loading,hasMore])
  return (
    <div style={{ padding: "20px" }}>
    <h2>Infinite Scroll Photos</h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "10px",
      }}
    >
      {data.map((item) => (
        <div key={item.id}>
            {/* <p>{item.title}</p> */}
          <img src={item.url} alt={item.title} width="100%" />
        </div>
      ))}
    </div>

    <div ref={ref} style={{ height: "40px", margin: "20px" }}>
      {loading && <p>Loading...</p>}
    </div>
  </div>
  )
}

export default InfiniteScroll
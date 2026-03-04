import React, { useEffect, useState } from 'react'

const useFetch = () => {
    const [loading,setLoading]=useState(false);
    const [data,setData]=useState(null);

    useEffect(()=>{
        const getData=async()=>{
            setLoading(true);
            try{
                const response=await fetch("https://jsonplaceholder.typicode.com/users");
                const data=await response.json();
                setData(data);
            }
            catch(error){
               console.log("Error in fetching",error)
            }
            finally{
                setLoading(false)
            }
        }
        getData();

    },[])
    return({data,loading});

}

export default useFetch
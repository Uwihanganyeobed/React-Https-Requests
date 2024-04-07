import React, { useEffect, useState } from 'react'

const GetData = () => {
   const [data, setData]=useState([]);
   useEffect(()=>{
      async function getData(){
         const response= await fetch( "https://jsonplaceholder.typicode.com/posts");
         const data= await response.json();
         if(data && data.length) setData(data);
      }
      getData();
   },[])
  return (
    <div>
      <h2>This is GET REQUEST using fetch() API</h2>
      <ul>
         {data.map((dat)=>(
            <li key={Math.random()}>{dat.title}</li>
         ))}
      </ul>
    </div>
  )
}

export default GetData
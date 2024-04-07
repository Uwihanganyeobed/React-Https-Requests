import axios from 'axios';
import { useEffect, useState } from 'react';
const GetPosts = () => {
   const [posts, setPosts]=useState([]);
   useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((res)=>{
         setPosts(res.data);
      })
      .catch((error)=>{
         console.log(error)
      })
   },[])
  return (
    <div>
      <h2>This is a GET REQUEST API using axios</h2>
      <ol>
      {posts.map((index)=>(
         <li key={Math.random()}>{index.title}</li>
      ))}
      </ol>   
    </div>
  )
}

export default GetPosts
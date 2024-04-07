import { useState, useEffect } from 'react';
import './Styles.css'
const PostData = () => {
   const [posts, setPosts] = useState([]);
   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');
   
   // ... Fetch posts here
   
   // Handle post request
   //using axios
   // const handleSubmit = (e) => {
   //    e.preventDefault();
   //    axios
   //       .post('https://jsonplaceholder.typicode.com/posts', {
   //          title: title,
   //          body: body,
   //       })
   //       .then((res) => {
   //          setPosts((posts) => [res.data, ...posts]);
   //          setTitle('');
   //          setBody('');
   //       })
   //       .catch((err) => {
   //          console.log(err.message);
   //       });
   // };
   
   const handleSubmit = (e) => {
      e.preventDefault();
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=5', {
         method: 'POST',
         body: JSON.stringify({
            title: title,
            body: body,
            userId: Math.random().toString(36).slice(2),
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
         .then((res) => res.json())
         .then((post) => {
            setPosts((posts) => [post, ...posts]);
            setTitle('');
            setBody('');
         })
         .catch((err) => {
            console.log(err.message);
         });
   };

   return (
      // ... JSX here
      <>
            <div className="add-post-container">
      <form>
         <input type="text"name='title'id='title' className="form-control" />
         <textarea className="form-control"name='body'id='body' cols="10" rows="8"></textarea>
         <button type="submit" onClick={handleSubmit}>Add Post</button>
      </form>
   </div>
   <div className="posts-container">
      {posts.map((post) => {
         return (
            <div className="post-card" key={post.userId}>
               <h2 className="post-title">{post.title}</h2>
               <p className="post-body">{post.body}</p>
               <div className="button">
                  <div className="delete-btn">Delete</div>
               </div>
            </div>
         );
      })}
   </div>
      </>

   );
};

export default PostData;

// import { useState, useEffect } from 'react';
// import './Styles.css'
// const PostData = () => {
//    const [posts, setPosts] = useState([]);

//    useEffect(() => {
//       fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
//          .then((res) => res.json())
//          .then((data) => {
//             console.log(data);
//             setPosts(data);
//          })
//          .catch((err) => {
//             console.log(err.message);
//          });
//    }, []);

//    return (
//       <>
         // <div className="add-post-container">
         //    <form>
         //       <input type="text" className="form-control" />
         //       <textarea className="form-control" cols="10" rows="8"></textarea>
         //       <button type="submit">Add Post</button>
         //    </form>
         // </div>
         // <div className="posts-container">
         //    {posts.map((post) => {
         //       return (
         //          <div className="post-card" key={post.id}>
         //             <h2 className="post-title">{post.title}</h2>
         //             <p className="post-body">{post.body}</p>
         //             <div className="button">
         //                <div className="delete-btn">Delete</div>
         //             </div>
         //          </div>
         //       );
         //    })}
         // </div>
//       </>
//    );
// };

// export default PostData;
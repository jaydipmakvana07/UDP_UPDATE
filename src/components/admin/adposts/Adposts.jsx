import Post from "../adpost/Adpost";
import "./adposts.scss";



import { useState, useEffect } from "react";
import postServices from "../../../services/postServices";



const Posts = () => {
  const [posts, setPosts] = useState({ data: { data: [] } });

  const fetchPosts = async () => {
    try{
    const fetchedPosts = await postServices.getPosts();
    
    setPosts(fetchedPosts);
    
    
  }catch (error) {
    console.error(error);
  };}
  

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="posts">
        
      {posts &&
        posts.data &&
        posts.data.data &&
        posts.data.data
          .slice()
          .reverse() // Reverse the array of posts
          .map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};




export default Posts;


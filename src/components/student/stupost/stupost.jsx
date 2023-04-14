import Post from "../poststudent/Poststudent";
import "./stupost.scss";


import { useState, useEffect } from "react";
import postServices from "../../../services/postServices";



const Posts = () => {
  const [posts, setPosts] = useState({ data: { data: [] } });

  const fetchPosts = async () => {
    try{
    const fetchedPosts = await postServices.getPosts();
    
    setPosts(fetchedPosts);
    console.log("Posts fetched successfully");
    
  }catch (error) {
    console.error(error);
  };}
  console.log(fetchPosts)

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


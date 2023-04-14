import "./rightBar.scss";
import React from "react";

import { useState, useEffect } from "react";
import postServices from "../../services/rightServices";

const RightBar = () => {
  const [posts, setPosts] = useState({ data: { data: [] } });

  const fetchPosts = async () => {
    try {
      const fetchedPosts = await postServices.getPosts();

      setPosts(fetchedPosts);
      console.log("Posts fetched successfully");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Latest Achievement</span>
          <div className="user">
            <div className="userInfo">
              {posts &&
                posts.data &&
                posts.data.data &&
                posts.data.data
                  .slice()
                  .reverse()
                  .map((post, index) => (
                    <React.Fragment key={post.id}>
                      <p>{post.name}</p>
                      
                    </React.Fragment>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;

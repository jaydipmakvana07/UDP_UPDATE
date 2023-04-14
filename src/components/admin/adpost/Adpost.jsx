import "./adpost.scss";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  

  //TEMPORARY
 

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">name</span>
              </Link>
              <span className="date"></span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.name}</p>
          <img src={`http://localhost:8080/${post.avtar}`} alt="" />
        </div>
        <div className="info">

    
            <button className="delete">
                Delete
            </button>
            
      </div>
      </div>
    </div>
  );
};

export default Post;

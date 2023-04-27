import "./post.scss";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import { format } from "timeago.js";

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
                <span className="name">{post.text}</span>
              </Link>
              <span className="date">{format(post.createdAt)}</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <pre>{post.name}</pre>
          <img src={`http://localhost:8080/${post.avtar}`} alt="" />

        </div>
        <div className="info">
          
      </div>
      </div>
    </div>
  );
};

export default Post;

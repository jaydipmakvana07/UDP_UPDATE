import "./post.scss";

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
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <pre>{post.name}</pre>
          <img src="https://s2982.pcdn.co/wp-content/uploads/2022/08/penguin-random-house-logo.png.webp" alt="" />
        </div>
        <div className="info">
          
      </div>
      </div>
    </div>
  );
};

export default Post;

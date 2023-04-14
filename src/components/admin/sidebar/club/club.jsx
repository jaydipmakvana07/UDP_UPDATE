import "./club.scss";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  

  //TEMPORARY
 

  return (
    <div className="post">
      <div className="container">
        
        <div className="content">
          <pre>{post.name}</pre>
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

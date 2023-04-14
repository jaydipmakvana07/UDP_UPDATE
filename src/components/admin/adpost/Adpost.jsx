import "./adpost.scss";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/postshow/${post._id}`, { // Replace with your server URL and endpoint
        method: 'DELETE'
      });
      const data = await response.json();
      if (data.success) {
        console.log('deleted successfully:', data.data);
        // Perform any additional actions or UI updates as needed
      } else {
        console.error('Failed to delete ', data.message);
        // Display an error message or perform appropriate error handling
      }
    } catch (error) {
      console.error('Failed to delete:', error.message);
      // Display an error message or perform appropriate error handling
    }
  };
  

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

    
            <button className="delete"  onClick={handleDelete}>
                Delete
            </button>
            
      </div>
      </div>
    </div>
  );
};

export default Post;

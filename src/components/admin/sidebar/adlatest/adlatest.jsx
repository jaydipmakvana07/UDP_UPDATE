import "./adlatest.scss";



const Post = ({ post }) => {
  

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/rightshow/${post._id}`, { // Replace with your server URL and endpoint
        method: 'DELETE'
      });
      const data = await response.json();
      window.location.reload();
      if (data.success) {
        console.log('Club deleted successfully:', data.data);
        // Perform any additional actions or UI updates as needed
      } else {
        console.error('Failed to delete club:', data.message);
        // Display an error message or perform appropriate error handling
      }
    } catch (error) {
      console.error('Failed to delete club:', error.message);
      // Display an error message or perform appropriate error handling
    }
  };

 

  return (
    <div className="post">
      <div className="container">
        
        <div className="content">
          <p>{post.name}</p>
          
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

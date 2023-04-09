import Post from "../intern/intern";
import "./interns.scss";


const Posts = () => {
  //TEMPORARY
  const posts = [
    
    {
      id: 1,
      name: "Arpit Patel",
      userId: 2,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuoovVYEMl5PlyrnrmjPY_0bH_k0RaXYByiMVOWeEhWeG9wxWP2ozVw0Ab51hiQzxErpo&usqp=CAU",
      desc: "We are looking for Frontend interns, in ReactJS, to help us build and grow CosmoCloud.Check more about our upcoming startup - CosmoCloud.io[Stipend Included] Eligibility:College 4th Years (2022 / 2023 graduates)Joining as a 3-6 month intern, with scope of getting PPO for full time.Joining Date - Immediately.",
    },
    {
      id: 2,
      name: "Arpit Patel",
      userId: 2,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuoovVYEMl5PlyrnrmjPY_0bH_k0RaXYByiMVOWeEhWeG9wxWP2ozVw0Ab51hiQzxErpo&usqp=CAU",
      desc: "AMD is hiring candidates with a Bachelor/master’s in computer science, Computer Engineering, Data Science/Analytics, or a related field for the role of Co-Op Intern. ( Student / Intern ).",
    },
    {
      id: 3,
      name: "Arpit Patel",
      userId: 3,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuoovVYEMl5PlyrnrmjPY_0bH_k0RaXYByiMVOWeEhWeG9wxWP2ozVw0Ab51hiQzxErpo&usqp=CAU",
      desc: "we are looking for QA tester intern. details are as shown as below Company Name : WorkOnGrid Batch : 2023/2024/2025 passouts Role : Software Engineer Intern - QA Stipend : 25,000 INR/month.",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
    
  </div>;
};

export default Posts;

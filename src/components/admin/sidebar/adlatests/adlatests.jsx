import Post from "../adlatest/adlatest";
import "./adlatests.scss";


const Posts = () => {
  //TEMPORARY
  const posts = [
   
    {
      id: 1,
      name: "Arpit Patel",
      userId: 1,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuoovVYEMl5PlyrnrmjPY_0bH_k0RaXYByiMVOWeEhWeG9wxWP2ozVw0Ab51hiQzxErpo&usqp=CAU",
      desc: "TEAM DHANAK - We're happy to share that Team Dhanak represented LD college of engineering in a competition organised by radio palanpur. The play on narcissism named as Judgement secured 1st position",
    },
    {
      id: 1,
      name: "Arpit Patel",
      userId: 1,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuoovVYEMl5PlyrnrmjPY_0bH_k0RaXYByiMVOWeEhWeG9wxWP2ozVw0Ab51hiQzxErpo&usqp=CAU",
      desc: "TEAM DHANAK - We're happy to share that Team Dhanak represented LD college of engineering in a competition organised by radio palanpur. The play on narcissism named as Judgement secured 1st position",
    },
    

  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
    
  </div>;
};

export default Posts;

import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"
const jaydip ="src/assets/login.jpg";

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [

    

    // {
    //   id: 1,
    //   name: "Jaydip Makvana",
    //   img: "https://instagram.fbom22-1.fna.fbcdn.net/v/t51.2885-19/312833533_210759251303990_5996518154238373347_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fbom22-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=6XY6ud9xnYcAX85S799&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBh6lLvfjxF6YHl8QvprkT2ukno64E6vAADhBq6tSOzHA&oe=63F6B2B5&_nc_sid=1527a3",
    // },
    {
      id: 2,
      name: "Arpit Patel",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    },
    {
      id: 3,
      name: "Soham Patel",
      img: "https://cdn.pixabay.com/photo/2016/12/11/12/02/mountains-1899264__340.jpg",
    },
    {
      id: 4,
      name: "Divisha Makwana",
      img: "https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src="https://cdn.pixabay.com/photo/2016/07/30/00/03/winding-road-1556177__340.jpg" alt="" />
          <span>Jaydip Makvana</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories
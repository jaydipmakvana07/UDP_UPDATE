import "./share.scss";
import Image from "@mui/icons-material/AddPhotoAlternateOutlined";
import Map from "@mui/icons-material/LocationOnSharp";
import Friend from "@mui/icons-material/PersonAddAlt1Rounded";
import Send from "@mui/icons-material/IosShareRounded";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../context/authContext";
import { TextareaAutosize } from "@mui/base";
import postServices from "../../../../services/internServices"


const Share = () => {

  const { currentUser } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [avtar, setAvatar] = useState('')


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    if (avtar) {
      formData.append('avtar', avtar);
    }
    else{
      formData.append('avtar', "null");
    }
    const response = await postServices.create(formData);
    console.log(response);
    event.target.reset();
    
  }
  return (
    <div className="share">
      <div className="container">
        <form onSubmit={handleSubmit}  >
          <div className="top">
            
            <TextareaAutosize className="textarea" name="name" placeholder={`Write here...`}
              onChange={event => setName(event.target.value)} />
          </div>
          <hr />
          <div className="bottom">
            <div className="left">
              <input type="file" id="file" style={{ display: "none" }} name="avtar" onChange={event => setAvatar(event.target.files[0])} />
              <label htmlFor="file">
                <div className="item">
                  <Image />
                  <span>Add Image</span>
                </div>
              </label>
              <div className="item">
                <Map />
                <span>Add Place</span>
              </div>
              <div className="item">
                <Friend />
                <span>Tag Friends</span>
              </div>
            </div>
            

              <span>
                <button className="right">Post <Send /></button>
              </span>
              
              
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Share;

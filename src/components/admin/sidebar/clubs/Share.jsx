import "./share.scss";
import Image from "@mui/icons-material/AddPhotoAlternateOutlined";
import Map from "@mui/icons-material/LocationOnSharp";
import Friend from "@mui/icons-material/PersonAddAlt1Rounded";
import Send from "@mui/icons-material/IosShareRounded";
import { useContext } from "react";
import { AuthContext } from "../../../../context/authContext";
import { TextareaAutosize } from "@mui/base";


const Share = () => {

  const {currentUser} = useContext(AuthContext)
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          
          <TextareaAutosize className="textarea" placeholder={`Write here...`} />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{display:"none"}} />
            <label htmlFor="file">
              <div className="item">
                <Image/>
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <Map/>
              <span>Add Place</span>
            </div>
            <div className="item">
              <Friend/>
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">   
            
            <span>
            Post 
            </span>
            <Send/>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Share;

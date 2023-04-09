
import "./admin.scss"
import Navbar from "../../components/navbar/Navbar";
import LeftBar from "../../components/leftBar/LeftBar";
import RightBar from "../../components/rightBar/RightBar";
import Posts from  "../../components/admin/adposts/Adposts"

import { useContext } from "react";
// import { DarkModeContext } from "./context/darkModeContext";
// import { AuthContext } from "./context/authContext";

const Admin = () => {
  return (
    <div className="admin">
       <Posts/>
    </div>
  )
}

export default Admin
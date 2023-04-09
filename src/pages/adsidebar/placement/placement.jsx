
import "./placement.scss"

import Posts from  "../../../components/admin/sidebar/placements/placements"
import Share from "../../../components/admin/sidebar/placements/Share"
import { useContext } from "react";
// import { DarkModeContext } from "./context/darkModeContext";
// import { AuthContext } from "./context/authContext";

const Clubs = () => {
  return (
    <div className="club">
       
       <Share/>
       <Posts/>
       
    </div>
  )
}

export default Clubs
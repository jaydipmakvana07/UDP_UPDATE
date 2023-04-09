
import "./placement.scss"

import Posts from  "../../../components/sidebar/placements/placements"

import { useContext } from "react";
// import { DarkModeContext } from "./context/darkModeContext";
// import { AuthContext } from "./context/authContext";

const Clubs = () => {
  return (
    <div className="club">
       <Posts/>
    </div>
  )
}

export default Clubs
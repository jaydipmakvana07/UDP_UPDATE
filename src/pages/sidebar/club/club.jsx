
import "./club.scss"

import Posts from  "../../../components/sidebar/clubs/clubs"

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
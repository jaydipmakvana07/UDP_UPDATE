
import "./club.scss"

import Posts from  "../../../components/admin/sidebar/clubs/clubs"
import Share from "../../../components/admin/sidebar/clubs/Share"

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

import "./event.scss"

import Posts from  "../../../components/admin/sidebar/events/events"
import Share from "../../../components/admin/sidebar/events/Share"

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

import "./latest.scss"

import Posts from  "../../../components/admin/sidebar/adlatests/adlatests"
import Share from "../../../components/admin/sidebar/adlatests/Share"

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
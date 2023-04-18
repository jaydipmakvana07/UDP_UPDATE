import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import {
  createBrowserRouter,
  RouterProvider,
  Redirect,
  Outlet,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import Leftad from "./components/admin/leftad/leftad";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Message from "./pages/message/message";
import Student from "./pages/student/Student";
import Profile from "./pages/profile/Profile";
import Demo from "./pages/demo/demo";
import Club from "./pages/sidebar/club/club";
import Event from "./pages/sidebar/event/event";
import Interns from "./pages/sidebar/interns/interns";
import Placement from "./pages/sidebar/placement/placement";
import Admin from "./pages/admin/Admin";
import Adclub from "./pages/adsidebar/club/club";
import Adevent from "./pages/adsidebar/event/event";
import Adintern from "./pages/adsidebar/interns/interns";
import Adplace from "./pages/adsidebar/placement/placement";
import Adlatest from "./pages/adsidebar/latest/latest";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";

function App() {
  const {user} = useContext(AuthContext);
  
  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };
  const Layout01 = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftad />
          
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
          
        </div>
      </div>
    );
  };
  const Layout02 = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          
          
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          
          
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
      console.log("user not")
    } else {
      // return <Navigate to="/login" />;
      console.log(user)
    }
   

    return children;
  };

  

  return (
    <div>
    <Router>
      
      <Routes>
        
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route exact path="/" element= {<Home /> }/>
          <Route path="/Student" element={<Student />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/club" element={<Club />} />
          <Route path="/event" element={<Event />} />
          <Route path="/interns" element={<Interns />} />
          <Route path="/placement" element={<Placement />} />
        </Route>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout01 />
            </ProtectedRoute>
          }
        >
          <Route path="/demo" element={<Demo />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/club" element={<Adclub />} />
          <Route path="/admin/event" element={<Adevent />} />
          <Route path="/admin/intern" element={<Adintern />} />
          <Route path="/admin/placement" element={<Adplace />} />
          <Route path="/admin/latest" element={<Adlatest />} />
          
        </Route>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout02 />
            </ProtectedRoute>
          }
        >
          <Route path="/message" element={<Message />} />
          
        </Route>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>
        <Route path="/register" element={<Register />} />
        
        
      </Routes>
      
    </Router>
  </div>

  );
}

export default App;

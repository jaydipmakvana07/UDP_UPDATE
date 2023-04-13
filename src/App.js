import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import Leftad from "./components/admin/leftad/leftad";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
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
  const {currentUser} = useContext(AuthContext);

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
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Student",
          element: <Student />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
        {
          path: "/club",
          element: <Club />,
        },
        {
          path: "/event",
          element: <Event />,
        },
        {
          path: "/interns",
          element: <Interns />,
        },
        {
          path: "/placement",
          element: <Placement />,
        },
       
      ],
    },
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout01 />
        </ProtectedRoute>
      ),
      children:[

        {
          path: "/demo",
          element: <Demo />,
        },
        {
          path: "/admin",
          element: <Admin/>,
        },
        {
          path: "/admin/club",
          element: <Adclub/>,
        },{
          path: "/admin/event",
          element: <Adevent/>,
        },{
          path: "/admin/intern",
          element: <Adintern/>,
        },{
          path: "/admin/placement",
          element: <Adplace/>,
        },{
          path: "/admin/latest",
          element: <Adlatest/>,
        },



      ]

    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
   
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

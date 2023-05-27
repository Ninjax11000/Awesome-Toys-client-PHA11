import { createBrowserRouter } from "react-router-dom";
import Main from "../src/layout/Main";
import Home from "../src/pages/Home/Home/Home";

import ErrorPage from "../src/pages/ErrorPage/ErrorPage";
import Login from "../src/pages/Login/Login";
import SignUp from "../src/pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        }
        
      ]
    },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    }
  ]);


  export default router;
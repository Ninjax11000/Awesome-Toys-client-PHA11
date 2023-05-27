import { createBrowserRouter } from "react-router-dom";
import Main from "../src/layout/Main";
import Home from "../src/pages/Home/Home/Home";

import ErrorPage from "../src/pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        },
        
      ]
    },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    }
  ]);


  export default router;
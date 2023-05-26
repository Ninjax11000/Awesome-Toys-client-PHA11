import { createBrowserRouter } from "react-router-dom";
import Main from "../src/layout/Main";
import Home from "../src/pages/Home/Home/Home";
import SportsCar from "../src/pages/Home/SportsCar/SportsCar";

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
            path: '/sportsCar',
            element:<SportsCar></SportsCar>
        }
      ]
    },
  ]);


  export default router;
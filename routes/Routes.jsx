import { createBrowserRouter } from "react-router-dom";
import Main from "../src/layout/Main";
import Home from "../src/pages/Home/Home/Home";

import ErrorPage from "../src/pages/ErrorPage/ErrorPage";
import Login from "../src/pages/Login/Login";
import SignUp from "../src/pages/SignUp/SignUp";
import AllToys from "../src/pages/AllToys/AllToys";
import SingleToy from "../src/pages/SingleToy/SingleToy";
import AddToy from "../src/pages/AddToy/AddToy";
import MyToys from "../src/pages/MyToys/MyToys";
import PrivateRoutes from "./PrivateRoutes";

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
        },
        {
          path:'/toys',
          element:<AllToys></AllToys>,
          loader:()=>fetch('https://toy-market-server-nu.vercel.app/totalProducts')
        },
        {
          path:'/toy/:id',
          element:<SingleToy></SingleToy>,
          loader:({params})=>fetch(`https://toy-market-server-nu.vercel.app/allToys/toy/${params.id}`)
        },
        {
          path:'/addToy',
          element:<PrivateRoutes><AddToy></AddToy></PrivateRoutes>
        },
        {
          path:'/myToys',
          element:<PrivateRoutes><MyToys></MyToys></PrivateRoutes>
        }
        
      ]
    },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    }
  ]);


  export default router;
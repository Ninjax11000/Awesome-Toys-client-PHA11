import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './layout/Main.jsx';
import Home from './pages/Home/Home/Home.jsx';
import router from '../routes/Routes.jsx';
import AuthProviders from './providers/AuthProviders.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='max-w-7xl mx-auto'>
   <React.StrictMode>
      <AuthProviders><RouterProvider router={router} /></AuthProviders>
  </React.StrictMode>,
 </div>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import AddProduct from './Components/AddProduct/AddProduct.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import MyCraft from './Components/MyCraft/MyCraft.jsx';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct.jsx';
import AllCrafts from './Components/AllCrafts/AllCrafts.jsx';
import ViewDetails from './Components/ViewDetails/ViewDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/allCraft",
        element: <AllCrafts></AllCrafts>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/addCraft",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: "/myCraft",
        element: <MyCraft></MyCraft>,
        loader: ()=> fetch('http://localhost:5000/allProduct')
      },
      {
        path: "/updateProduct/:id",
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader:({params})=> fetch(`http://localhost:5000/allProduct/${params.id}`)
      },
      {
        path: "/viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ()=> fetch('http://localhost:5000/allProduct')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

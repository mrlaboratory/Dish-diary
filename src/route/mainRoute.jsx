import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Blog from "../pages/Blog";
import ChefRecipes from "../pages/ChefRecipes";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PriveteRoute";
import FavoriteRevipes from "../pages/FavoriteRevipes";
import User from "../pages/User";
import Layout from "../layout/Layout";

const mainRoute = createBrowserRouter([
    {
      path :'/',
      element : <App></App>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
          path:'/',
          element : <Home></Home>
        },
        {
          path:'/login',
          element : <Login></Login>
        },
        {
          path:'/register',
          element : <Register></Register>
        },
        {
          path: '/blog',
          element : <Blog></Blog>
        },
        {
          path: '/about',
          element : <About></About>
        },
        {
          path: '/contact',
          element : <Contact></Contact>
        },
        {
          path:'/favorite',
          element :<PrivateRoute><FavoriteRevipes></FavoriteRevipes></PrivateRoute>
        },
        {
          path:'/user',
          element :<PrivateRoute><User></User></PrivateRoute>
        }
      
      ]
    },
    {
      path :'/',
      element : <Layout></Layout>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
          path:'/chefrecipes/:id',
          element : <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
          loader : ({params}) => fetch(`https://dish-diary-server.vercel.app/chefrecipes/${params.id}`)
        }
      ]
    }
  ])
  
  export default mainRoute
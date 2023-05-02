import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import AuthProvider from './components/AuthProvider.jsx'
import Register from './pages/Register.jsx'
import ChefRecipes from './components/ChefRecipes.jsx'
import ErrorPage from './pages/ErrorPage.jsx'


const router = createBrowserRouter([
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
        path:'/chefrecipes/:id',
        element : <ChefRecipes></ChefRecipes>,
        loader : ({params}) => fetch(`https://dish-diary-server.vercel.app/chefrecipes/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
)

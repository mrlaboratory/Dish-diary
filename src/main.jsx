import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import AuthProvider from './components/AuthProvider.jsx'
import Register from './pages/Register.jsx'


const router = createBrowserRouter([
  {
    path :'/',
    element : <App></App>,
    errorElement : 'page not found ',
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
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
)

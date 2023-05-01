import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import AuthProvider from './components/AuthProvider.jsx'


const router = createBrowserRouter([
  {
    path :'/',
    element : <App></App>,
    children : [
      {
        path:'/',
        element : <Home></Home>
      },
      {
        path:'/login',
        element : <Login></Login>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
)

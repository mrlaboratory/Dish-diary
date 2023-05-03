import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './AuthProvider/AuthProvider'
import mainRoute from './route/mainRoute'



ReactDOM.createRoot(document.getElementById('root')).render(
<AuthProvider><RouterProvider router={mainRoute}></RouterProvider></AuthProvider>
)

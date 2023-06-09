import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Spinner from '../components/Spinner';
import { useEffect } from 'react';


const PrivateRoute = ({ children }) => {
   const { user, loading, setPath } = useContext(AuthContext)
   const location = useLocation()
   const from = '/login'
   useEffect(() => {
      setPath(location.pathname)
   }, [location.pathname])

   if (loading) {
      return <Spinner></Spinner>
   }
   if (user) {
      return <>{children}</>
   } else {
      return <Navigate to={from} state={location}></Navigate>
   }
};

export default PrivateRoute;
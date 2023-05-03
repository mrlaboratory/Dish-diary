import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading,setPath} = useContext(AuthContext)
    const location = useLocation()
    const from ='/login'

    setPath(location.pathname)
    if(loading){
     return <progress className="progress w-56"></progress>
    }
   if(user){
return <>{children}</>
   }else{
   return  <Navigate to={from} state={location}></Navigate>
   }
};

export default PrivateRoute;
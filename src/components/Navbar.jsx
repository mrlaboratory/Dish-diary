import React, { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import { toast } from 'react-hot-toast';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
  const location = useLocation()
  const {user,signOutUser} = useContext(AuthContext)
  const userSignOut = () => {
    signOutUser()
    .then(res=> {
      
    })
    .catch(e=> {
      console.log(e)
    })
  }
  
  return (
    <div className="navbar " id='navbar'>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/blog'>Blog</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          {!user && <><NavLink to='/login'>Login</NavLink>
          <NavLink to='/register'>Register</NavLink></>}
          
          

          </ul>
        </div>
        <Link to='/' className="btn btn-ghost  text-xl uppercase">Dish diary</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold gap-3 text-color">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/blog'>Blog</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          {!user && <><NavLink to='/login'>Login</NavLink>
          <NavLink to='/register'>Register</NavLink></>}
          
          
        </ul>
      </div>
      <div className="navbar-end " >
       {user ?  <button onClick={signOutUser} className="btn-primary btn">Logout</button> : <Link className="btn-primary btn" to='/login'>Login</Link>}
       
       {
        user &&  <Link  to='/user' className=' tooltip tooltip-left' data-tip={user.displayName}><img  className='w-12 ml-3 rounded-full border-2 border-[#FF0000] ' src={user.photoURL} alt="" />
        </Link>
       }
        
      </div>
    </div>
  );
};

export default Navbar;
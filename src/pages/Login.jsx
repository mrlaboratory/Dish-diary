import React, {  useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {  AuthContext } from '../components/AuthProvider';
import { BiShow , BiHide} from 'react-icons/Bi';


const Login = () => {

  const { user, loginUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const [isShow,setIsShow] = useState(false)


  const location = useLocation()

  const from = location?.state?.pathname || '/'
  console.log(from)
  // console.log(location)
  const sigininuser = e => {
    e.preventDefault()
    setError('')
    setSuccess('')
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    // console.log(email,password)
    loginUser(email, password)
      .then(res => {
        setSuccess('Login successfull')
        console.log(res)

      })
      .catch(e => {
        setError(e.message)
        console.log(e.message)
      })

  }

  useEffect(() => {
    if (user) {
      console.log(1)
      navigate(from, { replace: true })
    }
  }, [user, from])
  // if(user){
  //   navigate(from)
  // }



  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <div className='text-center'>
            <h2 className='text-xl font-bold'> Login</h2>
          </div>
          <form onSubmit={sigininuser} className="card-body w-96">

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input required type="email" placeholder="Your email " name='email' className="input input-bordered" />
            </div>

            <div className="form-control ">
              <label className="label">
                <span className="label-text">Password</span>

              </label>
             <div className='relative'>
             <input required type={`${isShow ? 'text' : 'password'}`} name='password' placeholder="Your password" className="input input-bordered w-full" />
             <button className='absolute right-0 top-0 h-full pr-1' type='button' onClick={()=> setIsShow(!isShow)}>{isShow ? <BiHide className='text-2xl'></BiHide> : <BiShow className='text-2xl'></BiShow>}</button>
             </div>
              <label className="label ">
                <Link to='/register' className="label-text-alt link link-hover">Forgot password?</Link>  or
                <Link to='/register' className="label-text-alt link link-hover">Create account </Link>
              </label>
              <label className='label'>
               {error && <h3 className='text-red-600 font-bold'>{error}</h3>} 
               {success && <h3 className='text-red-600 font-bold'>{success}</h3>} 
              </label>
            </div>
            <div className="form-control mt-6">
              <button type='submit' className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
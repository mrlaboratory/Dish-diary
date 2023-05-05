import React, {  useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BiShow , BiHide} from 'react-icons/Bi';
import { FcGoogle } from 'react-icons/Fc';
import { AiFillGithub } from 'react-icons/Ai';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../AuthProvider/AuthProvider';



// this is login page 
const Login = () => {

  const { user, loginUser, loginWithGoogle , loginWithGithub } = useContext(AuthContext)
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
        toast.success('Login successfull')

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

        <div className="card flex-shrink-0 w-full max-w-sm   ">
          <div className='text-center'>
            <h2 className='text-xl font-bold'> Login</h2>
          </div>
          <form onSubmit={sigininuser} className="card-body p-0 w-full sm:w-96">

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
                <Link to='/forget' className="label-text-alt link link-hover">Forgot password?</Link>  or
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
            <div>
                            <h3 className='font-bold text-center'>Or</h3>
                            <div className='mt-2 flex justify-between items-center border-2 border-red-500 rounded-lg'>
                                <button onClick={loginWithGoogle} type='button' className='flex justify-center items-center text-xl font-bold  flex-grow px-3 py-2'><FcGoogle className='text-2xl'></FcGoogle> Google</button>
                                <button onClick={loginWithGithub} type='button' className='flex justify-center items-center text-xl font-bold  flex-grow px-3 py-2'><AiFillGithub className='text-2xl'></AiFillGithub > Github</button>
                            </div>
                        </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;
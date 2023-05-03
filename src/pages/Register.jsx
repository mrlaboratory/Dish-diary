import React, { useContext, useEffect, useState } from 'react';

import { updateProfile } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthProvider';
import { BiShow, BiHide } from 'react-icons/Bi';
import { FcGoogle } from 'react-icons/Fc';
import { AiFillGithub } from 'react-icons/Ai';
import { toast } from 'react-hot-toast';

const Register = () => {

    const { user, createUser,loginWithGoogle , loginWithGithub} = useContext(AuthContext)
    const location = useLocation()
    const [accepted, setAccepted] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [isShow, setIsShow] = useState(false)

    const navigate = useNavigate()

    const from = location?.state?.pathname || '/'

    const handleAccepted = e => {
        setAccepted(e.target.checked)
    }

    const signUpUser = (e) => {
        e.preventDefault()

        setError('')
        setSuccess('')

        const form = e.target
        const email = form.email.value
        const name = form.name.value
        const photo = form.photo.value || 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
        const password1 = form.password1.value
        const password2 = form.password2.value



        if (password1 == password2) {
            createUser(email, password1)
                .then(res => {
                    
                    setSuccess('account created')
                    toast.success('Successfully account created')
                    console.log(res.user)
                    updateProfile(res.user, {
                        displayName: name,
                        photoURL: photo
                    })

                })
                .catch(e => {
                    setError(e.message)
                    console.log(e.message)

                })
        } else {
            setError('Password did not match')
        }

    }
    useEffect(() => {
        if (user) {
            console.log(1)
            navigate(from, { replace: true })
        }
    }, [user, from])
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100 ">
                    <div className='text-center'>
                        <h2 className='text-xl font-bold'> Create new Accont</h2>
                    </div>
                    <form onSubmit={signUpUser} className="card-body w-96">
                        <div className="form-control">

                            <input required type="text" placeholder="Your full name " name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <input required type="text" name='email' placeholder="Your email " className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <input type="text" name='photo' placeholder="Photo URL (Optional) " className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <div className='relative'>
                                <input required type={`${isShow ? 'text' : 'password'}`} name='password1' placeholder="Password" className="input input-bordered w-full" />
                                <button className='absolute right-0 top-0 h-full pr-1' type='button' onClick={() => setIsShow(!isShow)}>{isShow ? <BiHide className='text-2xl'></BiHide> : <BiShow className='text-2xl'></BiShow>}</button>
                            </div>
                            <div className='relative mt-1'>
                                <input required type={`${isShow ? 'text' : 'password'}`} name='password2' placeholder="Confirm password" className="input input-bordered w-full" />
                                <button className='absolute right-0 top-0 h-full pr-1' type='button' onClick={() => setIsShow(!isShow)}>{isShow ? <BiHide className='text-2xl'></BiHide> : <BiShow className='text-2xl'></BiShow>}</button>
                            </div>
                            <label className="label">
                                <Link to='/login' className="label-text-alt link link-hover">You have a account ? </Link>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="cursor-pointer label">
                                <span className="label-text">Accept <Link className='text-[#D54215]' to='/terms'>Terms and Conditions</Link> </span>
                                <input onChange={handleAccepted} type="checkbox" required className="checkbox checkbox-secondary " />
                            </label>
                            <label className='label'>
                                {error && <h3 className='text-red-600 font-bold'>{error}</h3>}
                                {success && <h3 className='text-red-600 font-bold'>{success}</h3>}
                            </label>
                        </div>
                        <div className="form-control ">
                            <button disabled={!accepted} className="btn btn-primary">Create Account</button>
                        </div>

                        <div>
                            <h3 className='font-bold text-center'>Or</h3>
                            <div className='mt-2 flex justify-between items-center border-2 border-red-500 rounded-lg'>
                                <button onClick={loginWithGoogle} type='button' className='flex justify-center items-center text-xl font-bold  flex-grow px-3 py-2'><FcGoogle className='text-3xl'></FcGoogle> Google</button>
                                <button onClick={loginWithGithub} type='button' className='flex justify-center items-center text-xl font-bold  flex-grow px-3 py-2'><AiFillGithub className='text-3xl'></AiFillGithub > Github</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
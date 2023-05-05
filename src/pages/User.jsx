import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useState } from 'react';
import { sendEmailVerification, sendPasswordResetEmail, updateEmail, updateProfile } from 'firebase/auth';
import { toast } from 'react-hot-toast';


// this is user page 
const User = () => {
    const { auth, user } = useContext(AuthContext)

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    if (!user) {
        return <Spinner></Spinner>
    }

    console.log(user)
    const updateUser = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const name = form.name.value
        const photolink = form.photo.value
        setSuccess('')
        setError('')
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photolink
        }).then(() => {
            setSuccess('Updated successfull')
        }).catch((e) => {
            console.log(e)
            setError(e.message)
        });

        updateEmail(auth.currentUser, email).then(() => {
            setSuccess('Updated successfull')
        }).catch((e) => {
            setError(e.message)
        });
    }

    const passwordReset = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success('Reset email sended, Check your email')
            })
            .catch((e) => {
                toast.error(e.message)
            });
    }

    const sendVrification = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
            toast.success('Email verification sent!')
            });
    }


    return (
        <div className='w-full'>
            <div className='flex flex-col md:flex-row  justify-center items-center p-10 gap-5'>
                <div className='w-[100px] rounded-full border-2 border-[#D54215] overflow-hidden  '>
                    <img className='w-full' src={user.photoURL} alt="" />
                </div>
                <h2 className='text-3xl font-bold text-center' >Hello <span className='text-[#D54215]'> {user.displayName ? user.displayName : 'User'}  </span>!!</h2>
              
               
            </div>
            <div className='container mx-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='rounded-lg bg-white p-5 flex flex-col justify-center items-center'>
                    <h2 className='text-center text-3xl font-bold py-5'>User details </h2>
                    <div className='text-lg mx-auto flex flex-col justify-center items-center'>
                        <h3> Name : {user.displayName ? user.displayName : 'User'}</h3>
                        <h3>Email : {user.email}</h3>
                        {user.emailVerified ? <h3 className='text-green-600 font-bold'>Your email is Verified</h3> : <><h3 className='text-red-600 font-bold'>Please verify your email</h3>
                            <button onClick={sendVrification} className='btn btn-primary '>Send verification email</button> <br />
                        </>}
                        <Link to='/favorite' className='btn btn-primary '>Your favorite recipes</Link> <br />
                        {/* The button to open modal */}
                        <label htmlFor="my-modal" className='btn btn-primary '>Reset Password</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal" className="modal-toggle" />
                        <div className="modal">

                            <div className="modal-box flex flex-col justify-center items-center">
                                <h3 className="font-bold text-lg">Are your sure to reset your password</h3>
                                <form onSubmit={passwordReset} className='flex flex-col justify-center items-center'>
                                    <input required type="email" defaultValue={user.email} placeholder="Your email " name='email' className="input input-bordered mt-2" /> <br />
                                    <button className='btn btn-primary mb-2'>Send reset email</button>
                                </form>
                                <div className="modal-action">
                                    <label htmlFor="my-modal" className="btn">No</label>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className='rounded-lg bg-white p-5'>
                    <h2 className='text-center text-3xl font-bold py-5'>Edit your details </h2>
                    <form onSubmit={updateUser} className="card-body p-0 w-full sm:w-96 mx-auto">
                        <div className="form-control">
                            <input required type="email" defaultValue={user.email} placeholder="Your email " name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input required type="text" defaultValue={user.displayName ? user.displayName : 'User'} placeholder="Your Name " name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control ">
                            <div className='relative'>
                                <input required type='text' defaultValue={user.photoURL} name='photo' placeholder="Your photo url" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <label className='label'>
                            {error && <h3 className='text-red-600 font-bold'>{error}</h3>}
                            {success && <h3 className='text-green-600 font-bold'>{success}</h3>}
                        </label>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Update</button>
                        </div>
                        <div>

                        </div>
                    </form>

                </div>

            </div>

        </div>
    );
};

export default User;
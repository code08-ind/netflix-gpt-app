import React from 'react';
import Header from './Header';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = React.useState(true);

    const toggleSignInform = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/202ac35e-1fca-44f0-98d9-ea7e8211a07c/web/IN-en-20250512-TRIFECTA-perspective_688b8c03-78cb-46a6-ac1c-1035536f871a_large.jpg" alt="Background Pic" />
            </div>

            <form action="" className='w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80' >
                <h1 className='text-3xl py-4 font-bold'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type="text" placeholder='Enter Your Full Name' className='p-4 my-2 w-full bg-gray-700' />}
                <input type="text" placeholder='Enter Your Email' className='p-4 my-2 w-full bg-gray-700' />
                <input type="password" placeholder='Enter Your Password' className='p-4 my-2 w-full bg-gray-700' />
                <button className='bg-red-700 text-white rounded-md p-4 my-6 w-full'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInform}>{isSignInForm ?
                    "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
            </form>
        </div>
    );
}

export default Login;
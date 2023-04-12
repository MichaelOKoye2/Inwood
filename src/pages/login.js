import '../styles/login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [state, setState] = useState(
    [
      {
        id: 1,
        username: "okoyemiichael",
        email: "ronin200021@gmail.com",
        pass: "123456789",
        cpass: "123456789"
      },
      {
        id: 2,
        username: "okoyemiichael",
        email: "ronin200021@gmail.com",
        pass: "123456789",
        cpass: "123456789"
      }
    ]
    )

    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/Homepage')

    }








  return (
    <main>
    <div className=" grid place-content-center h-[100vh] overflow-hidden">
    <div className="content flex justify-center gap-4 w-[500px] h-[550px] bg-white">
      <div className="flex-col w-[300px] h-20">
        <h1 className=' text-center'>
          Welcome Back
        </h1>
        <p className=' text-center text-[11px]'>Don't have an account?
        <span>
        <Link to={'/Register'} className='text-[#07484A]' >
         sign up
        </Link>
        </span>
        </p>

        <form  action="" className="flex flex-col gap-8">
         <input name='username' className="p-2 mt-8 rounded-xl border w-full" type="text" placeholder="Enter your username" />
         <input name='email' className="p-2 rounded-xl border w-full" type="email" placeholder="Enter your email" />

                         {/*Password */}
         <div className="relative">
         <input name='pass' className="p-2 rounded-xl border w-full" type="password" placeholder="Enter your password" />
        </div>

                        {/* Register Button */}
         <button onClick={handleClick} className="bg-[#07484A] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
     </form>

     {/* <div className="flex flex-col flex-start w-full h-20 bg-blac mt-1">
      <p className='text-sm'>Or continue with</p>
      <button className="flex flex-row items-start shop px-6 text-sm rounded-full">Facebook</button>
      <button className="flex flex-row items-start shop px-7 text-sm rounded-3xl">Google</button>
      <button className="flex flex-row items-start shop px-8 text-sm rounded-3xl">Apple</button>
     </div> */}
    </div>
    </div>
    </div>
      
    </main>
  );
}

export default Login;

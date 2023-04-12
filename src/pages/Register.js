import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Validation from '../components/validation';

const Register = () => {
   const [state, setState] = useState({
      username: "",
      email: "",
      pass: "",
      cpass: ""
   });
   const setInState = (e) => {
      let key = e.target.name;
      let val = e.target.value
      setState({...state, [key]: val });
   }
//    const emailValidation = () => {
//       let emailValid = {}
//       const regEx = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/

//       if(regEx.test(state.email)) {
//           emailValid.email = ''
//       }
//       else if(!regEx.test(state.email) && state.email !== "") {
//           emailValid.email = 'Invalid email'
//       }
//       return emailValid;
//   }


   const [errors, setError] = useState({})
   // const [emailValid, setEmailValid] = useState({})
   // useEffect (() => {
   //  const data =  window.localStorage.getItem('key');
   //  if (data !==null) setState(JSON.parse(data)) 
   // },[])

   // useEffect (() => {
   //    window.localStorage.setItem('key', JSON.stringify('state'))
   // }, [setInState])
   const navigate = useNavigate();

   const signIn = (e) =>{
      e.preventDefault();
      // setEmailValid(Validation(state.email));
      setError(Validation(state))
      alert('Registration complete')
      navigate('/Login')
      console.log(state)
   }


  return (
   <main>
   <div className=" grid place-content-center h-[100vh] overflow-hidden">
   <div className="content flex justify-center gap-4 w-[500px] h-[550px] bg-white">
     <div className="flex-col w-[300px] h-20">
       <h1 className=' text-center'>
         Create an account
       </h1>
       <p className=' text-center text-[11px]'>Already have an account? 
       <span>
       <Link to={'/Login'} className='text-[#07484A]'>
       log in
       </Link>
       </span>
       </p>

       <form  action="" className="flex flex-col gap-8">

        <input name='username' value={state.username} onChange={(e) => setInState(e)} className="p-2 mt-8 rounded-xl border w-full" type="text" placeholder="Enter your username" />
        {errors.name && <p className=' text-red-600 text-[10px]'>{errors.name}</p>}
        
        <input name='email' value={state.email} onChange={(e) => setInState(e)} className="p-2 rounded-xl border w-full" type="email" placeholder="Enter your email" />
        {/* {emailValid.email && <p className=' text-red-600 text-[10px]'>{emailValid.email}</p>} */}
                        {/*Password */}
        <div className="relative">
        <input name='pass' value={state.pass} onChange={(e) => setInState(e)} className="p-2 rounded-xl border w-full" type="password" placeholder="Enter your password" />
        {errors.pass && <p className=' text-red-600 text-[10px]'>{errors.pass}</p>}
       </div>
                       {/* Confirm Password */}
       <div className="relative">
        <input name='cpass' value={state.cpass} onChange={(e) => setInState(e)} className="p-2 rounded-xl border w-full" type="password" placeholder="Confirm your password" />
        {errors.cpass && <p className=' text-red-600 text-[10px]'>{errors.cpass}</p>}
        </div>

                       {/* Register Button */}
        <p className='text-[9px]'>By creating an account, you agree to the <span className='text-[#07484A]'>Terms of use and Privacy Policy</span>.</p>
        <button onClick={signIn} className="bg-[#07484A] rounded-xl text-white py-2 hover:scale-105 duration-300 cursor-pointer">Create an account</button>
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
  )
}

export default Register

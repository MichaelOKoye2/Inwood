import React from 'react'
import '../styles/LP.css'
import { Link } from 'react-router-dom'


const Landingpage = () => {
  return (
    <main>
        <div className="\ w-[100%] h-[100vh] border hero overflow-hidden">
        <div className="flex items-center justify-between m-7">
            <div className="logoimg"></div>
            <div className="flex items-center space-x-20">
                <Link className='text-[#07484A]' to={'/'}>Home</Link>
                <Link className='text-[#07484A]' to={'/'}>Products</Link>
                <Link className='text-[#07484A]' to={'/'}>About</Link>
                <Link className='text-[#07484A]' to={'/'}>Contact Us</Link>
                <Link to={'/Login'}><button className='shop rounded-3xl'>Sign in</button></Link>
                
            </div>
        </div>

        <div className="container grid place-content-center w-[540px] h-[570px] ml-5">
          <div className=' w-[100%] bg- h-[300px]'>
              <h1 className=' text-[#07484A] font-bold text-[40px]'>
              Exclusive Deals of 
              <br />
              Furniture Collection
              </h1>
              <br />
              <p  className=' text-[#07484A] mb-2 text-[20px] '>Explore different categories. Find the best deals.</p>
              <Link to={'/Login'}><button className='shop rounded-3xl'>Shop now</button></Link>
          </div>
         
        </div>
        </div>
        {/* <div className="favourite-product w-full h-[900px] flex items-center  flex-col gap-[100px] pt-[100px] pb-[100px] pr-[40px] pl-[40px]">
          <div className="flex flex-row justify-center items-center p-1 gap-1 w-[900px] h-[93px]">
            <h1 className='text-[#07484A] text-[64px] font-semibold mb-12'>
            Popular Products
            </h1>
          </div>
          <div className="flex flex-row absolute items-center gap-[70px] isolate w-full h-[600px]">
          {/* <div className="img-chair absolute w-[750px] h-[800px] left-[-351px] top-[71px]"></div> 
          <div className="flex flex-col justify-end items-start py-[60px] px-[40px] w-[416px] h-[450px] ml-3 bg-[#CAF3E5] rounded-sm gap-10">
            <div className=" img-1 flex flex-row justify-center items-center w-[200px] h-[170px] border-[1px"></div>
            <div className="flex flex-col align-start w-[200px] h-[100px] border-[1px]">
              <h1 className='text-[#70908B] text-[16px]'>
              Armchair
              </h1>
              <p className='text-[15px] leading-10 text-[#70908B]'>
              Light single chair <br />
              $145
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-end items-start py-[60px] px-[40px] w-[416px] h-[450px] bg-[#E0EFF6] rounded-sm gap-10">
            <div className="img-2 flex flex-row justify-center items-center w-[200px] h-[170px] border-[1px"></div>
            <div className="flex flex-col align-start w-[200px] h-[100px] border-[1px">
            <h1 className='text-[#70908B] text-[16px]'>
            Premium Sofa
              </h1>
              <p className='text-[15px] leading-10 text-[#70908B]'>
              Light single chair <br />
              $145
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-end items-start py-[60px] px-[40px] w-[416px] h-[450px] bg-[#EEEBFF] rounded-sm gap-10">
            <div className="img-3 flex flex-row justify-center items-center w-[200px] h-[170px] border-[1px"></div>
            <div className="flex flex-col align-start w-[200px] h-[100px] border-[1px">
               <h1 className='text-[#70908B] text-[16px]'>
            minimal Sofa
              </h1>
              <p className='text-[15px] leading-10 text-[#70908B]'>
              Light single chair <br />
              $145
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-end items-start py-[60px] px-[40px] w-[416px] h-[450px] bg-[#FFF4E7] rounded-sm gap-10">
            <div className="img-4 flex flex-row justify-center items-center w-[200px] h-[170px] border-[1px"></div>
            <div className="flex flex-col align-start w-[200px] h-[100px] border-[1px ">
               <h1 className='text-[#70908B] text-[16px]'>
                Dining chair
              </h1>
              <p className='text-[15px] leading-10 text-[#70908B]'>
              Light single chair <br />
              $145
              </p>
            </div>
          </div>
          <Link to={'/Products'}><button className=' absolute w-[130px] h-[50px] text-white bg-[#07484A] rounded-3xl top-[580px] left-[620px]'>Explore all items</button></Link>
          </div>
        </div> */}
    </main>
  );
}

export default Landingpage;

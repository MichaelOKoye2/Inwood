import React from 'react'
import '../styles/LP.css'
import '../styles/homepage.css'
import { Link } from 'react-router-dom'


const Homepage = () => {
  return (
    <main>
        <div className="\ w-[100%] h-[100vh] border hero overflow-hidden">
        <div className="flex items-center justify-between m-7">
            <div className="logoimg"></div>
            <div className="flex items-center space-x-20">
                <Link className='text-[#07484A]' to={'/'}>Home</Link>
                <Link className='text-[#07484A]' to={'/Products'}>Products</Link>
                <Link className='text-[#07484A]' to={'/About'}>About</Link>
                <Link className='text-[#07484A]' to={'/Contact us'}>Contact Us</Link>
                {/* <Link><button className='shop rounded-3xl'>Sign in</button></Link> */}
                
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
        <div className="favourite-product w-full h-[900px] flex items-center  flex-col gap-[100px] pt-[100px] pb-[100px] pr-[40px] pl-[40px]">
          <div className="flex flex-row justify-center items-center p-1 gap-1 w-[900px] h-[93px]">
            <h1 className='text-[#07484A] text-[64px] font-semibold mb-12'>
            Popular Products
            </h1>
          </div>
          <div className="flex flex-row absolute items-center gap-[70px] isolate w-full h-[600px]">
          {/* <div className="img-chair absolute w-[750px] h-[800px] left-[-351px] top-[71px]"></div> */}
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
        </div>


                                {/* Explore by Categories */}
        
        {/* <div className="flex justify-between">
        <div className="flex flex-col w-[500px] h-[900px] mt-5">
        <input className="p-2 m-8 w-[300px] h-[50px] rounded-xl border bg-[#e0dede]" type="search" placeholder='search' name="" id="" />
        <ul className='flex flex-col gap-[70px] ml-8'>
            <Link className='text-[#07484A]'>Bedroom</Link>
            <Link className='text-[#07484A]'>Dining Room</Link>
            <Link className='text-[#07484A]'>Meeting Room</Link>
            <Link className='text-[#07484A]'>Workspace</Link>
            <Link className='text-[#07484A]'>Living Room</Link>
            <Link className='text-[#07484A]'>Kitchen</Link>
            <Link className='text-[#07484A]'>Living Space</Link>
        </ul>
        <button className='flex items-center justify-center border w-[200px] h-[70px] rounded-3xl bg-[#07484A] text-white m-10'>All Categories</button>
        </div>
        <div className="grid grid-cols-3 w-[800px] h-[700px] mt-[100px]">
            <div className=" img1 border-[1px] w-[250px] h-[250px] m-3 rounded-lg"></div>
            <div className=" img2 border-[1px] w-[250px] h-[250px] m-3 rounded-lg"></div>
            <div className=" img3 border-[1px] w-[250px] h-[250px] m-3 rounded-lg"></div>
            <div className=" img4 border-[1px] w-[250px] h-[250px] m-3 rounded-lg"></div>
            <div className=" img5 border-[1px] w-[250px] h-[250px] m-3 rounded-lg"></div>
            <div className=" img6 border-[1px] w-[250px] h-[250px] m-3 rounded-lg"></div>
            <div className=" img7 border-[1px] w-[250px] h-[250px] m-3 rounded-lg"></div>
            <div className=" img8 border-[1px] w-[250px] h-[250px] m-3 rounded-lg"></div>
            <div className=" img9 border-[1px] w-[250px] h-[250px] m-3 rounded-lg"></div>
        </div>
        </div>


        <div className="w-full h-[300px] bg-[#e0eff6]">
            <h1 className='text-center text-[36px] text-[#07484A]'>
            Benefits for your expediency
            </h1>
            <div className="flex items-center justify-between text-center p-2 w-full h-[250px]">
                <span>
                    {/* <div className="svg1 w-14 h-10 border-[2px] flex items-center justify-center ml-20"></div> *
                    <h3>
                        Payment Method
                    </h3>
                    <Link>We offer flexible payment to make things easier</Link>
                </span>
                <span>
                    {/* <div className="svg2 w-14 h-10 border-[2px] flex items-center justify-center"></div> 
                    <h3>
                        Return Policy
                    </h3>
                    <Link>You can return a product within 30 days</Link>
                </span>
                <span>
                     <div className="svg3 w-14 h-10 border-[2px] flex items-center justify-center mr-[0px]"></div> 
                    <h3>
                        Customer Support
                    </h3>
                    <Link> Our customer support is 24/7</Link>
                </span>
            </div>
        </div> */}
       
    </main>
  );
}

export default Homepage;

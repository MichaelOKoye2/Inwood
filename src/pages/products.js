import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './footer'
import Header from './header'
const Products = () => {
  return (
    <main>
    <Header/>
       <div className="flex justify-between">
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
                    {/* <div className="svg1 w-14 h-10 border-[2px] flex items-center justify-center ml-20"></div> */}
                    <h3>
                        Payment Method
                    </h3>
                    <Link>We offer flexible payment to make things easier</Link>
                </span>
                <span>
                    {/* <div className="svg2 w-14 h-10 border-[2px] flex items-center justify-center"></div> */}
                    <h3>
                        Return Policy
                    </h3>
                    <Link>You can return a product within 30 days</Link>
                </span>
                <span>
                    {/* <div className="svg3 w-14 h-10 border-[2px] flex items-center justify-center mr-[0px]"></div> */}
                    <h3>
                        Customer Support
                    </h3>
                    <Link> Our customer support is 24/7</Link>
                </span>
            </div>
        </div>
        <Footer/>
    </main>
  )
}

export default Products

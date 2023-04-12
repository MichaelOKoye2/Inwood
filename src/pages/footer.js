import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebookF } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    // const element = <FontAwesomeIcon icon={faFacebookF} />
  return (
    <main>
        <footer className='w-full h-[370px] bg-[#f1f1f1] p-[80px]'>
        <div className="footer-container m-auto pr-5 pl-5 flex justify-between items-center flex-wrap-reverse">
            <div className="left-col w-[500px] text-center">
                <div className="socialmedia flex gap-12 leading-10">
                    {/* <Link><FontAwesomeIcon icon={faFacebookF} /></Link> */}
                    <Link><FontAwesomeIcon icon="fa-brands fa-facebook" /></Link>
                    <Link><FontAwesomeIcon icon="fa-brands fa-twitter" /></Link>
                    <Link><FontAwesomeIcon icon="fa-brands fa-instagram" /></Link>
                    <Link><FontAwesomeIcon icon="fa-brands fa-linkedin" /></Link>
                    <Link><FontAwesomeIcon icon="fa-brands fa-youtube" /></Link>
                </div>
                <p className='flex'>
                © 2022 Created By 
                <b> Inwood Furniture</b>
                All Rights Reserved.
                </p>
            </div>

            <div className="right-col w-[600px] h-[300px]">
                <h1 className='text-[36px] text-[#07484A]'>
                    Join our <br />
                    <b>Newsletter</b> 
                </h1>
                .
                <p className='text-[16px] text-[#07484A]'>
                Enter Your Email to get our news and updates.
                </p>
                <form action="">
                <input className="p-2 mt-8 rounded-xl w-[300px] text-center text-[#07484A] bg-[#d2d6d8]" type="text" placeholder="Enter your email" />
                    <button className='shop rounded-3xl ml-2'>Submit</button>
                </form>
            </div>
        </div>

        </footer>
    </main>
  )
}

export default Footer

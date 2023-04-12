import React from 'react'
import '../styles/LP.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <main>
            <div className="flex items-center justify-between m-7">
            <div className="logoimg"></div>
            <div className="flex items-center space-x-20">
                <Link className='text-[#07484A]' to={'/Login'}>Home</Link>
                <Link className='text-[#07484A]' to={'/Login'}>Products</Link>
                <Link className='text-[#07484A]' to={'/Login'}>About</Link>
                <Link className='text-[#07484A]' to={'/Login'}>Contact Us</Link>
                <Link><button className='shop rounded-3xl'>Sign in</button></Link>
                
            </div>
        </div>
    </main>
  )
}

export default Header

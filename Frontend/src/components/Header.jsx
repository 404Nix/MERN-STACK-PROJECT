import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className=' bg-[#76ABAE] flex justify-between item-center w-full py-6 px-6 text-[#EEEEEE]'>
        <h1 className='font-semibold text-lg'>MERN</h1>
        <div className='flex gap-5'>
            <Link to="/">Create User</Link>
            <Link to="/all">All User</Link>
        </div>
    </div>
  )
}

export default Header
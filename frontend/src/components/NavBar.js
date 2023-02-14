import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeToken } from "../redux/reducers/AuthSlice";
const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <div>
        <div className='border pb-4 shadow-xl py-2 w-full'>
        <div className='flex justify-between mx-4 sm:mx-16 mt-4 '>
            <h1 className='font-extrabold text-xl'>YOU.TELL.I.DO</h1>
            <Link to="/" onClick={dispatch(removeToken)}><h1 className='text-sm font-bold mt-1'>LOGOUT</h1></Link>
        </div>
        </div>
        
    </div>
  )
}

export default NavBar
import React from "react"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center ">
      
      <h1 className="text-center text-4xl font-bold mt-28 mr-2">SELECT THE USER</h1>
      <div className="flex justify-center mt-6">
        <Link to="/student/login">
         <button
          type="button"
          
          className="focus:outline-none  bg-yellow-500 text-white  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
        >
          STUDENT
        </button></Link>
       <Link to="/master/login">
       <button
          type="button"
         
          className="focus:outline-none  bg-red-500 text-white  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
        >
          MASTER
        </button></Link>
      
      </div>
      
    </div>
  )
}

export default Home
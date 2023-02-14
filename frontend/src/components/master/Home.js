import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
       <div className="flex justify-center mt-64">
        <Link to="/master/task_log">
         <button
          type="button"
          
          className="focus:outline-none  bg-black text-white  font-medium rounded-lg text-xl px-16 py-8 mr-2 mb-2 "
        >
          TASK LOG
        </button></Link>
       <Link to="/master/add_task">
       <button
          type="button"
         
          className="focus:outline-none  bg-gray-500 text-white  font-medium rounded-lg text-xl px-16 py-8 mr-2 mb-2 "
        >
          ADD TASK
        </button></Link>
      
      </div>
    </div>
  )
}

export default Home
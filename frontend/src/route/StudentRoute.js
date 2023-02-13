import { Outlet,Navigate } from "react-router-dom";
import React from 'react'
import {useSelector} from 'react-redux';

const StudentRoute = () => {
    let {user} = useSelector((state)=>state.token)
  
  return (
    user.isStudent ?<Outlet/> :  <Navigate to="/student/login"/>
  )
}

export default StudentRoute
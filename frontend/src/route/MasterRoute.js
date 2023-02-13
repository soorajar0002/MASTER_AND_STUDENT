import { Outlet,Navigate } from "react-router-dom";
import React from 'react'
import {useSelector} from 'react-redux';

const MasterRoute = () => {
    let {user} = useSelector((state)=>state.token)
  
  return (
    user.isMaster ?<Outlet/> :  <Navigate to="/master/login"/>
  )
}

export default MasterRoute
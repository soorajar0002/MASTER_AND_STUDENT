import React from 'react'
import Home from '../components/student/Home'
import {useSelector} from 'react-redux';
import NavBar from '../components/NavBar';
const StudentHomePage = () => {
  let {user} = useSelector((state)=>state.token)
  console.log(user.isStudent)
  return (
    <div>
      <NavBar/>
        <Home/>
    </div>
  )
}

export default StudentHomePage
import React from 'react'
import Home from '../components/student/Home'
import {useSelector} from 'react-redux';
const StudentHomePage = () => {
  let {user} = useSelector((state)=>state.token)
  console.log(user.isStudent)
  return (
    <div>
        <Home/>
    </div>
  )
}

export default StudentHomePage
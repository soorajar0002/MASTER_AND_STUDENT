import React, { useEffect, useState } from "react"
import useAxios from "../../axios/useAxios"
import { useNavigate } from "react-router-dom"


const MasterAddTask = () => {

    const api = useAxios()
    const navigate = useNavigate()

    const [students, setStudents] = useState([])
    const [user, setUser] = useState("")
    const [operation, setOperation] = useState("")
   
    const data = async () => {
        try {
          const response = await api.get(`/students/data/`, {})
          setStudents(response.data)
        } catch (err) {
          console.log(err)
        }
      }

      const submit = async () => {
        try {
          const response = await api.post(`/tasks/`, {
            student:user,
            operation:operation
          })
          if (response.status == 201) {
            navigate("/master/home")
          }
        } catch (err) {
          console.log(err)
        }
      }
      
      useEffect(() => {
        data()
      }, [])
      
  return (
    <div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-start-2 col-span-4 text-center border bg-gray-200 p-8 shadow-xl mt-20 rounded-lg">
          <h1 className="text-2xl font-extrabold ">ADD TASK</h1>
          <div className="flex justify-between">
        <div className="relative w-full lg:max-w-sm ml-28 mt-10">
          <select
            className=" p-1 text-gray-700 bg-white border font-semibold rounded-md shadow-sm outline-none appearance-none uppercase"
            onChange={(event) => {
              setUser(event.target.value)
            }}
            value={user}
          
          >
            <option>SELECT THE STUDENT</option>
            {students?.map((student) => (
              <option key={student.id}> {student.username}</option>
            ))}
          </select>
        </div>
        <div className="relative w-full lg:max-w-sm ml-28 mt-10">
          <select
            className=" p-1 text-gray-700 bg-white border font-semibold rounded-md shadow-sm outline-none appearance-none uppercase"
            onChange={(event) => {
              setOperation(event.target.value)
            }}
            value={operation}
          >
            <option>SELECT THE OPERATION</option>
            
              <option>ADDITION</option>
              <option>SUBSTRACTION</option>
              <option>MULTIPLICATION</option>
              <option>DIVISION</option>
           
          </select>
        </div>
        <div className="relative w-full lg:max-w-sm ml-28 mt-10">
        <button type="button" onClick={submit} className="focus:outline-none text-white bg-black font-medium rounded-lg text-sm px-5 py-1 mt-1 mr-2 mb-2 ">ADD</button>
        </div>

        <div></div>
      </div>
        </div>
      </div>
    </div>
  )
}

export default MasterAddTask

import React, { useEffect, useState } from "react"
import useAxios from "../../axios/useAxios"
import { Link } from 'react-router-dom';

const MasterTaskLog = () => {

    
    const [logs, setLogs] = useState([])
    console.log(logs)
    const api = useAxios()
    const data = async () => {
        try {
          const response = await api.get(`/tasks/`, {})
          
          setLogs(response.data)
          
        } catch (err) {
          console.log(err)
        }
      }

      useEffect(() => {
        data()
      }, [])

  return (
    <div>
      <div className="mt-10 mx-28">
      <Link to="/master/home">
         <button
          type="button"
          
          className="focus:outline-none  bg-black text-white  font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 "
        >
          BACK
        </button></Link>
        <h1 className="text-xl font-bold mb-4">TASK LOG</h1>
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-200">
              <tr>
                <th scope="col" class="px-6 py-3">
                 No
                </th>
                <th scope="col" class="px-6 py-3">
                  STUDENT
                </th>
                <th scope="col" class="px-6 py-3">
                  OPERATION
                </th>
                <th scope="col" class="px-6 py-3">
                  INPUT 1
                </th>
                <th scope="col" class="px-6 py-3">
                  INPUT 2
                </th>
                <th scope="col" class="px-6 py-3">
                  RESULT
                </th>
              </tr>
            </thead>
            <tbody>
                {logs?.filter((log) => log.result != null).map((log,index)=>( 
              <tr class=" border-b bg-gray-100 text-black">
              <td class="px-6 py-4">{index+1}</td>
                <td class="px-6 py-4">{log.first_name} {log.last_name}</td>
                <td class="px-6 py-4">{log.operation}</td>
                <td class="px-6 py-4">{log.input_one?log.input_one:"-"}</td>
                <td class="px-6 py-4">{log.input_two?log.input_two:"-"}</td>
                <td class="px-6 py-4">{log.result?log.result:"-"}</td>
              </tr>
               ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MasterTaskLog

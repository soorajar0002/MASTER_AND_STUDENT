import React, { useEffect, useState } from "react"
import useAxios from "../../axios/useAxios"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


const Home = () => {


  const [logs, setLogs] = useState([])
  const [input_one, setInputOne] = useState("")
  const [input_two, setInputTwo] = useState("")
  const [count, setCount] = useState(0)

  const api = useAxios()
  const navigate = useNavigate()

  const data = async () => {
    try {
      const response = await api.get(`/tasks/`, {})
      console.log(response.data)
      setLogs(response.data)
    } catch (err) {
      console.log(err)
    }
  }
  const Cal = () => {
    const filteredLogs = logs.filter((log) => log.result == null);
    const count = filteredLogs.length;
    setCount(count)
  }
  const submit = async (id) => {
    try {
      const response = await api.post(`/calculate/`, {
        id:id,
        input_one:input_one,
        input_two:input_two
      })
      if (response.status == 200) {
       
        data()
      }
      setInputOne(" ")
      setInputTwo(" ")
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    data()
    Cal()
  }, [])


  return (
    <div>
      <div className="flex justify-center mt-6">
        <Link to="/student/task_log">
          <button
            type="button"
            className="focus:outline-none  bg-black text-white  font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 "
          >
           ACTIVITY LOG
          </button>
        </Link>
      </div>
      <div className="mx-28">
        <h1 className="text-2xl font-bold mb-4">TASK PENDING</h1>
        {count===0?<h1 className="text-center font-semibold">NO PENDING TASK</h1>:<div class="relative overflow-x-auto">
          <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-200">
              <tr>
                <th scope="col" class="px-6 py-3">
                  No
                </th>
                <th scope="col" class="px-6 py-3">
                  MASTER
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
                <th scope="col" class="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {logs.filter((log) => log.result == null).map((log, index) => (
                <tr class=" border-b bg-gray-100 text-black">
                  <td class="px-6 py-4">{index + 1}</td>
                  <td class="px-6 py-4">
                    {log.first_name} {log.last_name}
                  </td>
                  <td class="px-6 py-4">{log.operation}</td>
                  <td class="px-6 py-4">
                    <input
                      onChange={(event) => {
                        setInputOne(event.target.value)
                      }}
                      
                    />
                  </td>
                  <td class="px-6 py-4">
                    <input
                      onChange={(event) => {
                        setInputTwo(event.target.value)
                      }}
                      
                    />
                  </td>
                  <td class="px-6 py-4">
                    <button
                      type="button"
                      onClick={()=>submit(log.id)}
                      className="focus:outline-none  bg-black text-white  font-medium  rounded-lg text-xs px-4 py-1 mr-2 mb-2 "
                    >
                      SUBMIT
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>}
        
      </div>
    </div>
  )
}

export default Home

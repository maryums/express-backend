import React, { useEffect, useState } from 'react'
import axios from "axios"


const App = () => {
  const [data, setData] = useState("")

  const getData = async () => {
    const response = await axios.get("http://localhost:4000/getData")
    setData(response.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div>{data}</div>
      <div>Testing changes </div>
    </>
  )
}

export default App
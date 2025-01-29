import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const[data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://github.com/LalitSharma87084')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])


  return (
    <div className='text-center m-4 bg-gray-700 text-white 
    p-4 text-4xl'>Github followers :{data.followers} </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch ('https://github.com/LalitSharma87084')
    return response.json()
}

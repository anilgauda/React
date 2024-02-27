import React, { useEffect, useState } from "react";
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data,setData] =useState([])
    // useEffect(() =>{
    //     fetch("https://api.github.com/users/anilgauda").then((res)=> res.json()).then((data)=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[]);
return(
    <div className="bg-gray-700 text-white text-center p-4 text-3xl">This is Github page followers: {data.followers}
    <img src={data.avatar_url} alt="Github Picture" width={300} />
    </div>
)
}

export default Github

export async function getGithubData() {
    const response = await fetch('https://api.github.com/users/anilgauda')

    return response.json();
}

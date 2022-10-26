import React, { useState } from 'react'


export default function Check() {
    const [data,setData] = useState();
    function req() {
        setData("apple");
    }
    function apiRes() {
        fetch('https://car-data.p.rapidapi.com/cars?limit=10&page=0').then((response)=>response.json()).then((json)=> console.log(json))
    }
  return (


    <div>
        <h1>Hellow</h1>
        <button onClick={req}>Request</button>
        <p>
            {data}
        </p>
        <button onClick={apiRes}>API DATA</button>

    </div>
  )
}

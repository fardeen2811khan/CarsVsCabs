import React, { useEffect, useState } from 'react'

export default function Cars() {
    const [cars,setCars] = useState([]);
    const url =
    "https://my-json-server.typicode.com/belikeakash/carsvsuber/cars";
  const apidata = async () => {
    const response = await fetch(url);
    setCars(await response.json());
    console.log(cars);
  };
  useEffect(()=> {
    apidata();
  },[])
  return (
    <div>
        {
            cars.map((item)=> {
                return (
                    <div>
                        <h2>{item.name}</h2>
                    </div>
                )
            })
        }

    </div>
  )
}

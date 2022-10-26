import React, { useEffect, useState } from 'react'
import cars from '../DataBase/cardata'
export default function Cars() {
    
  console.log(cars);
  return (
    <div>
        {
            cars.map((item)=> {
                return (
                    <div>
                        <h2>Name : {item.name} Price : {item.price}</h2>
                    </div>
                )
            })
        }

    </div>
  )
}


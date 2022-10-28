import React, { useState, useEffect } from "react";
import cars from "../DataBase/cardata";

import '../styles/Allcars.css'

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
  Link,
} from "react-router-dom";

export default function Main() {
  const [value, setValue] = useState();

  return (
    <div>
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Enter Car Name"
      />
      <div className="car-show">
        {cars
          .filter((car) => {
            if (value == undefined || value == "") {
              return car;
            } else if (
              car.name.toLowerCase().includes(value.toLowerCase()) ||
              car.company.toLowerCase().includes(value.toLowerCase())
            ) {
              return value;
            }
          })
          .map((car) => {
            return (
              <div className="cars">
                <div className="car_name">{car.name}</div>
                <Link to={`/item/${car.price}`}>More Details</Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

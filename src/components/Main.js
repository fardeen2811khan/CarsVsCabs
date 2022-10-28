import React, { useState, useEffect } from "react";
import cars from "../DataBase/cardata";
import {FaCar} from 'react-icons/fa'
import {BiCommentDetail} from 'react-icons/bi'

import '../styles/Allcars.css'
// import '../styles/Navbar.css'

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
  Link,
} from "react-router-dom";
import Navbar from "./Navbar";

export default function Main() {
  const [value, setValue] = useState();

  return (
    <div>
      <Navbar />
      <div className="input-div">
      <input className="input"
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Enter Car Name"
      />
      </div>
      
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
                <div className="car_name"> <div className="car-icon"><FaCar /></div> {car.name}  </div>
                <div className="car_company">{car.company}</div>
                <div className="car_price">₹ {car.price}</div>
                <Link to={`/item/${car.price}`}> <div className="car-details"> More Details <div className="car-icon"><BiCommentDetail /></div> </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

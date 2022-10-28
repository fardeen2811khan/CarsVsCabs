import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import { withRouter } from 'react-router-dom';
import cars from "../DataBase/cardata";
import "../styles/Item.css";

function Item(props) {
  const [data,setData] = useState([])
  const url = "https://my-json-server.typicode.com/belikeakash/carsvsuber/interest";
  const apiData = async () => {
    const response = await fetch(url);
    setData(await response.json());
    console.log(data);
  }
  const params = useParams();
  console.log(params);
  const { price } = params;
  return (
    <div className style={{}}>
      {cars
        .filter((car) => {
          if (price == car.price) {
            return car;
          }
        })
        .map((car) => {
          return (
            <div className="item">
              <div className="cars">
                <div className="car-name">{car.company}</div>
                <div className="car-company">{car.name}</div>
                <div className="car-price">{car.price}</div>
              </div>
              <div className="policy">

              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Item;


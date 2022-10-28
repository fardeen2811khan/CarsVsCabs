import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { withRouter } from 'react-router-dom';
import cars from "../DataBase/cardata";
import "../styles/Item.css";
import Navbar from "./Navbar";
import {FaCar} from 'react-icons/fa'
import {BiCommentDetail} from 'react-icons/bi'
import {Pie} from 'react-chartjs-2'

function Item(props) {
  const [data, setData] = useState([]);
  const [cost, setCost] = useState(0);
  const [km, setKm] = useState(0);
  const [text, setText] = useState("");
  const [flag, setFlag] = useState(false);
  const [years, setYears] = useState(0);
  let xx;
  const url =
    "https://my-json-server.typicode.com/belikeakash/carsvsuber/interest";
  const apiData = async () => {
    const response = await fetch(url);
    setData(await response.json());
  };
  function carCost(x, y, z) {
    const u = Math.round(x*Math.pow(9/10,y) / (12*y*z) + 10); //Assume Car milage is 10km/L
    return u;
  }
  function calculateInterest(x, y, z) {
    const amount = Math.round(y * Math.pow(1 + x / 100, 1 * z) - y) ;
    console.log(amount);
    return amount;
  }
  function valueEntered() {
    console.log(cost);
    console.log(km);
    console.log(data);
    console.log(years);
    if (km <= 0 || cost <= 0 || years <= 0) {
      alert("Ener Valid Data");
      // setKm(0);
      // setCost(0);
    } else {
      setFlag(true);
    }
  }
  useEffect(() => {
    apiData();
  }, []);
  const params = useParams();
  // console.log(params);
  const { price } = params;
  return (<>
    <div className='item-main'>
      {cars
        .filter((car) => {
          if (price == car.price) {
            return car;
          }
        })
        .map((car) => {
          return (
            <>
              <Navbar />
              <div className="item">
                {/* <Link to="/main">See other Cars</Link> */}
                <div className="item-div">
                  <div className="item-name"><div className="car-icon"><FaCar /></div>{car.company}</div>
                  <div className="item-company">{car.name}</div>
                  <div className="item-price">₹ {car.price}</div>
                </div>
                <div className="policy">
                  <div className="uber-cost-input">
                    <input
                      type="text"
                      onChange={(e) => {
                        setCost(e.target.value);
                      }}
                      placeholder="Enter Uber Charge/km"
                    />
                    <input
                      type="text"
                      onChange={(e) => {
                        setKm(e.target.value);
                      }}
                      placeholder="Enter km you drive/month"
                    />
                    <input
                      type="text"
                      onChange={(e) => {
                        setYears(e.target.value);
                      }}
                      placeholder="Enter Years"
                    />
                    <button className="button" onClick={valueEntered}>Enter</button>
                  </div>
                </div>
              </div>
              <div className="invest">
              <h3>If You drive Invest this Money in </h3>
              {data.map((x) => {
                return (
                  <div className="interest">
                    {x.name} at {x.value}% effective amount will be :{" "}
                    {calculateInterest(x.value, car.price, years)} 
                  </div>
                );
              })}

              </div>
              <div className="invest">
              <h2>Comparison Between Owning a Car vs Driving a Cab</h2>
              <h4>Total Cost of Uber per km will be {cost}</h4>
              <h4>
                Total Cost of Car per km is {carCost(car.price, years, km)}
              </h4>
              </div>


            </>
          );
        })}
    </div>
    </>
  );
}

export default Item;

import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Contributors.css";

export default function Contributors() {
  const [data, setData] = useState([]);
  const url =
    "https://my-json-server.typicode.com/belikeakash/carsvsuber/users";
  const apidata = async () => {
    const response = await fetch(url);
    setData(await response.json());
    console.log(data);
  };

  useEffect(() => {
    apidata();
  }, []);
  return (
    <div>
      <h1>Contributors</h1>
      <div className="users-top">
        {data.map((item) => {
          return (
            <div key={item.id} className="users">
              <h2>Name : {item.name}</h2>
              <h3>Comapany : {item.company}</h3>
              <h3>Role : {item.role}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import axios from 'axios';import './App.css';

function App() {
  const[loading,setloading] = useState(false);
  const[data,setData] = useState([]);
  useEffect(()=>{
    setloading(true)
    axios({
      method:"GET",
      url:"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false",
    }).then((res)=>{
      console.log(res.data);
      setData(res.data);
    }).catch((e)=>console.log(e)).finally(()=>setloading(false))
  },[]);


  return (
    <div className="main">
      <table className="table">
            <thead>
                <tr>
                    <th>S No</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>image</th>
                    <th>Symbol</th>
                    <th>Current Price</th>
                    <th>Total Volume</th>
                </tr>
            </thead>
            <tbody>
            {
                data.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            
                            <td  >
                              <img src={data.image} alt="#" style={{ height: `20px` }}/>
                            </td>
                            <td>{data.symbol}</td>
                            <td>{data.current_price}</td>
                            <td>{data.total_volume}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    </div>
  );
}

export default App;

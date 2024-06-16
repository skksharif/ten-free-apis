import React, { useState } from 'react'

function Weather() {
    var [data,setData]=useState("Result");
    function display(){
        var response=fetch(`https://api.api-ninjas.com/v1/weather?city=${data}`,{
            method:"get",
            headers:{
               'X-api-key':"y92+lEBpdvZGi+UmqG+r+Q==iY9vMfE4AgigV8cz"
            }
        })
        .then((res)=>res.json())
        .then((result)=>setData(result))
    }
  return (
    <> 
      <h1>Weather API</h1>
      <div className='container'>
        <input type="text" onChange={(e)=>setData(e.target.value)} />
        <button className='btn' onClick={()=>display()}>Get Data</button>
      </div>
      <br/><br/>
      <br/>
     <center>
     <div className='card'>
        
        <h4>Wind Speed : {data.wind_speed}</h4>
        <h4>Max Temparature : {data.max_temp}</h4>
        <h4>Min Temparature : {data.min_temp}</h4>
        <h4>Humidity : {data.max_temp}</h4>
     </div>
     </center>
    </>
  )
}

export default Weather
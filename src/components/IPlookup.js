import React, { useState } from 'react'

function IPlookup() {
    var [data,setData]=useState("Result");
    function display(){
        var response=fetch(`https://api.api-ninjas.com/v1/iplookup?address=${data}`,{
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
        <input type="text" onChange={(e)=>setData(e.target.value)} placeholder='Enter IP address'/>
        <button className='btn' onClick={()=>display()}>Get Data</button>
      </div>
      <br/><br/>
      <br/>
     <center>
     <div className='card'>
        
        <h4>Country : {data.country}</h4>
        <h4>Country Code : {data.country_code}</h4>
        <h4>Region : {data.region}</h4>
     </div>
     </center>
    </>
  )
}

export default IPlookup;
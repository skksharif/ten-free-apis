import React, { useState } from 'react'

function Sentiment() {
    var [data,setData]=useState("Result");
    function display(){
        var response=fetch(`https://api.api-ninjas.com/v1/sentiment?text=${data}`,{
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
      <h1>Sentiment API</h1>
      <div className='container'>
        <input type="text" onChange={(e)=>setData(e.target.value)} placeholder="Enter what's in your mind" />
        <button className='btn' onClick={()=>display()}>Get Your Mood!</button>
      </div>
      <br/><br/>
      <br/>
     <center>
     <div className='card'>
        <h1>{data.sentiment}</h1>
     </div>
     </center>
    </>
  )
}

export default Sentiment;
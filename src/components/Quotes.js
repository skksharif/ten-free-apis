import React, { useState } from 'react'

export default function Quotes() {
    var [quote,setQuote] = useState("Quote");
    function generate(){
        var res=fetch("https://api.api-ninjas.com/v1/quotes?category=success",{
            headers:{
                'X-api-key':"y92+lEBpdvZGi+UmqG+r+Q==iY9vMfE4AgigV8cz"
            }
        })
        .then((res) => res.json())
        .then((data) => {
           setQuote(data[0].quote)
           
        })
        
    }
  return (
    <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    }}>
        <h1>Random Quotes Generator</h1>
       <div className='container'>
           <h3 >
            {quote}
           </h3>
           <button onClick={()=>generate()}>Generate</button>
       </div>
    </div>
  )
}

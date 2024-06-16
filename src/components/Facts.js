import React, { useState } from 'react'

export default function Facts() {
    var [fact,setFact] = useState("Interesting Facts");
    function generate(){
        var res=fetch("https://api.api-ninjas.com/v1/facts",{
            headers:{
                'X-api-key':"y92+lEBpdvZGi+UmqG+r+Q==iY9vMfE4AgigV8cz"
            }
        })
        .then((res) => res.json())
        .then((data) => {
           setFact(data[0].fact)
           
        })
        
    }
  return (
    <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    }}>
        <h1>Random Facts Generator</h1>
       <div className='container'>
           <h3 >
            {fact}
           </h3>
           <button onClick={()=>generate()}>Generate</button>
       </div>
    </div>
  )
}

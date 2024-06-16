import React, { useState } from 'react'

export default function Jokes() {
    var [joke,setJoke] = useState({});
    function generateJoke(){
        var res=fetch("https://v2.jokeapi.dev/joke/Any")
        .then((res) => res.json())
        .then((data) => {
           setJoke(data)
        })
        
    }
  return (
    <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    }}>
        <h1>Random Jokes Generator</h1>
       <div className='container'>
           <p>Setup : {joke.setup}</p>
           <p>Punchline : {joke.delivery}</p>
           <button onClick={()=>generateJoke()}>Generate</button>
       </div>
    </div>
  )
}

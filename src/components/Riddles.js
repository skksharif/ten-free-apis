import React,{useState} from 'react'

export default function () {
    var [riddle,setRiddle] = useState({});
    var [ans,setAns] = useState("");
    function generate(){
        var res=fetch("https://api.api-ninjas.com/v1/riddles",{
            headers:{
                'X-api-key':"y92+lEBpdvZGi+UmqG+r+Q==iY9vMfE4AgigV8cz"
            }
        })
        .then((res) => res.json())
        .then((data) => {
           setRiddle(data[0])
        })
        
    }
    function showAnswer(){
        setAns(riddle.answer)
    }
  return (
    <>
         <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    }}>
        <h1>Random Quotes Generator</h1>
       <div className='container'>
         <h3>{riddle.title}</h3>
           <h3><b><i>{riddle.question}</i></b></h3>

           <button  onClick={()=>generate()}>Generate Riddle</button><br></br>
           <b>{ans}</b>
           <button onClick={()=>showAnswer()}>See Answer</button>
       </div>
    </div>
    </>
  )
}

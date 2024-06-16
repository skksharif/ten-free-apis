import React,{useState} from 'react'

export default function Trivia() {
    var [question,setQuestion] = useState({});
    var [ans,setAns] = useState("");
    function generate(){
        var res=fetch("https://api.api-ninjas.com/v1/trivia",{
            headers:{
                'X-api-key':"y92+lEBpdvZGi+UmqG+r+Q==iY9vMfE4AgigV8cz"
            }
        })
        .then((res) => res.json())
        .then((data) => {
            setQuestion(data[0])
        })
        setAns("");
        
    }
    function showAnswer(){
        setAns(question.answer)
    }
  return (
    <>
         <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    }}>
        <h1>Trivia Quiz</h1>
       <div className='container'>
         <h3>{question.category}</h3>
           <h3><b><i>{question.question}</i></b></h3>

           <button style={{
           }} onClick={()=>generate()}>Generate Question</button><br></br>
           <b>{ans}</b>
           <button style={{
           
           }} onClick={()=>showAnswer()}>See Answer</button>
       </div>
    </div>
    </>
  )
}

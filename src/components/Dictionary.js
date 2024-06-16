import React, { useState } from 'react';

const ReadMore = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  if (text.length <= maxLength) {
    return <p>{text}</p>;
  }

  return (
    <p>
      {isExpanded ? text : `${text.substring(0, maxLength)}...`}
      <span onClick={toggleReadMore} style={{ color: 'blue', cursor: 'pointer' }}>
        {isExpanded ? ' Read less' : ' Read more'}
      </span>
    </p>
  );
};

function Dictionary() {
  const [data, setData] = useState("");
  const [definition, setDefinition] = useState("");

  function display() {
    fetch(`https://api.api-ninjas.com/v1/dictionary?word=${data}`, {
      method: "get",
      headers: {
        'X-api-key': "y92+lEBpdvZGi+UmqG+r+Q==iY9vMfE4AgigV8cz"
      }
    })
      .then((res) => res.json())
      .then((result) => setDefinition(result.definition))
      .catch((error) => console.error('Error:', error));
  }

  return (
    <>
      <h1>Dictionary API</h1>
      <div className='container'>
        <input type="text" onChange={(e) => setData(e.target.value)} placeholder="Enter a word...." />
        <button className='btn' onClick={display}>Get Meaning..</button>
      </div>
      <br /><br />
      <br />
      <center>
        <div className='card'>
          <ReadMore text={definition} maxLength={100} />
        </div>
      </center>
    </>
  );
}

export default Dictionary;

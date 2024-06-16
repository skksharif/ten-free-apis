import React, { useState } from 'react';

const QRgen = () => {
    const [qrCodeUrl, setQrCodeUrl] = useState('');
    const [data, setData] = useState('');
    const [error, setError] = useState('');
  
    const fetchQRCode = async () => {
      const params = new URLSearchParams({
        data: data,
        format: 'png',
        size: 300, 
        fg_color: '000000', 
        bg_color: 'ffffff',
      });
  
      try {
        const response = await fetch(`https://api.api-ninjas.com/v1/qrcode?${params.toString()}`, {
          method: 'GET',
          headers: {
            'X-Api-Key': 'y92+lEBpdvZGi+UmqG+r+Q==iY9vMfE4AgigV8cz', 
            Accept: 'image/png',
          }
        });
  
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
  
        const arrayBuffer = await response.arrayBuffer();
        const blob = new Blob([arrayBuffer], { type: 'image/png' });
        const imageUrl = URL.createObjectURL(blob);
        console.log(imageUrl);
        setQrCodeUrl(imageUrl);
      } catch (err) {
        setError(err.message);
      }
    };

  return (
    <div>
        <h1>QR Code Generator</h1>
       <div className='container'>
        <input type="text" onChange={(e)=>setData(e.target.value)} />
       <button onClick={fetchQRCode}>Generate QR Code</button>
       </div>
       {error && <p>Error: {error}</p>}
      {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" />}
      <br/>
      <center><a href={qrCodeUrl} className='btn' download>DOWNLOAD</a></center>
      
    </div>
  );
};

export default QRgen;

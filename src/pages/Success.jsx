import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Success = () => {
  const [timer, setTimer] = useState(5);
  setInterval(() => {
    if(timer === 0){
      window.location.pathname = '/';
    } else {
      setTimer(timer-1);
    }
  }, 1000) 

  return (
    <div style={{width: '100%', height: '100vh', display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <h1 style={{color: 'green'}}>Success</h1>
        <p>Redirecting to the home page in {timer}...</p>
    </div>
  )
}

export default Success
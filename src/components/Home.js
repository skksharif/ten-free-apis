import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
export default function Home() {
  return (
    <>
        <div>
        <center><h1 style={{
                color:'white',background:"linear-gradient(white,Blue)"
             }}>10 Free APIs</h1></center>
        </div>
          <div className='box'>
                <NavLink to='/jokes'>
                <div className='api'>
                        <h3>Jokes API</h3>
                </div>
                </NavLink>
                <NavLink to='/quotes'>
                <div className='api'>
                        <h3>Quotes API</h3>
                </div>
                </NavLink>
                <NavLink to='/riddles'>
                <div className='api'>
                        <h3>Riddles API</h3>
                </div>
                </NavLink>
                <NavLink to="/facts">
                <div className='api'>
                        <h3>Facts API</h3>
                </div>
                </NavLink>
                <NavLink to='trivia'>
                <div className='api'>
                        <h3>Trivia Quiz</h3>
                </div>
                </NavLink>
                <NavLink to='/qrcode'>
                <div className='api'>
                        <h3>QR Code Generator API</h3>
                </div>
                </NavLink>
                <NavLink to='/weather'>
                <div className='api'>
                        <h3>Weather API</h3>
                </div>
                </NavLink>
                <NavLink to='/sentiment'>
                <div className='api'>
                        <h3>Sentiment API</h3>
                </div>
                </NavLink>
                <NavLink to='/dictionary'>
                <div className='api'>
                        <h3>Dictionary</h3>
                </div>
                </NavLink>
                <NavLink to='/iplookup'>
                <div className='api'>
                        <h3>IP Tracker</h3>
                </div>
                </NavLink>
          </div>
    </>
  )
}

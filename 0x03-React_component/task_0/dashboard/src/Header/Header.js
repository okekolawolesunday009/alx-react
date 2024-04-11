import React from 'react'
import './Header.css'
import logo from "../Assets/holberton-logo.jpg"

export default function Header() {
  return (
    <div className="App-header">
        <div>
          <img src={logo} alt='holberton_logo' width={300} height={300}/>

        </div>
        <h1>School dashboard</h1>
    </div>
      
  )
}

import React from 'react'
import "./Login.css"

export default function Login() {
  return (
    <form>
      
        <label htmlFor="email">Email:</label>
        <input type='email' name='email' id="email"/>

       
        <label htmlFor="email">Password:</label>
        <input type='password' name='password' id="password"/>

        <button>OK</button>
    </form>
  )
}

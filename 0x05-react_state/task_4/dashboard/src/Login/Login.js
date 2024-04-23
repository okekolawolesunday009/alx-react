import React from 'react'
import { StyleSheet, css } from 'aphrodite'

export default function Login() {
  return (
    <div className={css(style["App-body"])}>
    <form className={css(style.form)}>
       <p>Login to access the full dashboard</p>
      
        <label className={css(style.label)} htmlFor="email">Email:</label>
        <input type='email' name='email' id="email"/>

       
        <label  className={css(style.label)}  htmlFor="email">Password:</label>
        <input type='password' name='password' id="password"/>

        <button>OK</button>
    </form>

  
    </div>
  )
}

const style = StyleSheet.create({
  body: {
    fontSize: "2rem"
  },

  label : {
       fontWeight: "bold",
       

  },
  form: {
    display:"flex",
    width: "60",
    gap: "2rem",
    fontSize:"inherit",
    "@media (max-width: 900px)": {
    
     flexDirection: "column",
   },
  },
        
 "App-body": {
    fontSize: "1rem",
    height: "45%",
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
    },
  },


});

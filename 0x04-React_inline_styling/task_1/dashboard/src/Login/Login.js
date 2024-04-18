import React from 'react'
import { StyleSheet, css } from 'aphrodite'

export default function Login() {
  return (
    <form className={css(styles["App-body"])}>
       <p >Login to access the full dashboard</p>
      
        <label className={css(styles.label)} htmlFor="email">Email:</label>
        <input type='email' name='email' id="email"/>

       
        <label  className={css(styles.label)}  htmlFor="email">Password:</label>
        <input type='password' name='password' id="password"/>

        <button>OK</button>
    </form>
  )
}


const styles = StyleSheet.create({
  "App-body": {
    fontSize: "1rem",
    padding: "2em",
    height: "45%",
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",

      
    },
  },

  input: {
    margin: "10px",
  },
});


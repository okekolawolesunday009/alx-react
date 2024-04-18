import React from 'react'
import logo from "../Assets/holberton-logo.jpg"
import { StyleSheet, css } from 'aphrodite'

export default function Header() {
  return (
    <div className={css(styles.Appheader)}>
        <div>
          <img src={logo} alt='holberton_logo' width={300} height={300}/>

        </div>
        <h1 className={css(styles.h1)}>School dashboard</h1>
    </div>
      
  )
};

const styles = StyleSheet.create({
  Appheader : {
        display: "flex",
        alignItems: "center",
        borderBottom: "0.5rem solid red"
  },

  h1 : {
        fontSize: "3rem",
        color: "red"
  },


});

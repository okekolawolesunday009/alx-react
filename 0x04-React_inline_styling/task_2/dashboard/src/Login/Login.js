import React from 'react'
import { StyleSheet, css } from 'aphrodite'

export default function Login() {
  return (
    <form className={css(style.form, style.media)}>
       <p>Login to access the full dashboard</p>
      
        <label className={css(style.label)} htmlFor="email">Email:</label>
        <input type='email' name='email' id="email"/>

       
        <label  className={css(style.label)}  htmlFor="email">Password:</label>
        <input type='password' name='password' id="password"/>

        <button>OK</button>
    </form>
  )
}

const style = StyleSheet.create({
  label : {
       fontWeight: "bold",
        fontSize: "2rem"

  },
  form: {
         display:"flex",
         width: "60",
         gap: "2rem"
        },
  media: {
   "@media screen and (max-width: 767px)" :{
    form: {
      flexDirection: "column"
      }
   }
  }


});

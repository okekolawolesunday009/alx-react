import React from 'react'
import logo from "../Assets/holberton-logo.jpg"
import { StyleSheet, css } from 'aphrodite'
import { useContext } from 'react'
import { AppContext } from '../App/AppContext'

export default function Header() {
  const {user, logOut} = useContext(AppContext)

  return (
    <div className={css(styles.Appheader)}>
        <div>
          <img className={css(styles["img"])} src={logo} alt='holberton_logo' width={300} height={300}/>

        </div>
        <h1 className={css(styles.h1)}>School dashboard</h1>
        {user && user.isLoggedIn === true ?
         (
         <p>Welcome {user.email}
          <span
           onClick={() => logOut()}>
            logout
           </span>
          </p>) :""}
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

 "img" : {
    '@media (max-width: 767px)': {
      width: "10rem",
      height: "10rem"
    
    }
  }


});

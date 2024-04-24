import React from 'react'
import { getFullYear, getFooterCopy } from '../Utils/utils'
import "./Footer.css"
import { useContext } from 'react';
import {AppContext} from "../App/AppContext"

export default function Footer() {
  const { user } = useContext(AppContext);
  return (
    <div className="App-footer">
        <p> {`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>
        {user.isLoggedIn && (
        <p>
          Contact us <a href="#">here</a>.
        </p>
        )}


    </div>
  )
}

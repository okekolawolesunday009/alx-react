import React from 'react'
import { getFullYear, getFooterCopy } from '../utils'
import "./Footer.css"

export default function Footer() {
  return (
    <div className="App-footer">
        <p> {`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>

    </div>
  )
}

import React from 'react'
import PropTypes from "prop-types"
import {  css } from 'aphrodite';


const rowStyle = {
    backgroundColor: "#f5f5f5ab",
  };
  
  const headerStyle = {
    backgroundColor: "#deb5b545",
  };
export default function CourseListRow({isHeader=false, textFirstCell, textSecondCell=null}) {


  
   if (isHeader){

        if (textSecondCell === null) {

            return (
                <tr style={rowStyle}> 
                 
                         <th style={headerStyle} colSpan={2}>{textFirstCell}</th>
                </tr>
            )

        } else  {
            return (
                <tr style={headerStyle}> 
                   <td>{textFirstCell}</td>
                  <td>{textSecondCell}</td>
               </tr>

            )
        }
   
   } else {
   return (
    <tr style={headerStyle}> 
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
    </tr>
    );
   }
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    textSecondCell: PropTypes.string,
  };


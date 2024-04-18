import React from 'react'
import PropTypes from "prop-types"
import "./CourseList"

export default function CourseListRow({isHeader=false, textFirstCell, textSecondCell=null}) {

  
   if (isHeader){

        if (textSecondCell === null) {

            return (
                <tr style={{backgroundColor:"#f5f5f5ab"}}> 
                 
                         <th style={{backgroundColor:"#deb5b545"}} colSpan={2}>{textFirstCell}</th>
                </tr>
            )

        } else  {
            return (
                <tr style={{backgroundColor:"#f5f5f5ab"}}> 
                   <td>{textFirstCell}</td>
                  <td>{textSecondCell}</td>
               </tr>

            )
        }
   
   } else {
   return (
    <tr style={{backgroundColor:"#f5f5f5ab"}}> 
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


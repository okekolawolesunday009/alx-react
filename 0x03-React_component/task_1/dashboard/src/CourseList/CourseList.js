import React from 'react'
import CourseListRow from './CourseListRow';
import './CourseList.css'
import PropTypes from "prop-types"
import { CourseShape } from './CourseShape';

export default function CourseList({listCourses}) {
  
 return(  
      <table>
        <thead id='CourseList'>
    
          <CourseListRow textFirstCell={"Available Courses"} isHeader={true}/>
          <CourseListRow textFirstCell={"Courses name"} textSecondCell={"Credit"} isHeader={true}/> 
    
        </thead>
        <tbody>

          { (listCourses.length > 0) ?
              ( 
                listCourses.map(course => (
                  <CourseListRow textFirstCell={course.name} textSecondCell={course.credit} isHeader={false}/>
               ))
              )
            :
              (
              <div> <p>No course available yet</p></div>
               ) 
          }       

        </tbody>
      
    </table>
    

        )
  
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(PropTypes.shape(CourseShape)).isRequired
};

CourseList.defaultProps = {
  listCourses: [],
};

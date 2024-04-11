import React, { Component } from 'react'
import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
// import {useState} from 'react'
import CourseList from '../CourseList/CourseList';
import Header from '../Header/Header';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../Utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';


export class App extends Component {
        handleKeyDown (e) {
        if (e.ctrlKey && e.key === 'h') {
            alert("Logging you out");
            this.props.logOut();
        };
      };
      componentDidMount(){
        window.addEventListener('keydown', this.handleKeyDown);
      }
    
      componentWillUnmount(){
        window.removeEventListener('keydown', this.handleKeyDown);
      }
          
   isLogin = false;
   listCourses = [
    {
      id: 1, 
      name: "ES6",
      credit: 60

    },
    {
      id: 2, 
      name: "Webpack",
      credit: 20
    },
    {
      id: 3,
      name: "React",
      credit: 40

    }
  ];
  
  listNotifications = [
    {
      id:1,
      type: "default",
      value:"New course available"
    },
    {
      id:2,
      type: "urgent",
      value:"New resume available"
    },
    {
      id:3,
      type: "urgent",
      html: getLatestNotification()
    }
  ]
  render() {


  
    return (
      <>
         <Notifications displayDrawer={true} listNotifications={this.listNotifications}/>
            <div className="App">
            <Header/>
            
            
            <div className="App-body">

                {this.isLogin === true ?
                <BodySectionWithMarginBottom title={"Login to continue"}>
                  <Login/>
                </BodySectionWithMarginBottom>: 
                <BodySectionWithMarginBottom title={"Course List"}>
                  <CourseList listCourses={this.listCourses}/>
                </BodySectionWithMarginBottom>
                }

                <BodySection title={"News from School"}>
                  <p>We are holberton</p>
                
                </BodySection>

            </div>

            
            
            <Footer/>
            </div>
                
      </>
    )
  }
}


App.propTypes = {
    logOut: PropTypes.func.isRequired // Assuming you're using PropTypes for prop type validation
  };
App.defaultProps = {
    logOut: () => {}
}

export default App

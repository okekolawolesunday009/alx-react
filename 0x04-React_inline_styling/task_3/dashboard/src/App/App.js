import React, { Component } from 'react'
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
import { StyleSheet, css } from 'aphrodite';


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
            <div className={css(styles.App, styles.smallHtml)}>
            <Header/>
            
            
            <div className={css(styles.AppBody)}>

                {this.isLogin === true ?
                <BodySectionWithMarginBottom title={"Login to continue"}>
                  <Login/>
                </BodySectionWithMarginBottom>: 
                <BodySectionWithMarginBottom title={"Course List"}>
                  <CourseList listCourses={this.listCourses}/>
                </BodySectionWithMarginBottom>
                }

                <BodySection title={"News from School"}>
                  <p className={css(styles.small)}>We are holberton</p>
                
                </BodySection>

            </div>

            
            
            <Footer/>
            </div>
                
      </>
    )
  }
}
const styles = StyleSheet.create({
  App: {
    height: "100vh"
  },
  AppBody: {
    padding: "4rem",
    height: "100%"

  },

  Color: {
    color: "black"
  },

  height: {
    height: "100%"
  },

  small: {

    fontSize: "2rem"
      
  },

  smallHtml: {
      '@media (max-width: 767px)': {
        html: {
          fontSize: "47%"
       },

       img : {
        width: "10rem",
        height: "10rem"
       },
       AppBody: {
        height: "80%"
      }

      }   
  }
});


App.propTypes = {
    logOut: PropTypes.func.isRequired // Assuming you're using PropTypes for prop type validation
  };
App.defaultProps = {
    logOut: () => {}
}

export default App

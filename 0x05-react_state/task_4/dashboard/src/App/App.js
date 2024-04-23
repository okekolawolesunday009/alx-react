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

  constructor(props) {
    super(props); 
      this.state = {
        displayDrawer : true
      }
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);

  }
  
  handleDisplayDrawer = () => {
    this.setState({displayDrawer: true})
  };

  handleHideDrawer = () => {
    this.setState({displayDrawer: false})
  };
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
          
   isLogin = true;
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
      <div className={css(styles.App, styles.smallHtml)}>
         <Notifications 
         displayDrawer={this.state.displayDrawer}
        listNotifications={this.listNotifications}
         handleDisplayDrawer= {this.handleDisplayDrawer}
         handleHideDrawer= {this.handleHideDrawer}/>
            <div >
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
                  <p >We are holberton</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                
                </BodySection>

            </div>

            
            
            <Footer/>
            </div>
                
      </div>
    )
  }
}
const styles = StyleSheet.create({
  App: {
    height: "100vh",
    fontSize: "2rem",
  },
  AppBody: {
    padding: "4rem",
    height: "100%",
    '@media (max-width: 767px)': {
        padding: "2rem"
     },

  },

  Color: {
    color: "black"
  },

  height: {
    height: "100%"
  },

  smallHtml: {
      '@media (max-width: 767px)': {
        html: {
          fontSize: "47%",
          backgroundColor: "red"
       },

       img : {
        width: "10rem",
        height: "10rem"
       },
      //  AppBody: {
      //   height: "80%"
      // }

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

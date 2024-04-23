import React, { Component } from 'react';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';


export class Notifications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false

    };
 
 
    this.markAsRead = this.markAsRead.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleShow= this.handleShow.bind(this);
   
  }


  handleShow = () => {
    this.props.handleDisplayDrawer()
    console.log("show")
  }
  handleHide = () => {
    this.props.handleHideDrawer()
    console.log("Hide")

  }

 


  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    return (
      <>
        <div className={css(styles.menuItem)}>
          <p 
          onClick={this.handleShow}
           >
            Your Notification
            </p>
        </div>
        {this.props.displayDrawer   ? (
              <div>
              <p>Here is the list of notifications</p>
              </div>
            ) : (
              <div className={css(styles.Notifications)}>
              <button
              style={{
                position: 'absolute',
                top: 10,
                right: 15,
                color: 'black',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
              aria-label="Close"
              onClick={this.handleHide}
              
            >
              X
            </button>
            {this.props.listNotifications.length != 0 ? <p>Here is the list of notifications</p> : null}

            <ul className={css(styles.ul)}>
              {this.props.listNotifications.length === 0 ? (
                <NotificationItem type="default" value="No new notification for now" />
              ) : null}
              {this.props.listNotifications.map((notify, Idx) => {
                return (
                  <NotificationItem
                    key={notify.id}
                    type={notify.type}
                    value={notify.value}
                    html={notify.html}
                    id={notify.id}
                    onMarkAsRead={this.markAsRead}
                  />
                );
              })}
            </ul>
          </div>
        )}
        
      </>
    );
  }
}


const opacityAnimation = {
  "0% ": {
    opacity: 0.5,
  },
  "100% ": {
    opacity: 1,
  }
};  
const bounceAnimation = {
  "0%": { transform: "translateY(0px)" },
  "33%": { transform: "translateY(-5px)" },
  "66%": { transform: "translateY(5px)" },
  "100%": { transform: "translateY(0px)" },
};




const styles = StyleSheet.create({
  Notifications: {
    border: '2px dashed red',
    width: '40%',
    position: 'absolute',
    right: 6,
    padding: '4rem',
    // margin: '1rem',
    /* position: relative; */
    fontSize: 'var(--font-x-small)',
    "@media (max-width: 767px)" :{
     
       width: '100%',
       height:"100%",
       backgroundColor: "white",
       padding: "0",
       border: "none"
      //  margin: ' 3rem 0',

      
     }
  },

  ul: {
    "@media (max-width: 767px)" :{
    margin: "0",
    padding: "0",
    width: '100%',
    display: "flex",
    flexDirection: "column",
    gap:"2rem",
   
    // backgroundColor: "red"

    }
  },


 

  menuItem: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: 'var(--font-x-small)',
    fontWeight: 'bold',
    ":hover": {
      cursor: "pointer",
      animationName: [bounceAnimation, opacityAnimation],
      animationDuration: '1s',
      animationIterationCount: "3",
    }
      
  },

 
 

});


Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;

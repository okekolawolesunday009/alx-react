import React, { Component } from 'react';
import './Notifications.css'
import NotificationItem from './NotificationItem';
import PropTypes from "prop-types"
import NotificationItemShape from "./NotificationItemShape";


export class Notifications extends Component {

  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this);
  }
     handleButtonClick = () => {
        console.log("Close button has been clicked");
      };

      markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
      }
     
  render() {
   
    return (
      <>
        <div className='menuItem'>
        <p>Your Notification</p>
       </div>
        {this.props.displayDrawer === true ? (
            <div className='Notifications'>
            {this.props.listNotifications && this.props.listNotifications.length !== 0 ? 
            (<p>Here is the list of notifications</p> ) : null}

            <button
                style={{
                position: 'absolute',
                top: 10,
                right: 15,
                color: 'black',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
                }}
                aria-label="Close"
                onClick={this.handleButtonClick}
            >
                X
          </button>

          <ul>
          {this.props.listNotifications.length === 0 ?
           <NotificationItem type="default" value="No new notification for now" /> : null}
            {        
                this.props.listNotifications.map((notify, Idx) => {
                   return <NotificationItem 
                    key={notify.id} 
                    type={notify.type}
                     value={notify.value}
                      html={notify.html} 
                      id={notify.id}  
                      onMarkAsRead={this.markAsRead}/>

                })
            }
        </ul>

        </div>
        ) : ""}
        
      </>
    )
  }
}
Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
  };
  
  Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
  };

export default Notifications

import React, { Component } from 'react';
import './Notifications.css'
import NotificationItem from './NotificationItem';
import { NotificationItemShape } from './NotificationItemShape';



export class Notifications extends Component {
     handleButtonClick = () => {
        console.log("Close button has been clicked");
      };
     
  render() {
   
    return (
      <>
        <div className='menuItem'>
        <p>Your Notification</p>
       </div>
        {displayDrawer === false ? (
            <div className='Notifications'>
            <p>Here is the list of notifications</p>

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
                onClick={handleButtonClick}
            >
                X
          </button>

          <ul>
          {listNotifications.length === 0 ? <NotificationItem type="default" value="No new notification for now" /> : null}

            {listNotifications &&           
                listNotifications.map((notify, Idx) => {
                    <NotificationItem type={notify.type} value={notify.value} html={notify.html}/>

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

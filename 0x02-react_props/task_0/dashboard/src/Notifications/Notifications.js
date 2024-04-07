import React from 'react';
import './Notifications.css'
import { getLatestNotification } from '../utils';
import NotificationItem from './NotificationItem';


const Notification = () => {

    const handleButtonClick = () => {
        console.log("Close button has been clicked");
      };
    
    return (
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
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem type="urgent" html={getLatestNotification()} />
        </ul>

        </div>
    )

}

export default Notification
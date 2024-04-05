import React from 'react';
import './Notifications.css'
import { getLatestNotification } from './utils';


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

          <ol>
            <li>New course available</li>
            <li>New resume availablee</li>
            <li>{getLatestNotification()}</li>
          </ol>

        </div>
    )

}

export default Notification
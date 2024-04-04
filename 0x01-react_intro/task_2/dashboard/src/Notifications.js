import react from 'react';
import './Notifications.css'


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
                top: 0,
                right: 0,
                padding: '5px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
                }}
                aria-label="Close"
                onClick={handleButtonClick}
            >
                Close
          </button>

        </div>
    )

}

export default Notification
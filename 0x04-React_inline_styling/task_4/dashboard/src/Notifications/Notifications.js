import React, { Component } from 'react';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';


export class Notifications extends Component {
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this);
  }

  handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

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
          <p>Your Notification</p>
        </div>
        {this.props.displayDrawer === true ? (
          <div className={css(styles.Notifications)}>
            {this.props.listNotifications && this.props.listNotifications.length !== 0 ? (
              <p>Here is the list of notifications</p>
            ) : null}

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
              onClick={this.handleButtonClick}
            >
              X
            </button>

            <ul>
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
        ) : (
          ''
        )}
      </>
    );
  }
}


const styles = StyleSheet.create({
  Notifications: {
    border: '2px dashed red',
    width: '40%',
    position: 'absolute',
    right: 0,
    padding: '4rem',
    margin: '1rem',
    /* position: relative; */
    fontSize: 'var(--font-x-small)'
  },
 

  menuItem: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: 'var(--font-x-small)',
    fontWeight: 'bold'
  }
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

import React, { Component } from 'react'
import PropTypes from "prop-types"

export class NotificationItem extends Component {
 
  render() {
    const {type, html, value, onMarkAsRead, id} = this.props;
    
    return (
      <div>

        {type && value ? <li 
        onClick={() => onMarkAsRead(id)} 
        data-notification-type={type}>{value}</li> : null}

         {html ? <li data-urgent dangerouslySetInnerHTML={{ __html: html }}></li> : null}
      
        
      </div>
    )
  }
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onMarkAsRead: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

NotificationItem.defaultProps = {
  type: 'default'
};
export default NotificationItem

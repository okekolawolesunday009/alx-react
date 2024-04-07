import React from 'react';
import PropTypes from "prop-types"

export default function NotificationItem({type, html, value}) {
  return (
    <>
         {type && value ? <li data-notification-type={type}>{value}</li> : null}
         {html ? <li data-urgent dangerouslySetInnerHTML={{ __html: html }}></li> : null}
      
    </>
  )
}


NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

NotificationItem.defaultProps = {
  type: 'default'
};




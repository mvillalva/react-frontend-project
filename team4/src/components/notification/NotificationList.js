import React from 'react'

const NotificationList = ({visible, children}) => {
  return (
    visible ?
        <div className="noti-container">
            <div className="noti-list">{children}</div>
        </div>
    : ""
  )
}

export default NotificationList
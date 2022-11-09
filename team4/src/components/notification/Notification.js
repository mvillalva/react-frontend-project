import React, { useState } from "react";
import './Notification.css'
import NotificationList from "./NotificationList";

const Notification = ({children}) => {
    const [visible, setVisible] = useState(false)

    const openMenu = () => {        
        setVisible(true)
    }

    const closeMenu = () => {        
        setVisible(false)
    }

    return (
        <div className="d-flex align-items-center justify-content-between me-4 pointer position-relative h-100" onMouseOver={()=>{openMenu()}} onMouseOut={() => {closeMenu()}} >            
            <span className="fas fa-bell text-decoration-none text-light fs-5 pointer"></span>         
            <NotificationList visible={visible}>
                {children}
            </NotificationList>
        </div>
    );
};

export default Notification;
